// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> I am Guna Sekhar.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import react from "react";
import navbar from'./navbar';
import {browserRouter,Rout,Switch} from 'react-router-dom';
const App =()=> {
  return (
    <div>
     <browserRouter>
     <navbar/>
     </browserRouter>
    </div>
  )
}

export default App
