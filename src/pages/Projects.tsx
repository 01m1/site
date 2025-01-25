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
      <button
        className="text-2xl font-mono cursor-pointer bg-gray-200 border-2 border-solid border-gray-500 hover:bg-gray-300 py-4 px-4 m-4 rounded"
        onClick={() => {
          navigate("/site/");
        }}
      >
        🡠 Go Back
      </button>
      <div className="pt-5 flex flex-col items-center space-y-7">
        <div className="space-x-2 flex flex-row items-center">
          <a
            href="https://github.com/01m1"
            className="font-mono"
            target="_blank"
          >
            <button className="text-3xl flex items-center cursor-pointer border-2 border-solid border-gray-500 py-3 px-4 bg-gray-200 hover:bg-gray-300 rounded">
              <img className="mr-2" src={github} width={40}></img> See More
              Projects on GitHub
            </button>
          </a>
        </div>

        <div className="flex flex-col border-2 pb-5 border-solid">
          <div className="flex flex-row items-center justify-center w-300 mt-5 space-x-5">
            <Project
              title={"Ant Colony Simulator"}
              desc={""}
              image={ant}
              repo={""}
              technologies={""}
            />
            <Project
              title={"Terminal-Based Text Editor"}
              desc={""}
              image={cmd}
              repo={""}
              technologies={""}
            />
            <Project
              title={"Breast Cancer Patient Management System"}
              desc={""}
              image={patient}
              repo={""}
              technologies={""}
            />
          </div>
          <div className="flex flex-row items-center justify-center w-300 mt-5 space-x-5">
            <Project
              title={"GymLog"}
              desc={""}
              image={gym}
              repo={""}
              technologies={""}
            />
            <Project
              title={"AudioCharm"}
              desc={""}
              image={icon}
              repo={""}
              technologies={""}
            />
            <Project
              title={"Library Management System"}
              desc={""}
              image={library}
              repo={""}
              technologies={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
