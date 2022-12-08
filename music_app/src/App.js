import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NavSidebar from "./components/NavSidebar/NavSidebar";
import MusicList from "./components/MusicList/MusicList";
import WhishList from "./components/WhishList/WhishList";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.songsReducer.theme);
  console.log("theme" + theme);
  return (
    <div className="data" data-color-mode={theme}>
      <BrowserRouter>
        <NavSidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/songslist" element={<MusicList />}></Route>
          <Route path="/whishlist" element={<WhishList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
