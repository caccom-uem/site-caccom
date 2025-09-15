export interface StrapiImageAttributes {
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats: {
    thumbnail: { url: string };
    small: { url: string };
    medium: { url: string };
    large: { url: string };
  };
  url: string;
}

export interface StrapiImageData {
  id: number;
  attributes: StrapiImageAttributes;
}

export interface StrapiImage {
  data: StrapiImageData;
}

export interface StrapiDataItem<T> {
  id: number;
  attributes: T;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface StrapiResponse<T> {
  data: T;
  meta: Meta;
}
