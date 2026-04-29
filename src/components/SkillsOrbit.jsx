import { motion } from 'framer-motion'

export function SkillsOrbit({ groups }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {Object.entries(groups).map(([category, values]) => (
        <motion.article
          key={category}
          whileHover={{ y: -6, scale: 1.02 }}
          className="rounded-2xl border border-cyan-200/20 bg-slate-900/40 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_0_35px_rgba(59,130,246,0.2)]"
        >
          <h4 className="mb-4 text-lg font-semibold text-cyan-200">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {values.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-100 transition hover:scale-105 hover:shadow-[0_0_20px_rgba(129,140,248,0.45)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  )
}
