import { motion } from 'framer-motion'

export function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ rotateX: 6, rotateY: -6, y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 16 }}
      className="group rounded-2xl border border-white/15 bg-slate-900/35 p-5 backdrop-blur-xl"
    >
      <h4 className="text-xl font-semibold text-white">{project.title}</h4>
      <p className="mt-3 text-sm text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-cyan-500/15 px-2.5 py-1 text-xs text-cyan-200">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-3 text-sm">
        <a className="text-cyan-300 transition hover:text-cyan-100" href={project.live} target="_blank" rel="noreferrer">
          Live
        </a>
        <a className="text-indigo-300 transition hover:text-indigo-100" href={project.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </motion.article>
  )
}
