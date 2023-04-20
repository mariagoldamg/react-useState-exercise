import {useState} from 'react';
import {data} from './data'
import './App.css';

function App() {

  const [vinil, setVinil] = useState(data);

  return (
    <div >
     {vinil.map((thing =>{
      const {id, toListenTo} = thing;
      return (
        <div key={id}>
          <p>{id} - {toListenTo}</p>
        </div>
      )
     }))} 
     <button onClick = {()=> setVinil([])}> Delete All</button>
    </div>
  );
}

export default App;
