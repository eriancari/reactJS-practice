
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {

  /** Changed <div> to <> (or <Fragment> can be used, make sure to add Fragment in import React)
  to remove the additional and unnecessary <div> */
  return (
    <> 
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
