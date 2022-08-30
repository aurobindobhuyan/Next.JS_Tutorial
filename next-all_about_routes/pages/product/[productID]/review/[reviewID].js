import React from 'react';
import { useRouter } from 'next/router';

const ReviewID = () => {
  const router = useRouter();
  const { productID, reviewID } = router.query;

  return (
    <>
      <h1>Review of {reviewID} of Product {productID}</h1>
    </>
  );
}

export default ReviewID;
