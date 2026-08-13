import {
  ArrowUpRight,
  Code2,
  Mail,
  Send,
} from 'lucide-react'

import {
  motion,
  useReducedMotion,
} from 'framer-motion'

import { profile } from '../data/profile'

const contactLinks = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: profile.social.github,
    icon: Code2,
  },
  {
    label: 'LinkedIn',
    value: 'View LinkedIn Profile',
    href: profile.social.linkedin,
    icon: Code2,
  },
]

function Contact() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="section scroll-mt-10"
      aria-labelledby="contact-heading"
    >
      <div className="site-container">

        {/* Contact panel */}
        <motion.div
          initial={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#d9a84e]/20
            bg-[#090c11]/90
            p-7
            sm:p-10
            lg:p-14
          "
        >
          {/* Ambient lighting */}
          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#d9a84e]/[0.05]
              blur-[120px]
            "
            aria-hidden="true"
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-40
              h-[320px]
              w-[320px]
              rounded-full
              bg-[#4cc9e8]/[0.025]
              blur-[100px]
            "
            aria-hidden="true"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            {/* Main message */}
            <div>
              <p className="eyebrow mb-4">
                08 / Contact
              </p>

              <div className="gold-line mb-6" />

              <h2
                id="contact-heading"
                className="
                  max-w-3xl
                  text-4xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.055em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Let&apos;s build something

                <span className="block text-[#f1c66d]">
                  intelligent.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
                I&apos;m interested in opportunities where software
                engineering and artificial intelligence can be used
                to solve meaningful problems.
              </p>

              <a
                href="mailto:unnikrishnanavida@gmail.com"
                className="button-primary mt-8"
              >
                Start a Conversation
                <Send size={14} />
              </a>
            </div>

            {/* Contact links */}
            <div className="flex flex-col justify-end">

              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                Communication Channels
              </p>

              <div className="space-y-2">
                {contactLinks.map((link) => {
                  const Icon = link.icon

                  const isExternal =
                    !link.href.startsWith('mailto:')

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        isExternal
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        isExternal
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="
                        group
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-white/[0.06]
                        bg-white/[0.018]
                        p-4
                        transition-all
                        duration-200
                        hover:border-[#d9a84e]/25
                        hover:bg-[#d9a84e]/[0.035]
                      "
                    >

                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-white/[0.07]
                          text-white/40
                          transition-colors
                          group-hover:border-[#d9a84e]/25
                          group-hover:text-[#f1c66d]
                        "
                      >
                        <Icon
                          size={16}
                          strokeWidth={1.4}
                        />
                      </div>

                      {/* Text */}
                      <div className="min-w-0 flex-1">

                        <p
                          className="
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.15em]
                            text-white/25
                          "
                        >
                          {link.label}
                        </p>

                        <p
                          className="
                            mt-1
                            truncate
                            text-xs
                            text-white/60
                          "
                        >
                          {link.value}
                        </p>

                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={14}
                        className="
                          shrink-0
                          text-white/20
                          transition-colors
                          group-hover:text-[#f1c66d]
                        "
                      />

                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="border-t border-white/[0.06] py-8">

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Identity */}
            <div>
              <p
                className="
                  font-mono
                  text-[10px]
                  tracking-[0.15em]
                  text-white/40
                "
              >
                NUK / {new Date().getFullYear()}
              </p>

              <p className="mt-1 text-[11px] text-white/20">
                {profile.name}
              </p>
            </div>

            {/* System status */}
            <div className="flex items-center gap-3">

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#57d68d]
                  shadow-[0_0_8px_rgba(87,214,141,0.7)]
                "
                aria-hidden="true"
              />

              <span
                className="
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.18em]
                  text-white/25
                "
              >
                System Operational
              </span>

            </div>

            {/* Copyright / stack */}
            <p
              className="
                font-mono
                text-[8px]
                uppercase
                tracking-[0.15em]
                text-white/15
              "
            >
              Built with React • Engineered with purpose
            </p>

          </div>

        </footer>

      </div>
    </section>
  )
}

export default Contact