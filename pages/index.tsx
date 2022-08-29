import type { GetServerSideProps, NextPage } from 'next'
import getGithubRepos from '../lib/getGithubRepos'
import userData from '../lib/userData'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import GithubSection from '../components/GithubSection'
import { HomeProps } from '../types/types'

const Home: NextPage<HomeProps> = ({ repos }) => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <GithubSection repos={repos} />
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN

  const repos = await getGithubRepos(userData, token)
  return {
    props: {
      repos
    }
  }
}
