import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Swiss Heritage Luxury Color Palette
				'charcoal-black': 'hsl(var(--charcoal-black))',
				'off-white': 'hsl(var(--off-white))',
				'alpine-green': {
					DEFAULT: 'hsl(var(--alpine-green))',
					light: 'hsl(var(--alpine-green-light))'
				},
				'silver-gray': {
					DEFAULT: 'hsl(var(--silver-gray))',
					dark: 'hsl(var(--silver-gray-dark))'
				},
				'burgundy': {
					DEFAULT: 'hsl(var(--burgundy))',
					dark: 'hsl(var(--burgundy-dark))'
				},
				
				// Core SwissPats Brand Colors (Heritage Luxury Updated)
				'swiss-navy': {
					DEFAULT: 'hsl(var(--swiss-navy))',
					light: 'hsl(var(--swiss-navy-light))',
					dark: 'hsl(var(--swiss-navy-dark))'
				},
				'success-green': {
					DEFAULT: 'hsl(var(--success-green))',
					light: 'hsl(var(--success-green-light))'
				},
				'premium-gold': 'hsl(var(--premium-gold))',
				'warning-amber': 'hsl(var(--warning-amber))',
				'info-blue': 'hsl(var(--info-blue))',
				
				// Semantic Colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
			},
			backgroundImage: {
				'gradient-swiss': 'var(--gradient-swiss)',
				'gradient-success': 'var(--gradient-success)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-luxury': 'var(--gradient-luxury)'
			},
			boxShadow: {
				'swiss': 'var(--shadow-swiss)',
				'success': 'var(--shadow-success)',
				'premium': 'var(--shadow-premium)',
				'luxury': 'var(--shadow-luxury)',
				'soft': 'var(--shadow-soft)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'50%': { transform: 'scale(1.05)' },
					'70%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--success-green) / 0.7)' },
					'70%': { boxShadow: '0 0 0 10px hsl(var(--success-green) / 0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-up': 'slide-up 0.4s ease-out',
				'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'pulse-glow': 'pulse-glow 2s infinite',
				'spin-slow': 'spin 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;