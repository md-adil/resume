// Font configuration that works in both browser (Vite) and Node.js (tsx)
// Reference: https://react-pdf.org/fonts

const isNode = typeof process !== "undefined" && process.versions?.node;

// In browser/Vite: Import fonts using ?url to get asset URLs
// In Node.js: These imports are skipped (tree-shaken out) and we use import.meta.resolve instead
let interLight: string;
let interRegular: string;
let interMedium: string;
let interSemiBold: string;
let interBold: string;
let merriweatherLight: string;
let merriweatherRegular: string;
let merriweatherBold: string;

if (isNode) {
  // Node.js: Use import.meta.resolve
  interLight = new URL(import.meta.resolve("@fontsource/inter/files/inter-latin-300-normal.woff")).pathname;
  interRegular = new URL(import.meta.resolve("@fontsource/inter/files/inter-latin-400-normal.woff")).pathname;
  interMedium = new URL(import.meta.resolve("@fontsource/inter/files/inter-latin-500-normal.woff")).pathname;
  interSemiBold = new URL(import.meta.resolve("@fontsource/inter/files/inter-latin-600-normal.woff")).pathname;
  interBold = new URL(import.meta.resolve("@fontsource/inter/files/inter-latin-700-normal.woff")).pathname;

  merriweatherLight = new URL(import.meta.resolve("@fontsource/merriweather/files/merriweather-latin-300-normal.woff")).pathname;
  merriweatherRegular = new URL(import.meta.resolve("@fontsource/merriweather/files/merriweather-latin-400-normal.woff")).pathname;
  merriweatherBold = new URL(import.meta.resolve("@fontsource/merriweather/files/merriweather-latin-700-normal.woff")).pathname;
} else {
  // Browser/Vite: Import with ?url suffix (types defined in vite-env.d.ts)
  const interLightModule = await import("@fontsource/inter/files/inter-latin-300-normal.woff?url");
  const interRegularModule = await import("@fontsource/inter/files/inter-latin-400-normal.woff?url");
  const interMediumModule = await import("@fontsource/inter/files/inter-latin-500-normal.woff?url");
  const interSemiBoldModule = await import("@fontsource/inter/files/inter-latin-600-normal.woff?url");
  const interBoldModule = await import("@fontsource/inter/files/inter-latin-700-normal.woff?url");

  const merriweatherLightModule = await import("@fontsource/merriweather/files/merriweather-latin-300-normal.woff?url");
  const merriweatherRegularModule = await import("@fontsource/merriweather/files/merriweather-latin-400-normal.woff?url");
  const merriweatherBoldModule = await import("@fontsource/merriweather/files/merriweather-latin-700-normal.woff?url");

  interLight = interLightModule.default;
  interRegular = interRegularModule.default;
  interMedium = interMediumModule.default;
  interSemiBold = interSemiBoldModule.default;
  interBold = interBoldModule.default;

  merriweatherLight = merriweatherLightModule.default;
  merriweatherRegular = merriweatherRegularModule.default;
  merriweatherBold = merriweatherBoldModule.default;
}

export const fonts = {
  inter: {
    light: interLight,
    regular: interRegular,
    medium: interMedium,
    semiBold: interSemiBold,
    bold: interBold,
  },
  merriweather: {
    light: merriweatherLight,
    regular: merriweatherRegular,
    bold: merriweatherBold,
  },
};
