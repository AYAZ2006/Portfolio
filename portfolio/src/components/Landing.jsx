
import React, { useEffect, useState } from 'react'

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    if (!window.CursorSwarm) {
      console.error('CursorSwarm not found. Check public/cursor-swarm.js')
      return
    }

    const swarm = new window.CursorSwarm({
  cursors: 3,
  palette: 'mono',
  startPosition: 'corners',

  speed: 1,
  adaptiveSpeed: true,
  maxSpeed: 2,

  deconstruct: true,
  exitAfterBuild: 'home',
  idle: 'dim',

  frames: true,
  hud: true,
  hudPosition: 'bottom-left',
  labels: true,
  marquee: true,
  guides: true,
  sparks: true,
  caret: true,

  respectReducedMotion: true
}).init()

    return () => swarm.destroy()
  }, [])

  return (
    <main className="bg-[#190e0a] text-[#ffede7] min-h-screen selection:bg-[#ff5a00] selection:text-[#190e0a]">
      
{/* RIGHT SIDE GLASS MENU */}

<div
  className={`fixed inset-0 z-50 transition-all duration-500 ${
    isMenuOpen
      ? 'visible bg-black/40'
      : 'invisible bg-transparent pointer-events-none'
  }`}
>
  {/* BACKGROUND OVERLAY */}
  <div
    onClick={() => setIsMenuOpen(false)}
    className={`absolute inset-0 transition-opacity duration-500 ${
      isMenuOpen ? 'opacity-100' : 'opacity-0'
    }`}
  />

  {/* MENU PANEL */}
  <div
    className={`absolute right-0 top-0 flex h-screen w-full flex-col justify-between
      border-l border-white/10
      rounded-l-[30px]
      bg-[#190e0a]/75
      backdrop-blur-2xl
      shadow-[-20px_0_80px_rgba(0,0,0,0.35)]
      transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
      md:w-1/3
      ${
        isMenuOpen
          ? 'translate-x-0'
          : 'translate-x-full'
      }`}
  >

    {/* TOP SECTION */}
    <div className="flex justify-end px-8 pt-8">

      {/* CIRCULAR CLOSE BUTTON */}
      <button
  onClick={() => setIsMenuOpen(false)}
  aria-label="Close menu"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#ffede7] transition hover:border-[#ff8e60]/60 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
</button>

    </div>

    {/* MENU LINKS */}
    <div className="flex flex-1 flex-col justify-center px-8 md:px-12">

      {[
        ['01', 'Home', '#'],
        ['02', 'About', '#about'],
        ['03', 'Expertise', '#services'],
        ['04', 'Work', '#work'],
        ['05', 'Contact', '#contact']
      ].map(([number, title, link]) => (

        <a
          key={number}
          href={link}
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-5 border-b border-white/10 py-6"
        >
          <span className="text-xs text-[#b88b78] transition group-hover:text-[#ff8e60]">
            {number}
          </span>

          <span className="text-2xl font-medium text-[#ffede7] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#ff8e60] md:text-3xl">
            {title}
          </span>

          <span className="ml-auto text-[#b88b78] opacity-0 transition group-hover:opacity-100">
            ↗
          </span>

        </a>

      ))}

    </div>

    {/* BOTTOM SOCIAL ICONS */}
    <div className="flex items-center justify-between border-t border-white/10 px-8 py-8 md:px-12">

      <span className="text-[10px] tracking-[0.2em] text-[#b88b78]">
        LET'S CONNECT
      </span>

      <div className="flex items-center gap-3">

        {/* GITHUB */}
        <a
          href="https://github.com/AYAZ2006"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d8b5a4] transition hover:border-[#ff8e60]/50 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]"
        >
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15 1 1.7 2.6 1.21 3.23.92.1-.72.4-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.13-1.44 3.07-1.14 3.07-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"/>
          </svg>
        </a>

        {/* LINKEDIN */}
        <a
          href="https://linkedin.com/in/mohammed-ayaz-38ba06289"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d8b5a4] transition hover:border-[#ff8e60]/50 hover:bg-[#ff5a00]/20 hover:text-[#ff8e60]"
        >
          <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="currentColor"
          >
            <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.5c0-2.7-3-2.5-3 0V18h-3V9h3v1.4c1.4-2.6 6-2.4 6 2.5V18Z"/>
          </svg>
        </a>

      </div>

    </div>

  </div>
</div>

      {/* NAVIGATION */}
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
        {/* SIMPLE MAIL & MENU BUTTONS */}
<div className="flex items-center gap-3">

  {/* MAIL BUTTON */}
  <a
    href="mailto:hajrasultana7075@gmail.com"
    aria-label="Send Email"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4b2a1d] bg-[#21120d] text-[#d8b5a4] hover:bg-[#2a170f] hover:text-[#ff8e60]"
  >
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  </a>

  {/* MENU BUTTON */}
  <button
    onClick={() => setIsMenuOpen(true)}
    aria-label="Open menu"
    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4b2a1d] bg-[#21120d] text-[#d8b5a4] hover:bg-[#2a170f] hover:text-[#ff8e60]"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  </button>

</div>
      </nav>
      {/* HERO */}
<section className="relative min-h-[calc(100svh-82px)] overflow-hidden max-w-7xl mx-auto px-6 md:px-12 flex items-center pt-4 pb-16 md:pt-2 md:pb-12">

  <div className="absolute top-12 left-[43%] text-3xl text-[#ffe1d6] animate-pulse select-none">
    ✦
  </div>

  <div className="relative z-10 grid w-full items-center gap-10 lg:grid-cols-[1fr_1fr]">

    {/* LEFT CONTENT */}
    <div className="relative z-20 max-w-2xl">

      <h1
        data-cs="type"
        className="text-[clamp(3.7rem,8vw,7.8rem)] font-semibold tracking-[-0.075em] leading-[0.88]"
      >
        Building<br />
        digital<br />
        <span className="bg-gradient-to-r from-[#ffe1d6] via-[#ff8e60] to-[#ff5a00] bg-clip-text text-transparent">
          experiences.
        </span>
      </h1>

      <p
        data-cs="words"
        className="mt-9 max-w-xl text-base md:text-lg leading-relaxed text-[#d8b5a4]"
      >
        I'm Mohammed Ayaz, a developer interested in creating thoughtful digital products, solving real problems, and exploring the possibilities of technology.
      </p>

      <a
  href="/Ayaz-CV.pdf"
  download
  data-cs-ignore
  className="mt-9 inline-flex items-center gap-4 rounded-full border border-[#ff8e60]/40 bg-[#ff5a00] px-7 py-4 text-xs font-semibold tracking-widest text-[#190e0a] opacity-100 visible transition-all duration-300 hover:-translate-y-1"
>
  DOWNLOAD CV

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
</a>

    </div>

    {/* RIGHT PORTRAIT */}
<div className="relative mx-auto flex h-[550px] w-full max-w-[590px] items-end justify-center lg:h-[680px]">

  {/* ORANGE CIRCLE */}
  <div className="absolute left-1/2 top-[48%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#ffe1d6] via-[#ff8e60] to-[#ff5a00] shadow-[0_0_100px_rgba(255,90,0,0.18)]" />

  {/* PORTRAIT */}
  <div className="relative z-10 h-full w-full overflow-hidden flex items-end justify-center">

    <img
      src="/Final.png"
      alt="Mohammed Ayaz side profile"
      className="h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
      }}
    />

    {/* BOTTOM FADE */}
    <div className="absolute bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-b from-transparent to-[#190e0a] pointer-events-none" />

  </div>
</div>

  </div>

  {/* BOTTOM INDICATOR */}
  <div className="absolute bottom-7 left-6 right-6 flex items-center justify-between text-[10px] md:left-12 md:right-12 md:text-xs tracking-[0.18em] text-[#b88b78]">
    <span className="flex items-center gap-6">
      SCROLL TO EXPLORE
      <span className="hidden h-px w-28 bg-[#4b2a1d] sm:block" />
    </span>
    <span>01 — 05</span>
  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="border-t border-[#4b2a1d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">

          <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-16">
            01 / ABOUT
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <h2 data-cs="type" className="text-4xl md:text-6xl tracking-tight font-medium leading-tight">
              Curious by nature.
              <br />
              <span className="text-[#ff8e60]">Developer by choice.</span>
            </h2>

            <div>
              <p data-cs="words" className="text-lg text-[#d8b5a4] leading-relaxed mb-8">
                I enjoy turning ideas into useful digital experiences.
                My interests include full-stack development, modern
                web technologies, artificial intelligence, and
                open-source software.
              </p>

              <p data-cs="words" className="text-lg text-[#d8b5a4] leading-relaxed">
                I believe good technology should be simple to use,
                carefully designed, and built to solve meaningful
                problems. I'm always learning, experimenting, and
                improving my skills.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#4b2a1d] pt-8">
                <div>
                  <p className="text-3xl font-semibold">01.</p>
                  <p className="text-xs tracking-widest text-[#b88b78] mt-2">KEEP LEARNING</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold">02.</p>
                  <p className="text-xs tracking-widest text-[#b88b78] mt-2">KEEP BUILDING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="services" className="bg-[#21120d] border-y border-[#4b2a1d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">

          <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-12">
            02 / EXPERTISE
          </p>

          <h2 data-cs="type" className="text-5xl md:text-7xl font-medium tracking-tight mb-20">
            What I work with.
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <div data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] p-8 md:p-10 min-h-72">
              <p className="text-xs text-[#b88b78] tracking-widest mb-14">A / 01</p>
              <h3 className="text-2xl font-medium mb-5">Frontend</h3>
              <p className="text-[#c49a88] leading-relaxed">
                Creating responsive interfaces and interactive
                experiences using React, JavaScript, HTML, and CSS.
              </p>
            </div>

            <div data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] p-8 md:p-10 min-h-72">
              <p className="text-xs text-[#b88b78] tracking-widest mb-14">A / 02</p>
              <h3 className="text-2xl font-medium mb-5">Backend</h3>
              <p className="text-[#c49a88] leading-relaxed">
                Developing application logic, APIs, database
                integrations, and server-side functionality.
              </p>
            </div>

            <div data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] p-8 md:p-10 min-h-72">
              <p className="text-xs text-[#b88b78] tracking-widest mb-14">A / 03</p>
              <h3 className="text-2xl font-medium mb-5">Exploration</h3>
              <p className="text-[#c49a88] leading-relaxed">
                Experimenting with AI, emerging technologies,
                automation, and open-source projects.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28">

        <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-12">
          03 / TOOLKIT
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-12">
          <h2 data-cs="type" className="text-5xl md:text-6xl tracking-tight font-medium">
            Tools of the trade.
          </h2>

          <p className="max-w-md text-[#c49a88] leading-relaxed">
            Technologies are tools for turning ideas into reality.
            Here are some of the technologies I work with and
            continue to explore.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#4b2a1d]">

          {[
            'HTML & CSS',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Python',
            'Django',
            'Git & GitHub',
            'REST APIs',
            'Node.js',
            'SQL',
            'AI / ML',
            'Blockchain'
          ].map((skill, index) => (
            <div data-cs="frame" key={skill} className="border-r border-b border-[#4b2a1d] p-7 md:p-10 hover:bg-[#3a1d12] transition">
              <p className="text-xs text-[#b88b78] mb-7">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-base md:text-lg font-medium">{skill}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="bg-[#21120d] border-y border-[#4b2a1d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-28">

          <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-12">
            04 / SELECTED WORK
          </p>

          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-20">
            <h2 data-cs="type" className="text-5xl md:text-7xl font-medium tracking-tight">
              Things I've built.
            </h2>

            <p className="text-[#c49a88] max-w-sm leading-relaxed">
              A selection of projects, experiments, and ideas
              brought to life through code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <article data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] group">
              <div className="h-64 md:h-80 bg-[#5d1b00] flex items-center justify-center overflow-hidden">
                <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#b88b78] group-hover:scale-110 transition duration-500">
                  CB.
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs text-[#b88b78] tracking-widest mb-4">01 / MACHINE LEARNING</p>
                <h3 className="text-2xl font-medium mb-3">ClaimBrain</h3>
                <p className="text-[#c49a88] leading-relaxed">
                  An end-to-end claims automation application
                  designed to simplify insurance claim processing
                  using machine learning.
                </p>
                <p className="mt-7 text-xs tracking-widest text-[#b88b78]">
                  REACT · DJANGO · MACHINE LEARNING
                </p>
              </div>
            </article>

            <article data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] group">
              <div className="h-64 md:h-80 bg-[#ad3a00] flex items-center justify-center overflow-hidden">
                <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#c49a88] group-hover:scale-110 transition duration-500">
                  WEB.
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs text-[#b88b78] tracking-widest mb-4">02 / WEB DEVELOPMENT</p>
                <h3 className="text-2xl font-medium mb-3">Portfolio Website</h3>
                <p className="text-[#c49a88] leading-relaxed">
                  A minimal digital space showcasing development
                  projects, technical interests, and creative
                  experiments.
                </p>
                <p className="mt-7 text-xs tracking-widest text-[#b88b78]">
                  REACT · JAVASCRIPT · TAILWIND CSS
                </p>
              </div>
            </article>

            <article data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] group">
              <div className="h-64 md:h-80 bg-[#5d1b00] flex items-center justify-center overflow-hidden">
                <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#b88b78] group-hover:scale-110 transition duration-500">
                  AI.
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs text-[#b88b78] tracking-widest mb-4">03 / EXPERIMENTATION</p>
                <h3 className="text-2xl font-medium mb-3">AI Experiments</h3>
                <p className="text-[#c49a88] leading-relaxed">
                  Exploring artificial intelligence and building
                  practical applications with emerging AI tools.
                </p>
                <p className="mt-7 text-xs tracking-widest text-[#b88b78]">
                  PYTHON · AI · API INTEGRATION
                </p>
              </div>
            </article>

            <article data-cs="frame" className="bg-[#2a170f] border border-[#4b2a1d] group">
              <div className="h-64 md:h-80 bg-[#ad3a00] flex items-center justify-center overflow-hidden">
                <span className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#c49a88] group-hover:scale-110 transition duration-500">
                  OSS.
                </span>
              </div>
              <div className="p-8">
                <p className="text-xs text-[#b88b78] tracking-widest mb-4">04 / OPEN SOURCE</p>
                <h3 className="text-2xl font-medium mb-3">Open Source Contributions</h3>
                <p className="text-[#c49a88] leading-relaxed">
                  Participating in engineering challenges,
                  technical investigations, and open-source
                  community initiatives.
                </p>
                <p className="mt-7 text-xs tracking-widest text-[#b88b78]">
                  GITHUB · COLLABORATION · DEVELOPMENT
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28">

        <p className="text-xs tracking-[0.25em] text-[#b88b78] mb-14">
          05 / MY APPROACH
        </p>

        <h2 data-cs="type" className="text-5xl md:text-7xl font-medium tracking-tight max-w-4xl leading-tight">
          Think clearly.
          <br />
          Build carefully.
          <br />
          <span className="text-[#ff8e60]">Improve constantly.</span>
        </h2>

        <div className="mt-24 grid md:grid-cols-3 gap-12 border-t border-[#4b2a1d] pt-10">

          <div>
            <p className="text-xs text-[#b88b78] tracking-widest mb-6">01 / DISCOVER</p>
            <h3 className="text-xl font-medium mb-4">Understand the problem.</h3>
            <p className="text-[#c49a88] leading-relaxed">
              Every useful solution starts with understanding
              what needs to be solved and why it matters.
            </p>
          </div>

          <div>
            <p className="text-xs text-[#b88b78] tracking-widest mb-6">02 / CREATE</p>
            <h3 className="text-xl font-medium mb-4">Turn ideas into reality.</h3>
            <p className="text-[#c49a88] leading-relaxed">
              I enjoy experimenting, writing code, and
              transforming concepts into working applications.
            </p>
          </div>

          <div>
            <p className="text-xs text-[#b88b78] tracking-widest mb-6">03 / REFINE</p>
            <h3 className="text-xl font-medium mb-4">Make it better.</h3>
            <p className="text-[#c49a88] leading-relaxed">
              Testing, learning, and improving are essential
              parts of building better digital experiences.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">

          <p className="text-xs tracking-[0.25em] text-gray-500 mb-16">
            06 / GET IN TOUCH
          </p>

          <h2 data-cs="type" className="text-5xl md:text-8xl font-medium tracking-tighter leading-tight">
            Have an idea?
            <br />
            <span className="text-gray-500">Let's build it.</span>
          </h2>

          <div className="mt-20 flex flex-col md:flex-row justify-between md:items-end gap-12">

            <div>
              <p className="text-gray-500 text-sm mb-5">
                Interested in collaborating or discussing an idea?
              </p>
              <a data-cs="pop" href="mailto:hajrasultana7075@gmail.com" className="text-xl md:text-2xl border-b border-white pb-3 hover:text-gray-400 hover:border-gray-500 transition">
                hajrasultana7075@gmail.com ↗
              </a>
            </div>

            <div className="flex gap-8 text-xs tracking-widest text-gray-400">
              <a href="https://github.com/AYAZ2006" target="_blank" rel="noreferrer" className="hover:text-white">GITHUB ↗</a>
              <a href="https://linkedin.com/in/mohammed-ayaz-38ba06289" target="_blank" rel="noreferrer" className="hover:text-white">LINKEDIN ↗</a>
            </div>

          </div>

          <div className="mt-32 border-t border-gray-800 pt-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500 tracking-widest">
            <p>© 2026 MOHAMMED AYAZ</p>
            <p>DESIGNED WITH INTENTION. BUILT WITH CODE.</p>
            <a href="#" className="hover:text-white">BACK TO TOP ↑</a>
          </div>

        </div>
      </section>

    </main>
  )
}

export default Landing
