import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {

  {document.title = 'Food Recipes'}

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
