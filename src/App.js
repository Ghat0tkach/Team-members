import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header'
import Member from './layouts/member';
import peopleData from './data.json'


function App() {
  return (
   <Member peopleData={peopleData}/>
  );
}


export default App;
