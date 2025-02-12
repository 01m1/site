interface ProjectProps {
  title: string;
  desc: string;
  image: string;
  repo: string;
  technologies: string;
}

export default function Project({
  title,
  desc,
  image,
  repo,
  technologies,
}: ProjectProps) {
  return (
    <div className="flex flex-col font-mono text-center items-center border-3 border-gray-500 w-80 h-120 p-4 rounded">
      <p className="font-bold">{title}</p>
      <img src={image} width={230}></img>
      <p className="text-blue-400 font-bold underline pt-2">
        <a href={repo} target="_blank">
          GitHub Repo Link
        </a>
      </p>
      <p className="italic mb-2">Technologies: {technologies}</p>
      <p>{desc}</p>
    </div>
  );
}
