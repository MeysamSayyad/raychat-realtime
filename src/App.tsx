import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <>
      <section className=" flex w-screen items-center justify-center bg-gray-800 gap-3 h-screen">
        <Link to={"/webapp"}>
          <button className="  cursor-pointer bg-agent-main  px-5 py-2 hover:scale-105 transition-all  text-white text-2xl rounded-2xl  ">
            webapp
          </button>
        </Link>
        <Link to={"/client"}>
          <button className=" cursor-pointer bg-client-100  px-5 py-2 hover:scale-105 transition-all  text-white text-2xl rounded-2xl  ">
            Client
          </button>
        </Link>
      </section>
    </>
  );
}

export default App;
