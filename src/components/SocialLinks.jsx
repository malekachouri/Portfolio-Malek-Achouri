import React from "react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/content";

const socials = [
  { label: "LinkedIn", href: profile.links.linkedin, Icon: FaLinkedin },
  { label: "GitLab", href: profile.links.gitlab, Icon: FaGitlab },
  { label: "GitHub", href: profile.links.github, Icon: FaGithub },
];

export default function SocialLinks({ size = 18 }) {
  return (
    <ul className="flex items-center gap-2">
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
