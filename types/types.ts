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

export interface ProjectCardProps {
  title: string
  link: string
  imgUrl: string
  number: string
}

export interface ExperienceCardProps {
  title: string
  desc: string
  year: string
  company: string
  companyLink: string
}
