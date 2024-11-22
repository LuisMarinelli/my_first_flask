import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProdutosList from './components/ProdutosList';

function App(){
  return(
    <div className='App'>
      <header className='bg-blue-600 text-white p-4 mb-4'>
        <h1>Minha Loja</h1>
      </header>
      <main>
        <ProdutosList/>
      </main>
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

export default App;
