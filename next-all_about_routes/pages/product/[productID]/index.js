import React from 'react';
import { useRouter } from 'next/router';

const ProductID = () => {
   const router = useRouter();
   const { productID } = router.query;

   return (
      <>
         <h1>Showing information of product - {productID}</h1>
      </>
   );
}

export default ProductID;
