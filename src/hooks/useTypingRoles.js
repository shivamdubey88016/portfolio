import { useEffect, useState } from 'react'

export function useTypingRoles(roles) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, displayText.length + 1)
          setDisplayText(next)
          if (next === currentRole) {
            setIsDeleting(true)
          }
        } else {
          const next = currentRole.slice(0, displayText.length - 1)
          setDisplayText(next)
          if (!next) {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex, roles])

  return `${displayText}|`
}
