const isBrowser = typeof window !== "undefined";
import { App } from "./document";
if (isBrowser) {
  const { render } = await import("./render/web");
  render(App);
} else {
  const { render } = await import("./render/node");
  const { resolve } = await import("path");
  const outputPath = resolve(process.cwd(), "out", "resume.pdf");
  console.log("Generating PDF");
  await render(App, outputPath);
  console.log("Generated successfuly: ", outputPath);
}
