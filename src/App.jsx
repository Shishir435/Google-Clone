import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

