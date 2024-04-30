import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import NewTodo from "./pages/NewTodo";
import EditTodo from "./pages/EditTodo";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newtodo" element={<NewTodo />} />
        <Route path="/edit/:id" element={<EditTodo />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
