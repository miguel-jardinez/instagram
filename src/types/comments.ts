export interface CommentsTypes {
  id: string;
  comment: string;
  isLiked: boolean;
  user: {
    id: string;
    image: string;
    username: string;
  };
}
