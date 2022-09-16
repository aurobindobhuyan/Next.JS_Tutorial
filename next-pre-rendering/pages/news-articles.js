import React, { useState } from "react";
import { useRouter } from "next/router";

const newsArticles = ({ data }) => {
  const [news, setNews] = useState(data);
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch(
      "http://localhost:3070/api/news-articles?category=Movies"
    );
    const data = await response.json();
    setNews(data);
    router.push("/news-articles?category=Movies", undefined, {
      shallow: true,
    });
  };

  return (
    <>
      <h1>This is a demo of using SSR With client side data fetching</h1>
      <button onClick={handleClick}>Sports Category</button>
      {news.map((ele) => {
        return (
          <div key={ele._id}>
            <h1>
              {ele.title} - {ele.category}
            </h1>
            <h3>{ele.description}</h3>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default newsArticles;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const response = await fetch(
    `http://localhost:3070/api/news${
      query.category ? `-articles?category=${query.category}` : ""
    }`
  );
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
