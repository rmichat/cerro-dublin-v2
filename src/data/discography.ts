export interface Album {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  artworkUrl: string;
  listenUrl: string;
  buyUrl: string;
  isLatest?: boolean;
}

export const ALBUMS: Album[] = [
  {
    id: '728pm-pausa',
    title: '7:28PM / PAUSA',
    subtitle: 'LP',
    year: '2025',
    artworkUrl: '/artworks/728pm-pausa.jpg',
    isLatest: true,
    listenUrl: 'https://linktr.ee/cerrodublin',
    buyUrl: 'https://cerrodublin.bandcamp.com/album/7-28pm-pausa'
  },
  {
    id: 'ecos',
    title: 'ECOS',
    subtitle: 'Single',
    year: '2022',
    artworkUrl: '/artworks/ecos.jpg',
    listenUrl: 'https://linktr.ee/cerrodublin',
    buyUrl: 'https://cerrodublin.bandcamp.com/track/ecos'
  },
  {
    id: 'iridiscente',
    title: 'IRIDISCENTE',
    subtitle: 'Single',
    year: '2021',
    artworkUrl: '/artworks/iridiscente.jpg',
    listenUrl: 'https://linktr.ee/cerrodublin',
    buyUrl: 'https://cerrodublin.bandcamp.com/track/iridiscente'
  },
  {
    id: 'cerro-dublin-lp',
    title: 'CERRO DUBLÍN',
    subtitle: 'LP',
    year: '2020',
    artworkUrl: '/artworks/cerro-dublin-lp.jpg',
    listenUrl: 'https://linktr.ee/cerrodublin',
    buyUrl: 'https://cerrodublin.bandcamp.com/album/cerro-dublin'
  },
  {
    id: 'los-lobos',
    title: 'LOS LOBOS',
    subtitle: 'EP',
    year: '2018',
    artworkUrl: '/artworks/los-lobos.jpg',
    listenUrl: 'https://linktr.ee/cerrodublin',
    buyUrl: 'https://cerrodublin.bandcamp.com/album/los-lobos'
  }
];
