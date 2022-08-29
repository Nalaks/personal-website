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
