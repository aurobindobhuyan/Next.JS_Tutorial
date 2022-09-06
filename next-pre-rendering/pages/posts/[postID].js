import React from "react";
import { useRouter } from "next/router";

const Post = ({ data }) => {
  const router = useRouter();
  return (
    <>
      {router.isFallback ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <>
          <h4>Single post information</h4>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((ele) => {
  //   return {
  //     params: {
  //       postID: `${ele.id}`,
  //     },
  //   };
  // });

  return {
    paths: [{ params: { postID: "1" } }, { params: { postID: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const data = await response.json();

  if (!data.id) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
