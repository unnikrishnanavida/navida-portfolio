import {
  Award,
  BriefcaseBusiness,
  Code2,
  FileBadge2,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Network,
  UserRound,
  X,
} from 'lucide-react'

import { useState } from 'react'
import { navigation, profile } from '../../data/profile'

const iconMap = {
  home: Home,
  about: UserRound,
  skills: Network,
  projects: Code2,
  experience: BriefcaseBusiness,
  achievements: Award,
  certifications: FileBadge2,
  education: GraduationCap,
  contact: Mail,
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        aria-expanded={isOpen}
        className="
          fixed
          right-4
          top-4
          z-50
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.08]
          bg-[#090c11]/90
          text-white/70
          backdrop-blur-xl
          transition-colors
          hover:border-[#d9a84e]/30
          hover:text-[#f1c66d]
          lg:hidden
        "
      >
        <Menu size={18} />
      </button>

      {/* Desktop sidebar */}
      <aside
        className="
          fixed
          inset-y-0
          left-0
          z-50
          hidden
          w-[250px]
          border-r
          border-white/[0.06]
          bg-[#05070a]/95
          backdrop-blur-2xl
          lg:flex
          lg:flex-col
        "
      >
        <div className="flex h-full flex-col px-4 py-5">

          {/* Brand */}
          <div className="mb-8 px-2">
            <a
              href="#home"
              onClick={closeMenu}
              className="group inline-flex items-center gap-3"
            >
              <div
                className="
                  relative flex h-12 w-12 items-center justify-center
                  rounded-xl border border-[#d9a84e]/40
                  bg-[#d9a84e]/[0.04]
                  font-mono text-xl font-medium text-[#f1c66d]
                  transition-all duration-300
                  group-hover:border-[#f1c66d]
                  group-hover:shadow-[0_0_30px_rgba(217,168,78,0.12)]
                "
              >
                {profile.initials}

                <span
                  className="
                    absolute -right-1 -top-1 h-2 w-2 rounded-full
                    bg-[#57d68d]
                    shadow-[0_0_10px_rgba(87,214,141,0.8)]
                  "
                />
              </div>

              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-white">
                  {profile.name.split(' ').slice(0, 2).join(' ')}
                </p>

                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                  ENGINEERING OS
                </p>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav
            className="flex-1 overflow-y-auto pr-1"
            aria-label="Primary navigation"
          >
            <p className="mb-3 px-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
              Navigation
            </p>

            <ul className="space-y-1">
              {navigation.map((item) => {
                const Icon = iconMap[item.id]

                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="
                        group relative flex items-center gap-3
                        rounded-xl px-3 py-2.5
                        text-[13px] text-white/55
                        transition-all duration-200
                        hover:bg-white/[0.035]
                        hover:text-white
                      "
                    >
                      <span
                        className="
                          absolute left-0 h-5 w-px
                          bg-[#d9a84e]
                          opacity-0
                          transition-opacity
                          group-hover:opacity-100
                        "
                      />

                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="
                          text-white/35
                          transition-colors
                          group-hover:text-[#f1c66d]
                        "
                      />

                      <span>{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* System status */}
          <div className="border-t border-white/[0.07] pt-5">

            <div className="mb-5 px-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                System Status
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#57d68d] shadow-[0_0_10px_rgba(87,214,141,0.8)]" />

                <span className="font-mono text-[10px] tracking-[0.12em] text-[#57d68d]">
                  {profile.status.label}
                </span>
              </div>
            </div>

            <div className="px-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
                Availability
              </p>

              <p className="mt-2 font-mono text-[10px] leading-relaxed tracking-[0.08em] text-[#f1c66d]">
                {profile.availability}
              </p>
            </div>

            <div className="mt-6 border-t border-white/[0.05] pt-4">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                NUK / 2026
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          ${isOpen ? 'visible' : 'invisible'}
        `}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsOpen(false)}
          className={`
            absolute
            inset-0
            bg-black/70
            backdrop-blur-sm
            transition-opacity
            duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Drawer */}
        <nav
          className={`
            absolute
            right-0
            top-0
            h-full
            w-[min(85vw,340px)]
            border-l
            border-white/[0.08]
            bg-[#07090d]
            p-6
            shadow-2xl
            transition-transform
            duration-300
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#f1c66d]">
              NUK / Navigation
            </span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.08]
                text-white/50
                hover:text-white
              "
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  block
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  text-white/55
                  transition-colors
                  hover:bg-[#d9a84e]/[0.05]
                  hover:text-[#f1c66d]
                "
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar