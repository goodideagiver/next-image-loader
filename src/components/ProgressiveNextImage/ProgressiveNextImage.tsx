import Image, { ImageProps } from 'next/image'
import { useState } from 'react'
import classes from './ProgressiveNextImage.module.scss'

type Props = {
  alt: string
} & ImageProps

export const ProgressiveNextImage = ({ alt, ...props }: Props) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div>
      <Image
        className={loaded ? classes.image : classes.root}
        onLoad={() => setLoaded(true)}
        alt={alt}
        {...props}
        quality={10}
      />
      <p>This is a test picture</p>
    </div>
  )
}
