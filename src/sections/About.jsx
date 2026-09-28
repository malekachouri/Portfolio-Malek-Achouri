import React from "react";
import { FiMapPin, FiBookOpen, FiGlobe, FiBriefcase } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { profile, education, languages, experience } from "../data/content";

const current = experience.find((job) => job.current);

const facts = [
  { Icon: FiBriefcase, label: "Role", value: current ? `${current.role} · ${current.company}` : profile.title },
  { Icon: FiMapPin, label: "Based in", value: profile.location },
  { Icon: FiBookOpen, label: "Education", value: `Telecom Engineering · ENET'Com (${education[0].period})` },
  { Icon: FiGlobe, label: "Languages", value: languages.map((l) => l.name).join(" · ") },
];

export default function About() {
  return (
    <Section id="about" index="01" label="about" title="Platform engineering, with AI in production">
      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
        <Reveal>
          <img
            src="/images/malek-achouri.webp"
            alt="Portrait of Achouri Malek"
            width="240"
            height="240"
            loading="lazy"
            className="h-48 w-48 rounded-2xl border border-line bg-white object-cover sm:h-60 sm:w-60"
          />
        </Reveal>

        <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05} className="space-y-4 leading-relaxed text-muted">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="card divide-y divide-line">
              {facts.map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-3 p-4">
                  <Icon className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wide text-muted">{label}</dt>
                    <dd className="mt-0.5 text-sm">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
