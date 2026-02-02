/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neon-cyan': '#00f3ff',     // Keep cyan for the nodes
                'brand-orange': '#ff8a00',  // New primary orange based on "Datadryft"
                'deep-black': '#050505',
                'warning-yellow': '#f0db4f',
            },
            fontFamily: {
                'orbitron': ['"Orbitron"', 'sans-serif'],
                'rajdhani': ['"Rajdhani"', 'sans-serif'],
                'mono': ['"Share Tech Mono"', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
