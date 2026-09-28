import React from "react";
import { FiShield } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Tags from "../components/Tags";
import { experience } from "../data/content";

function Job({ job, delay }) {
  return (
    <Reveal as="li" delay={delay}>
      <article className="card grid gap-5 p-5 sm:p-7 md:grid-cols-[11rem_1fr] md:gap-8">
        {/* Left column: when and where, so recruiters can scan the timeline quickly */}
        <div className="md:border-r md:border-line md:pr-6">
          <p className={`font-mono text-xs ${job.current ? "text-accent" : "text-muted"}`}>
            {job.current && <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-hidden="true" />}
            {job.period}
          </p>
          <p className="mt-2 font-semibold">{job.company}</p>
          {job.client && <p className="text-sm text-muted">Client: {job.client}</p>}
          <p className="mt-1 text-xs text-muted">{job.location}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold sm:text-xl">{job.role}</h3>
          {job.subtitle && <p className="mt-0.5 text-sm text-accent">{job.subtitle}</p>}
          {job.summary && <p className="mt-2 leading-relaxed text-muted">{job.summary}</p>}

          {job.impact && (
            <dl className="mt-4 flex flex-wrap gap-2">
              {job.impact.map((m) => (
                <div key={m.label} className="flex flex-row-reverse items-baseline gap-1.5 rounded-full border border-line bg-elevated px-3 py-1">
                  <dt className="text-xs text-muted">{m.label}</dt>
                  <dd className="text-sm font-bold text-fg">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
            {job.highlights.map((h) => (
              <li key={h.lead} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-muted">
                  <strong className="font-semibold text-fg">{h.lead}:</strong> {h.text}
                </span>
              </li>
            ))}
          </ul>

          {job.note && (
            <div className="mt-5 flex gap-3 rounded-lg border border-line bg-elevated p-4">
              <FiShield className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm leading-relaxed text-muted">
                <strong className="font-semibold text-fg">{job.note.title}:</strong> {job.note.text}
              </p>
            </div>
          )}

          <Tags items={job.stack} className="mt-5" />
        </div>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="02" label="experience" title="Professional experience">
      <ol className="space-y-5">
        {experience.map((job, i) => (
          <Job key={`${job.company}-${job.period}`} job={job} delay={Math.min(i, 3) * 0.05} />
        ))}
      </ol>
    </Section>
  );
}
