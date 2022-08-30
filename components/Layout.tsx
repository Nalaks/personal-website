import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import { LayoutProps } from '../types/types'
import { FC } from 'react'

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter()

  const meta = {
    title: 'Stefan Kalan - Developer, Designer, Programmer and Creator',
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: '#',
    type: 'website'
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Stefan Kalan' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
      </Head>
      <main className='dark:bg-gray-800 light:bg-gray-200 w-full'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}

export default Layout
