import { Suspense, lazy, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { portfolioData } from './data/portfolioData'
import { useTypingRoles } from './hooks/useTypingRoles'
import { CursorGlow } from './components/CursorGlow'

const UniverseScene = lazy(() => import('./components/UniverseScene'))

function App() {
  const [theme, setTheme] = useState('dark')
  const typedRole = useTypingRoles(portfolioData.roles)
  const { scrollYProgress } = useScroll()
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base text-slate-100 selection:bg-amber-300/30">
      <CursorGlow />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(255,122,36,0.28),transparent_34%),radial-gradient(circle_at_84%_28%,rgba(165,94,255,0.28),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(28,189,168,0.22),transparent_40%),linear-gradient(to_bottom,#060409,#09051a_35%,#05040c)]" />
      <motion.div
        style={{ y: sceneY }}
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <Suspense
          fallback={
            <div className="flex h-full items-center justify-center text-amber-200/70">
              Building universe...
            </div>
          }
        >
          <UniverseScene />
        </Suspense>
      </motion.div>

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 pt-8 lg:grid-cols-[290px_1fr] lg:px-8">
        <aside className="glass-panel top-8 h-fit p-6 lg:sticky">
          <p className="text-xs font-semibold uppercase tracking-[0.3rem] text-amber-200">Dev Command Core</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white">{portfolioData.name}</h1>
          <p className="mt-2 text-base text-violet-200">{typedRole}</p>
          <p className="mt-4 text-sm text-slate-300">{portfolioData.profile}</p>
          <nav className="mt-7 grid gap-2 text-sm">
            {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="nav-pill">
                {item}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href="/Shivam_Dubey_Resume.pdf" className="prime-btn">
              Resume
            </a>
            <button
              type="button"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
              className="alt-btn"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </aside>

        <main className="space-y-6">
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-panel p-7 md:p-10"
          >
            <p className="meta">ABOUT</p>
            <h2 className="title">A builder of products, not just pages.</h2>
            <p className="mt-4 max-w-3xl text-slate-200">
              I blend design sensitivity, backend reliability, and DSA-driven problem solving. My focus is shipping
              delightful full-stack experiences that are fast, maintainable, and human-centered.
            </p>
          </motion.section>

          <section id="skills" className="glass-panel p-7 md:p-10">
            <p className="meta">SKILLS</p>
            <h2 className="title">Capability Matrix</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {Object.entries(portfolioData.skills).map(([group, items]) => (
                <article key={group} className="orb-card">
                  <h3 className="text-lg font-semibold text-amber-100">{group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="glass-panel p-7 md:p-10">
            <p className="meta">PROJECTS</p>
            <h2 className="title">Recent Builds</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {portfolioData.projects.map((project) => (
                <motion.article key={project.title} whileHover={{ y: -7, scale: 1.01 }} className="project-tile">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="experience" className="glass-panel p-7 md:p-10">
            <p className="meta">EXPERIENCE</p>
            <h2 className="title">Education + Achievements</h2>
            <div className="mt-7 space-y-4 border-l border-violet-300/30 pl-5">
              {portfolioData.timeline.map((item) => (
                <motion.div
                  key={item.heading}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  className="relative rounded-2xl border border-white/15 bg-black/30 p-4"
                >
                  <span className="absolute -left-[1.43rem] top-6 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
                  <h3 className="text-base font-semibold text-white">{item.heading}</h3>
                  <p className="mt-1 text-sm text-violet-200">{item.place}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.meta}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="contact" className="glass-panel p-7 md:p-10">
            <p className="meta">CONTACT</p>
            <h2 className="title">Let&apos;s build together</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <a href={`mailto:${portfolioData.social.email}`} className="contact-box">
                {portfolioData.social.email}
              </a>
              <a href={`tel:${portfolioData.social.phone}`} className="contact-box">
                {portfolioData.social.phone}
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
