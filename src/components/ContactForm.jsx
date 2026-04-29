import { useState } from 'react'

const initialState = { name: '', email: '', message: '' }

export function ContactForm({ social }) {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required'
    if (!values.email.includes('@')) nextErrors.email = 'Valid email is required'
    if (values.message.trim().length < 10) nextErrors.message = 'Message should be at least 10 characters'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validate()) {
      alert('Message drafted successfully. Connect backend email service to send it live.')
      setValues(initialState)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-white/15 bg-slate-900/35 p-5">
        <input
          className="w-full rounded-xl border border-cyan-200/20 bg-slate-950/70 px-3 py-2 outline-none focus:border-cyan-300"
          placeholder="Your name"
          value={values.name}
          onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
        />
        {errors.name ? <p className="text-xs text-rose-300">{errors.name}</p> : null}

        <input
          className="w-full rounded-xl border border-cyan-200/20 bg-slate-950/70 px-3 py-2 outline-none focus:border-cyan-300"
          placeholder="Your email"
          value={values.email}
          onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
        />
        {errors.email ? <p className="text-xs text-rose-300">{errors.email}</p> : null}

        <textarea
          className="h-28 w-full rounded-xl border border-cyan-200/20 bg-slate-950/70 px-3 py-2 outline-none focus:border-cyan-300"
          placeholder="Tell me about your project..."
          value={values.message}
          onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
        />
        {errors.message ? <p className="text-xs text-rose-300">{errors.message}</p> : null}

        <button type="submit" className="primary-btn w-full justify-center">
          Send Transmission
        </button>
      </form>

      <div className="rounded-2xl border border-white/15 bg-slate-900/35 p-5">
        <h4 className="text-lg font-semibold text-cyan-200">Connect</h4>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li>Email: {social.email}</li>
          <li>Phone: {social.phone}</li>
          <li>
            <a href={social.github} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
              GitHub
            </a>
          </li>
          <li>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={social.leetcode} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
