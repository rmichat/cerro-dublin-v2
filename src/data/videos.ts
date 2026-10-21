export interface VideoItem {
  id: string;
  title: string;
  url: string;
  youtubeId: string;
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'mar-de-cristales',
    title: 'Mar de Cristales',
    url: 'https://youtu.be/lM05hCPbt4Y',
    youtubeId: 'lM05hCPbt4Y'
  },
  {
    id: 'domino',
    title: 'Dominó',
    url: 'https://youtu.be/zOs1i2pqWjI',
    youtubeId: 'zOs1i2pqWjI'
  },
  {
    id: 'entre-lineas',
    title: 'Entre Líneas',
    url: 'https://youtu.be/8imcptSrtC0',
    youtubeId: '8imcptSrtC0'
  },
  {
    id: 'bailando-en-el-incendio',
    title: 'Bailando un Rato en el Incendio',
    url: 'https://youtu.be/4ieyuHkEUP4',
    youtubeId: '4ieyuHkEUP4'
  }
];
