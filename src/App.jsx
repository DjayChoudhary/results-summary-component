import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App shadow-lg flex mx-8">
      <section
        id="result"
        className="bg-blue-700 bg-gradient-to-b from-[#7857ff] to-[#2e2be9] p-4 rounded-2xl flex flex-col justify-evenly items-centertext-center w-1/2 text-[#c8c7ff] font-semibold"
      >
        <h2>Your Result</h2>
        <div className="rounded-full bg-gradient-to-b from-[#4e21ca] to-[#2421ca00] h-28 w-28 flex flex-col justify-center items-center mx-auto">
          <span className="text-4xl font-bold text-white">76</span>
          <span className="text-xs font-normal opacity-70">of 100</span>
        </div>
        <h3 className="text-white">Great</h3>
        <p className="text-xs font-light mx-4 text-[#ebf1ff]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section
        id="summary"
        className="rounded-2xl flex flex-col justify-center w-1/2 p-6 gap-3"
      >
        <h2 className="text-lg font-bold text-gray-700 self-start">Summary</h2>
        <h4 className="w-full bg-red-100 text-red-500 rounded-md font-bold p-1">
          Reaction 80 / 100
        </h4>
        <h4 className="w-full bg-yellow-100 text-yellow-500 rounded-md font-bold p-1">
          Memory 92 / 100
        </h4>
        <h4 className="w-full bg-green-100 text-green-500 rounded-md font-bold p-1">
          Verbal 61 / 100
        </h4>
        <h4 className="w-full bg-blue-100 text-blue-900 rounded-md font-bold p-1">
          Visual 72 / 100
        </h4>
        <button className="bg-[#303b5a] rounded-full py-2 px-1 text-white font-medium text-sm">
          Continue
        </button>
      </section>

      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </main>
  );
}

export default App;
