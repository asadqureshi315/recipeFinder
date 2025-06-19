import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// const data = {
//   _id: "1",
//   name: "Pizza",
//   serving: "4-6",
//   time: "10min",
//   difficulty: "Hard",
//   description:
//     "Traditional Italian pizza with freth mozzarella,al. eins no matern",
//   incredients: [
//     "/ 2 Ibs chicken, cut into pieces",
//     "1 can occonut milk",
//     "2 1bsp curry ponder",
//     " 1 onion, diced",
//     " 3 cloves garlic, minced & 1 1bsp fresh ginger, grated",
//     " 2 1bsp vegetable oil",
//     " 1 can diced tomatoes",
//     "Salt and pepper to taste",
//   ],
//   instruction: [
//     "Heat oil in a large pot over medium-high heat.",
//     "Season chicken with salt and peoper, then brown in cot",
//     "Remove chicken and set aside.",
//     "Sauté onion until soltened,",
//     "goort s minutes.",
//     "Add garlic, ginger, and curry",
//     "powder, cook minute",
//     "Return chicken to pot with tomatoes and coconut milk.",
//     "Simmer 20-25 minutes until chicken is cooked through.",
//     "Serve over rice with fresh clantro.",
//   ],
// };

export default function RecipeDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const getRecipes = async () => {
    const res = await axios.get(`/get/${id}`);
    setData(res.data);
  };
  useEffect(() => {
    getRecipes();
  }, []);
  console.log(data);
  return (
    <div className=" ">
      {data.name ? (
        <>
          <div className=" bg-white/30 backdrop-blur-md flex justify-between p-2 rounded-lg text-white my-2">
            {" "}
            <p className=" font-semibold ">🔍RecipeFinder</p>
            <button
              onClick={(e) => navigate("/recipes")}
              className=" bg-white/30 backdrop-blur-md rounded-lg"
            >
              Recipes
            </button>
          </div>

          <div className=" py-10">
            <div className=" bg-white rounded-lg p-10 ">
              <div className=" flex justify-center items-center py-2">
                <img
                  src={`${import.meta.env.VITE_IMGENDPOINT}${data.file}`}
                  className=" w-20 text-center"
                  alt=""
                />
              </div>
              <p className=" font-semibold text-4xl text-center ">
                {data.name}
              </p>
              <div className=" w-40 mx-auto  flex justify-between text-sm text-gray-400">
                <span className=" ">⏱ {data.time}</span>
                <span className=" ">👥 {data.serving}</span>
                <span className="">📊{data.difficulty}</span>
              </div>
              <p className=" text-gray-500 text-sm text-center">
                {data.description}
              </p>
              <div className=" py-10 grid grid-cols-3">
                <div className=" py-2">
                  <p className=" text-2xl font-semibold">🛒 Incredients</p>
                  {data.incredients.map((item) => (
                    <p className=" text-gray-700 text-sm">✔️ {item}</p>
                  ))}
                </div>
                <div></div>
                <div>
                  <p className=" text-2xl font-semibold">📝 Instructions</p>
                  {data.instructions.map((item, index) => (
                    <p className=" text-gray-700 text-sm py-2">
                      <span className=" text-white text-xs bg-violet-500 p-1 rounded-full">
                        {index + 1}
                      </span>{" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className=" flex justify-between w-1/2 mx-auto">
                <button className="bg-gradient-to-r from-indigo-400 to-violet-500 p-2 text-white rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
                  {" "}
                  ❤️ Save to Favourite{" "}
                </button>
                <button
                  onClick={() => window.print()}
                  className=" p-2 border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white rounded-lg"
                >
                  {" "}
                  🖨️Print
                </button>
                <button className=" p-2 border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white rounded-lg">
                  {" "}
                  📤Share
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>loading</p>
      )}
    </div>
  );
}
