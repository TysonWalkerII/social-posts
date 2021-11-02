import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onSubmit: (post: Post) => void;
  setShowForm: (bool: boolean) => void;
}

const PostForm = ({ onSubmit, setShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const AddThought = (e: FormEvent): void => {
    e.preventDefault();
    setShowForm(false);
    onSubmit({ title, thought });
  };

  return (
    <form className="PostForm" onSubmit={AddThought}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <textarea
        name="thought"
        id="thought"
        cols={30}
        rows={10}
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      ></textarea>
      <button>Add Post</button>
    </form>
  );
};

export default PostForm;
