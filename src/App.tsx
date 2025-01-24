import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import sta from "./assets/standrews.png";
import arm from "./assets/arm.png";
import pre from "./assets/prefessionalsltd_logo.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div className="pt-20 flex flex-col items-center space-y-10">
        <h1 className="text-6xl font-mono">Osi Mayungbo</h1>
        <div className="space-x-2 flex flex-row items-center">
          <button className="text-2xl cursor-pointer bg-gray-200 border-2 border-solid border-gray-500 hover:bg-gray-300 py-4 px-4 rounded">
            📄 See My Resume
          </button>
          <p className="text-5xl">•</p>
          <button className="text-3xl flex items-center cursor-pointer border-2 border-solid border-gray-500 bg-blue-200 hover:bg-blue-300 py-3 px-4 rounded">
            <img className="mr-2" src={linkedin} width={40}></img> LinkedIn
          </button>
          <p className="text-5xl">•</p>
          <button className="text-3xl flex items-center cursor-pointer border-2 border-solid border-gray-500 py-3 px-4 hover:bg-[#f2ebeb] rounded">
            <img className="mr-2" src={github} width={40}></img> GitHub
          </button>
          <p className="text-5xl">•</p>
          <button className="text-3xl flex items-center cursor-pointer border-2 border-solid border-gray-500 bg-red-200 hover:bg-red-300 py-3.5 px-4 rounded">
            ✉️osimayungbo@gmail.com
          </button>
        </div>
        <button className="text-3xl flex items-center cursor-pointer text-blue-400 hover:text-blue-500">
          Click To See My Projects!
        </button>
        <div className="flex flex-row border-2 pb-5 border-solid">
          <div className="flex flex-col items-center w-280">
            <h1 className="text-4xl pt-5">About Me</h1>
            <br></br>
            <p className="text-xl flex items-center mb-15">
              Second Year<a className="text-blue-500 m-1">Direct Entry</a>
              Computer Science student at the
              <strong>
                <a className="text-blue-500 ml-1">University of St Andrews</a>
              </strong>
              <img className="mt-5" src={sta} width={80}></img>
              <em>(Sep 2024 - Jun 2027)</em>
            </p>
            <p className="text-xl flex items-center">
              Incoming Software Engineer Intern at
              <strong>
                <a className="text-blue-500 ml-1">Arm</a>
              </strong>
              <img className="mx-3" src={arm} width={80}></img>
              <em>(Jun 2025 - Aug 2025)</em>
            </p>
            <p className="text-xl flex items-center mt-11">
              Selected to attend Spring/Insight Programmes at
              <strong>
                <a className="text-blue-500 ml-1">SIG</a>
              </strong>
              ,
              <strong>
                <a className="text-blue-500 m-1">Bank Of America</a>
              </strong>
              and
              <strong>
                <a className="text-blue-500 m-1">Flow Traders</a>
              </strong>
              <em>(Mar 2025 - Apr 2025)</em>
            </p>
            <p className="text-xl flex items-center mt-11">
              Ex-Software Engineer Intern at
              <strong>
                <a className="text-blue-500 m-1">PreFessionals</a>
              </strong>{" "}
              (Startup)
              <img className="mx-3" src={pre} width={60}></img>
              <em>(Jul 2024 - Sep 2024)</em>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
