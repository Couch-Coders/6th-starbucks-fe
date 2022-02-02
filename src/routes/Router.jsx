import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import MyPage from "./MyPage";
import Detail from "./Detail";
import About from "./About";
import RegisterBeverage from "./RegisterBeverage";
import UpdateBeverage from "./UpdateBeverage";
import NotFound from "./NotFound";

const Router = () => {
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
    )
}

export default Router;