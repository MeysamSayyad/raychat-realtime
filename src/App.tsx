import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <section className=" flex w-screen items-center justify-center bg-gray-800 gap-3 h-screen">
        <button className=" cursor-pointer bg-gray-500  px-5 py-2 hover:scale-105 transition-all  text-white text-2xl rounded-2xl  ">
          <Link to={"/webapp"}>webapp</Link>
        </button>
        <button className=" cursor-pointer bg-gray-500  px-5 py-2 hover:scale-105 transition-all  text-white text-2xl rounded-2xl  ">
          <Link to={"/client"}>Client</Link>
        </button>
      </section>
    </>
  );
}

export default App;
