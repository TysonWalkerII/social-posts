import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [socialPosts, setSocialPosts] = useState<Post[]>([
    { title: "idk", thought: "32" },
    { title: "ifdsdk", thought: "hg" },
    { title: "43", thought: "5" },
  ]);

  const addPost = (post: Post): void => {
    setSocialPosts((prev) => [...prev, post]);
  };
  const [showForm, setShowForm] = useState(false);

  const deletePost = (index: number): void => {
    setSocialPosts((prev) => [
      ...prev.slice(0, index),
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <div className="SocialPosts">
      <header>
        <h1>My Thoughts</h1>
        <button onClick={() => setShowForm(true)}>New Thought</button>
        {showForm && <PostForm onSubmit={addPost} setShowForm={setShowForm} />}
      </header>

      {socialPosts.map((item, i) => (
        <PostInList
          key={`${item.title}${i}`}
          post={item}
          index={i}
          onDelete={deletePost}
        />
      ))}
    </div>
  );
};

export default SocialPosts;
