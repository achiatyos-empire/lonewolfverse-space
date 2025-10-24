import type { Config } from "tailwindcss";


const config: Config = {
darkMode: ["class"],
content: [
"./src/pages/**/*.{ts,tsx}",
"./src/components/**/*.{ts,tsx}",
"./src/app/**/*.{ts,tsx}",
],
theme: {
extend: {
container: { center: true, padding: "1rem" },
fontFamily: {
display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
},
colors: {
brand: {
50: "#eef7ff",
100: "#d9ecff",
200: "#bfe0ff",
300: "#95cdff",
400: "#61b2ff",
500: "#398fff",
600: "#216cf1",
700: "#1a55c0",
800: "#183f8f",
900: "#152f6e",
},
},
},
},
plugins: [],
};
export default config;
