import React, { useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Tags from "../components/Tags";
import { featuredProjects, projects, projectCategories } from "../data/content";

function FeaturedCard({ project, delay, wide }) {
  return (
    <Reveal id={project.id} delay={delay} as="article" className={`card flex flex-col p-6 sm:p-8 ${wide ? "lg:col-span-2" : ""}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-xs text-accent">featured · {project.date}</p>
      </div>
      <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-muted">{project.tagline}</p>

      {/* Simplified architecture: how a change flows through the system */}
      <ol className="mt-6 flex flex-wrap items-center gap-y-2 font-mono text-xs" aria-label="Architecture flow">
        {project.flow.map((step, i) => (
          <li key={step} className="flex items-center">
            <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-1 text-accent">{step}</span>
            {i < project.flow.length - 1 && <FiArrowRight className="mx-1.5 text-muted" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <ul className="mb-6 mt-6 space-y-3 text-sm leading-relaxed text-muted">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-line pt-6">
        {project.stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <dt className="order-2 text-xs text-muted">{s.label}</dt>
            <dd className="text-lg font-bold">{s.value}</dd>
          </div>
        ))}
      </dl>

      <Tags items={project.stack} className="mt-6" />
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section
      id="projects"
      index="03"
      label="projects"
      title="Selected work"
      intro="Three recent builds that show how I work end to end, one from production at Neoshore and two personal projects, followed by earlier work across cloud, CI/CD, security and software."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.title} project={p} delay={i * 0.08} wide={i === 0} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-xl font-bold">More projects</h3>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                filter === cat
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-line text-muted hover:border-accent/60 hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.title} className="card flex flex-col p-5 transition-colors hover:border-accent/50">
            <p className="font-mono text-xs text-muted">
              {p.date} · <span className="text-accent">{p.category}</span>
            </p>
            <h4 className="mt-2 font-semibold">{p.title}</h4>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
            <Tags items={p.stack} className="mt-4" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
