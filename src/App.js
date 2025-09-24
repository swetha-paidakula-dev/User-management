// //import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home/home';
// import Adduser from './components/Adduser/index'

// function App() {
//   return (
//   <><div className="App">
//       <Home />
//     </div><div><Adduser /></div></>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users/users";
import AddUser from "./components/Adduser";
import './index.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;