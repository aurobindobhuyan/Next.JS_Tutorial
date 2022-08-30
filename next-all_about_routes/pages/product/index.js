import React from 'react';
import Link from 'next/link';

const Product = () => {
   return (
      <>
         <h1>This is All Products page</h1>
         <Link href={`/product/${1}`}>
            <a>Product 1</a>
         </Link>
         <br />
         <br />
         <Link href={`/product/${2}`}>
            <a>Product 2</a>
         </Link>
         <br />
         <br />
         <Link href={`/product/${3}`}>
            <a>Product 3</a>
         </Link>
      </>
   );
}

export default Product;
