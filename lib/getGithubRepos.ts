import { IGetGithubRepos } from '../types/types'
import axios from 'axios'

const getGithubRepos: IGetGithubRepos = async (data, token) => {
  try {
    const username = data.githubUsername

    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`
          }
        }
      )
      return res.data.items.splice(0, 6)
    } else {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      )
      return res.data.items.splice(0, 6)
    }
  } catch (err) {
    console.log(err)
  }
}

export default getGithubRepos
