import { renderBrowser, renderNode } from "./render";
const isBrowser = typeof window !== "undefined";
if (isBrowser) {
  renderBrowser();
} else {
  const { resolve } = await import("path");
  const outputPath = resolve(process.cwd(), "out", "resume.pdf");
  await renderNode(outputPath);
}
