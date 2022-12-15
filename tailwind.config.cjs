/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671068328/image_2_zbkr0d.png)"
            }
        },
    },
    plugins: [],
}