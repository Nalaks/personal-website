import { GetServerSideProps } from 'next'

export interface IGetGithubRepos {
  (data: GithubData, token?: string): Promise<Response>
}

type GithubData = {
  githubUsername: string
}

export interface LayoutProps {
  children: React.ReactNode
}

export interface RoughNotationHighlightProps {
  color: string
  children: React.ReactNode
}

export interface GithubSectionProps {
  repos: GithubRepo[]
}

type GithubRepo = {
  name: string
  description: string
  clone_url: string
}

export interface GithubRepoProps {
  latestRepo: GithubRepo
}

export interface HomeProps {
  repos: GithubRepo[]
}
