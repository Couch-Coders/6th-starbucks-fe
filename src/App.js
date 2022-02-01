import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MyPage from "./routes/MyPage";
import Detail from "./routes/Detail";
import About from "./routes/About";
import RegisterBeverage from "./routes/RegisterBeverage";
import UpdateBeverage from "./routes/UpdateBeverage";

function App() {
  return (
    <BrowserRouter basename="/pages">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/detail/1" element={<Detail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register-beverage" element={<RegisterBeverage/>}/>
        <Route path="/update-beverage" element={<UpdateBeverage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
