// //Higher Order Function

// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <h1>HOC</h1>
//       <HOCRed cmp={Counter}/>
//       <HOCGreen cmp={Counter}/>
//     </div>
//   );
// }

// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red', width:100}}>Red<props.cmp/></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green', width:100}}>Green<props.cmp/></h2>
// }

// function Counter()
// {
//   const[count, setCount] = useState(0)
//   return <div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }
// export default App;

import { Suspense } from 'react';
import React  from "react";
// import About from './About'
// import {add} from './Math'
// console.warn(add(10,20));
// import('./Math').then((result)=>{
//   console.warn("result",result.add(20,30))
// })
const About = React.lazy(()=>import('./About'))
const App =() =>{
  return(
    <div>
      <h1>code</h1>
      <About></About>
    </div>
  )
}
export default App;