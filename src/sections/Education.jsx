import {
  BookOpen,
  GraduationCap,
  MapPin,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { education } from '../data/education'

function Education() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="education"
      className="section scroll-mt-10"
      aria-labelledby="education-heading"
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
          className="mb-10"
        >
          <p className="eyebrow mb-3">
            06 / Education
          </p>

          <div className="gold-line mb-4" />

          <h2
            id="education-heading"
            className="section-title"
          >
            Academic Foundation
          </h2>
        </motion.header>

        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={
                prefersReducedMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 18,
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
                margin: '-70px',
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="
                panel
                p-6
                sm:p-8
              "
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                <div
                  className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#d9a84e]/25
                    bg-[#d9a84e]/[0.04]
                    text-[#f1c66d]
                  "
                >
                  <GraduationCap
                    size={24}
                    strokeWidth={1.2}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#f1c66d]">
                      {item.status}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span className="flex items-center gap-1.5 font-mono text-[9px] text-white/25">
                      <MapPin size={11} />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-sm text-[#d9a84e]">
                    {item.specialization}
                  </p>

                  <p className="mt-4 flex items-center gap-2 text-sm text-white/45">
                    <BookOpen size={14} />
                    {item.institution}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education