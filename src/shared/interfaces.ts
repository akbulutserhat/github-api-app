export interface IRepo {
  full_name: string;
  description: string;
  url: string;
}

export interface IUser {
  login: string;
  avatar_url: string;
  url: string;
}

export interface IData {
  total_count: number;
  items: Array<IRepo & IUser>;
}

export interface IRepoDetail {
  full_name: string;
  description: string;
  html_url: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

export interface IUserDetail {
  name: string;
  bio: string;
  avatar_url: string;
  login: string;
  public_repos: number;
  repos_url: string;
}
