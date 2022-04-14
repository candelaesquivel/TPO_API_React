import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from './components/BarraHeader';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {
  return (
    <div>
      <header>
          <PrimarySearchAppBar></PrimarySearchAppBar>,
      </header>
      <body>
        <Body></Body>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
      
  );
}

export default App;
