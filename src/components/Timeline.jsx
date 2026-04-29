import { motion } from 'framer-motion'

export function Timeline({ items }) {
  return (
    <div className="relative space-y-5 border-l border-cyan-300/30 pl-6">
      {items.map((item, index) => (
        <motion.article
          key={item.heading}
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
          className="relative rounded-2xl border border-white/15 bg-slate-900/35 p-5"
        >
          <span className="absolute -left-[2.05rem] top-7 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
          <h4 className="text-lg font-semibold text-white">{item.heading}</h4>
          <p className="mt-1 text-sm text-cyan-200">{item.place}</p>
          <p className="mt-2 text-sm text-slate-300">{item.meta}</p>
        </motion.article>
      ))}
    </div>
  )
}
