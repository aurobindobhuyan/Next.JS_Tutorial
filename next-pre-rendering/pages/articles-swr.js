import React from "react";
import useSWR from "swr";
import Link from "next/link";

const fetcher = async () => {
  const result = await fetch("http://localhost:3070/api/news");
  const data = await result.json();
  return data;
};

const ArticlesSWR = () => {
  const { data, error } = useSWR("newsData", fetcher);

  return (
    <div>
      <h1>This is the component fetching the data using SWR</h1>
      {error ? (
        <h3>Error while fetching the data</h3>
      ) : !data ? (
        <h3>Loading....</h3>
      ) : (
        <>
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
      )}
    </div>
  );
};

export default ArticlesSWR;
