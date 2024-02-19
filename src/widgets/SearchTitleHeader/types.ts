export interface ISearchTitle {
  docs: ISearchTitleItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface ISearchTitleItem {
  internalNames: string[];
  name: string;
  alternativeName: string;
  enName: string;
  year: number;
  genres: Genre[];
  countries: Country[];
  releaseYears: any[];
  id: number;
  names: Name[];
  type: string;
  description: string;
  shortDescription: string;
  logo: Logo;
  poster: Poster;
  backdrop: Backdrop;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  isSeries: boolean;
  ticketsOnSale: boolean;
  totalSeriesLength: any;
  seriesLength: any;
  ratingMpaa: string;
  ageRating: number;
  top10: any;
  top250?: number;
  typeNumber: number;
  status: any;
  internalRating: number;
  internalVotes: number;
  externalId: ExternalId;
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

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
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

export interface ExternalId {
  tmdb: number;
  imdb: string;
  kpHD?: string;
}
