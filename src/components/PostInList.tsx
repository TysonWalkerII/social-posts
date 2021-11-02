import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  index: number;
  onDelete: (index: number) => void;
}

const PostInList = ({ post, onDelete, index }: Props) => {
  return (
    <div className="PostInList">
      <h1>{post.title}</h1>
      <p>{post.thought}</p>
      <i className="fas fa-trash" onClick={() => onDelete(index)}></i>
    </div>
  );
};

export default PostInList;
