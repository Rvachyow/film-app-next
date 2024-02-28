export interface ITITLE_DATA {
  id: number;
  externalId: ExternalId;
  name: string;
  alternativeName: string;
  enName: any;
  names: Name[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: any;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  poster: Poster;
  backdrop: Backdrop;
  genres: Genre[];
  countries: Country[];
  persons: Person[];
  budget: Budget;
  fees: Fees;
  sequelsAndPrequels: SequelsAndPrequel[];
  watchability: Watchability;
  top10: any;
  top250: any;
  facts: Fact[];
  spokenLanguages: any[];
  seasonsInfo: any[];
  collections: any[];
  productionCompanies: any[];
  similarMovies: SimilarMovy[];
  releaseYears: any[];
  createdAt: string;
  updatedAt: string;
  premiere: Premiere;
  ticketsOnSale: boolean;
  audience: Audience[];
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
  deletedAt: any;
  logo: Logo2;
  lists: string[];
  networks: any;
  distributors: {
    distributor: string;
    distributorRelease: string;
  };
  videos: Videos;
}

export interface ExternalId {
  imdb: string;
  tmdb: number;
  kpHD: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
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

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName?: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Budget {
  value: number;
  currency: string;
}

export interface Fees {
  world: World;
  usa: Usa;
  russia: string;
}

export interface World {
  value: number;
  currency: string;
}

export interface Russia {
  value: number;
  currency: string;
}

export interface Usa {
  value: number;
  currency: string;
}

export interface SequelsAndPrequel {
  id: number;
  name: string;
  alternativeName: string;
  enName: any;
  type: string;
  poster: Poster2;
  rating: Rating2;
  year: number;
}

export interface Poster2 {
  url: string;
  previewUrl: string;
}

export interface Rating2 {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo;
  url: string;
}

export interface Logo {
  url: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface SimilarMovy {
  id: number;
  name: string;
  alternativeName: string;
  enName: any;
  type: string;
  poster: Poster3;
  rating: Rating3;
  year: number;
}

export interface Poster3 {
  url: string;
  previewUrl: string;
}

export interface Rating3 {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Premiere {
  world: string;
  russia: string;
  bluray: string;
  dvd: string;
}

export interface Audience {
  count: number;
  country: string;
}

export interface Logo2 {
  url: string;
}

export interface Videos {
  trailers: Trailer[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}
