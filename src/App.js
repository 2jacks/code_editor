import './App.css';

import {Card} from 'antd'

import {Code} from "./components/Code/Code";

import {files} from "./mocks/files";

function App() {
  return (
    <div className="App">
      <Card style={{width: "90vw", height: 800, margin: '20px auto'}}>
        <Code data={files}/>
      </Card>
    </div>
  );
}

export default App;
