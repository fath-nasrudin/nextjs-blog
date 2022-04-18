import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Fathurrohman Nasrudin'
export const siteTitle = 'First Fath Nextjs Website'

export default function layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />

        <meta 
           property="og:image"
           content={`https://og-image.vercel.app/${encodeURI(
             siteTitle
           )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <header className={styles.header}>
        {/* if its not home, set image to smaller */}
        {home ? (
          <>
            <Image 
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
          {/* link image to home */}
          <Link href='/'>
            <a>
            <Image 
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
            </a>
          </Link>
            
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className='utilStyles.colorInherit'>
                  {name}
                </a>
              </Link>

            </h2>
          </>
        )}
      </header>
      
      <main>{children}</main>

      {/* link to back to home if its not home */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
