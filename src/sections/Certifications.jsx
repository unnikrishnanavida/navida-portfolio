import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'

import CertificateCard from '../components/CertificateCard/CertificateCard'
import { certifications } from '../data/certifications'

function Certifications() {
  const prefersReducedMotion = useReducedMotion()

  const featuredCertificates = certifications.filter(
    (certificate) => certificate.featured,
  )

  return (
    <section
      id="certifications"
      className="section scroll-mt-10"
      aria-labelledby="certifications-heading"
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
            07 / Knowledge Archive
          </p>

          <div className="gold-line mb-4" />

          <div className="flex items-end justify-between gap-5">
            <div>
              <h2
                id="certifications-heading"
                className="section-title"
              >
                Certifications
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                Selected certifications and learning credentials
                supporting my technical foundation.
              </p>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.15em] text-white/20 sm:block">
              Knowledge Archive
            </span>
          </div>
        </motion.header>

        {featuredCertificates.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCertificates.map(
              (certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ),
            )}
          </div>
        ) : (
          <div className="panel p-8 text-center">
            <p className="font-mono text-xs text-white/30">
              Certification archive being prepared.
            </p>
          </div>
        )}

        {certifications.length > featuredCertificates.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="button-secondary"
            >
              View All Certifications
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications