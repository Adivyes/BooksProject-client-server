import RouterBookApp from './RouterBookApp'
import './App.css';
import { serverCall } from './service/bookService';
import React, { useEffect, useState } from 'react';

function App() {

// const [result, setResult] = useState('')

// useEffect(serverCallHendler, [])

// function serverCallHendler(){
//   serverCall().then((res)=>{setResult(res); console.log(res); })
// }

  return (
    <div className="App">
<RouterBookApp/>
{/* <h5>{result}</h5> */}
    </div>
  );
}

export default App;
