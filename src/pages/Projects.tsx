import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";
import Project from "../components/Project";
import library from "../assets/library.png";
import ant from "../assets/ant.png";
import gym from "../assets/gym.png";
import icon from "../assets/icon.ico";
import patient from "../assets/patient.png";
import cmd from "../assets/cmd.png";

function Projects() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex space-x-2 items-center">
          <button
            className="font-mono cursor-pointer bg-gray-200 border-b-3 border-solid border-gray-500 hover:bg-gray-300 py-3 px-4 mb-4 mt-4 rounded"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
          <a
            href="https://github.com/01m1"
            className="font-mono"
            target="_blank"
          >
            <button className="font-mono flex items-center cursor-pointer border-b-3 border-gray-500 px-4 py-2 bg-gray-200 hover:bg-gray-300 mb-4 mt-4 rounded">
              <img src={github} width={32}></img>
            </button>
          </a>
        </div>

        <div className="flex flex-col pb-5">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:w-300 lg:space-x-5 space-y-5 lg:space-y-0">
            <Project
              title={"Ant Colony Simulator"}
              desc={
                "Simulator used to illustrate the behaviour of ants. Planning to improve the efficiency and potentially rewrite in C++!"
              }
              image={ant}
              repo={"https://github.com/01m1/Ant-Colony-Simulator-With-Python"}
              technologies={"Python (NumPy, Pygame)"}
            />
            <Project
              title={"Terminal-Based Text Editor"}
              desc={
                "Text editor that runs on the terminal, written in C without using any external libraries."
              }
              image={cmd}
              repo={"https://github.com/01m1/Terminal-Based-Text-Editor"}
              technologies={"C"}
            />
            <Project
              title={"Breast Cancer Patient Management System"}
              desc={
                "Web application designed for oncologists to manage and track patients with breast cancer."
              }
              image={patient}
              repo={"https://github.com/01m1/Tech-Academia-Dotplot-Accelerator"}
              technologies={"Python • React (JavaScript) • R"}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:w-300 mt-5 lg:space-x-5 space-y-5 lg:space-y-0">
            <Project
              title={"GymLog"}
              desc={
                "Web application that allows users to manage workouts and track gym progress."
              }
              image={gym}
              repo={"https://github.com/01m1/GymLog"}
              technologies={"Python (Flask) • HTML • CSS"}
            />
            <Project
              title={"AudioCharm"}
              desc={"Music player application developed using Python."}
              image={icon}
              repo={"https://github.com/01m1/AudioCharm"}
              technologies={"Python (Pygame)"}
            />
            <Project
              title={"Library Management System"}
              desc={
                "Application that contains various features allowing users to manage a library."
              }
              image={library}
              repo={"https://github.com/01m1/Library-Management-System"}
              technologies={"Java"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
