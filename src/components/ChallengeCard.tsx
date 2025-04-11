import Image from "next/image";
import Tag from "./Tag";

export type ChallengeProps = {
  title: string;
  imgSrc: string;
  total: number;
  completed: number;
  corrupted: number;
  tags: string[];
};

function ChallengeCard({ title, imgSrc, total, completed, corrupted, tags }: ChallengeProps) {
  return (
    <div className="flex flex-col px-9 py-4 bg-background secondary-shadow gap-2 rounded-3xl max-w-fit justify-center items-center">
      <h3 className="text-2xl text-white max-w-fit">{title}</h3>
      <Image
        height={250}
        width={250}
        src={imgSrc}
        alt={`an Image representing the mind forge challenge ${title}`}
        className="rounded-2xl hover:scale-110 hover:transition-transform w-[250px] h-[250px]"
      />
      <div className="flex flex-row justify-around min-w-full">
        <span className="text-lg">Completed</span>
        <span className="text-primary text-lg">
          {completed}/{total}
        </span>
      </div>
      <span className="text-md font-bold max-w-fit">
        Corruption: <span className="text-primary">{corrupted}</span>
      </span>
      <div className="flex flex-row gap-2 max-w-fit px-4 flex-wrap">
        {tags.map((tag, index) => {
          return <Tag name={tag} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ChallengeCard;
