import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Rooms from "./components/core/Homepage/Rooms/RoomsInformation";
import Resturent from "./components/core/Homepage/Resturent/Resturent";
import Camping from "./components/core/Homepage/Camping/Camping";
import Sightseeing from "./components/core/Homepage/Sightseeing/Sightseeing";
import FooterMain from "./components/core/Homepage/FooterMain";
import AboutSaanvi from "./components/core/Homepage/AboutSaanvi/AboutSaanvi";
import MastersuiteIndormation from "./components/core/Homepage/Rooms/Mastersuite/MastersuiteIndormation";
import ExecutivesuiteInformation from "./components/core/Homepage/Rooms/ExecutiveSuite/ExecutivesuiteInformation";
import ExecutiveJuniorSuiteinformation from "./components/core/Homepage/Rooms/ExecutiveJuniorSuite/ExecutiveJuniorSuiteinformation";
import StandardRoomswb from "./components/core/Homepage/Rooms/StandardRoomsWB/StandardRoomswb";
import StandardRooms from "./components/core/Homepage/Rooms/StandardRooms/StandardRooms.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutSaanvi" element={<AboutSaanvi/>}/>
        <Route path="/Resturent" element={<Resturent/>}/>
        <Route path="/Camping" element={<Camping/>}/>
        <Route path="/Sightseeing" element={<Sightseeing/>}/>
        <Route path="/Rooms" element={<Rooms/>}/>
        <Route path="/footer" element={<FooterMain/>}/>
        <Route path="/mastersuite" element={<MastersuiteIndormation/>}/>
        <Route path="/executivesuite" element={<ExecutivesuiteInformation/>}/>
        <Route path="/executivejuniorsuite" element={<ExecutiveJuniorSuiteinformation/>}/>
        <Route path="/standardroomswb" element={<StandardRoomswb/>}/>
        <Route path="/standardrooms" element={<StandardRooms/>}/>

      </Routes>
    </div>
  );
}

export default App;
