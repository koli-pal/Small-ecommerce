import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Componants/Routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div>checking github pr</div>
    </>
  );
}

export default App;
