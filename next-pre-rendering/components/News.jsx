import React, { useState, useEffect } from "react";
import Link from "next/link";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        const response = await fetch("http://localhost:3070/api/news");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, []);

  return (
    <>
      <h1>Articles Contaioner, Total Articles = {news.length}</h1>
      <Link href="/">
        <button>Home Page</button>
      </Link>
      {news.map((ele) => {
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

export default News;
