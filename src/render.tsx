import React from "react";
import { App } from "./document";

export async function renderBrowser() {
  const { createRoot } = await import("react-dom/client");
  const { PDFViewer } = await import("@react-pdf/renderer");

  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <PDFViewer width={"100%"} height={"100%"} showToolbar>
        <App />
      </PDFViewer>
    </React.StrictMode>
  );
}

export async function renderNode(outputPath: string) {
  const { renderToStream } = await import("@react-pdf/renderer");
  const { createWriteStream, mkdirSync } = await import("fs");
  const { dirname } = await import("path");

  // Ensure output directory exists
  mkdirSync(dirname(outputPath), { recursive: true });

  console.log("Generating PDF...");

  const stream = await renderToStream(<App />);
  const writeStream = createWriteStream(outputPath);

  return new Promise<void>((resolve, reject) => {
    stream.pipe(writeStream);

    writeStream.on("finish", () => {
      console.log(`PDF successfully generated at: ${outputPath}`);
      resolve();
    });

    writeStream.on("error", (error) => {
      console.error("Error writing PDF:", error);
      reject(error);
    });
  });
}
