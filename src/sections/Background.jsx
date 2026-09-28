import React from "react";
import { FiAward } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { education, award, volunteering, languages } from "../data/content";

function Gallery({ images }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {images.map((img) => (
        <a key={img.src} href={img.src} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg border border-line">
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width="600"
            height="400"
            className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
      ))}
    </div>
  );
}

const Heading = ({ children }) => <h3 className="mb-4 font-mono text-sm font-semibold text-accent">{children}</h3>;

export default function Background() {
  return (
    <Section id="background" index="06" label="background" title="Education, awards & community">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <Heading>education</Heading>
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="card p-5">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <h4 className="mt-1 font-semibold">{e.degree}</h4>
                {e.focus && <p className="text-sm text-accent">{e.focus}</p>}
                <p className="mt-1 text-sm text-muted">
                  {e.school} · {e.location}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Heading>languages</Heading>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {languages.map((l) => (
                <li key={l.name} className="card p-4">
                  <p className="font-medium">{l.name}</p>
                  <p className="text-xs text-muted">{l.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Heading>award</Heading>
          <article className="card p-5">
            <p className="font-mono text-xs text-muted">{award.date}</p>
            <h4 className="mt-1 flex items-center gap-2 font-semibold">
              <FiAward className="text-accent" aria-hidden="true" /> {award.title}
            </h4>
            <p className="text-sm text-accent">{award.context}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{award.description}</p>
            <Gallery images={award.images} />
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <Heading>volunteering</Heading>
        <div className="grid gap-6 lg:grid-cols-2">
          {volunteering.map((v) => (
            <article key={v.organization} className="card p-5">
              <p className="font-mono text-xs text-muted">
                {v.period} · {v.location}
              </p>
              <h4 className="mt-1 font-semibold">
                {v.role} <span className="text-accent">· {v.organization}</span>
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              <Gallery images={v.images} />
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
