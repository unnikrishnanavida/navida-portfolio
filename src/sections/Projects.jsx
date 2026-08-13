import { ArrowRight, Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import ProjectCard from '../components/ProjectCard/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  const prefersReducedMotion = useReducedMotion()

  const featuredProjects = projects.filter(
    (project) => project.featured,
  )

  const flagshipProject = featuredProjects.find(
    (project) => project.flagship,
  )

  const primaryProjects = featuredProjects.filter(
    (project) => !project.flagship,
  )

  const additionalProjects = projects.filter(
    (project) => !project.featured,
  )

  return (
    <section
      id="projects"
      className="section scroll-mt-10"
      aria-labelledby="projects-heading"
    >
      <div className="site-container">

        {/* =====================================================
            HEADER
           ===================================================== */}

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
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">
            03 / Selected Work
          </p>

          <div className="gold-line mb-4" />

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2
                id="projects-heading"
                className="section-title"
              >
                Systems I&apos;ve Built
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                A selection of projects spanning artificial intelligence,
                machine learning, security, software engineering, and
                applied intelligent systems.
              </p>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20">
              {projects.length.toString().padStart(2, '0')} Systems
            </span>
          </div>
        </motion.header>

        {/* =====================================================
            FLAGSHIP PROJECT
           ===================================================== */}

        {flagshipProject && (
          <motion.article
            initial={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: 0,
                    y: 25,
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
              margin: '-80px',
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#d9a84e]/20
              bg-[#090c11]/90
              p-6
              shadow-[0_0_80px_rgba(217,168,78,0.04)]
              sm:p-8
              lg:p-10
            "
          >
            {/* Ambient glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-96
                w-96
                rounded-full
                bg-[#d9a84e]/[0.045]
                blur-[100px]
              "
              aria-hidden="true"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">

              {/* Project information */}
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-[#f1c66d]">
                    {flagshipProject.number}
                  </span>

                  <span className="h-px w-8 bg-[#d9a84e]/30" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
                    Flagship Project
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  {flagshipProject.title}
                </h3>

                <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-[#d9a84e]">
                  {flagshipProject.subtitle}
                </p>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50">
                  {flagshipProject.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {flagshipProject.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-md
                          border
                          border-white/[0.07]
                          bg-white/[0.02]
                          px-2.5
                          py-1.5
                          font-mono
                          text-[9px]
                          text-white/45
                        "
                      >
                        {technology}
                      </span>
                    ),
                  )}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={flagshipProject.github}
                    className="button-primary"
                  >
                    Explore Project
                    <ArrowRight size={14} />
                  </a>

                  <a
                    href={flagshipProject.liveDemo}
                    className="button-secondary"
                  >
                    Live System
                  </a>
                </div>
              </div>

              {/* Project visualization */}
              <div
                className="
                  relative
                  flex
                  aspect-square
                  min-h-[280px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-[#06080c]
                "
                aria-hidden="true"
              >
                {/* Grid */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-30
                  "
                  style={{
                    backgroundImage: `
                      linear-gradient(
                        rgba(255,255,255,0.035) 1px,
                        transparent 1px
                      ),
                      linear-gradient(
                        90deg,
                        rgba(255,255,255,0.035) 1px,
                        transparent 1px
                      )
                    `,
                    backgroundSize: '36px 36px',
                  }}
                />

                {/* Orbit */}
                <motion.div
                  className="
                    absolute
                    h-[65%]
                    w-[65%]
                    rounded-full
                    border
                    border-[#d9a84e]/15
                  "
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { rotate: 360 }
                  }
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div
                  className="
                    absolute
                    h-[42%]
                    w-[42%]
                    rotate-45
                    rounded-3xl
                    border
                    border-[#d9a84e]/30
                    bg-[#d9a84e]/[0.025]
                    shadow-[0_0_60px_rgba(217,168,78,0.08)]
                  "
                />

                {/* Core */}
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#d9a84e]/50 bg-[#090c11] shadow-[0_0_50px_rgba(217,168,78,0.1)]">
                  <div className="text-center">
                    <Sparkles
                      size={20}
                      className="mx-auto text-[#f1c66d]"
                      strokeWidth={1.2}
                    />

                    <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                      AURA
                    </span>
                  </div>
                </div>

                {/* Data nodes */}
                {[
                  ['top-10', 'left-1/2'],
                  ['right-10', 'top-1/2'],
                  ['bottom-10', 'left-1/2'],
                  ['left-10', 'top-1/2'],
                ].map(([vertical, horizontal], index) => (
                  <span
                    key={`${vertical}-${horizontal}-${index}`}
                    className={`
                      absolute
                      ${vertical}
                      ${horizontal}
                      h-1.5
                      w-1.5
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      ${index % 2 === 0 ? 'bg-[#f1c66d]' : 'bg-[#4cc9e8]'}
                      shadow-[0_0_12px_currentColor]
                    `}
                  />
                ))}
              </div>
            </div>
          </motion.article>
        )}

        {/* =====================================================
            PRIMARY PROJECTS
           ===================================================== */}

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {primaryProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            ADDITIONAL WORK
           ===================================================== */}

        {additionalProjects.length > 0 && (
          <div className="mt-20">

            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="eyebrow mb-3">
                  Additional Work
                </p>

                <div className="gold-line mb-4" />

                <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                  More Systems
                </h3>
              </div>

              <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/20">
                Supporting Work
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {additionalProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Closing statement */}
        <div className="mt-16 flex justify-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
            Build • Test • Learn • Iterate
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects