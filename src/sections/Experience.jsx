import {
  ArrowUpRight,
  Building2,
  CalendarDays,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { experience } from '../data/experience'

function Experience() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="experience"
      className="section scroll-mt-10"
      aria-labelledby="experience-heading"
    >
      <div className="site-container">

        <motion.header
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
          viewport={{
            once: true,
            margin: '-100px',
          }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">
            04 / Experience
          </p>

          <div className="gold-line mb-4" />

          <h2
            id="experience-heading"
            className="section-title"
          >
            Engineering Experience
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
            Research, technical work, and engineering experiences
            that have shaped how I approach real-world problems.
          </p>
        </motion.header>

        <div className="relative">

          {/* Timeline */}
          <div
            className="
              absolute
              bottom-0
              left-[15px]
              top-0
              w-px
              bg-gradient-to-b
              from-[#d9a84e]/40
              via-white/[0.08]
              to-transparent
              sm:left-[20px]
            "
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={item.id}
                initial={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: -18,
                      }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                viewport={{
                  once: true,
                  margin: '-70px',
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline node */}
                <span
                  className="
                    absolute
                    left-[9px]
                    top-7
                    flex
                    h-3.5
                    w-3.5
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#d9a84e]/60
                    bg-[#05070a]
                    sm:left-[14px]
                  "
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#f1c66d]" />
                </span>

                <div className="panel p-6 sm:p-7">

                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#f1c66d]">
                          <CalendarDays size={11} />
                          {item.period}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-white/20" />

                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/25">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 flex items-center gap-2 text-sm text-[#d9a84e]">
                        <Building2 size={14} />
                        {item.organization}
                      </p>
                    </div>

                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/15 lg:block">
                      Experience / {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="mt-6 max-w-3xl text-sm leading-7 text-white/45">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/[0.06]
                          bg-white/[0.02]
                          px-2.5
                          py-1.5
                          font-mono
                          text-[8px]
                          text-white/40
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
                    <ArrowUpRight size={12} />
                    Research & Engineering
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience