import React from "react";
import Link from 'next/link'

const NewsInformation = ({ data }) => {
  return (
    <div>
      <Link href="/news">
        <button>Back to News</button>
      </Link>
      <h1>This is single news information</h1>
      {Object.keys(data).map((ele) => {
        return (
          <blockquote key={ele}>
            {ele} - {data[ele]}
          </blockquote>
        );
      })}
    </div>
  );
};

export default NewsInformation;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:3070/api/news/${params.newsID}`
  );
  const data = await response.json();

  if (!data._id) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
  };
}
