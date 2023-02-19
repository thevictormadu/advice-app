import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState("Click the light bulb to get inspired");

  const nuggets = [
    {
      nugget: "There are no shortcuts to the top of the palm tree.",
    },
    {
      nugget:
        "The big game often appears when the hunter has given up the hunt for the day.",
    },
    {
      nugget:
        "Haste and hurry can only bear children with many regrets along the way.",
    },
    {
      nugget: "Rising early makes the road short.",
    },
    {
      nugget: "A person with too much ambition cannot sleep in peace.",
    },
    {
      nugget: "Around a flowering tree, there are many insects.",
    },
    {
      nugget:
        "You cannot climb to the mountain top without crushing some weeds with your feet.",
    },
    {
      nugget:
        "If you are building a house and a nail breaks, do you stop building, or do you change the nail?",
    },
    {
      nugget: "No tattoo is made without blood.",
    },
    {
      nugget:
        "No person is born great. Great people become great when others are sleeping.",
    },
    {
      nugget: "Examine what is said, not who is speaking.",
    },
    {
      nugget:
        "Knowledge is a garden. If it isn’t cultivated, you can’t harvest it.",
    },
    {
      nugget: "Restless feet might walk you into a snake pit.",
    },
    {
      nugget: "No shortcuts exist to the top of a palm tree.",
    },
    {
      nugget: "Tomorrow belongs to people who prepare for it today.",
    },
    {
      nugget: "No medicine exists that can cure hatred.",
    },
    {
      nugget: "All monkeys cannot hang from the same branch.",
    },
    {
      nugget:
        "He who digs a grave for his enemy might as well be digging one for himself.",
    },
    {
      nugget: "Even the lion protects himself against flies.",
    },
    {
      nugget: "However long the night, the dawn will break.",
    },
    {
      nugget:
        "If you heal the leg of a person, do not be surprised if they use it to run away.",
    },
    {
      nugget: "Once you carry your own water, you’ll remember every drop.",
    },
    {
      nugget:
        "No matter how beautiful and well crafted a coffin might look, it will not make anyone wish for death.",
    },
    {
      nugget:
        "A low-class man will just talk; deeds are the hallmark of a gentleman.",
    },
    {
      nugget:
        "The water of the river flows on without waiting for the thirsty man.",
    },
    {
      nugget: "No matter how hot your anger is it cannot cook yams.",
    },
    {
      nugget: "It is the crooked wood that can show the best sculptor.",
    },
  ];

  function handleClick() {
    setCount((prev) => (nuggets.length > count ? prev + 1 : 0));
    // let index = Math.floor(Math.random() * nuggets.length);
    setQuote(
      count !== nuggets.length
        ? nuggets[count].nugget
        : "That's the end for now. Want to go again? you know what to do ;)"
    );
    console.log(index);
  }

  return (
    <div className=" w-full h-screen bg-slate-800 flex px-10">
      <div className="h-auto w-96 shadow-xl bg-slate-700 m-auto items-center rounded-xl text-center p-7 relative m">
        <p className="text-[0.7rem] text-purple-400 font-bold tracking-[0.2rem] mb-5">
          AFRICAN NUGGETS <span>#{count}</span>
        </p>

        <h1 className="text-white text-xl font-bold text-slate-300 mb-5">
          "{quote}"
        </h1>
        <div className="flex justify-center items-center mb-3">
          <hr className="flex-1 border-slate-500" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-slate-400 mx-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>

          <hr className="flex-1 border-slate-500" />
        </div>
        <div className="w-full px-auto absolute left-0 flex justify-center">
          <div
            onClick={handleClick}
            className="icon rounded-full w-12 h-12 bg-purple-400 flex justify-center items-center cursor-pointer hover:bg-purple-300 hover:shadow-[2px_2px_30px_#60a5fa] transition duration-300 hover:text-purple-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
              <path
                fill-rule="evenodd"
                d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-slate-400  text-xs absolute bottom-10 right-0 justify-self-center w-full text-center">
        made with &#9829; by Victor Madu
      </p>
    </div>
  );
}

export default App;
