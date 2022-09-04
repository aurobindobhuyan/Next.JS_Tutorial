import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Next Pre Rendering Training...</h1>
      <Link href="/user">
        <a>User |</a>
      </Link>
      <Link href="/posts">
        <a> Posts</a>
      </Link>
    </>
  );
};

export default Home;
