module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            roboto: ["Roboto", "sans-serif"],
            jomhuria: ["Jomhuria", "sans-serif"],
        },
        extend: {
            spacing: {
                128: "32rem",
                160: "40rem",
                192: "48rem",
                224: "52rem",
                256: "64rem",
                320: "72rem",
            },
            colors: {},
            animation: {
                "slide-in": "faceIn 0.3s ease-out forwards",
                "fade-out": "fadeOut 0.3s ease-out forwards",
            },
        },
    },
    plugins: ["tailwindcss, autoprefixer", "flowbite/plugin"],
}
