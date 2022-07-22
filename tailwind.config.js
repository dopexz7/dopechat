module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,tsx}"],
    theme: {
        extend: {
            colors: {
                "main-purple": "var(--main-purple)",
                "accent-purple": "var(--accent-purple)",
                "darker-purple": "var(--darker-purple)",
                "accent-white": "var(--accent-white)",
                "main-black": "var(--main-black)",
                "main-white": "var(--main-white)",
                "border-white": "var(--border-white)",
                "accent-gray": "var(--accent-gray)",
            },
            backgroundImage: {
                "header-bg": "var(--header-bg)",
            },
        },
    },
    plugins: [],
};
