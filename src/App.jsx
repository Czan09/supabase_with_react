import { Route, Router, Routes } from "react-router-dom";
import RegisterPage from "./RegisterPage.jsx";

function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<RegisterPage/>} />
    </Routes>
   </>
  );
}

export default App;
