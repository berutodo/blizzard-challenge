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
                'second-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631871/hearthstone-bg_aa2nay.png)",
                'another-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/c_scale,w_1920/v1673631357/hearthstone-bg_huyb4p.webp)",
                'footer-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671120796/bg-download_1_oyxc1u.png)",
                'maskgroup-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671485426/maskgroup_iyc22o.webp)",
                'group-image': "url(https://res.cloudinary.com/ddsivmxle/image/upload/v1671485430/groupimage2_y5qhlt.webp)"
            }
        },
    },
    plugins: [],
}