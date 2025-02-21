module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cursive: ['Roboto', 'sans-serif'],
            },
            "compilerOptions": {
                "esModuleInterop": true,
                "jsx": "react-jsx"
            },
        },
    },
    plugins: [],
}
