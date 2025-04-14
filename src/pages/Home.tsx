import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import sta from "../assets/university_of_st_andrews_logo.jpeg";
import { useNavigate } from "react-router-dom";
import "../styles/index.css";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-10 pb-5 flex flex-col items-center space-y-4 @container">
        <h1 className="text-5xl font-mono">Osi Mayungbo</h1>
        <div className="space-x-2 gap-y-5 flex @5xl:flex-row flex-col items-center">
          <a
            href="/site/Osi_Mayungbo_Resume.pdf"
            target="_blank"
            type="application/pdf"
          >
            <button className="font-mono cursor-pointer bg-gray-200 border-3 border-solid border-gray-500 hover:bg-gray-300 py-3 px-4 rounded">
              📄 See My Resume
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/osi-mayungbo/"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-3 border-solid border-gray-500 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded">
              <img className="mr-2" src={linkedin} width={32}></img> LinkedIn
            </button>
          </a>
          <a
            href="https://github.com/01m1"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-3 border-solid border-gray-500 py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded">
              <img className="mr-2" src={github} width={32}></img> GitHub
            </button>
          </a>
          <a
            href="mailto:osimayungbo@gmail.com"
            className="font-mono"
            target="_blank"
          >
            <button className="flex items-center cursor-pointer border-3 border-solid border-gray-500 bg-gray-200 hover:bg-gray-300 py-3 px-4 rounded">
              ✉️ osimayungbo@gmail.com
            </button>
          </a>
        </div>

        <div className="border-4 border-gray-500 rounded-md pb-5">
          <div className="flex flex-col items-center w-85 md:w-180 lg:w-210">
            <h1 className="text-2xl pt-5">About Me</h1>
            <p className="pl-4 text-[10px] md:text-[12px] lg:text-xl flex items-center">
              <div>
                Second Year
                <strong>
                  <a
                    className="text-blue-500 m-1"
                    href="https://www.st-andrews.ac.uk/subjects/computer-science/computer-science-bsc/direct/"
                    target="_blank"
                  >
                    Direct Entry
                  </a>
                </strong>
                Computer Science student at the
                <strong>
                  <a
                    className="text-blue-500 ml-1"
                    href="https://www.st-andrews.ac.uk/"
                    target="_blank"
                  >
                    University of St Andrews
                  </a>
                </strong>
              </div>
              <img className="w-15" src={sta}></img>
            </p>
            <strong className="text-gray-500 text-[10px] md:text-[12px] lg:text-[16px]">
              (Sep 2024 - Jun 2027)
            </strong>
            <hr className="border-2 mb-5 mt-5 w-85 md:w-180 xl:w-180 text-gray-400"></hr>
            <h1 className="text-2xl">Experience</h1>
            <p className="pl-5 text-[10px] md:text-[12px] lg:text-xl flex items-center mt-5">
              <div>
                Incoming Software Engineer Intern at
                <strong>
                  <a
                    className="text-blue-500 mx-1"
                    href="https://www.arm.com/"
                    target="_blank"
                  >
                    Arm
                  </a>
                </strong>
              </div>
            </p>
            <strong className="text-gray-500 text-[10px] md:text-[12px] lg:text-[16px]">
              (Jun 2025 - Aug 2025)
            </strong>
            <p className="text-[10px] pl-5 md:text-[12px] lg:text-xl items-center mt-5">
              <div>
                Spring/Insight Programmes at
                <strong>
                  <a
                    className="text-blue-500 ml-1"
                    href="https://www.citadel.com/"
                    target="_blank"
                  >
                    Citadel
                  </a>
                </strong>
                  ,
                <strong>
                  <a
                    className="text-blue-500 ml-1"
                    href="https://www.flowtraders.com/"
                    target="_blank"
                  >
                  SIG
                  </a>
                </strong>
                , and
                <strong>
                  <a
                    className="text-blue-500 m-1"
                    href="https://www.mlp.com/"
                    target="_blank"
                  >
                    Millennium
                  </a>
                </strong>
              </div>
            </p>
            <strong className="text-gray-500 text-[10px] md:text-[12px] lg:text-[16px]">
              (Mar 2025 - May 2025)
            </strong>
            <p className="pl-5 text-[10px] md:text-[12px] lg:text-xl flex items-center mt-5">
              <div>
                Building
                <strong>
                  <a
                    className="text-blue-500 mx-1"
                    href="https://www.service101.com/"
                    target="_blank"
                  >
                    Service101 🔧
                  </a>
                </strong>
              </div>
            </p>
            <strong className="text-gray-500 text-[10px] md:text-[12px] lg:text-[16px]">
              (Jan 2025 - Present)
            </strong>
            <p className="pl-5 text-[10px] md:text-[12px] lg:text-xl flex items-center mt-5">
              <div>
                Ex-Software Engineer Intern at
                <strong>
                  <a
                    className="text-blue-500 mx-1"
                    href="https://www.linkedin.com/company/prefessionalsltd/"
                    target="_blank"
                  >
                    PreFessionals
                  </a>
                </strong>
              </div>
            </p>
            <strong className="text-gray-500 text-[10px] md:text-[12px] lg:text-[16px]">
              (Jul 2024 - Sep 2024)
            </strong>
            <hr className="text-gray-400 border-2 mb-5 mt-8 w-85 md:w-180 xl:w-180"></hr>
            <h1 className="text-2xl mb-4">Programming Languages</h1>
            <p className="text-[12px] md:text-xl">
              Python • Java • C++ • C • SQL • JavaScript • TypeScript
            </p>
          </div>
        </div>
        <button
          className="flex font-mono items-center cursor-pointer border-3 border-gray-500 bg-gray-200 hover:bg-gray-300 py-3.5 px-4 rounded"
          onClick={() => {
            navigate("/projects");
          }}
        >
          See My Projects
        </button>
      </div>
    </>
  );
}

export default Home;
