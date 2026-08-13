import {
  Award,
  Code2,
  Crown,
  Trophy,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import { achievements } from '../data/achievements'

const icons = [
  Trophy,
  Crown,
  Award,
  Code2,
]

function Achievements() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="achievements"
      className="section scroll-mt-10"
      aria-labelledby="achievements-heading"
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
            05 / Mission Log
          </p>

          <div className="gold-line mb-4" />

          <h2
            id="achievements-heading"
            className="section-title"
          >
            Achievements & Leadership
          </h2>
        </motion.header>

        <div className="grid gap-3 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length]

            return (
              <motion.article
                key={achievement.id}
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
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  group
                  panel
                  p-6
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#d9a84e]/20
                      bg-[#d9a84e]/[0.04]
                      text-[#f1c66d]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.4}
                    />
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.12em] text-white/20">
                    {achievement.year}
                  </span>
                </div>

                <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.16em] text-[#d9a84e]">
                  {achievement.category}
                </p>

                <h3 className="mt-2 text-base font-semibold text-white">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {achievement.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements