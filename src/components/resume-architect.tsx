import React from "react";
import { Page, Text, View, Link } from "@react-pdf/renderer";
import type { ResumeData } from "../types";
import { tw } from "../tailwind";

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const { header, summary, experience, projects, skills, education } = data;
  return (
    <Page size="A4" style={tw("bg-white p-12 text-[10pt] text-slate-800")}>
      {/* HEADER */}
      <View style={tw("border-b-2 border-slate-800 pb-4 mb-4")}>
        <Text style={{ ...tw("text-2xl font-bold text-slate-900 text-center uppercase mb-1.5 tracking-wide"), fontFamily: "Merriweather" }}>{header.fullName}</Text>
        <Text style={tw("text-xs font-bold text-slate-600 text-center uppercase mb-3 tracking-widest")}>{header.title}</Text>

        {/* Contact Row */}
        <View style={tw("flex-row justify-center flex-wrap text-[9pt] text-slate-600")}>
          {header.location && (
            <>
              <Text style={tw("mx-1")}>{header.location}</Text>
              <Text style={tw("text-slate-400")}> • </Text>
            </>
          )}

          {header.email && (
            <>
              <Link src={`mailto:${header.email}`} style={tw("mx-1 text-blue-900 no-underline")}>
                {header.email}
              </Link>
              <Text style={tw("text-slate-400")}> • </Text>
            </>
          )}

          {header.phone && (
            <>
              <Text style={tw("mx-1")}>{header.phone}</Text>
              <Text style={tw("text-slate-400")}> • </Text>
            </>
          )}

          {header.website && (
            <>
              <Link src={`https://${header.website}`} style={tw("mx-1 text-blue-900 no-underline")}>
                {header.website}
              </Link>
              {header.socials.length > 0 && <Text style={tw("text-slate-400")}> • </Text>}
            </>
          )}

          {header.socials.map((social, idx) => (
            <React.Fragment key={idx}>
              <Link src={social.url} style={tw("mx-1 text-blue-900 no-underline")}>
                {social.platform}
              </Link>
              {idx < header.socials.length - 1 && <Text style={tw("text-slate-400")}> • </Text>}
            </React.Fragment>
          ))}
        </View>
      </View>

      {/* PROFESSIONAL SUMMARY */}
      {summary && (
        <View style={tw("mb-5")}>
          <Text style={tw("text-[9pt] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2")}>Professional Summary</Text>
          <Text style={tw("text-[9pt] leading-relaxed text-slate-700 text-justify")}>{summary}</Text>
        </View>
      )}

      {/* MAIN LAYOUT (2 Columns) */}
      <View style={tw("flex-row gap-5")}>
        {/* LEFT COLUMN (Main Content) */}
        <View style={tw("flex-[7]")}>
          {/* Experience */}
          <View style={tw("mb-5")}>
            <Text style={tw("text-[9pt] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3")}>Professional Experience</Text>

            {experience.map((exp) => (
              <View key={exp.id} style={tw("mb-4")}>
                <View style={tw("flex-row justify-between mb-0.5")}>
                  <Text style={tw("text-[11pt] font-bold text-slate-900")}>{exp.position}</Text>
                  <Text style={tw("text-[8pt] font-bold text-slate-500")}>
                    {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                  </Text>
                </View>

                <View style={tw("flex-row justify-between mb-1")}>
                  <Text style={tw("text-[9pt] font-bold text-blue-700")}>{exp.company}</Text>
                  <Text style={tw("text-[8pt] text-slate-500 italic")}>{exp.location}</Text>
                </View>

                <Text style={tw("text-[9pt] text-slate-700 leading-relaxed pl-0.5")}>{exp.description}</Text>
              </View>
            ))}
          </View>

          {/* Projects */}
          {projects.length > 0 && (
            <View style={tw("mb-5")}>
              <Text style={tw("text-[9pt] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2")}>Key Technical Projects</Text>
              {projects.map((proj) => (
                <View key={proj.id} style={tw("mb-3")}>
                  <View style={tw("flex-row mb-0.5")}>
                    <Text style={tw("text-[9pt] font-bold text-slate-900")}>{proj.name}</Text>
                    {proj.link && (
                      <Link src={`https://${proj.link}`} style={tw("text-[8pt] text-blue-600 ml-1")}>
                        [{proj.link}]
                      </Link>
                    )}
                  </View>
                  <Text style={tw("text-[9pt] text-slate-700 mb-0.5")}>{proj.description}</Text>
                  <Text style={tw("text-[8pt] text-slate-500 font-bold")}>
                    <Text style={tw("text-slate-400")}>Tech: </Text>
                    {proj.technologies.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* RIGHT COLUMN (Sidebar) */}
        <View style={tw("flex-[3]")}>
          {/* Skills */}
          <View style={tw("mb-5")}>
            <Text style={tw("text-[9pt] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2")}>Core Competencies</Text>
            {skills.map((cat, idx) => (
              <View key={idx} style={tw("mb-3")}>
                <Text style={tw("text-[8pt] font-bold text-slate-800 mb-1")}>{cat.name}</Text>
                <View style={tw("flex-row flex-wrap")}>
                  {cat.items.map((skill, sIdx) => (
                    <Text key={sIdx} style={tw("text-[8pt] text-slate-600 bg-slate-100 px-1.5 py-0.5 mr-1 mb-0.5 rounded border border-slate-200")}>
                      {skill}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          {/* Education */}
          <View style={tw("mb-5")}>
            <Text style={tw("text-[9pt] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2")}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={tw("mb-3")}>
                <Text style={tw("text-[9pt] font-bold text-slate-900")}>{edu.institution}</Text>
                <Text style={tw("text-[8pt] text-slate-600 mb-0.5")}>{edu.degree}</Text>
                <Text style={tw("text-[8pt] text-slate-400")}>
                  {edu.startDate} – {edu.endDate}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  );
};
