import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import Tags from "../components/Tags";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" index="04" label="skills" title="Toolbox" intro="Tools I've used in production or in the projects above.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 4) * 0.05} className="card p-5">
            <h3 className="font-mono text-sm font-semibold text-accent">{group.title}</h3>
            <Tags items={group.items} className="mt-4" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
