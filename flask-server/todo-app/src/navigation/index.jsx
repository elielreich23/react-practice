import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Profile from "../pages/Profile";
import Projects from "../pages/Projects";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home/index";
import Sidebar from "../components/Sidebar";
import Todo from "../components/Todo-section";
import Progress from "../components/Progress";
import Template from "../pages/Template";
import Done from "../components/Done";


const Navigation = () => {
    return(
        <>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Todo />
                <Progress />
                <Done />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/template" element={<Template />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/progress" element={<Progress />} />
                    <Route path="/done" element={<Done />} />
                </Routes>
            </BrowserRouter>
                
        </>
    )
}

export default Navigation;