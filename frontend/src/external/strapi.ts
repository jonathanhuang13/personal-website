import qs from 'qs';
import axios from 'axios';

export const STRAPI_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? 'http://localhost:1337';

type StrapiPublicationState = 'live' | 'preview';

// RESPONSE

export interface StrapiEntriesResponse<T> {
  data: StrapiEntry<T>[];
  meta: StrapiMeta;
  error?: StrapiError;
}

export interface StrapiEntryResponse<T> {
  data: StrapiEntry<T>;
  meta: StrapiMeta;
  error?: StrapiError;
}

interface StrapiEntry<T> {
  id: number;
  attributes: T;
}

interface StrapiMeta {
  pagination: StrapiPaginationResponse;
  publicationState: StrapiPublicationState;
}

interface StrapiPaginationResponse {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface StrapiError {
  status: string;
  name: string;
  message: string;
  details: unknown;
}

// REQUEST

type FilterKey = 'eq' | 'ne' | 'lt' | 'lte' | 'gt' | 'gte' | 'in';
type StrapiFilterKey = `$${FilterKey}`;

type Filter = { [key in StrapiFilterKey]?: string | string[] };

export interface StrapiAPIParams<T> {
  sort?: 'string' | string[];
  filters?: {
    [attribute in keyof (T extends any[] ? T[number] : T)]?: Filter;
  };
  fields?: string[];
  populate?: '*' | string[];
  pagination?: {
    page: number;
    pageSize: number;
  };
}

// HELPERS

export async function fetchStrapi<T>(
  path: string,
  urlParamsObject: StrapiAPIParams<T> = {},
): Promise<T extends any[] ? StrapiEntriesResponse<T[number]> : StrapiEntryResponse<T>> {
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${STRAPI_BASE_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

  try {
    const response = await axios(requestUrl, { headers: { 'Content-Type': 'application/json' } });
    return response.data;
  } catch (e) {
    console.error(e);
    throw new Error(`An error occured please try again`);
  }
}

export function getStrapiMedia(mediaURL: string): string {
  return mediaURL.startsWith('/') ? `${STRAPI_BASE_URL}${mediaURL}` : mediaURL;
}
