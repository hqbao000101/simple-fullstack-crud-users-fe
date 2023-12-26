import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import AddStudent from "./pages/AddStudent";
import ListStudent from "./pages/ListStudent";
import UpdateStudent from "./pages/UpdateStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<ListStudent />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/update/:id" element={<UpdateStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
