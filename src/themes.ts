export interface ThemeColors {
  bg: string;
  border: string;
  title: string;
  text: string;
  accent: string;
  card: string;
}

export const themes: Record<string, ThemeColors> = {
  github: {
    bg: "#0d1117",
    border: "#30363d",
    title: "#58a6ff",
    text: "#c9d1d9",
    accent: "#8b949e",
    card: "#161b22",
  },
  ocean: {
    bg: "#001219",
    border: "#005f73",
    title: "#94d2bd",
    text: "#e9d8a6",
    accent: "#ee9b00",
    card: "#003049",
  },
  forest: {
    bg: "#1a2e05",
    border: "#386641",
    title: "#a7c957",
    text: "#f2e8cf",
    accent: "#6a994e",
    card: "#31572c",
  },
  sunset: {
    bg: "#2d1b33",
    border: "#5e3a63",
    title: "#f48c06",
    text: "#ffba08",
    accent: "#dc2f02",
    card: "#3c096c",
  },
  dracula: {
    bg: "#282a36",
    border: "#44475a",
    title: "#bd93f9",
    text: "#f8f8f2",
    accent: "#6272a4",
    card: "#44475a",
  },
};
