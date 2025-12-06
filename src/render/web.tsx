import React, { type FC } from "react";
import { createRoot } from "react-dom/client";
import { PDFViewer } from "@react-pdf/renderer";

export async function render(App: FC) {
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
