import { useNavigate } from "react-router-dom";
import github from "../assets/github.svg";

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

        <div className="flex flex-row border-2 pb-5 border-solid">
          <div className="flex flex-col items-center w-280"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
