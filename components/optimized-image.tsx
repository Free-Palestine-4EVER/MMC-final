import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  className?: string
  containerClassName?: string
}

export function OptimizedImage({ alt, className, containerClassName, ...props }: OptimizedImageProps) {
  return (
    <div className={cn("relative", containerClassName)}>
      <Image alt={alt} className={cn("object-cover", className)} {...props} />
    </div>
  )
}
