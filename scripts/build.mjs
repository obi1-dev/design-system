// src/tokens.json（アーティファクトのミラー）から dist/ の配布物を生成する。
// 依存なし。`node scripts/build.mjs` で実行する。
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = (p) => join(root, "src", p);
const dist = (p) => join(root, "dist", p);

const tokens = JSON.parse(readFileSync(src("tokens.json"), "utf8"));
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));

const banner = (comment = "/* */") =>
	comment.replace(
		"*/",
		`${tokens.name} design system v${pkg.version} — generated from src/tokens.json. Do not edit. */`,
	);

// ---- read tokens ----
const firstTheme = tokens.color.themes[0].id;
const colorValue = (t) => (typeof t.value === "string" ? t.value : t.value[firstTheme]);
const colors = tokens.color.tokens.map((t) => [t.name, colorValue(t)]);
for (const [name, value] of colors) {
	if (/^\{.+\}$/.test(value)) throw new Error(`alias colors are not supported yet: ${name}`);
}
const list = (family) => (tokens[family]?.tokens ?? []).map((t) => [t.name, t.value]);
const spacing = list("spacing");
const radius = list("radius");
const layout = list("layout");
const breakpoint = list("breakpoint");
const families = Object.entries(tokens.type.families);
const styles = tokens.type.groups.flatMap((g) =>
	g.styles.map((s) => ({ family: s.family ?? g.family, ...s })),
);

const decl = (pairs, prefix = "") => pairs.map(([n, v]) => `\t--${prefix}${n}: ${v};`).join("\n");
const fontDecl = families.map(([k, v]) => `\t--font-${k}: ${v};`).join("\n");

mkdirSync(dist("marp"), { recursive: true });

// ---- dist/fonts.css ----
const GOOGLE_FONTS =
	"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
writeFileSync(dist("fonts.css"), `${banner()}\n@import url("${GOOGLE_FONTS}");\n`);

// ---- dist/tokens.css: CSS custom properties with the token names as written ----
const typeClasses = styles
	.map((s) => {
		const lines = [
			`\tfont-family: var(--font-${s.family});`,
			`\tfont-size: ${s.fontSize};`,
			s.lineHeight !== undefined && `\tline-height: ${s.lineHeight};`,
			s.fontWeight !== undefined && `\tfont-weight: ${s.fontWeight};`,
			s.letterSpacing !== undefined && `\tletter-spacing: ${s.letterSpacing};`,
		].filter(Boolean);
		return `.text-${s.name} {\n${lines.join("\n")}\n}`;
	})
	.join("\n");
writeFileSync(
	dist("tokens.css"),
	`${banner()}
:root {
${decl(colors)}
${fontDecl}
${decl(spacing)}
${decl(radius)}
${decl(layout)}
${decl(breakpoint)}
}

/* type styles */
${typeClasses}
`,
);

// ---- dist/tailwind.css: Tailwind CSS v4 @theme ----
writeFileSync(
	dist("tailwind.css"),
	`${banner()}
/* 使い方: @import "tailwindcss"; の後に @import "@obi1-dev/design-system/tailwind.css"; */
@theme {
${decl(colors, "color-")}
${fontDecl}
${decl(radius.map(([n, v]) => [n.replace(/^radius-/, ""), v]), "radius-")}
${decl(
	// tokens are max-width (≤1023px). Tailwind's max-* variant is `width < value`, so add 1px.
	breakpoint.map(([n, v]) => [n.replace(/^bp-/, ""), `${Number.parseFloat(v) + 1}px`]),
	"breakpoint-",
)}
}

:root {
${decl(colors)}
${decl(spacing)}
${decl(layout)}
}
`,
);

// ---- dist/tokens.js + tokens.d.ts: values for code (OG images, scripts) ----
const obj = (pairs) => Object.fromEntries(pairs);
const data = {
	name: tokens.name,
	version: pkg.version,
	color: obj(colors),
	font: obj(families),
	spacing: obj(spacing),
	radius: obj(radius),
	layout: obj(layout),
	breakpoint: obj(breakpoint),
	text: Object.fromEntries(
		styles.map((s) => [
			s.name,
			{
				family: s.family,
				fontSize: s.fontSize,
				lineHeight: s.lineHeight,
				fontWeight: s.fontWeight,
				...(s.letterSpacing ? { letterSpacing: s.letterSpacing } : {}),
			},
		]),
	),
};
const json = JSON.stringify(data, null, "\t");
writeFileSync(dist("tokens.js"), `${banner()}\nexport const tokens = ${json};\nexport default tokens;\n`);
writeFileSync(
	dist("tokens.d.ts"),
	`${banner()}\nexport declare const tokens: ${json.replace(/"([^"]+)": /g, "readonly \"$1\": ")};\nexport default tokens;\n`,
);
writeFileSync(dist("tokens.json"), `${json}\n`);

// ---- dist/marp/obi1.css: the Marp theme with :root regenerated from tokens ----
const marp = readFileSync(src("assets/Marp/obi1.css"), "utf8");
const rootRe = /:root\s*\{[\s\S]*?\n\}/;
if (!rootRe.test(marp)) throw new Error("Marp theme has no :root block");
const marpRoot = `:root {
\t/* tokens — generated from src/tokens.json (v${pkg.version}). Edit the design system, not this block. */
${decl(colors)}
${fontDecl}
${decl(radius)}
}`;
writeFileSync(dist("marp/obi1.css"), marp.replace(rootRe, marpRoot));
writeFileSync(dist("marp/template.md"), readFileSync(src("assets/Marp/template.md")));
writeFileSync(dist("marp/obi1-profile.png"), readFileSync(src("assets/Profile/obi1-profile.png")));

console.log(
	`built v${pkg.version}: ${colors.length} colors, ${styles.length} text styles, ${spacing.length} spacing, ${radius.length} radii`,
);
