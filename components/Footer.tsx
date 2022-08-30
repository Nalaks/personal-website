import { FC } from 'react'
import userData from '../lib/userData'
import { FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Footer: FC = () => {
  return (
    <div className='bg-[#F1F1F1] dark:bg-gray-900'>
      <div className='max-w-6xl  mx-auto px-4 py-10 md:py-20'>
        <div className='h-0.5 w-full bg-white dark:bg-gray-700'></div>
        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8'>
          <div>
            <p>&copy; Stefan Kalan. All Rights Reserved.</p>
          </div>
          <div>
            <p>
              Developed by
              <span className='inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300'>
                <a
                  className='hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50'
                  href='https://github.com/Nalaks'>
                  Stefan Kalan
                </a>
              </span>
            </p>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
