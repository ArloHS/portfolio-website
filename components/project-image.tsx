"use client"

import Image from "next/image"
import { useState } from "react"

interface ProjectImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  width?: number
  height?: number
}

export function ProjectImage({ src, alt, fill, className, width, height }: ProjectImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  const handleError = () => {
    const fallbackSrc = fill
      ? `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(alt)}`
      : `/placeholder.svg?height=${height || 200}&width=${width || 300}&text=${encodeURIComponent(alt)}`
    setImageSrc(fallbackSrc)
  }

  if (fill) {
    return <Image src={imageSrc || "/placeholder.svg"} alt={alt} fill className={className} onError={handleError} />
  }

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt}
      width={width || 300}
      height={height || 200}
      className={className}
      onError={handleError}
    />
  )
}
