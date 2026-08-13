import {
  BrainCircuit,
  Code2,
  Layers3,
  Sparkles,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { about } from '../data/about'
import { skillGroups } from '../data/skills'

const categoryIcons = {
  'ai-ml': BrainCircuit,
  'software-engineering': Code2,
  data: Layers3,
  tools: Layers3,
  'dev-practices': Sparkles,
}

function About() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="site-container">

        {/* Section heading */}
        <motion.div
          initial={
            prefersReducedMotion
              ? undefined
              : { opacity: 0, y: 18 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10"
        >
          <p className="eyebrow mb-3">
            01 / Profile
          </p>

          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="gold-line mb-4" />

              <h2
                id="about-heading"
                className="section-title"
              >
                About the Engineer
              </h2>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 sm:block">
              NUK / PROFILE
            </span>
          </div>
        </motion.div>

        {/* About + highlights */}
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

          <motion.article
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: 20 }
            }
            whileInView={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="panel gold-glow p-6 sm:p-8"
          >
            <p className="max-w-2xl text-lg font-medium leading-8 text-white/85 sm:text-xl">
              {about.title}
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-white/50">
              <p>{about.description}</p>
              <p>{about.secondaryDescription}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {about.highlights.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-xl
                    border border-white/[0.06]
                    bg-white/[0.018]
                    p-4
                  "
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/30">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.article>

          {/* Engineering principles */}
          <motion.aside
            initial={
              prefersReducedMotion
                ? undefined
                : { opacity: 0, y: 20 }
            }
            whileInView={
              prefersReducedMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="panel p-6 sm:p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f1c66d]">
              Engineering Principles
            </p>

            <div className="mt-6 space-y-5">
              {[
                {
                  number: '01',
                  title: 'Understand',
                  description:
                    'Break the problem down before choosing the technology.',
                },
                {
                  number: '02',
                  title: 'Build',
                  description:
                    'Turn ideas into usable systems with clean architecture.',
                },
                {
                  number: '03',
                  title: 'Improve',
                  description:
                    'Iterate through testing, feedback, and measurable results.',
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4"
                >
                  <span className="font-mono text-[10px] text-[#d9a84e]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/40">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        {/* Skills */}
        <div
          id="skills"
          className="mt-24 scroll-mt-20"
        >
          <div className="mb-8">
            <p className="eyebrow mb-3">
              02 / Capability
            </p>

            <div className="gold-line mb-4" />

            <h2 className="section-title">
              Technical Skills
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/40">
              A practical stack spanning software development,
              intelligent systems, data, and engineering tools.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {skillGroups.map((group, index) => {
              const Icon = categoryIcons[group.id]

              return (
                <motion.article
                  key={group.id}
                  initial={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, y: 16 }
                  }
                  whileInView={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{
                    once: true,
                    margin: '-60px',
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    panel
                    min-h-[190px]
                    p-5
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-lg
                        border border-[#d9a84e]/20
                        bg-[#d9a84e]/[0.04]
                        text-[#f1c66d]
                      "
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                      />
                    </div>

                    <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-white/80">
                      {group.label}
                    </h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-md
                          border border-white/[0.07]
                          bg-white/[0.025]
                          px-2.5 py-1.5
                          font-mono
                          text-[9px]
                          text-white/45
                          transition-colors
                          hover:border-[#d9a84e]/25
                          hover:text-[#f1c66d]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About