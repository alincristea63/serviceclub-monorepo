import type { Config } from "tailwindcss";
import sharedConfig from "../../configs/tailwind.config.js";

const config: Config = {
  ...sharedConfig,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui-components/src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config; 