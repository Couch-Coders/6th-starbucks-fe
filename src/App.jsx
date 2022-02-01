import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MyPage from "./routes/MyPage";
import Detail from "./routes/Detail";
import About from "./routes/About";
import RegisterBeverage from "./routes/RegisterBeverage";
import UpdateBeverage from "./routes/UpdateBeverage";
import NotFound from "./routes/NotFound";

const App = () => {
  // TODO refactoring routing using nested routing
  // https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pages/mypage" element={<MyPage/>}/>
        <Route path="/pages/detail/:id" element={<Detail/>}/>
        <Route path="/pages/about" element={<About/>}/>
        <Route path="/pages/register-beverage" element={<RegisterBeverage/>}/>
        <Route path="/pages/update-beverage" element={<UpdateBeverage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
