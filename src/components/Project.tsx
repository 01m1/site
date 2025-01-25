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
    <div className="flex flex-col items-centerjustify-center border-2 border-solid w-80 h-80 p-4">
      <strong>
        <h1 className="text-center">{title}</h1>
      </strong>
      <img src={image} width={300} className=""></img>
      <h1>{desc}</h1>
    </div>
  );
}
