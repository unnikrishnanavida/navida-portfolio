import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function ProjectCard({ project, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      initial={
        prefersReducedMotion
          ? undefined
          : {
              opacity: 0,
              y: 24,
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
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.07]
        bg-[#090c11]/80
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d9a84e]/30
        hover:bg-[#0c1016]
      "
    >
      {/* Top metadata */}
      <div className="flex items-center justify-between">
        <span
          className="
            font-mono
            text-[10px]
            tracking-[0.15em]
            text-[#f1c66d]
          "
        >
          {project.number}
        </span>

        <span
          className="
            rounded-full
            border
            border-white/[0.07]
            px-2.5
            py-1
            font-mono
            text-[8px]
            uppercase
            tracking-[0.08em]
            text-white/35
          "
        >
          {project.category}
        </span>
      </div>

      {/* Decorative project visual */}
      <div
        className="
          relative
          mt-6
          flex
          h-36
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          border
          border-white/[0.06]
          bg-gradient-to-br
          from-[#111720]
          via-[#080b10]
          to-[#0d1118]
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            h-32
            w-32
            rounded-full
            border
            border-[#d9a84e]/10
          "
        />

        <div
          className="
            absolute
            h-20
            w-20
            rotate-45
            rounded-xl
            border
            border-[#d9a84e]/25
            bg-[#d9a84e]/[0.025]
            transition-transform
            duration-500
            group-hover:rotate-[55deg]
          "
        />

        <div
          className="
            relative
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[#d9a84e]/40
            bg-[#090c11]
            text-[#f1c66d]
            shadow-[0_0_35px_rgba(217,168,78,0.08)]
          "
        >
          <span className="font-mono text-xs">
            {project.number}
          </span>
        </div>

        {/* Data points */}
        <span className="absolute left-[18%] top-[25%] h-1 w-1 rounded-full bg-[#4cc9e8]" />
        <span className="absolute right-[18%] top-[32%] h-1 w-1 rounded-full bg-[#f1c66d]" />
        <span className="absolute bottom-[22%] left-[30%] h-1 w-1 rounded-full bg-[#4cc9e8]" />
        <span className="absolute bottom-[27%] right-[27%] h-1 w-1 rounded-full bg-[#f1c66d]" />
      </div>

      {/* Content */}
      <div className="mt-5">
        <h3
          className="
            text-base
            font-semibold
            tracking-[-0.02em]
            text-white
            transition-colors
            group-hover:text-[#f1c66d]
          "
        >
          {project.title}
        </h3>

        <p className="mt-3 text-xs leading-6 text-white/45">
          {project.description}
        </p>
      </div>

      {/* Highlights */}
      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li
            key={highlight}
            className="
              flex
              items-start
              gap-2
              text-[10px]
              leading-5
              text-white/40
            "
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#d9a84e]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-md
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-2
              py-1
              font-mono
              text-[8px]
              text-white/40
            "
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-auto flex gap-2 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/[0.08]
              px-3
              py-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.08em]
              text-white/50
              transition-colors
              hover:border-[#d9a84e]/30
              hover:text-[#f1c66d]
            "
            aria-label={`View ${project.title} on GitHub`}
          >
            <Code2 size={13} />
            Code
          </a>
        )}

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              border
              border-white/[0.08]
              px-3
              py-2
              font-mono
              text-[9px]
              uppercase
              tracking-[0.08em]
              text-white/50
              transition-colors
              hover:border-[#d9a84e]/30
              hover:text-[#f1c66d]
            "
            aria-label={`Open ${project.title} live demo`}
          >
            <ExternalLink size={13} />
            Demo
          </a>
        )}

        <span
          className="
            ml-auto
            flex
            items-center
            text-white/20
            transition-colors
            group-hover:text-[#f1c66d]
          "
          aria-hidden="true"
        >
          <ArrowUpRight size={16} />
        </span>
      </div>
    </motion.article>
  )
}

export default ProjectCard