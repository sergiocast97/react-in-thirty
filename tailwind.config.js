/** @type {import('tailwindcss').Config} */
export default {
    
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    darkMode: 'class',

    theme: {
        
        // Fonts
        fontFamily: {

            // Headings
            'heading': [ 'Noto Sans Display' ],

            // Display
            'display': [ 'Noto Sans Display' ],

            // Body
            'body': [ 'Noto Sans' ],

        },

        extend: {

            // Palette
            colors: {
                theme: {
                    'darkest':  '#18181B',  // Background
                    'dark':     '#27272A',  // Foregorund
                    'medium':   '#52525B',  // Border Weak
                    'light':    '#A1A1AA',  // Border Strong
                    'lightest': '#D4D4D8',  // Text Copy
                    'white':    '#FFFFFF',  // Text Heading
                },
            },

            backgroundImage: {
                
                // Noise Background
                'noise': 'url("/assets/patterns/noise.png")',
            },

            dropShadow: {

                // Glow Effect
                glow: [
                    "0 0px 16px rgba(255,255, 255, 0.1)",
                    "0 0px 64px rgba(255, 255,255, 0.2)"
                ]
            },
        
        },
        
    },

    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}

