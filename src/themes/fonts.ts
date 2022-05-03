export type WeightType = 'full' | 'semi' | 'bold' | 'normal' | 'thin';
export type WeightQuantityType = '900' | '600' | 'bold' | 'normal' | '400';
export type FontType = 'xs' | 'sm' | 'default' | 'md' | 'lg' | 'xl' | 'xxl';

const fonts: {[type in FontType]: number} = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 30,
};

const weight: {[type in WeightType]: WeightQuantityType} = {
  full: '900',
  semi: '600',
  bold: 'bold',
  normal: 'normal',
  thin: '400',
};

export {fonts, weight};
