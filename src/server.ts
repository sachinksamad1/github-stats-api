import express from "express";
import { getUserData, getRepos } from "./github.js";
import { calculateStats } from "./stats.js";
import { generateSVG, generateCompactSVG } from "./svg.js";
import { themes, type ThemeColors } from "./themes.js";

const app = express();
const PORT = process.env["PORT"] ? parseInt(process.env["PORT"]) : 3000;

const GITHUB_TOKEN = process.env["GITHUB_TOKEN"];

if (!GITHUB_TOKEN) {
  console.warn(
    "WARNING: GITHUB_TOKEN is not set in environment. API might be rate limited."
  );
}

// Helper to ensure colors have # prefix
const getColor = (queryVal: string | undefined, fallback: string): string => {
  if (!queryVal) return fallback;
  return queryVal.startsWith("#") ? queryVal : `#${queryVal}`;
};

app.get("/api", async (req, res) => {
  const username = req.query["username"] as string;
  const layoutParam = req.query["layout"] as string;
  const themeParam = req.query["theme"] as string;

  if (!username) {
    res.status(400).send("Username required");
    return;
  }

  // Backward compatibility: check if theme param is used for layout
  const isCompact = layoutParam === "compact" || themeParam === "compact";

  // Determine base theme name (ignoring "compact" if used there)
  const themeName =
    (themeParam === "compact" ? "github" : themeParam) || "github";
  const baseTheme = themes[themeName] || themes["github"]!;

  // Custom color overrides with # prefix safety
  const theme: ThemeColors = {
    bg: getColor(req.query["bg"] as string, baseTheme.bg),
    border: getColor(req.query["border"] as string, baseTheme.border),
    title: getColor(req.query["title"] as string, baseTheme.title),
    text: getColor(req.query["text"] as string, baseTheme.text),
    accent: getColor(req.query["accent"] as string, baseTheme.accent),
    card: getColor(req.query["card"] as string, baseTheme.card),
  };

  try {
    const user = await getUserData(username, GITHUB_TOKEN);
    const repos = await getRepos(username, GITHUB_TOKEN);

    const stats = calculateStats(user, repos);

    const svg = isCompact
      ? generateCompactSVG(user.login, stats, theme)
      : generateSVG(user.login, stats, theme);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "s-maxage=3600");
    res.send(svg);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to generate stats");
  }
});

export default app;

if (process.env["NODE_ENV"] !== "production" && !process.env["VERCEL"]) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}
