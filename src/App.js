import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Rooms from "./components/core/Homepage/Rooms/RoomsInformation";
import Resturent from "./components/core/Homepage/Resturent/Resturent";
import Camping from "./components/core/Homepage/Camping/Camping";
import Sightseeing from "./components/core/Homepage/Sightseeing/Sightseeing";
function App() {

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Resturent" element={<Resturent/>}/>
        <Route path="/Camping" element={<Camping/>}/>
        <Route path="/Sightseeing" element={<Sightseeing/>}/>
         <Route path="/Rooms" element={<Rooms/>}/>
      </Routes>
    </div>
  );
}

export default App;
