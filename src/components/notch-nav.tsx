import * as React from "react"

type Item = {
  value: string
  label: string
  href?: string
}

type NotchNavProps = {
  items: Item[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  ariaLabel?: string
  className?: string
}

export function NotchNav({
  items,
  value,
  defaultValue,
  onValueChange,
  ariaLabel = "Primary",
  className,
}: NotchNavProps) {
  const isControlled = value !== undefined
  const [active, setActive] = React.useState<string>(value ?? defaultValue ?? items[0]?.value ?? "")
  const [ready, setReady] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  // Sync when controlled
  React.useEffect(() => {
    if (isControlled && value !== undefined) setActive(value)
  }, [isControlled, value])

  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([])
  const [notchRect, setNotchRect] = React.useState<{ left: number; width: number } | null>(null)

  const activeIndex = React.useMemo(
    () =>
      Math.max(
        0,
        items.findIndex((i) => i.value === active),
      ),
    [items, active],
  )

  const updateNotch = React.useCallback(() => {
    const c = containerRef.current
    const el = itemRefs.current[activeIndex]
    if (!c || !el) return
    const cRect = c.getBoundingClientRect()
    const eRect = el.getBoundingClientRect()
    const left = eRect.left - cRect.left
    const width = eRect.width
    setNotchRect({ left, width })
    setReady(true)
  }, [activeIndex])

  React.useLayoutEffect(() => {
    updateNotch()
    // Update on resize
    const onResize = () => updateNotch()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [updateNotch])

  const focusItem = (index: number) => {
    const el = itemRefs.current[Math.max(0, Math.min(items.length - 1, index))]
    el?.focus()
  }

  const commitChange = (next: string) => {
    if (!isControlled) setActive(next)
    onValueChange?.(next)
  }

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReducedMotion(mql.matches)
    onChange()
    mql.addEventListener?.("change", onChange)
    return () => mql.removeEventListener?.("change", onChange)
  }, [])

  return (
    <nav aria-label={ariaLabel} className={["w-fit mx-auto", className].filter(Boolean).join(" ")}>
      <div ref={containerRef} className="relative rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white shadow-xl">
        {/* Items */}
        <ul
          role="menubar"
          className="flex items-center justify-center gap-1 p-1"
          onKeyDown={(e) => {
            const key = e.key
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return
            e.preventDefault()
            if (key === "ArrowRight") focusItem(activeIndex + 1)
            if (key === "ArrowLeft") focusItem(activeIndex - 1)
            if (key === "Home") focusItem(0)
            if (key === "End") focusItem(items.length - 1)
          }}
        >
          {items.map((item, idx) => {
            const isActive = item.value === active
            return (
              <li key={item.value} role="none">
                <button
                  ref={(el) => (itemRefs.current[idx] = el)}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  aria-pressed={isActive || undefined}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => commitChange(item.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      commitChange(item.value)
                    }
                  }}
                  className={[
                    "relative rounded-full px-4 py-2 text-sm font-medium outline-none transition-all duration-300",
                    "focus-visible:ring-2 focus-visible:ring-primary/50",
                    "hover:bg-white/15 hover:backdrop-blur-sm hover:scale-105",
                    isActive ? "text-white font-semibold bg-white/20 shadow-lg" : "text-white/80 hover:text-white",
                  ].join(" ")}
                >
                  <span className="text-pretty">{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Notch indicator (SVG) */}
        {notchRect && (
          <div
            aria-hidden="true"
            className={[
              "pointer-events-none absolute",
              // rounded container for soft corners
              "overflow-hidden rounded-sm",
              "transition-all",
              reducedMotion ? "duration-0" : "duration-300",
              "ease-out",
              ready ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
              transform: `translate3d(${notchRect.left}px, 0, 0)`,
              width: notchRect.width,
              bottom: -4,
              height: 10,
              willChange: "transform, width, opacity",
            }}
          >
            {/* 
              unique notched bar shape under active item 
              - Uses currentColor so theming comes from text-primary
              - Slight path rounding via Q commands
            */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              className="block text-white"
            >
              {/* iPhone-style indicator - simple rounded rectangle */}
              <rect
                x="10"
                y="2"
                width="80"
                height="4"
                rx="2"
                fill="currentColor"
                opacity="0.8"
              />
            </svg>
          </div>
        )}
      </div>
    </nav>
  )
}
