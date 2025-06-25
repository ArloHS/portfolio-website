"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectImageFallbackProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  width?: number
  height?: number
}

export function ProjectImageFallback({ src, alt, fill, className, width, height }: ProjectImageFallbackProps) {
  const [error, setError] = useState(false)

  // Generate a placeholder URL with the project name
  const placeholderUrl = error
    ? `/placeholder.svg?height=${height || 400}&width=${width || 600}&text=${encodeURIComponent(alt)}`
    : src

  if (fill) {
    return (
      <Image
        src={placeholderUrl || "/placeholder.svg"}
        alt={alt}
        fill
        className={className}
        onError={() => setError(true)}
      />
    )
  }

  return (
    <Image
      src={placeholderUrl || "/placeholder.svg"}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      onError={() => setError(true)}
    />
  )
}
