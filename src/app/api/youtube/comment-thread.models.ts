export interface CommentThreadResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: CommentThread[];
}

export interface CommentThread {
  kind: string;
  etag: string;
  id: string;
  snippet: CommentThreadSnippet;
  replies?: Replies;
}

export interface Replies {
  comments: Comment[];
}

export interface Comment {
  kind: string;
  etag: string;
  id: string;
  snippet: CommentSnippet;
}

export interface CommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  parentId: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface CommentThreadSnippet {
  videoId: string;
  topLevelComment: TopLevelComment;
  canReply: boolean;
  totalReplyCount: number;
  isPublic: boolean;
}

export interface TopLevelComment {
  kind: string;
  etag: string;
  id: string;
  snippet: TopLevelCommentSnippet;
}

export interface TopLevelCommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  authorChannelId: AuthorChannelId;
  canRate: boolean;
  viewerRating: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface AuthorChannelId {
  value: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
