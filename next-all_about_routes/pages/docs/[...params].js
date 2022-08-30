import React from 'react';
import { useRouter } from 'next/router';

const AllPrams = () => {
   const router = useRouter();
   const { params = [] } = router.query;

   return (
      <h1>All Params page {params.length}</h1>
   );
}

export default AllPrams;
