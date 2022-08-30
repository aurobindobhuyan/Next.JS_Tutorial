import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProductID = () => {
   const router = useRouter();
   const { productID } = router.query;

   return (
      <>
         <h1>Showing information of product - {productID}</h1>
         <Link href={`/product/${productID}/review/${Math.round(Math.random() * 100)}`}>
            <button>Review</button>
         </Link>
         <Link href='/product'>
            <a>Back</a>
         </Link>
      </>
   );
}

export default ProductID;
