import type { GetServerSideProps, NextPage } from 'next'
import getGithubRepos from '../lib/getGithubRepos'
import userData from '../lib/userData'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN

  const repos = await getGithubRepos(userData, token)
  console.log('repos:', repos)
  return {
    props: {
      repos
    }
  }
}
