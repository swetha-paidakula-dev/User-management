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
import Adduser from "./components/Adduser";
import Edituser from "./components/Edituser";
import Deleteuser from "./components/Deleteuser";
import './index.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add-user" element={<Adduser />} />
        <Route path="/edit-user" element={<Edituser />} />
        <Route path="/delete-user" element={<Deleteuser />} />
        <Route path="/home" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;