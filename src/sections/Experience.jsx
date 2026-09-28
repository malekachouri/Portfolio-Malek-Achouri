import React from "react";
import { FiMapPin } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Tags from "../components/Tags";
import { experience } from "../data/content";

function Job({ job, delay }) {
  return (
    <Reveal as="li" delay={delay} className="relative pl-6 sm:pl-10">
      <span
        className={`absolute left-0 top-7 h-3 w-3 -translate-x-[6.5px] rounded-full border-2 ${
          job.current ? "border-accent bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.2)]" : "border-line bg-bg"
        }`}
        aria-hidden="true"
      />

      <article className="card p-5 sm:p-7">
        <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">
              {job.role} <span className="text-accent">· {job.company}</span>
            </h3>
            {(job.client || job.subtitle) && (
              <p className="mt-1 text-sm text-fg/80">{job.client ? `Client: ${job.client}` : job.subtitle}</p>
            )}
          </div>
          <div className="text-right font-mono text-xs text-muted">
            <p className={job.current ? "text-accent" : ""}>{job.period}</p>
            <p className="mt-1 inline-flex items-center gap-1">
              <FiMapPin aria-hidden="true" /> {job.location}
            </p>
          </div>
        </header>

        {job.summary && <p className="mt-4 leading-relaxed text-muted">{job.summary}</p>}

        {job.impact && (
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {job.impact.map((m) => (
              <div key={m.label} className="flex flex-col rounded-lg border border-line bg-elevated px-3 py-2.5">
                <dt className="order-2 text-xs leading-snug text-muted">{m.label}</dt>
                <dd className="text-lg font-bold text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className={`mt-6 grid gap-6 ${job.groups.length > 1 ? "lg:grid-cols-2" : ""}`}>
          {job.groups.map((group) => (
            <section key={group.title}>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wide text-accent">{group.title}</h4>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-muted">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Tags items={job.stack} className="mt-6 border-t border-line pt-5" />
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="experience"
      title="Professional experience"
      intro="From Ansible automation and private clouds to multi-account AWS infrastructure in production."
    >
      <ol className="space-y-8 border-l border-line">
        {experience.map((job, i) => (
          <Job key={`${job.company}-${job.period}`} job={job} delay={Math.min(i, 3) * 0.05} />
        ))}
      </ol>
    </Section>
  );
}
