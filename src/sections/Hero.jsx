import { ArrowDown, ArrowRight, Code2, Download, Mail, Network } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import NeuralCore from '../components/NeuralCore/NeuralCore'
import { profile } from '../data/profile'

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.social.github,
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    href: profile.social.linkedin,
    icon: Network,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

function Hero() {
  const prefersReducedMotion = useReducedMotion()

  const revealAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <section
      id="home"
      className="
        relative flex min-h-screen
        items-center overflow-hidden
        py-24 lg:py-12
      "
    >
      <div className="site-container w-full">

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-4">

          {/* Hero copy */}
          <motion.div
            {...revealAnimation}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="gold-line" />

              <span className="eyebrow">
                Welcome to my engineering system
              </span>
            </div>

            <h1 className="display-title">
              <span className="block text-white">
                NAVIDA
              </span>

              <span className="block gold-text">
                UNNI KRISHNA
              </span>
            </h1>

            <p className="mt-7 font-mono text-xs uppercase tracking-[0.16em] text-white/60 sm:text-sm">
              {profile.role}
            </p>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              {profile.introduction}
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="button-primary"
              >
                Explore Work
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="button-secondary"
              >
                Get In Touch
                <Mail size={15} />
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                Resume
                <Download size={15} />
              </a>
            </div>

            {/* Social links */}
            <div className="mt-9 flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Find me on
              </span>

              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-lg
                        border border-white/[0.08]
                        bg-white/[0.02]
                        text-white/45
                        transition-all duration-200
                        hover:border-[#d9a84e]/40
                        hover:bg-[#d9a84e]/[0.06]
                        hover:text-[#f1c66d]
                      "
                    >
                      <Icon size={15} strokeWidth={1.5} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Neural Core */}
          <motion.div
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, scale: 0.94 }
            }
            animate={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, scale: 1 }
            }
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <NeuralCore />

            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-3 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">
                <span>Building</span>
                <span className="text-[#d9a84e]">•</span>
                <span>Learning</span>
                <span className="text-[#d9a84e]">•</span>
                <span>Impacting</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          className="
            absolute bottom-7 left-1/2
            hidden -translate-x-1/2
            flex-col items-center gap-2
            text-white/25
            lg:flex
          "
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, 5, 0] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.25em]">
            Explore
          </span>

          <ArrowDown size={14} strokeWidth={1} />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero