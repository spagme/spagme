import './App.css';
import { useState } from 'react';
import tests from './gen//tests/tests';

function App() {  

  const [tmp, setTmp] = useState([]);
  const [current, setCurrent] = useState(0)
  const [url, setUrl] = useState("http://localhost:5000/api");

  function run() {   
    exec(tests[current], current);
  }

  function exec(test, index) {
    console.log(index);
    test.execute(test, url).then(() => {   
        console.log(test);
        setTmp(tmp => [...tmp, test]);
        setCurrent(index);
        index++;                
        if(index < tests.length) {
          exec(tests[index], index);
        }
    });
  }

  return (
    <div className="container">
      <div className="mt-5">
      <input type={"text"} onChange={ (e) => setUrl(e.target.value) } value={url}/><br/>        
        <button onClick={run} className="btn btn-primary">Run tests</button>
        <h5>{current}</h5>

        <div className="mt-5 mb-5">
          <table>
            <tbody>
              {tmp.filter(o => o.status !== "SUCCESS").map(o => <tr key={o.name}><td>{o.name}<div>{o.error}</div></td><td>{o.status}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default App;
