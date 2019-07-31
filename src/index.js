import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CatchMultiSelect from './multiselect/CatchMultiSelect';
import './app.css';

function App() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetch('/names')
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error('invalid response:' + resp);
      })
      .then(setOptions)
      .catch(reason => {
        console.log('erorr happened:----| ' + reason);
      });
  }, []);

  return (
    <div id="test-container">
      <CatchMultiSelect options={options || ['loading...']} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
