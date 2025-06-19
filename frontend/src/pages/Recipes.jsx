import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     _id: "1",
//     name: "Pizza",
//     time: "10min",
//     difficulty: "Hard",
//     description:
//       "Traditional Italian pizza with freth mozzarella,al. eins no matern",
//   },
//   {
//     _id: "1",
//     name: "Pizza",
//     time: "10min",
//     difficulty: "Easy",
//     description:
//       "Traditional Italian pizza with freth mozzarella,al. eins no matern",
//   },
//   {
//     _id: "1",
//     name: "Pizza",
//     time: "10min",
//     difficulty: "Mid",
//     description:
//       "Traditional Italian pizza with freth mozzarella,al. eins no matern",
//   },
//   {
//     _id: "1",
//     name: "Pizza",
//     time: "10min",
//     difficulty: "Hard",
//     description:
//       "Traditional Italian pizza with freth mozzarella,al. eins no matern",
//   },
// ];

export default function Recipes() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getRecipes = async () => {
    const res = await axios.get("/get");
    setData(res.data);
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="">
      <div className=" bg-white/30 backdrop-blur-md flex justify-between p-2 rounded-lg text-white my-2">
        {" "}
        <p className=" font-semibold ">🔍RecipeFinder</p>
        <button
          onClick={(e) => navigate("/")}
          className=" bg-white/30 backdrop-blur-md rounded-lg"
        >
          Home
        </button>
      </div>
      <div className=" bg-white/30 backdrop-blur-md text-center p-2 rounded-lg text-white flex-wrap">
        {" "}
        <p className=" text-5xl font-bold ">Recipe Collection</p>
        <p className=" text-sm">Choose a recipe to see detailed instruction.</p>
      </div>
      <div className=" grid grid-cols-3 gap-4 mt-8">
        {data.map((itm, idx) => (
          <div
            key={idx}
            className=" bg-white rounded-lg p-4 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 "
            onClick={() => navigate(`/recipe/${itm._id}`)}
          >
            <div className=" flex justify-center items-center py-2">
              <img
                src={`${import.meta.env.VITE_IMGENDPOINT}${itm.file}`}
                className=" w-20 text-center"
                alt=""
              />
            </div>
            <p className=" font-semibold text-2xl">{itm.name}</p>
            <div className=" flex justify-between text-sm">
              <span className=" text-gray-400">⏱ {itm.time}</span>
              <span
                className={` font-semibold rounded-lg p-1 ${
                  itm.difficulty == "Hard"
                    ? "bg-red-300 text-red-700"
                    : itm.difficulty == "Mid"
                    ? "bg-yellow-200 text-yellow-600"
                    : "bg-green-300 text-green-600"
                }`}
              >
                {itm.difficulty}
              </span>
            </div>
            <p className=" text-gray-500 text-sm">{itm.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
