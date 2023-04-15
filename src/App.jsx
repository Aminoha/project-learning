import React, { useMemo, useState } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostForm from "./components/PostForm";

import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 3, title: "1JavaScript 3", body: "3description" },
    { id: 4, title: "2JavaScript 4", body: "2description" },
    { id: 5, title: "3JavaScript 5", body: "1description" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  //получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id)); //filter(это отдельный метод) возвращает массив отфильтрованный по условию
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      {/* <Counter /> */}
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Посты про JS"}
      />
    </div>
  );
}

export default App;

//Замененная реализация

// const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");

// если инпутов много, то придется для кадждого писать свое состояние.
// вместо этого можно сделать универсальное состояние с объектом (см. пример в )

// const bodyInputRef = useRef(); //для неуправляемых компонентов

// function addNewPost(e) {
//   e.preventDefault();
//   const newPost = {
//     id: Date.now(),
//     title,
//     body: description,
//   };

//   setPosts([...posts, newPost]);
//   setTitle("");
//   setDescription("");
// }

//  const [selectedSort, setSelectedSort] = useState("");
//const [searchQuery, setSearchQuery] = useState("");

// const sortPosts = (sort) => {
//   setSelectedSort(sort);
//   // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
// };
