import {
  ArrowUpRight,
  ExternalLink,
  FileBadge2,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

function CertificateCard({ certificate, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
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
        overflow-hidden
        transition-transform
        duration-300
        hover:-translate-y-1
      "
    >
      {/* Certificate preview */}
      <div
        className="
          relative
          aspect-[16/10]
          overflow-hidden
          border-b
          border-white/[0.06]
          bg-[#07090d]
        "
      >
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src = '/certificates/certificate-placeholder.svg'
          }}
          className="
            h-full
            w-full
            object-cover
            opacity-70
            transition-all
            duration-500
            group-hover:scale-[1.025]
            group-hover:opacity-90
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#07090d]
            via-transparent
            to-transparent
          "
        />

        <span className="absolute right-4 top-4 rounded-full border border-[#d9a84e]/20 bg-[#05070a]/80 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#f1c66d] backdrop-blur-md">
          Verified
        </span>
      </div>

      {/* Information */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
              {certificate.date}
            </p>

            <h3 className="mt-2 text-sm font-semibold text-white">
              {certificate.title}
            </h3>

            <p className="mt-1 text-xs text-[#d9a84e]">
              {certificate.issuer}
            </p>
          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-white/35 transition-colors group-hover:border-[#d9a84e]/25 group-hover:text-[#f1c66d]">
            <FileBadge2
              size={15}
              strokeWidth={1.4}
            />
          </div>
        </div>

        {certificate.credentialUrl && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              font-mono
              text-[8px]
              uppercase
              tracking-[0.14em]
              text-white/35
              transition-colors
              hover:text-[#f1c66d]
            "
          >
            View Credential
            <ExternalLink size={12} />
            <ArrowUpRight size={11} />
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default CertificateCard