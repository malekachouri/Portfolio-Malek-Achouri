import React from "react";
import { FiDownload } from "react-icons/fi";
import { profile } from "../data/content";

// One download button per CV language (EN / FR).
export default function ResumeLinks({ compact = false }) {
  return (
    <div className="inline-flex overflow-hidden rounded-lg border border-line bg-surface" role="group" aria-label="Download resume">
      {!compact && (
        <span className="flex items-center gap-2 border-r border-line px-3 text-sm font-semibold">
          <FiDownload aria-hidden="true" /> Resume
        </span>
      )}
      {profile.resumes.map((cv, i) => (
        <a
          key={cv.lang}
          href={cv.href}
          download
          hrefLang={cv.lang.toLowerCase()}
          aria-label={`Download resume in ${cv.label}`}
          className={`px-3 py-2 font-mono text-sm font-semibold text-muted transition-colors hover:bg-elevated hover:text-accent ${
            i > 0 ? "border-l border-line" : ""
          }`}
        >
          {compact && i === 0 && <FiDownload className="mr-1.5 inline" aria-hidden="true" />}
          {cv.lang}
        </a>
      ))}
    </div>
  );
}
