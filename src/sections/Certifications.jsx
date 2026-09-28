import React from "react";
import { FiAward, FiExternalLink } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <Section id="certifications" index="05" label="certifications" title="Certifications">
      <Reveal>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const meta = [cert.issuer, cert.year].filter(Boolean).join(" · ");
            const body = (
              <>
                <FiAward className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="flex-1">
                  <span className="block text-sm font-medium">{cert.title}</span>
                  {meta && <span className="mt-0.5 block font-mono text-xs text-muted">{meta}</span>}
                </span>
                {cert.url && <FiExternalLink className="mt-0.5 shrink-0 text-muted" aria-hidden="true" />}
              </>
            );
            return (
              <li key={cert.title}>
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card flex h-full gap-3 p-4 transition-colors hover:border-accent/50"
                    aria-label={`${cert.title}: verify certificate (opens in a new tab)`}
                  >
                    {body}
                  </a>
                ) : (
                  <div className="card flex h-full gap-3 p-4">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
