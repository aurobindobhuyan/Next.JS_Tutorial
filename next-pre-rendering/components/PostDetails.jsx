import React from "react";
import Link from "next/link";

const PostDetails = ({ id, title }) => {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <a>
          {id} - {title}
        </a>
      </Link>
    </div>
  );
};

export default PostDetails;
