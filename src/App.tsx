import { LogIn } from "./components/LogIn.tsx";
import { Route, Routes } from "react-router-dom";
import { Content } from "./components/Content.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
