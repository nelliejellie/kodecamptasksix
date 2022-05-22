import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, {useState} from "react";
import Index from "./views/Index";
import About from "./views/About";
import Instructor from "./views/Instructor";
import Navbar from "./components/Navbar";
import Signin from "./views/Signin";
import Register from "./views/Register";
import Appp from "./views/app/Appp";
import Details from "./components/Details";
import './App.css';
import course from "./db";


function App() {
  const [user, setUser] = useState("");
  return (
    <Router>
      <div className="h-full">
        <div className=''>
          <Navbar user={user} updateUser={setUser} />
        </div>
        <Routes>
            <Route path="/" element={<Index user={user} updateUser={setUser} />} />
            <Route path="/app" element={<Appp user={user} updateUser={setUser} />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/login" element={<Signin user={user} updateUser={setUser} />} />
            <Route path="/register" element={<Register user={user} updateUser={setUser} />} />
            <Route path="/details/:id" element={<Details user={user} courses={course} />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
