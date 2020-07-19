import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Predictions } from 'aws-amplify';

function App() {
  const [response, setResponse] = useState('Please update a photo..');
  async function identify(event) {
    setResponse('Identifying text...');
    const {
      target: { files },
    } = event;
    const file = files[0];
    const data = await Predictions.identify({ text: { source: { file }, format: 'PLAIN' } });
    console.log('Text ', data.text.fullText);
    setResponse(data.text.fullText);
  }
  return (
    <div className="App">
      <h3>Text Identification </h3>
      <input type="file" onChange={identify} />
      <p>{response}</p>
    </div>
  );
}

export default App;
