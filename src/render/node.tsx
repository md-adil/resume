import { renderToStream } from "@react-pdf/renderer";
import { createWriteStream } from "fs";
import { mkdir } from "fs/promises";
import { pipeline } from "stream/promises";
import { dirname } from "path";
import type { FC } from "react";

export async function render(App: FC, outputPath: string) {
  await mkdir(dirname(outputPath), { recursive: true });
  const stream = await renderToStream(<App />);
  await pipeline(stream, createWriteStream(outputPath));
}
