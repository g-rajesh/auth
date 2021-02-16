import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TableTr from './TableTr';

import styles from './Table.module.css';
import Pagination from './Pagination';

const Table = () => {

  const url = "https://jsonplaceholder.typicode.com/comments";
  const PER_PAGE = 10;
  let pageCount = null;
  let currentPageData = null;

  //fetchind data
  const fetchData = () => {    
    axios.get(url)
      .then(res => {
        setData(res.data);
      })
  }

  //useState()
  const [ data, setData ] = useState(null);
  const [ currentPage, setCurrentPage ] = useState(0);

  // useEffect
  useEffect(()=>{
    fetchData();
  },[]);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const changeHandler = (e) => {
    if(e.target.value === ''){
      setData(fetchData());
    }
    else if(data){
      const newData = data.filter(({id,email})=>{
        return email.includes(e.target.value)
      });
      console.log(newData.length);
      setData(newData);
    }
  }

  const offset = currentPage * PER_PAGE;

  if(data){
    currentPageData = 
                data.slice(offset, offset + PER_PAGE)
                .map((data)=>{
                    return (
                        <TableTr key={data.id} {...data} />
                    )
                });
    pageCount = Math.ceil(data.length / PER_PAGE);               
  }

  return (   
    <>  
      <div className={styles.toolbar}>
        <input type="text" onChange={changeHandler} placeholder="Search question titles or IDs" />
        <select name="difficulty" id="difficulty">
          <option value="Default">Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <select name="tags" id="tags">
            <option value="Default">Tags</option>
            <option>Array</option>
            <option>Linked List</option>
            <option>Tree</option>
        </select>
      </div>
      <div className={styles.tableContents}>
        <table>
          <thead>
            <tr>
              <th colSpan="1">id</th>
              <th colSpan="2">Challenges</th>
              <th colSpan="2">Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData}
          </tbody>
        </table>
      </div>
      <Pagination pageCount={pageCount} pageClick={handlePageClick} />
    </>
  );
}
 
export default Table;