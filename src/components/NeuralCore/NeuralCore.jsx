import { motion, useReducedMotion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Lightbulb,
  Search,
  Target,
  Workflow,
} from 'lucide-react'

const nodes = [
  {
    id: 'ai',
    label: 'AI / ML',
    icon: BrainCircuit,
    position: 'top',
  },
  {
    id: 'software',
    label: 'Software Engineering',
    icon: Code2,
    position: 'left',
  },
  {
    id: 'problem',
    label: 'Problem Solving',
    icon: Workflow,
    position: 'right',
  },
  {
    id: 'innovation',
    label: 'Innovation',
    icon: Lightbulb,
    position: 'bottom-left',
  },
  {
    id: 'research',
    label: 'Research',
    icon: Search,
    position: 'bottom',
  },
  {
    id: 'impact',
    label: 'Impact',
    icon: Target,
    position: 'bottom-right',
  },
]

const nodePositions = {
  top: { x: 50, y: 8 },
  left: { x: 10, y: 42 },
  right: { x: 90, y: 42 },
  'bottom-left': { x: 20, y: 82 },
  bottom: { x: 50, y: 94 },
  'bottom-right': { x: 80, y: 82 },
}

function NeuralCore() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[620px]"
      aria-label="NUK engineering capability map"
      role="img"
    >
      {/* Ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[42%] w-[42%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#d9a84e]/[0.06]
          blur-[70px]
        "
      />

      {/* Orbital rings */}
      <motion.div
        className="
          absolute inset-[13%]
          rounded-full
          border border-[#d9a84e]/20
        "
        animate={
          prefersReducedMotion
            ? undefined
            : { rotate: 360 }
        }
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="
          absolute inset-[22%]
          rounded-full
          border border-[#4cc9e8]/15
        "
        animate={
          prefersReducedMotion
            ? undefined
            : { rotate: -360 }
        }
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div
        className="
          absolute inset-[31%]
          rounded-full
          border border-white/[0.08]
        "
      />

      {/* SVG connection layer */}
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        {nodes.map((node) => {
          const position = nodePositions[node.position]
          if (!position) return null

          return (
            <g key={node.id}>
              <line
                x1="50"
                y1="50"
                x2={position.x}
                y2={position.y}
                stroke="rgba(217,168,78,0.28)"
                strokeWidth="0.18"
              />

              <circle
                cx={position.x}
                cy={position.y}
                r="0.7"
                fill="#f1c66d"
              />

              {!prefersReducedMotion && (
                <motion.circle
                  r="0.55"
                  fill="#4cc9e8"
                  animate={{
                    cx: [50, position.x],
                    cy: [50, position.y],
                    opacity: [0, 1, 0],
                  }}
                  initial={{ cx: 50, cy: 50, opacity: 0 }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: nodes.findIndex((item) => item.id === node.id) * 0.35,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </g>
          )
        })}
      </svg>

      {/* Core */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          flex h-[24%] w-[24%]
          -translate-x-1/2 -translate-y-1/2
          items-center justify-center
        "
        animate={
          prefersReducedMotion
            ? undefined
            : {
                scale: [1, 1.025, 1],
              }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div
          className="
            absolute inset-0
            rotate-45
            rounded-[22%]
            border border-[#d9a84e]/70
            bg-[#0b0f15]/90
            shadow-[0_0_45px_rgba(217,168,78,0.12)]
          "
        />

        <div className="relative z-10 text-center">
          <span className="font-mono text-3xl font-medium tracking-[-0.08em] text-[#f1c66d] sm:text-4xl">
            NUK
          </span>

          <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.28em] text-white/35">
            Core
          </span>
        </div>
      </motion.div>

      {/* Capability nodes */}
      {nodes.map((node) => {
        const Icon = node.icon
        const position = nodePositions[node.position]

        return (
          <motion.div
            key={node.id}
            className="
              absolute
              flex -translate-x-1/2 -translate-y-1/2
              flex-col items-center gap-2
            "
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
            }}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { scale: 1.08 }
            }
          >
            <div
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-[#d9a84e]/35
                bg-[#080b10]/90
                text-[#f1c66d]
                shadow-[0_0_22px_rgba(217,168,78,0.08)]
                backdrop-blur-xl
                sm:h-12 sm:w-12
              "
            >
              <Icon size={17} strokeWidth={1.4} />
            </div>

            <span
              className="
                max-w-[110px]
                text-center
                font-mono text-[8px]
                uppercase
                leading-relaxed
                tracking-[0.08em]
                text-white/55
                sm:text-[9px]
              "
            >
              {node.label}
            </span>
          </motion.div>
        )
      })}

      {/* Decorative data points */}
      <div className="absolute left-[7%] top-[22%] h-1 w-1 rounded-full bg-[#4cc9e8] shadow-[0_0_10px_#4cc9e8]" />
      <div className="absolute right-[12%] top-[18%] h-1 w-1 rounded-full bg-[#f1c66d] shadow-[0_0_10px_#f1c66d]" />
      <div className="absolute bottom-[18%] left-[8%] h-1 w-1 rounded-full bg-[#4cc9e8] shadow-[0_0_10px_#4cc9e8]" />
      <div className="absolute bottom-[14%] right-[9%] h-1 w-1 rounded-full bg-[#f1c66d] shadow-[0_0_10px_#f1c66d]" />
    </div>
  )
}

export default NeuralCore