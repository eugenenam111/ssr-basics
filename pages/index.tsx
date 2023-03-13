import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import PostList from "@/components/PostList";

const inter = Inter({ subsets: ["latin"] });

export interface PostsInterface {
  id: number;
  heading: string;
  content: string;
}

export default function Home() {
  const [posts, setPosts] = useState<PostsInterface[]>([
    {
      id: 1,
      heading: "Amit",
      content: "I am the content",
    },
  ]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className="main-section">
          <h1>Welcome to SSR Basics!</h1>
          <PostList posts={posts} setPosts={setPosts} />
        </section>
      </main>
    </>
  );
}
