import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import userData from '../lib/userData'
import {
  FaEnvelope,
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub
} from 'react-icons/fa'

const Navbar: FC = () => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
      <div className='flex  md:flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <Link href='/'>
            <a>
              <h1 className='font-semibold text-xl dark:text-gray-100'>
                {userData.name}
              </h1>
              <p className='text-base font-light text-gray-500 dark:text-gray-300'>
                {userData.designation}
              </p>
            </a>
          </Link>
        </div>

        <div className='space-x-8 hidden md:block'>
          <Link href='/'>
            <a
              className={`text-base  ${
                router.asPath === '/'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}>
              {router.asPath === '/' ? (
                <span className='underline underline-offset-4 decoration-2'>
                  Home
                </span>
              ) : (
                'Home'
              )}
            </a>
          </Link>
          <Link href='/about'>
            <a
              className={`text-base  ${
                router.asPath === '/about'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}>
              {router.asPath === '/about' ? (
                <span className='underline underline-offset-4 decoration-2'>
                  About
                </span>
              ) : (
                'About'
              )}
            </a>
          </Link>
          <Link href='/projects'>
            <a
              className={`text-base  ${
                router.asPath === '/projects'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}>
              {router.asPath === '/projects' ? (
                <span className='underline underline-offset-4 decoration-2'>
                  Projects
                </span>
              ) : (
                'Projects'
              )}
            </a>
          </Link>
          <Link href='/experience'>
            <a
              className={`text-base  ${
                router.asPath === '/experience'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}>
              {router.asPath === '/experience' ? (
                <span className='underline underline-offset-4 decoration-2'>
                  Experience
                </span>
              ) : (
                'Experience'
              )}
            </a>
          </Link>
          <Link href='/contact'>
            <a
              className={`text-base  ${
                router.asPath === '/contact'
                  ? 'text-gray-800 font-bold dark:text-gray-400'
                  : 'text-gray-600 dark:text-gray-300 font-normal '
              }`}>
              {router.asPath === '/contact' ? (
                <span className='underline underline-offset-4 decoration-2'>
                  Contact
                </span>
              ) : (
                'Contact'
              )}
            </a>
          </Link>
        </div>

        <div className='space-x-4 flex flex-row items-center'>
          <a
            href={userData.socialLinks.instagram}
            className='text-base font-normal text-gray-600 dark:text-gray-300'>
            <FaInstagram size={20} />
          </a>
          <a
            href={userData.socialLinks.github}
            className='text-base font-normal text-gray-600 dark:text-gray-300'>
            <FaGithub size={20} />
          </a>
          <a
            href={userData.socialLinks.mail}
            className='text-base font-normal text-gray-600 dark:text-gray-300'>
            <FaEnvelope size={20} />
          </a>

          <button
            aria-label='Toggle Dark Mode'
            type='button'
            className='w-10 h-10 p-3 rounded focus:outline-none'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {mounted && (
              <span>
                {theme === 'dark' ? (
                  <FaSun color='yellow' size={18} />
                ) : (
                  <FaMoon size={18} />
                )}
              </span>
            )}
          </button>
        </div>
      </div>
      <div className='space-x-8 block md:hidden mt-4'>
        <Link href='/'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Home
          </a>
        </Link>
        <Link href='/about'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            About
          </a>
        </Link>
        <Link href='/projects'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Projects
          </a>
        </Link>
        <Link href='/experience'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Experience
          </a>
        </Link>
        <Link href='/contact'>
          <a className='text-base font-normal text-gray-600 dark:text-gray-300'>
            Contact
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
