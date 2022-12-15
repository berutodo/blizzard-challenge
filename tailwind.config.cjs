/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671069014/image_2_qnmfvt.webp)",
                'footer-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671120796/bg-download_1_oyxc1u.png)",
                'maskgroup-image': "url(src/assets/masgroup.png)"
            }
        },
    },
    plugins: [],
}