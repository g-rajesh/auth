import React, {useState} from 'react';

const arr = [ "Easy", "Medium", "Hard" ]

const TableTr = ({id,email}) => {

  const [ difficulty, setDifficulty ] = useState(Math.floor(Math.random() * 3))

  return (  
    <>
      <tr>
        <td colSpan="1">{id}</td>
        <td colSpan="2">{email}</td>
        <td colSpan="2">{arr[difficulty]}</td>
      </tr>
    </>
  );
}
 
export default TableTr;