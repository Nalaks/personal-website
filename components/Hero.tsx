import { FC } from 'react'
import { RoughNotationGroup } from 'react-rough-notation'
import RoughNotationHighlight from './RoughNotationLayout'
import userData from '../lib/userData'
import Image from 'next/image'
import { BsArrow90DegUp } from 'react-icons/bs'

const Hero: FC = () => {
  const colors = ['#F59E0B', '#84CC16', '#10B981', '#3B82F6']
  return (
    <div className='flex flex-row justify-center items-start overflow-hidden'>
      <div className='w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20'>
        <RoughNotationGroup show={true}>
          <RoughNotationHighlight color={colors[0]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Developer.
            </h1>
          </RoughNotationHighlight>
          <RoughNotationHighlight color={colors[1]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Designer.
            </h1>
          </RoughNotationHighlight>
          <RoughNotationHighlight color={colors[2]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Programmer.
            </h1>
          </RoughNotationHighlight>
          <RoughNotationHighlight color={colors[3]}>
            <h1 className='text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2'>
              Creator.
            </h1>
          </RoughNotationHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className='hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20'>
        <div className='w-3/4 '>
          <Image
            src={userData.avatarUrl}
            alt='avatar'
            className=' shadow'
            width={400}
            height={400}
          />
          <div className='flex flex-row justify-between mt-4'>
            <div className='flex flex-row space-x-4'>
              <BsArrow90DegUp size={16} />
              <p className='font-mono'>That is me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
