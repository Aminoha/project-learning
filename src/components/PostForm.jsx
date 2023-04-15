import React, { useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost)
    setPost({ title: "", body: "" });
  }

  return (
    <form>
      {/* Управляемые компоненты */}
      <MyInput
        // value={title}
        //onChange={(e) => setTitle(e.target.value)}
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        // value={description}
        //onChange={(e) => setDescription(e.target.value)}
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      {/* <input ref={bodyInputRef} type="text" /> неуправляемый инпут */}
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
