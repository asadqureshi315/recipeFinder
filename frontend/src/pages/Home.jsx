import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className=" bg-white/30 backdrop-blur-md flex text-center p-2 rounded-lg text-white my-2 flex-wrap w-44 mx-auto">
        {" "}
        <p className=" font-semibold ">🔍RecipeFinder</p>
        <button className=" bg-white/30 backdrop-blur-md rounded-lg">
          About
        </button>
      </div>
      <div className=" w-96 bg-white text-center mx-auto my-auto rounded-lg p-4">
        <p className=" text-6xl">🧑‍🍳</p>
        <h1 className=" text-2xl font-semibold bg-gradient-to-r from-indigo-400 to-violet-500 inline-block text-transparent bg-clip-text">
          Recipe Finder
        </h1>
        <p className=" text-sm text-gray-700">
          Discover delicious recipes for every occasion. From quick weeknight
          dinners to impressive weekend treats.
        </p>
        <button
          className="bg-gradient-to-r from-indigo-400 to-violet-500 p-2 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          onClick={() => navigate("/recipes")}
        >
          🔍Browse Recipe
        </button>
      </div>
    </div>
  );
}
