// import './App.css';
import './custom.scss';

import Counter from './Counter';
import Details from './Details';

export function setMinimum(fn, min=1) {
  return (arg) => {
    if (arg < min) {
      arg = min;
    }
    fn(arg);
  }
}


function App() {

  

  return (
    <div className="App text-white container" style={{minHeight: "100vh"}}>
      <div class='row w-50 justify-content-start'>
        <div class='col'>
          <Details  />
        </div>
      </div>
      <div style={{minHeight: "90vh"}} class='row align-items-center'>
            <div class='col'>
              <Counter  />
            </div>
      </div>
    </div>
  );
}

export default App;
