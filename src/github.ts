import type { GitHubRepo, GitHubUser } from "./types.js";

const BASE_URL = "https://api.github.com";

const getHeaders = (token?: string): HeadersInit => ({
  "Content-Type": "application/json",
  ...(token && { Authorization: `Bearer ${token}` }),
});

export async function getUserData(
  username: string,
  token?: string
): Promise<GitHubUser> {
  const res = await fetch(`${BASE_URL}/users/${username}`, {
    headers: getHeaders(token),
  });

  if (!res.ok) {
    throw new Error(`GitHub user fetch failed: ${res.status}`);
  }

  return res.json();
}

export async function getRepos(
  username: string,
  token?: string
): Promise<GitHubRepo[]> {
  const res = await fetch(`${BASE_URL}/users/${username}/repos?per_page=100`, {
    headers: getHeaders(token),
  });

  if (!res.ok) {
    throw new Error(`GitHub repos fetch failed: ${res.status}`);
  }

  return res.json();
}
