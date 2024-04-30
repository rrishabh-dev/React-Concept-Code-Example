
import React, { useEffect, useState } from 'react';

const APICallExample = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');

  // fetching data from API & setting it in state variables on initial render of a component.
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) throw new Error('Something went wrong !!');
      const data = await response.json();
      setData(data.products);
      setFilteredData(data.products);
    };
    fetchAPI();
  }, []);
  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data.products);
  //     setFilteredData(data.products);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //   });
  // }, []);

  /* whenever handleChange function of search box triggered, it changes "searchText" state variable
  which cause a re-render of component & eventually the below useEffect gets triggered which is filtering the data
  as per the input received from user in search box and setting that filtered data into its respective state variable.*/
  useEffect(() => {
    const filteredProducts = data.filter(el => el.title.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredData(filteredProducts);
  }, [data, searchText]);
  
  return (
    <div>
      <h1 style={{ margin: 0 }}>API Call Example</h1>
      <p style={{ margin: 0 }}>Total Products: {filteredData.length}</p>
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <form>
          <input
            type="search"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search by Title"
            style={{ padding: '.4rem', width: '100%' }}
          />
        </form>
      </div>
      {filteredData.length !== 0
        ? filteredData.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                padding: '1rem',
                margin: '0.5rem 0',
                border: '1px solid',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div><strong>Title: </strong>{el.title} ({el.brand})</div>
                <div><strong>Description: </strong>{el.description}</div>
                <div><strong>Price: </strong>${el.price}</div>
                <div><strong>Category: </strong>{el.category}</div>
                <div><strong>Customer's Rating: </strong>{el.rating}</div>
                <div><strong>Available Units: </strong>{el.stock}</div>
              </div>
              <div>
                <img src={el.thumbnail} alt={el.title} width="200" height="150" />
              </div>
            </div>
          )
        })
        : 'Loading...'
      }
    </div>
  );
}

export default APICallExample;
