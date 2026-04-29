import { motion } from 'framer-motion'

export function Section({ id, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className="glass-card p-7 md:p-10"
    >
      <p className="text-xs uppercase tracking-[0.22rem] text-cyan-300">{title}</p>
      <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{subtitle}</h3>
      <div className="mt-6">{children}</div>
    </motion.section>
  )
}
