const isNode = typeof process !== "undefined" && process.versions?.node;

const fontPaths = {
  inter: ["300", "400", "500", "600", "700"].map((weight) => `@fontsource/inter/files/inter-latin-${weight}-normal.woff`),
  merriweather: ["300", "400", "700"].map((weight) => `@fontsource/merriweather/files/merriweather-latin-${weight}-normal.woff`),
};

const loadFonts = async () => {
  if (isNode) {
    return [...fontPaths.inter, ...fontPaths.merriweather].map((path) => new URL(import.meta.resolve(path)).pathname);
  } else {
    const [inter300, inter400, inter500, inter600, inter700, merri300, merri400, merri700] = await Promise.all([
      import("@fontsource/inter/files/inter-latin-300-normal.woff?url"),
      import("@fontsource/inter/files/inter-latin-400-normal.woff?url"),
      import("@fontsource/inter/files/inter-latin-500-normal.woff?url"),
      import("@fontsource/inter/files/inter-latin-600-normal.woff?url"),
      import("@fontsource/inter/files/inter-latin-700-normal.woff?url"),
      import("@fontsource/merriweather/files/merriweather-latin-300-normal.woff?url"),
      import("@fontsource/merriweather/files/merriweather-latin-400-normal.woff?url"),
      import("@fontsource/merriweather/files/merriweather-latin-700-normal.woff?url"),
    ]);
    return [inter300, inter400, inter500, inter600, inter700, merri300, merri400, merri700].map((m) => m.default);
  }
};

const [interLight, interRegular, interMedium, interSemiBold, interBold, merriweatherLight, merriweatherRegular, merriweatherBold] = await loadFonts();

export const fonts = {
  inter: { light: interLight!, regular: interRegular!, medium: interMedium!, semiBold: interSemiBold!, bold: interBold! },
  merriweather: { light: merriweatherLight!, regular: merriweatherRegular!, bold: merriweatherBold! },
};
