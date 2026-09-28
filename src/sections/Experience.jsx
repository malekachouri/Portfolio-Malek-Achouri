import React, { useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Tags from "../components/Tags";
import { experience } from "../data/content";

const PREVIEW = 3;

function Job({ job, delay }) {
  const [expanded, setExpanded] = useState(false);
  const hidden = job.highlights.length - PREVIEW;
  const shown = expanded ? job.highlights : job.highlights.slice(0, PREVIEW);
  const listId = `job-${job.company.replace(/\W+/g, "-").toLowerCase()}`;

  return (
    <Reveal as="li" delay={delay} className="relative pl-8 sm:pl-10">
      <span
        className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full border-2 ${
          job.current ? "border-accent bg-accent" : "border-line bg-bg"
        }`}
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold">
          {job.role} <span className="text-accent">· {job.company}</span>
        </h3>
        <p className="font-mono text-xs text-muted">{job.period}</p>
      </div>
      <p className="mt-1 text-sm text-muted">
        {job.client && <>Client: {job.client} · </>}
        {job.subtitle && <>{job.subtitle} · </>}
        {job.location}
      </p>

      <ul id={listId} className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
        {shown.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-controls={listId}
          className="mt-2 font-mono text-xs text-accent hover:underline"
        >
          {expanded ? "show less" : `+ ${hidden} more`}
        </button>
      )}
      <Tags items={job.stack} className="mt-4" />
    </Reveal>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="03" label="experience" title="Where I've worked">
      <ol className="space-y-12 border-l border-line">
        {experience.map((job, i) => (
          <Job key={`${job.company}-${job.period}`} job={job} delay={Math.min(i, 3) * 0.05} />
        ))}
      </ol>
    </Section>
  );
}
