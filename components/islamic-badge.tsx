import type React from "react"

interface IslamicBadgeProps {
  type: "dome" | "crescent" | "star" | "geometric"
  size: "sm" | "md" | "lg"
  color?: string
}

export const IslamicBadge: React.FC<IslamicBadgeProps> = ({ type, size, color }) => {
  let icon
  let badgeSize

  switch (size) {
    case "sm":
      badgeSize = "h-4 w-4"
      break
    case "md":
      badgeSize = "h-5 w-5"
      break
    case "lg":
      badgeSize = "h-6 w-6"
      break
    default:
      badgeSize = "h-5 w-5"
  }

  switch (type) {
    case "dome":
      icon = "M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
      break
    case "crescent":
      icon = "M5 12a7 7 0 1 1 14 0A7 7 0 0 1 5 12z"
      break
    case "star":
      icon = "M12 2l2.4 7.3h7.6l-6.1 4.7 2.4 7.3-6.1-4.7-6.1 4.7 2.4-7.3-6.1-4.7h7.6z"
      break
    case "geometric":
      icon = "M4 4h16v16H4z"
      break
    default:
      icon = "M5 12a7 7 0 1 1 14 0A7 7 0 0 1 5 12z"
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color || "currentColor"} className={badgeSize}>
      <path d={icon} />
    </svg>
  )
}

