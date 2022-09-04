import React from "react";

const Post = ({ data }) => {
  return (
    <>
      <h4>Single post information</h4>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map((ele) => {
    return {
      params: {
        postID: `${ele.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
