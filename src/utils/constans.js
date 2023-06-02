import categoryImageHeadphones from '../assets/images/tab-image-headphones.png';
import categoryImageEarphones from '../assets/images/tab-image-earphones.png';
import categoryImageSpeakers from '../assets/images/tab-image-speakers.png';

export const EMPTY_STRING = '';

export const COLORS = Object.freeze({
  ORANGE: '#D87D4A',
  LIGHT_ORANGE: '#fbaf85',
  LIGHT_BLACK: '#101010',
  BLACK: '#000000',
  GRAY: '#F1F1F1',
  LIGHT_WHITE: '#FAFAFA',
  WHITE: '#FAFAFA',
  TRANSPARENT: 'transparent',
});

export const FONT_WEIGHT = Object.freeze({
  regular: '400',
  medium: '500',
  bold: '700',
});

export const ENDPOINTS = Object.freeze({
  CATEGORIES: '/categories',
});

export const METHODS = Object.freeze({
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
});

export const CATEGORY_IMAGES = Object.freeze({
  Headphones: categoryImageHeadphones,
  Earphones: categoryImageEarphones,
  Speakers: categoryImageSpeakers,
});

export const ERRORS = Object.freeze({
  GENERAL: 'Error, intente más tarde.',
});
