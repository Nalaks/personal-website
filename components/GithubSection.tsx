import { FC } from 'react'
import userData from '../lib/userData'
import { GithubSectionProps } from '../types/types'
import GithubRepoCard from './GithubRepoCard'
import { BsArrowUpRightSquare } from 'react-icons/bs'

const GithubSection: FC<GithubSectionProps> = ({ repos }) => {
  return (
    <section className='bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left'>
            Latest Repos
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700 dark:bg-slate-400'>
            <BsArrowUpRightSquare />
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, index) => (
            <GithubRepoCard latestRepo={latestRepo} key={index} />
          ))}
      </div>
    </section>
  )
}

export default GithubSection
