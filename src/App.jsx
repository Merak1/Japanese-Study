import { useState } from "react";

import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import { ReactFuri } from "react-furi";
import FuriWrap from "./components/Furiwrap";
import NavBar from "./components/NavBar";
import GenkiSummary from "./components/Genki_1_lessons/GenkiSummary";
import ErrorPage from "./components/routes/error-page";
import Home from "./components/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-emerald-100 font-sans text-center ">
        {/* <h1 className="text-3xl ">Japanese</h1>
        <FuriWrap color="red" bold="bold">
          <ReactFuri word="日本語" reading="にほんご" />
        </FuriWrap> */}
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} /> */}

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
