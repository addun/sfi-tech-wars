export interface YouTubeVideosResponse {
  kind: string;
  etag: string;
  prevPageToken?: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: YouTubeVideosPageInfo;
  items: YouTubeVideo[];
}

export interface YouTubeVideo {
  kind: string;
  etag: string;
  id: YouTubeVideoId;
  snippet: YouTubeVideoSnippet;
}

interface YouTubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeVideoThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

interface YouTubeVideoThumbnails {
  default: YouTubeVideoThumbnail;
  medium: YouTubeVideoThumbnail;
  high: YouTubeVideoThumbnail;
}

interface YouTubeVideoThumbnail {
  url: string;
  width?: number;
  height?: number;
}

interface YouTubeVideoId {
  kind: 'youtube#playlist' | 'youtube#video' | 'youtube#channel';
  videoId?: string;
  channelId?: string;
}

interface YouTubeVideosPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubeVideosRequest {
  q?: string;
  pageToken?: string;
  channelId?: string;
}
