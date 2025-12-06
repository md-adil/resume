import React from "react";
import { RESUME_DATA } from "./data";
import { ResumePreview } from "./components/resume-architect";
import { Document } from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";
import { fonts } from "./fonts";

// Register Inter font family
Font.register({
  family: "Inter",
  fonts: [
    { src: fonts.inter.light, fontWeight: 300 },
    { src: fonts.inter.regular, fontWeight: 400 },
    { src: fonts.inter.medium, fontWeight: 500 },
    { src: fonts.inter.semiBold, fontWeight: 600 },
    { src: fonts.inter.bold, fontWeight: 700 },
  ],
});

// Register Merriweather font family
Font.register({
  family: "Merriweather",
  fonts: [
    { src: fonts.merriweather.light, fontWeight: 300 },
    { src: fonts.merriweather.regular, fontWeight: 400 },
    { src: fonts.merriweather.bold, fontWeight: 700 },
  ],
});

export const App: React.FC = () => {
  return (
    <Document>
      <ResumePreview data={RESUME_DATA} />
    </Document>
  );
};
