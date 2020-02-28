export interface YoutubeVideos {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: YouTubeVideo[];
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

interface Default {
  url: string;
  width?: number;
  height?: number;
}

interface Id {
  kind: string;
  videoId?: string;
  channelId?: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
