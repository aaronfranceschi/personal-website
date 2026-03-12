"use client";
import { certifications } from "@/../utils/Data/certification";
import Marquee from "react-fast-marquee";
import SectionReveal from "../SectionReveal";
import Image from "next/image";

const CertificationItem = ({ cert }: { cert: any }) => {
  // Limit skills to max 5
  const displayedSkills = cert.skills.slice(0, 5);
  const extraSkills = cert.skills.length - displayedSkills.length;

  return (
    <div className="mx-6 my-6 group">
      <div className="relative w-[420px] h-[380px] px-8 py-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-500 hover:border-blue-700/40 hover:bg-white/[0.05] shadow-xl flex flex-col">
        
        {/* Badge + Title */}
        <div className="flex items-center gap-5">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white group-hover:text-blue-500 transition-colors">
              {cert.title}
            </span>
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              {cert.issuer}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 flex-1 overflow-hidden">
          {cert.details.map((item: string, index: number) => (
            <p
              key={index}
              className="text-xs text-slate-400 leading-relaxed line-clamp-3"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {displayedSkills.map((skill: string, index: number) => (
            <span
              key={index}
              className="text-[10px] px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-wide"
            >
              {skill}
            </span>
          ))}
          {extraSkills > 0 && (
            <span className="text-[10px] px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 uppercase tracking-wide">
              +{extraSkills} more
            </span>
          )}
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500 pointer-events-none blur-xl bg-blue-600" />
      </div>
    </div>
  );
};

function Certifications() {
  return (
    <div
      id="certifications"
      className="relative z-50 py-12 lg:py-24 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="flex flex-col items-center mb-16 lg:mb-24">
          <SectionReveal direction="down">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 text-blue-500">
                <span className="w-8 h-[1px] bg-blue-500/50"></span>
                <span className="text-xs font-bold uppercase tracking-[0.5em]">
                  Credentials
                </span>
                <span className="w-8 h-[1px] bg-blue-500/50"></span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter text-center">
                Certifications &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                  Badges
                </span>
              </h2>

              <p className="text-slate-400 text-sm max-w-xl text-center">
                Showcase certifications, platform badges, and technical
                credentials that strengthen your professional profile.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* Single Marquee Row */}
        <div className="relative">
          <SectionReveal direction="up" delay={0.2}>
            <Marquee speed={35} gradient={false} pauseOnHover={true}>
              {certifications.map((cert, index) => (
                <CertificationItem key={index} cert={cert} />
              ))}
            </Marquee>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}

export default Certifications;