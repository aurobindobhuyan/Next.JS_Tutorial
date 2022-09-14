import React from "react";
import Link from "next/link";

const NewsContainer = ({ data }) => {
  return (
    <>
      <h1>Total number of news = {data.length}</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      {data.map((ele) => {
        return (
          <div key={ele._id}>
            <Link href={`/news/${ele._id}`}>
              <a>{ele.title}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default NewsContainer;

export async function getServerSideProps() {
  const result = await fetch("http://localhost:3070/api/news");
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}
