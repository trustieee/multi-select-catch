import React, { useState, useEffect } from 'react';
import CatchMultiSelect from '../multiselect/CatchMultiSelect';
import './Sample.css';

export default function Sample() {
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
