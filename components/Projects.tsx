import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import userData from '../lib/userData'

const Projects: FC = () => {
  return (
    <div className='bg-[#F1F1F1] -mt-40 dark:bg-gray-900'>
      <div className='max-w-6xl mx-auto'>
        <header className='flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center'>
            My Projects
          </h1>
          <Link href='/projects'>
            <a className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 dark:bg-slate-400'>
              <BsArrowUpRightSquare />
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className='grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40'>
          {/* Single card */}
          <Tilt>
            <a
              href={userData.projects[0].link}
              className='w-full block col-span-3 shadow-2xl'>
              <div className='relative overflow-hidden'>
                <Image
                  src={userData.projects[0].imgUrl}
                  alt={userData.projects[0].title}
                  // className='transform hover:scale-125 transition duration-2000 ease-out'
                  width={500}
                  height={500}
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  {userData.projects[0].title}
                </h1>
                <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
                  01
                </h1>
              </div>
            </a>
          </Tilt>
          {/* Single card */}
          <Tilt>
            <a
              href={userData.projects[1].link}
              className='w-full block col-span-3  sm:col-span-2 shadow-2xl'>
              <div className='relative overflow-hidden'>
                {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                <Image
                  src={userData.projects[1].imgUrl}
                  alt={userData.projects[1].title}
                  // className='transform hover:scale-125 transition duration-2000 ease-out'
                  width={500}
                  height={500}
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  {userData.projects[1].title}
                </h1>
                <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
                  02
                </h1>
              </div>
            </a>
          </Tilt>
          {/* Single card */}
          <Tilt>
            <a
              href={userData.projects[2].link}
              className='w-full block col-span-3 sm:col-span-1  object-cover'>
              <div className='relative overflow-hidden shadow-2xl'>
                {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                <Image
                  src={userData.projects[2].imgUrl}
                  alt={userData.projects[2].title}
                  // className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
                  width={500}
                  height={500}
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  {userData.projects[2].title}
                </h1>
                <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
                  03
                </h1>
              </div>
            </a>
          </Tilt>

          <Tilt>
            <a
              href={userData.projects[3].link}
              className='w-full block col-span-3 sm:col-span-1  object-cover'>
              <div className='relative overflow-hidden shadow-2xl'>
                {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
                <Image
                  src={userData.projects[3].imgUrl}
                  alt={userData.projects[3].title}
                  // className='transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl'
                  width={500}
                  height={500}
                />
                <h1 className='absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2'>
                  {userData.projects[3].title}
                </h1>
                <h1 className='absolute bottom-10 left-10 text-gray-50 font-bold text-xl'>
                  04
                </h1>
              </div>
            </a>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Projects
