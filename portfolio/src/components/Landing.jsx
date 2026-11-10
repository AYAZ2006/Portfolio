import React, { useEffect, useState, useRef } from 'react'
import { SiPython, SiJavascript, SiReact, SiRedux, SiTailwindcss, SiBootstrap, SiDjango, SiScikitlearn, SiTensorflow, SiMysql, SiPostgresql, SiGithub, SiJupyter, SiPostman, SiDocker,} from 'react-icons/si'
const EMAIL = 'hajrasultana7075@gmail.com'
const TOOLS = [
  { name: 'Python', Icon: SiPython },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'React.js', Icon: SiReact },
  { name: 'Redux', Icon: SiRedux },
  { name: 'Tailwind CSS', Icon: SiTailwindcss },
  { name: 'Bootstrap', Icon: SiBootstrap },
  { name: 'Django', Icon: SiDjango },
  { name: 'Scikit-learn', Icon: SiScikitlearn },
  { name: 'TensorFlow', Icon: SiTensorflow },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'GitHub', Icon: SiGithub },
  { name: 'Jupyter Notebook', Icon: SiJupyter },
  { name: 'Postman', Icon: SiPostman },
  { name: 'Docker', Icon: SiDocker },
]
const PROJECTS = [
  {
    title: 'ClaimBrain',
    desc: 'An end-to-end claims automation platform that automatically verifies, validates, and processes insurance claims from submission to checkout, streamlining the entire claims management workflow.',
    tech: ['Django', 'React', 'YOLO'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85',
    href: 'https://claim-brain.vercel.app/',
  },
  {
    title: 'Job Listing Portal',
    desc: 'A full-stack job listing platform supporting two user roles. Job seekers can explore opportunities and apply for openings, while employers can publish job listings and manage applicants.',
    tech: ['Django', 'React', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=85',
    href: 'https://jobleloo.vercel.app/',
  },
  {
    title: 'CertifyyHub',
    desc: 'A full-stack internship certificate distribution platform where organizations can bulk-upload intern information through CSV or Excel files, while interns can securely search, verify, and download their certificates.',
    tech: ['React', 'Clerk', 'Django'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=85',
    href: 'https://certifyy-hub.vercel.app/',
  },
  {
    title: 'Network Intrusion Detection',
    desc: 'An intelligent network security solution that analyzes network traffic, identifies suspicious activities, and detects potential cyber threats using machine learning and deep learning techniques.',
    tech: ['React', 'TensorFlow', 'NumPy'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=85',
    href: 'https://intrusionguard.vercel.app/',
  },
  {
    title: 'EvFinder',
    desc: 'A fully responsive EV charging route finder featuring turn-by-turn navigation, real-time traffic information, and smart charging station discovery. Built with modern React libraries and integrated with TomTom API, without requiring a backend.',
    tech: ['React', 'TomTom API', 'Leaflet'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=85',
    href: 'https://ev-route-finder.vercel.app/',
  },
  {
    title: 'Foodie',
    desc: 'A fully responsive, mobile-first food delivery platform developed as part of HacktoberFest 2025. Designed with accessibility, performance, and scalability in mind, it allows users to browse menus, customize orders, and enjoy a seamless food ordering experience across devices.',
    tech: ['Open Source', 'React', 'JavaScript', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=85',
    href: null,
  },
]
const ABOUT_CARDS = [
  {
    title: 'Full-Stack Web',
    text: 'React front ends backed by Django APIs and PostgreSQL, from auth and file uploads to dashboards.',
  },
  {
    title: 'Applied ML',
    text: 'TensorFlow, scikit-learn and YOLO used where they make a product smarter, like claims verification and intrusion detection.',
  },
  {
    title: 'Open Source',
    text: 'Contributor during HacktoberFest 2025, building accessible, mobile-first interfaces in the open.',
  },
  {
  title: 'APIs & Deployment',
  text: 'Third-party integrations like TomTom and Clerk, tested with Postman, containerized with Docker and shipped live on Vercel.',
  },
  ]
  function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const [shown, setShown] = useState(false)
    useEffect(() => {
      const el = ref.current
      if (!el) return
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce || !('IntersectionObserver' in window)) {
        setShown(true)
        return
      }
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        },
        { threshold: 0.15 }
      )
      io.observe(el)
      return () => io.disconnect()
    }, [])
    return (
      <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition-all duration-700 ease-out ${shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>{children}</div>
    )
  }
function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const closeBtnRef = useRef(null)
  const menuBtnRef = useRef(null)
  const closeMenu = () => {
    if (!isMenuOpen || isMenuClosing) return
    setIsMenuClosing(true)
    setTimeout(() => {
      setIsMenuOpen(false)
      setIsMenuClosing(false)
      menuBtnRef.current?.focus({ preventScroll: true })
    }, 350)
  }

  useEffect(() => {
    if (isMenuOpen) closeBtnRef.current?.focus()
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (e) => {if (e.key === 'Escape') closeMenu()}
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen, isMenuClosing])

  useEffect(() => {
    const isTouchOrSmall =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    if (isTouchOrSmall) return
    if (!window.CursorSwarm) {
      console.error('CursorSwarm not found. Check public/cursor-swarm.js')
      return
    }
    const swarm = new window.CursorSwarm({cursors: 3,palette: 'mono',startPosition: 'corners',speed: 1,adaptiveSpeed: true,maxSpeed: 2,deconstruct: true,exitAfterBuild: 'home',idle: 'dim',frames: true,hud: true,hudPosition: 'bottom-left',labels: true,marquee: true,guides: true,sparks: true,caret: true,respectReducedMotion: true,}).init()
    return () => swarm.destroy()
  }, [])

  const toolLoop = [...TOOLS, ...TOOLS]

  return (
    <div className="bg-[#190e0a] text-[#ffede7] min-h-screen selection:bg-[#ff5a00] selection:text-[#190e0a]">
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        <div onClick={closeMenu} className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}/>
        <div role="dialog" aria-modal="true" aria-label="Site menu" className={`absolute right-0 top-0 flex h-screen w-full flex-col justify-between border-l border-white/10 rounded-l-[30px] bg-[#190e0a]/75 backdrop-blur-2xl shadow-[-20px_0_80px_rgba(0,0,0,0.35)] md:w-1/3 ${isMenuClosing ? 'menu-panel-exit' : isMenuOpen ? 'translate-x-0 menu-panel-enter' : 'translate-x-full'}`}>
          <div className="flex justify-end px-8 pt-8">
            <button ref={closeBtnRef} onClick={closeMenu} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#ffede7] transition hover:border-[#ff8e60]/60 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-center px-8 md:px-12">
            {[
              ['01', 'Home', '#'],
              ['02', 'About', '#about'],
              ['03', 'Expertise', '#services'],
              ['04', 'Work', '#work'],
              ['05', 'Contact', '#contact'],
            ].map(([number, title, link]) => (
              <a key={number} href={link} onClick={closeMenu} style={{ transitionDelay: isMenuClosing ? `${(5 - Number(number)) * 35}ms` : `${Number(number) * 70}ms` }} className={`group flex items-center gap-5 border-b border-white/10 py-6 transition-all duration-300 ease-in ${isMenuClosing ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                <span className="text-xs text-[#b88b78] transition group-hover:text-[#ff8e60]">{number}</span>
                <span className="text-2xl font-medium text-[#ffede7] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#ff8e60] md:text-3xl">{title}</span>
                <span className="ml-auto text-[#b88b78] opacity-0 transition group-hover:opacity-100">↗</span>
              </a>
            ))}
          </div>
          <div className={`flex items-center justify-between border-t border-white/10 px-8 py-8 md:px-12 transition-all duration-300 ${isMenuClosing ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
            <span className="text-[10px] tracking-[0.2em] text-[#b88b78]">LET'S CONNECT</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/AYAZ2006" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d8b5a4] transition hover:border-[#ff8e60]/50 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.6 1.21 3.23.92.1-.72.4-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/mohammed-ayaz-38ba06289" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d8b5a4] transition hover:border-[#ff8e60]/50 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.5c0-2.7-3-2.5-3 0V18h-3V9h3v1.4c1.4-2.6 6-2.4 6 2.5V18Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header>
        <nav data-cs-ignore className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center border-b border-[#4b2a1d]/70">
          <a href="#" aria-label="Ayaz home" className="flex items-center">
            <svg viewBox="0 0 64 64" className="w-10 h-10" aria-hidden="true">
              <path d="M7 55 27 9h10l20 46H45L32 25 19 55Z" fill="#ffe1d6" />
              <path d="M22 43c8-11 19-13 30-10-9 0-18 5-25 14Z" fill="#190e0a" />
            </svg>
          </a>
          <div className="hidden md:flex gap-9 text-xs tracking-widest text-[#c49a88]">
            <a href="#about" className="hover:text-[#ffede7] transition">ABOUT</a>
            <a href="#services" className="hover:text-[#ffede7] transition">EXPERTISE</a>
            <a href="#work" className="hover:text-[#ffede7] transition">WORK</a>
            <a href="#contact" className="hover:text-[#ffede7] transition">CONTACT</a>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${EMAIL}`} aria-label="Send Email" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4b2a1d] bg-[#21120d] text-[#d8b5a4] hover:bg-[#2a170f] hover:text-[#ff8e60]">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
            <button ref={menuBtnRef} onClick={() => setIsMenuOpen(true)} aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4b2a1d] bg-[#21120d] text-[#d8b5a4] hover:bg-[#2a170f] hover:text-[#ff8e60]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[calc(100svh-82px)] overflow-hidden max-w-7xl mx-auto px-6 md:px-12 flex items-center pt-4 pb-16 md:pt-2 md:pb-12">
          <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="relative z-20 max-w-2xl">
              <h1 data-cs="type" className="text-[clamp(3.7rem,8vw,7.8rem)] font-semibold tracking-[-0.075em] leading-[0.88]">
                Building<br />
                digital<br />
                <span className="bg-gradient-to-r from-[#ffe1d6] via-[#ff8e60] to-[#ff5a00] bg-clip-text text-transparent">experiences.</span>
              </h1>
              <p data-cs="words" className="mt-9 max-w-xl text-base md:text-lg leading-relaxed text-[#d8b5a4]">I'm Mohammed Ayaz, a full-stack developer building React and Django products, with machine learning where it makes them smarter.</p>
              <a href="/Ayaz-CV.pdf" target="_blank" rel="noopener noreferrer" data-cs-ignore className="mt-9 inline-flex items-center gap-4 rounded-full border border-[#ff8e60]/40 bg-[#ff5a00] px-7 py-4 text-xs font-semibold tracking-widest text-[#190e0a] opacity-100 visible transition-all duration-300 hover:-translate-y-1">DOWNLOAD CV
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>
            <div className="relative mx-auto flex h-[550px] w-full max-w-[590px] items-end justify-center lg:h-[680px]">
              <div className="absolute left-1/2 top-[48%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#ffe1d6] via-[#ff8e60] to-[#ff5a00] shadow-[0_0_100px_rgba(255,90,0,0.18)]" />
              <div className="relative z-10 h-full w-full overflow-hidden flex items-end justify-center">
                <img
                  src="/Final.png"
                  alt="Mohammed Ayaz side profile"
                  className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  style={{WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',}}/>
                <div className="absolute bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-b from-transparent to-[#190e0a] pointer-events-none" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between text-[10px] md:left-12 md:right-12 md:text-xs tracking-[0.18em] text-[#b88b78]">
            <span className="flex items-center gap-6">
              SCROLL TO EXPLORE
              <span className="hidden h-px w-28 bg-[#4b2a1d] sm:block" />
            </span>
            <span>01 — 05</span>
          </div>
        </section>

        <section id="about" className="bg-[#190e0a]">
          <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-36">
            <p className="mb-12 text-xs tracking-[0.25em] text-[#b88b78]">02 / ABOUT</p>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <h2 data-cs="type" className="text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                  A developer who likes
                  <br />
                  <span className="bg-gradient-to-r from-[#ffe1d6] via-[#ff8e60] to-[#ff5a00] bg-clip-text text-transparent">shipping real things.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-[#d8b5a4] md:text-lg">
                  Hi, I'm <span className="text-[#ffede7]">Mohammed Ayaz</span>, a full-stack developer who loves turning
                  messy, real-world problems into products people can actually use.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-8 text-[11px] tracking-[0.25em] text-[#b88b78]">WHAT I DO</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[#c49a88]">
                  I build web apps with <span className="text-[#ffede7]">React</span> and{' '}
                  <span className="text-[#ffede7]">Django</span>, and when a product needs to be smarter, I bring in machine
                  learning with <span className="text-[#ffede7]">TensorFlow</span>,{' '}
                  <span className="text-[#ffede7]">scikit-learn</span> and <span className="text-[#ffede7]">YOLO</span>.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 text-[11px] tracking-[0.25em] text-[#b88b78]">WHAT I'VE BUILT</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[#c49a88]">
                  An insurance-claims automation platform, an ML-based network intrusion detector, an EV route finder with
                  live traffic, and a food delivery app for HacktoberFest 2025. Most of them are live, so you can try them
                  below.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-8 text-[11px] tracking-[0.25em] text-[#b88b78]">HOW I WORK</p>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[#c49a88]">
                  I start with the problem, get a simple version working, then polish it. I care about interfaces that feel
                  good on any screen and backends that don't fall over.
                </p>
              </Reveal>
            </div>
              <div className="flex flex-col gap-4 mt-5">
                {ABOUT_CARDS.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-[#4b2a1d] bg-[#21120d] p-6">
                    <h3 className="text-lg font-medium text-[#f0dfd3]">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#c49a88]">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="overflow-hidden border-y border-[#4b2a1d] bg-[#21120d]">
          <style>{`
            @keyframes tc-marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .tc-track {
              animation: tc-marquee 32s linear infinite;
            }
            .tc-fade {
              -webkit-mask-image: linear-gradient(to right,transparent,#000 12%,#000 88%,transparent);
              mask-image: linear-gradient(to right,transparent,#000 12%,#000 88%,transparent);
            }
            @media (prefers-reduced-motion: reduce) {.tc-track {animation: none;}}`}
          </style>
          <div className="mx-auto max-w-7xl px-6 py-36 md:px-12">
            <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-12">03 / TECH STACK</p>
            <p className="mb-6 text-[11px] text-center tracking-[0.3em] text-[#b88b78]">BUILT WITH</p>
            <h2 data-cs="type" className="mb-6 text-4xl text-center font-medium tracking-tight md:text-6xl">A Modern, Production-Ready Stack</h2>
            <p className="mx-auto mb-24 max-w-xl text-center leading-relaxed text-[#c49a88]">
              A stack I chose for speed, reliability, and clean developer experience
              from state management to deployment.
            </p>
            <div data-cs-ignore className="tc-fade overflow-hidden">
              <div className="tc-track flex w-max gap-6 hover:[animation-play-state:paused]">
                {toolLoop.map(({ name, Icon }, i) => (
                  <div key={i} className="flex h-32 w-32 shrink-0 flex-col items-center justify-center gap-4 rounded-2xl border border-[#4b2a1d] bg-[#2a170f]">
                    <Icon className="text-4xl text-[#b88b78]" />
                    <span className="text-xs text-[#b88b78]/80">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style>{`
          .ps-track {
            scrollbar-width: none;
          }
          .ps-track::-webkit-scrollbar {
            display: none;
          }
          .ps-card img {
            transition:
              transform 700ms cubic-bezier(.2,.7,.2,1),
              filter 700ms ease;
          }
          .ps-card:hover img {
            transform: scale(1.045);
            filter: brightness(0.48);
          }
          .ps-card:focus-visible {
            outline: 2px solid #b88b78;
            outline-offset: 5px;
          }
          /* Touch devices can't hover, so always show the description there */
          @media (hover: none) {
            .ps-desc {
              max-height: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>

        <section id="work" className="overflow-hidden border-y border-[#4b2a1d] bg-[#21120d]">
          <div className="mx-auto w-full max-w-7xl px-6 pb-5 pt-8 md:px-12 md:pb-6 md:pt-10">
            <p className="mb-12 text-xs tracking-[0.25em] text-[#b88b78]">04 / WORK</p>
            <div className="mb-14">
              <h2 data-cs="type" className="text-5xl font-medium leading-tight tracking-tight text-[#f0dfd3] md:text-7xl">
                Inspired by Great Design,
                <br />
                Fueled by Modern Tools.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#a98b7d]">
                A collection of experiments, applications and solutions
                built through code and creativity.
              </p>
            </div>
          </div>
          <div className="pb-8">
            <div data-cs-ignore id="projects-track" className="ps-track flex snap-x snap-mandatory gap-6 overflow-x-auto pr-6 pb-5 md:pr-12" style={{paddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 48px))', scrollPaddingLeft: 'max(24px, calc((100vw - 1280px) / 2 + 48px))',}}>
              {PROJECTS.map((p, i) => {
                const Card = p.href ? 'a' : 'div'
                const linkProps = p.href ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }: {}
                return (
                  <Card key={p.title} data-card {...linkProps} className="ps-card group relative h-[280px] w-[85vw] shrink-0 snap-start overflow-hidden rounded-[22px] border border-[#4b2a1d] bg-[#2a170f] md:h-[320px] md:w-[560px]">
                    <img src={p.image} alt={`${p.title} project preview`} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120a07] via-[#21120d]/20 to-transparent" />
                    <span className="absolute right-6 top-6 rounded-full border border-white/15 bg-[#21120d]/60 px-4 py-2 text-xs tracking-wider text-[#f0dfd3] backdrop-blur-md">
                      {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-[#f0dfd3] md:p-8">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {p.tech.map((item) => (
                          <span key={item} className="rounded-full border border-[#d0a18b]/30 bg-[#21120d]/65 px-3 py-1.5 text-[11px] tracking-wide text-[#e3bda9] backdrop-blur-md">{item}</span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-medium leading-tight md:text-[32px]">{p.title}</h3>
                      <p className="ps-desc mt-3 max-w-xl text-sm leading-relaxed text-[#e4d2c8]/80 opacity-100 transition-all duration-500 md:max-h-0 md:translate-y-3 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-24 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">{p.desc}</p>
                    </div>
                    {p.href && (
                      <span className="absolute bottom-8 right-7 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-[#21120d]/50 text-lg text-[#f0dfd3] backdrop-blur-md transition duration-300 group-hover:border-[#d0a18b] group-hover:bg-[#d0a18b] group-hover:text-[#21120d] md:bottom-10 md:right-10">↗</span>
                    )}
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#190e0a] text-[#ffede7]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
            <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-16">05 / GET IN TOUCH</p>
            <h2 data-cs="type" className="text-5xl md:text-8xl font-medium tracking-tighter leading-tight">
              Have an idea?
              <br />
              <span className="text-[#b88b78]">Let's build it.</span>
            </h2>
            <div className="mt-20 flex flex-col md:flex-row justify-between md:items-end gap-12">
              <div>
                <p className="text-[#b88b78] text-sm mb-5">Interested in collaborating or discussing an idea?</p>
                <a data-cs="pop" href={`mailto:${EMAIL}`} className="text-xl md:text-2xl border-b border-[#ffede7] pb-3 hover:text-[#ff8e60] hover:border-[#ff8e60] transition">{EMAIL} ↗</a>
              </div>
              <div className="flex gap-8 text-xs tracking-widest text-[#c49a88]">
                <a href="https://github.com/AYAZ2006" target="_blank" rel="noreferrer" className="hover:text-[#ff8e60]">GITHUB ↗</a>
                <a href="https://linkedin.com/in/mohammed-ayaz-38ba06289" target="_blank" rel="noreferrer" className="hover:text-[#ff8e60]">LINKEDIN ↗</a>
              </div>
            </div>
            <div className="mt-32 border-t border-[#4b2a1d] pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#b88b78] tracking-widest">
              <p>© 2026 MOHAMMED AYAZ</p>
              <p>DESIGNED WITH INTENTION. BUILT WITH CODE.</p>
              <a href="#" className="hover:text-[#ff8e60]">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing
