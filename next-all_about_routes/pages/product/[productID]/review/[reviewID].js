import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ReviewID = () => {
  const router = useRouter();
  const { productID, reviewID } = router.query;

  return (
    <>
      <h1>Review of {reviewID} of Product {productID}</h1>
      <Link href={`/product/${productID}`}>
        <button>Back</button>
      </Link>
    </>
  );
}

export default ReviewID;
