import type { GitHubRepo, GitHubUser, Stats } from "./types.js";

export function calculateStats(user: GitHubUser, repos: GitHubRepo[]): Stats {
  let stars = 0;
  let forks = 0;
  const languages: Record<string, number> = {};
  let mostStarredRepo: GitHubRepo | null = null;

  for (const repo of repos) {
    stars += repo.stargazers_count;
    forks += repo.forks_count;

    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }

    if (
      !mostStarredRepo ||
      repo.stargazers_count > mostStarredRepo.stargazers_count
    ) {
      mostStarredRepo = repo;
    }
  }

  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  return {
    name: user.name || user.login,
    joined: new Date(user.created_at).getFullYear().toString(),
    totalRepos: user.public_repos,
    stars,
    forks,
    followers: user.followers,
    following: user.following,
    publicGists: user.public_gists,
    topLanguages,
    mostStarredRepo,
  };
}
