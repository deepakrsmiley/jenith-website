type IconProps = {
  name: "quality" | "engineering" | "project" | "communication"
}

export function LineIcon({ name }: IconProps) {
  const common = {
    viewBox: "0 0 32 32",
    className: "h-7 w-7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    "aria-hidden": true as const,
  }

  if (name === "quality") {
    return (
      <svg {...common}>
        <rect x="6" y="6" width="20" height="20" />
        <path d="M11 16.5l3.2 3.2L21.5 12" />
      </svg>
    )
  }

  if (name === "engineering") {
    return (
      <svg {...common}>
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M24.5 7.5l-2.8 2.8M10.3 21.7l-2.8 2.8" />
      </svg>
    )
  }

  if (name === "project") {
    return (
      <svg {...common}>
        <rect x="5" y="8" width="14" height="18" />
        <rect x="13" y="4" width="14" height="18" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="M6 8h20v12H11l-5 4V8z" />
      <path d="M11 13h10M11 17h6" />
    </svg>
  )
}
