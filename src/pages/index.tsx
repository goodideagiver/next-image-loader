import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ProgressiveNextImage } from '../components/ProgressiveNextImage/ProgressiveNextImage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gridGap: '2rem',
        padding: '1rem',
      }}
    >
      {Array.from({ length: 100 }).map((_, i) => (
        <ProgressiveNextImage
          key={i}
          alt='siema'
          src={'/Tiger_Fur_Print.jpg'}
          width={200}
          height={200}
        />
      ))}
    </div>
  )
}
