import Navbar from "./components/Navbar";
import AOS from "aos";

function App() {
  AOS.init();
  return (
    <>
      <div className="general">
        <Navbar />
      </div>
    </>
  );
}

export default App;
