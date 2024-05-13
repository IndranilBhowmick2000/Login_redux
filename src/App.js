// import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './Components/Login';
import { selectUser } from './redux/Userslice';
import Logout from './Components/Logout';

function App() {
  const data= useSelector(selectUser)
  return (
    <div className="App">
      {data? <Logout/>:<Login/>}
    </div>
  );
}

export default App;
