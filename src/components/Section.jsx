import React from "react";
import Reveal from "./Reveal";

export default function Section({ id, index, label, title, intro, children, className = "" }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-page px-4 sm:px-6">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-sm text-accent">
            {index} <span className="text-muted">// {label}</span>
          </p>
          <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
