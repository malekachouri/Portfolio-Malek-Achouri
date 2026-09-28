import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { profile, metrics, experience } from "../data/content";
import ResumeLinks from "../components/ResumeLinks";
import SocialLinks from "../components/SocialLinks";

const current = experience.find((job) => job.current);

// Each line is a real fact from the projects and experience below.
const pipeline = [
  { step: "terraform apply", note: "aws · dev / staging / prod" },
  { step: "trivy image scan", note: "HIGH/CRITICAL gate" },
  { step: "argocd app sync", note: "app-of-apps · healthy" },
  { step: "pytest agent/", note: "23 passed · ~2s" },
];

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-page gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <motion.p {...fadeUp(0)} className="font-mono text-sm text-accent">
            $ whoami
          </motion.p>
          <motion.h1 {...fadeUp(0.05)} className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="mt-3 text-xl font-semibold text-accent sm:text-2xl">
            {profile.title}
          </motion.p>
          <motion.p {...fadeUp(0.15)} className="mt-6 max-w-xl leading-relaxed text-muted">
            {profile.summary}
          </motion.p>

          {current && (
            <motion.p {...fadeUp(0.2)} className="mt-6 text-sm text-muted">
              Currently <span className="font-semibold text-fg">{current.role}</span> at{" "}
              <span className="font-semibold text-fg">{current.company}</span> · {profile.location}
            </motion.p>
          )}

          <motion.div {...fadeUp(0.25)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View projects <FiArrowRight aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              <FiMail aria-hidden="true" /> Contact
            </a>
            <ResumeLinks />
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-6">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.2)} className="card overflow-hidden shadow-2xl shadow-black/20" aria-label="Example delivery pipeline">
          <div className="flex items-center gap-2 border-b border-line bg-elevated px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-mono text-xs text-muted">~/platform — deploy</span>
          </div>
          <div className="space-y-3 p-5 font-mono text-[13px] leading-relaxed">
            <p>
              <span className="text-accent">❯</span> make release
            </p>
            {pipeline.map((line, i) => (
              <motion.p
                key={line.step}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.35, duration: 0.3 }}
                className="flex flex-wrap justify-between gap-x-4"
              >
                <span>
                  <span className="text-green-500">✓</span> {line.step}
                </span>
                <span className="text-muted">{line.note}</span>
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + pipeline.length * 0.35 }}
              className="text-accent"
            >
              ✔ released to production
            </motion.p>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-page px-4 pb-8 sm:px-6">
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div key={m.label} {...fadeUp(0.35 + i * 0.05)} className="card flex flex-col p-5">
              <dt className="order-2 mt-1 text-sm text-muted">{m.label}</dt>
              <dd className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">{m.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
