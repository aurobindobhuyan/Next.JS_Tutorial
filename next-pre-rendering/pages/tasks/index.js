import React, { useEffect, useState } from "react";
import Link from "next/link";

const Tasks = ({ data }) => {
  return (
    <>
      <h1>This is the Task home page</h1>
      {data.map((ele) => {
        return (
          <div key={ele._id}>
            <Link href={`/tasks/${ele._id}`}>
              <a>{ele.title}</a>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Tasks;

export const getStaticProps = async () => {
  const result = await fetch("http://localhost:3070/api/tasks");
  const data = await result.json();

  return {
    props: {
      data,
    }
  };
};
