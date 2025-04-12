import ChallengeCard from "@/components/ChallengeCard";
import ComposedInput from "@/components/ComposedInput";
import { mockChallenges } from "@/lib/mock";

function Home() {
  // replace with actuall api calls
  const mockData = mockChallenges;

  return (
    <div className="mt-9 ml-12 flex flex-col gap-6 ">
      <h1 className="text-3xl">Your Challenges:</h1>
      <div className="w-3xl text-2xl">
        <ComposedInput label="search" id="personal-search" />
      </div>
      <div className="flex flex-row gap-12 max-w-screen overflow-auto py-6 px-3">
        {mockData.map((props, index) => (
          <ChallengeCard
            key={index}
            title={props.title}
            imgSrc={props.imgSrc}
            total={props.total}
            completed={props.completed}
            corrupted={props.corrupted}
            tags={props.tags}
            isInstance={true}
          />
        ))}
      </div>
      <div className="w-3xl">
        <ComposedInput label="Browse" id="challenges" />
      </div>
      <div className="flex flex-row gap-12 max-w-screen overflow-auto py-6 px-3 text-2xl">
        {mockData.map((props, index) => (
          <ChallengeCard
            key={index}
            title={props.title}
            imgSrc={props.imgSrc}
            total={props.total}
            completed={props.completed}
            corrupted={props.corrupted}
            tags={props.tags}
            isInstance={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
