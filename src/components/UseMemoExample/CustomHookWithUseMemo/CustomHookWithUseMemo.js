// import { useState, useEffect, useMemo } from 'react';

// const CustomHookWithUseMemo = ({ url }) => {
//   const [data, setData] = useState([]);  // when data is coming from api-call is in form of [Object].

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url);
//       const result = await response.json();
//       setData(result.products);
//     };

//     fetchData();
//   }, [url]);

//   // Memoize the data value
//   const memoizedData = useMemo(() => data, [data]);

//   return (
//     <>
//       <h1>Product List</h1>
//       {
//         memoizedData.length !== 0 ? memoizedData.map(({ id, title }) => {
//           return (
//             <ul key={`${id}`.concat(`${title.replaceAll(' ', '-')}`)}>
//               <li>{title}</li>
//             </ul>
//           );
//         }) : <>No data to display.</>
//       }
//     </>
//   );
// }

// export default CustomHookWithUseMemo;

import { useState, useEffect, useMemo } from 'react';

const CustomHookWithUseMemo = ({ url }) => {
  const [data, setData] = useState({});  // when data is coming from api-call is in form of Object.

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, [url]);

  // Memoize the data value
  const memoizedData = useMemo(() => data, [data]);

  return (
    <>
      <h1>Product List</h1>
      {
        Object.keys(memoizedData).length !== 0 && memoizedData.constructor === Object
        ? memoizedData?.products.map(({ id, title }) => {
          return (
            <ul key={`${id}`.concat(`${title.replaceAll(' ', '-')}`)}>
              <li>{title}</li>
            </ul>
          );
        })
        : <>No data to display.</>
      }
    </>
  );
}

export default CustomHookWithUseMemo;
