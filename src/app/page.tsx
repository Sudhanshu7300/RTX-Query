"use client";
import PostCard from "@/components/PostsCard";
import styles from "./page.module.css";
import { useGetPostsQuery, useNewPostMutation } from "@/components/redux/api";
import { FormEvent, useState } from "react";
export default function Home() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    newPost(post);
    setTitle("");
    setBody("");
  };
  return (
    <main className={styles.main}>
      <div className={styles.mt20}>
        <h2>
          RTK Query<span>-&gt;</span>
        </h2>
        <form onSubmit={submitHandler} style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="submit"> Add </button>
        </form>
        {isLoading ? (
          <div>Loading </div>
        ) : (
          data?.map((i) => <PostCard post={i} key={i.id} />)
        )}
        <p className={styles.mt20}>
          TK Query streamlines data fetching and state management in web
          applications by offering built-in support for common challenges like
          tracking loading state and avoiding duplicate requests. Inspired by
          leading tools like Apollo Client and React Query, RTK Query's API
          endpoints enable efficient query parameter generation and response
          transformation.
        </p>{" "}
        <p className={styles.mt20}>
          It seamlessly integrates with Redux Toolkit's APIs, allowing
          developers to generate React hooks for managing data fetching
          processes and cache lifetimes. Written entirely in TypeScript, RTK
          Query ensures a robust and type-safe development experience, making it
          an ideal choice for modern web applications.
        </p>
      </div>
    </main>
  );
}
