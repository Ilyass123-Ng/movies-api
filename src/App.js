import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FilmDetails from "./components/Film";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
    <Route path="/film/:id" element={<FilmDetails />} />     
     </Routes>
    </BrowserRouter>
  );
}

export default App;
