import React from 'react';
import { useRouter } from 'next/router';

const AllPrams = () => {
   const router = useRouter();
   const { params = [] } = router.query;

   return (
      <>
         {
            params.length > 0 && params.map((ele, i) => <p key={i}>This is the {i + 1}'s route {ele}</p>)
         }
      </>
   );
}

export default AllPrams;
