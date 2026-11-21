// 山のモチーフ（assets/Mountains/*.svg）を、トークンの色で組み立て直す。
// - motifPaths(svgText): <path id="..." d="..."> を { id: d } にする
// - motifSvgs(paths, color): Marp の背景などに使う完成形の SVG 文字列
// - injectMotifs(css, svgs): CSS 内の `/* motif:NAME */ background-image: url("...")` を差し替える
export function motifPaths(svgText) {
	const out = {};
	for (const m of svgText.matchAll(/<path\b[^>]*\bid="([^"]+)"[^>]*\bd="([^"]+)"/g)) out[m[1]] = m[2];
	for (const m of svgText.matchAll(/<path\b[^>]*\bd="([^"]+)"[^>]*\bid="([^"]+)"/g)) out[m[2]] ??= m[1];
	return out;
}

const svg = (body) =>
	`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">${body}</svg>`;

export function motifSvgs({ yatsugatake, tateshina }, color) {
	return {
		// 表紙: 白い稜線と、淡い等高線 2 本
		"yatsugatake-cover": svg(
			`<path d="${yatsugatake.ridge}" fill="none" stroke="${color.paper}" stroke-width="2" stroke-linecap="round"/>` +
				`<path d="${yatsugatake["contour-1"]}" fill="none" stroke="${color["accent-faint"]}" stroke-width="1.25"/>` +
				`<path d="${yatsugatake["contour-2"]}" fill="none" stroke="${color["accent-faint"]}" stroke-width="1"/>`,
		),
		// 章扉・締め: 一段深い冬空で塗り、稜線を白でなぞる
		tateshina: svg(
			`<path d="${tateshina.shape}" fill="${color["accent-deep"]}"/>` +
				`<path d="${tateshina.ridge}" fill="none" stroke="${color.paper}" stroke-width="2.5" stroke-linecap="round"/>`,
		),
	};
}

export const dataUri = (s) => `data:image/svg+xml;utf8,${encodeURIComponent(s)}`;

export function injectMotifs(css, svgs) {
	return css.replace(
		/\/\* motif:([a-z0-9-]+) \*\/ background-image: url\("[^"]*"\)/g,
		(all, name) => {
			if (!svgs[name]) throw new Error(`unknown motif: ${name}`);
			return `/* motif:${name} */ background-image: url("${dataUri(svgs[name])}")`;
		},
	);
}
