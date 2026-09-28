import React from "react";
import { FiMail } from "react-icons/fi";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import ResumeLinks from "../components/ResumeLinks";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <Section id="contact" index="07" label="contact" title="Let's talk">
      <Reveal className="card relative overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <p className="relative max-w-xl text-muted">
          Questions about cloud platforms, GitOps, DevSecOps pipelines or running AI agents in production? Email is the fastest way to reach me.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="relative mt-6 inline-flex items-center gap-3 break-all text-xl font-semibold text-fg transition-colors hover:text-accent sm:text-2xl"
        >
          <FiMail className="shrink-0 text-accent" aria-hidden="true" />
          {profile.email}
        </a>
        <div className="relative mt-8 flex flex-wrap items-center gap-4">
          <SocialLinks />
          <ResumeLinks />
        </div>
      </Reveal>
    </Section>
  );
}
