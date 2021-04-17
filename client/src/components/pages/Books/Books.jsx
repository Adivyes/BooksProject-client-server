import React, { useState, useEffect } from "react";
import { getAllBooks } from '../../../service/bookService';
import CustomTableComponents from '../../table/table';


const Books = () => {
  const [booksItems, setBooksItems] = useState([])
  const [nameChange, setNameChange] = useState('')
  const [PagsQuantity, setPagsQuantity] = useState(0)
  useEffect(serverCallHendler, [])

  function serverCallHendler() {
    getAllBooks().then((res) => { setBooksItems(res); console.log(res); })
  }

  const booksColumns = [

    {
      name: "name",
      label: "Book Name",
      options: {
        filter: true,
        sort: true,
      }

    },
    {

      name: "numberOfPages",
      label: "Number Of Pages",
      options: {
        filter: true,
        sort: true,
      }
    }

  ];

  return <div>
    <h2>Books</h2>
    <div>
      {React.Children.toArray(booksItems.map((book, index) => {console.log(book); return <h4>{index + 1} {book.data}</h4>}))}
    </div>
    <form>
      <label htmlFor="name">NAME</label>
      <input onChange={(event) => { setNameChange(event.target.value) }} type="text" name="name" /><br></br>
      <label htmlFor="numberOfPages">Num Of Pages</label>
      <input onChange={(event) => { setPagsQuantity(event.target.value) }} type="number" name="numberOfPages" />
    </form>
    <div>
      <CustomTableComponents title="My Books List" data={booksItems} columns={booksColumns} />
    </div>
  </div>;

};
export default Books;
