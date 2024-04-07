import { Chivo, Work_Sans } from 'next/font/google';

const chivo_init = Chivo({
  subsets: ['latin'],
  // extralight, medium, bold
  weight: ['200', '500', '700'],
  variable: '--font-chivo',
});

const work_sans_init = Work_Sans({
  subsets: ['latin'],
  // extralight, medium, extrabold
  weight: ['200', '500', '800'],
  variable: '--font-work-sans',
});

export const chivo = chivo_init.variable;
export const work_sans = work_sans_init.variable;
