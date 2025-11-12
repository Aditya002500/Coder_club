import React, { useRef, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion"
import { cn } from "@/lib/utils" // Assumes a 'lib/utils.ts' file for 'cn'
import { X } from "lucide-react"

// Defines the structure for each image item in the gallery
type ImageItem = {
  id: number | string
  title: string
  desc: string
  url: string
  span: string // Tailwind CSS grid span classes (e.g., "md:col-span-2")
}

// Defines the props for the main gallery component
interface InteractiveImageBentoGalleryProps {
  imageItems: ImageItem[]
  title: string
  description: string
}

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Animation variants for each gallery item
const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
}

// Modal component for displaying the selected image
const ImageModal = ({
  item,
  onClose,
}: {
  item: ImageItem
  onClose: () => void
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-card p-4 rounded-xl">
          <img
            src={item.url}
            alt={item.title}
            className="h-auto max-h-[80vh] w-full rounded-lg object-contain"
          />
          <div className="mt-4 text-center">
            <h3 className="responsive-text-xl font-bold dot-background-heading">
              {item.title}
            </h3>
            <p className="mt-2 responsive-text-base dot-background-text">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 rounded-full bg-black/50 backdrop-blur-sm text-white/90 transition-all hover:text-white hover:bg-black/70"
        aria-label="Close image view"
      >
        <X size={20} />
      </button>
    </motion.div>
  )
}

// Main gallery component
const InteractiveImageBentoGallery: React.FC<
  InteractiveImageBentoGalleryProps
> = ({ imageItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  // Framer Motion scroll animations
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [30, 0])

  return (
    <section
      ref={targetRef}
      className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24"
    >
      <motion.div
        style={{ opacity, y }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="responsive-text-3xl sm:responsive-text-4xl font-bold tracking-tight dot-background-heading">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl responsive-text-lg dot-background-text">
          {description}
        </p>
      </motion.div>

      <div
        ref={containerRef}
        className="relative mt-8 sm:mt-12 w-full px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px] lg:auto-rows-[220px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {imageItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={cn(
                "group relative flex cursor-pointer items-end overflow-hidden rounded-lg sm:rounded-xl glass-card p-3 sm:p-4 transition-all duration-300 ease-in-out hover:scale-102 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                item.span,
                // Responsive row spans for bento layout variety
                item.id === 1 || item.id === 5 || item.id === 10
                  ? "row-span-2 sm:row-span-2 lg:row-span-2"
                  : "row-span-1",
                // Responsive column spans
                item.id === 1 ? "sm:col-span-2 lg:col-span-2" : "",
                item.id === 5 ? "lg:col-span-2" : "",
              )}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedItem(item)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
              tabIndex={0}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.url}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Enhanced gradient overlay for better text visibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Always visible overlay on mobile for better accessibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10 translate-y-2 sm:translate-y-4 opacity-100 sm:opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="responsive-text-base sm:responsive-text-lg font-bold text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="mt-1 responsive-text-sm text-white/90 drop-shadow-md line-clamp-2">
                  {item.desc}
                </p>
              </div>
              
              {/* Hover indicator for desktop */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default InteractiveImageBentoGallery