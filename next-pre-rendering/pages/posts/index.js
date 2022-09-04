import React from "react";
import PostDetails from "../../components/PostDetails";

const Posts = ({ data }) => {
  return (
    <div>
      <h1>This is all Posts</h1>
      {data.map((ele) => {
        return <PostDetails key={ele.id} {...ele} />;
      })}
    </div>
  );
};

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
