import React, { Fragment } from "react";
import { Page, Text, View, Link } from "@react-pdf/renderer";
import type { ResumeData } from "../types";
import { tw } from "../tailwind";

interface ResumePreviewProps {
  data: ResumeData;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  const { header, summary, experience, projects, skills, education } = data;
  return (
    <Page size="A4" style={tw("bg-white font-sans")}>
      {/* PREMIUM HEADER - Navy with gold accent line */}
      <View>
        <View style={tw("bg-blue-900 px-12 pt-8 pb-6")}>
          <Text
            style={{
              ...tw("text-[32pt] font-light font-serif text-white mb-1.5 tracking-tight"),
              // fontFamily: "Merriweather",
            }}
          >
            {header.fullName}
          </Text>
          <View style={tw("h-[2pt] w-20 bg-yellow-600 mb-3")} />
          <Text style={tw("text-base text-slate-200 mb-4 font-normal tracking-wide")}>{header.title}</Text>
        </View>

        {/* Contact bar with subtle background */}
        <View style={tw("bg-slate-50 px-12 py-3 border-b border-slate-200")}>
          <View style={tw("flex-row flex-wrap gap-x-5 text-[9pt] text-slate-600")}>
            {header.email && (
              <Link src={`mailto:${header.email}`} style={tw("text-blue-900 no-underline font-medium")}>
                {header.email}
              </Link>
            )}
            {header.phone && <Text>{header.phone}</Text>}
            {header.location && <Text>{header.location}</Text>}
            {header.website && (
              <Link src={`https://${header.website}`} style={tw("text-blue-900 no-underline font-medium")}>
                {header.website}
              </Link>
            )}
            {header.socials.map((social) => (
              <Link key={social.platform} src={social.url} style={tw("text-blue-900 no-underline font-medium")}>
                {social.platform}
              </Link>
            ))}
          </View>
        </View>
      </View>

      {/* MAIN LAYOUT - Asymmetric for visual interest */}
      <View style={tw("flex-row")}>
        {/* LEFT - Main content (wider) */}
        <View style={tw("flex-1 px-12 py-8")}>
          {/* Professional Summary - Premium quote style */}
          {summary && (
            <View style={tw("mb-8")}>
              <View style={tw("flex-row items-center mb-4")}>
                <View style={tw("h-[3pt] w-10 bg-yellow-600 mr-3")} />
                <Text style={tw("text-sm font-semibold text-slate-900 uppercase tracking-widest")}>Profile</Text>
              </View>
              <Text style={tw("text-[10.5pt] leading-relaxed text-slate-700")}>{summary}</Text>
            </View>
          )}

          {/* Experience - Executive style */}
          <View style={tw("mb-8")}>
            <View style={tw("flex-row items-center mb-5")}>
              <View style={tw("h-[3pt] w-10 bg-yellow-600 mr-3")} />
              <Text style={tw("text-sm font-semibold text-slate-900 uppercase tracking-widest")}>Professional Experience</Text>
            </View>
            {experience.map((exp, idx) => (
              <Fragment key={idx}>
                {exp.break && <View break style={tw("mb-8")} />}
                <View key={exp.id} style={idx < experience.length - 1 ? tw("mb-6 pb-6 border-b border-slate-200") : tw("mb-6")}>
                  <View style={tw("flex-row justify-between items-start mb-1.5")}>
                    <Text style={tw("text-[11.5pt] font-semibold text-slate-900")}>{exp.position}</Text>
                    <Text style={tw("text-[9pt] text-slate-500 font-medium")}>
                      {exp.startDate} – {exp.current ? "Present" : exp.endDate}
                    </Text>
                  </View>

                  <View style={tw("flex-row justify-between items-center mb-3")}>
                    <Text style={tw("text-[10pt] text-blue-900 font-semibold")}>{exp.company}</Text>
                    <Text style={tw("text-[9pt] text-slate-500")}>{exp.location}</Text>
                  </View>

                  <Text style={tw("text-[9.5pt] text-slate-700 leading-relaxed")}>{exp.description}</Text>
                </View>
              </Fragment>
            ))}
          </View>

          {/* Projects - Clean card style */}
          {projects.length > 0 && (
            <View>
              <View style={tw("flex-row items-center mb-5")}>
                <View style={tw("h-[3pt] w-10 bg-yellow-600 mr-3")} />
                <Text style={tw("text-sm font-semibold text-slate-900 uppercase tracking-widest")}>Notable Projects</Text>
              </View>
              {projects.map((proj, idx) => (
                <View key={proj.id} style={idx < projects.length - 1 ? tw("mb-4 pb-4 border-b border-slate-100") : tw("mb-4")}>
                  <View style={tw("mb-1")}>
                    <Text style={tw("text-[10pt] font-semibold text-slate-900")}>{proj.name}</Text>
                    {proj.link && (
                      <Link src={`https://${proj.link}`} style={tw("text-[8.5pt] text-blue-900 no-underline")}>
                        {proj.link}
                      </Link>
                    )}
                  </View>
                  <Text style={tw("text-[9pt] text-slate-700 leading-relaxed mb-2")}>{proj.description}</Text>
                  <Text style={tw("text-[8.5pt] text-slate-500")}>
                    <Text style={tw("font-semibold text-yellow-700")}>Technologies: </Text>
                    {proj.technologies.join(" • ")}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* RIGHT SIDEBAR - Premium accent */}
        <View style={tw("w-[32%] bg-slate-50 px-6 py-8 border-l-2 border-yellow-600")}>
          {/* Skills - Refined list style */}
          <View style={tw("mb-8")}>
            <Text style={tw("text-sm font-bold text-slate-900 mb-5 uppercase tracking-wider")}>Core Expertise</Text>
            {skills.map((cat) => (
              <View key={cat.name} style={tw("mb-5")}>
                <Text style={tw("text-[9pt] font-bold text-blue-900 mb-2.5 uppercase tracking-wide")}>{cat.name}</Text>
                <Text style={tw("text-[8.5pt] text-slate-700 leading-relaxed")}>{cat.items.join(" • ")}</Text>
              </View>
            ))}
          </View>

          {/* Education - Premium style */}
          <View>
            <Text style={tw("text-sm font-bold text-slate-900 mb-5 uppercase tracking-wider")}>Education</Text>
            {education.map((edu, idx) => (
              <View key={edu.id} style={idx < education.length - 1 ? tw("mb-5 pb-5 border-b border-slate-200") : tw("mb-5")}>
                <Text style={tw("text-[9pt] font-bold text-slate-900 mb-1")}>{edu.degree}</Text>
                <Text style={tw("text-[8.5pt] text-blue-900 mb-1.5")}>{edu.institution}</Text>
                <Text style={tw("text-[8pt] text-slate-500")}>
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
