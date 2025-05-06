import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const textSizes = {
  'display-3xl': '--text-display-3xl',
  'display-2xl': '--text-display-2xl',
  'display-xl': '--text-display-xl',
  'display-lg': '--text-display-lg',
  'display-md': '--text-display-md',
  'display-sm': '--text-display-sm',
  'display-xs': '--text-display-xs',
  'text-xl': '--text-xl',
  'text-lg': '--text-lg',
  'text-md': '--text-md',
  'text-sm': '--text-sm',
  'text-xs': '--text-xs',
};

const fontWeights = {
  regular: '--font-weight-regular',
  medium: '--font-weight-medium',
  semibold: '--font-weight-semibold',
  bold: '--font-weight-bold',
  extrabold: '--font-weight-extrabold',
};

const customTextPlugin = plugin(({ addUtilities }) => {
  const newUtilities: Record<string, any> = {};

  for (const [sizeName, sizeVar] of Object.entries(textSizes)) {
    for (const [weightName, weightVar] of Object.entries(fontWeights)) {
      const className = `.${sizeName}-${weightName}`;
      newUtilities[className] = {
        fontSize: `var(${sizeVar})`,
        lineHeight: `var(${sizeVar}--line-height)`,
        fontWeight: `var(${weightVar})`,
      };
    }
  }

  addUtilities(newUtilities);
});

const borderImagePlugin = plugin(({ addUtilities }) => {
  addUtilities({
    '.border-image-gradient-purple-pink': {
      borderImageSource: 'linear-gradient(90deg, #dc49a6, #8746eb)',
      borderImageSlice: '1',
    },
  });
});

export default {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-purple-pink': 'linear-gradient(90deg, #dc49a6, #8746eb)',
      },

      animation: {
        'border-reveal': 'border-reveal 1s ease-out forwards',
        'sweep-light': 'sweep-light 4s linear infinite',

        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },

      keyframes: {
        'border-reveal': {
          '0%': {
            clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
          },
          '100%': {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          },
        },
        'sweep-light': {
          '0%': { transform: 'rotate(0deg)', opacity: 0.1 },
          '10%': { transform: 'rotate(36deg)', opacity: 0.15 },
          '20%': { transform: 'rotate(72deg)', opacity: 0.25 },
          '30%': { transform: 'rotate(108deg)', opacity: 0.4 },
          '40%': { transform: 'rotate(144deg)', opacity: 0.6 },
          '50%': { transform: 'rotate(180deg)', opacity: 0.5 },
          '60%': { transform: 'rotate(216deg)', opacity: 0.4 },
          '70%': { transform: 'rotate(252deg)', opacity: 0.3 },
          '80%': { transform: 'rotate(288deg)', opacity: 0.25 },
          '90%': { transform: 'rotate(324deg)', opacity: 0.15 },
          '100%': { transform: 'rotate(360deg)', opacity: 0.1 },
        },

        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [customTextPlugin, borderImagePlugin],
} satisfies Config;
