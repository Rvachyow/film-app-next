export interface IGetLists {
  docs: Ilist[];
}

export interface Ilist {
  category: string;
  name: string;
  slug: string;
  moviesCount: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface IDataListsItem {
  docs: ListItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface ListItem {
  status: any;
  rating: Rating;
  votes: Votes;
  backdrop: Backdrop;
  movieLength: number;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  poster: Poster;
  genres: Genre[];
  countries: Country[];
  typeNumber: number;
  alternativeName: string;
  enName: string;
  names: Name[];
  ratingMpaa: string;
  shortDescription: string;
  ticketsOnSale: boolean;
  ageRating: number;
  logo: Logo;
  top10: any;
  top250: number;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface Logo {
  url: string;
}
