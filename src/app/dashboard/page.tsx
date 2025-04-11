import ChallengeCard, { ChallengeProps } from "@/components/ChallengeCard";

function Home() {
  const mockData: ChallengeProps[] = [
    {
      title: "Bl3",
      imgSrc:
        "https://media.discordapp.net/attachments/586589326813429800/1274389151021666466/121356450_p1_master1200.png?ex=67fa8662&is=67f934e2&hm=75861df38099bbb9268a681eaf71888f03ec2b96011a258c0bbcdbd08d17b8ee&width=1654&height=1048&",
      total: 30,
      completed: 5,
      corrupted: 10,
      tags: ["Front end", "ReactJS", "NextJS"],
    },
    {
      title: "Bl3",
      imgSrc:
        "https://media.discordapp.net/attachments/586589326813429800/1274389151021666466/121356450_p1_master1200.png?ex=67fa8662&is=67f934e2&hm=75861df38099bbb9268a681eaf71888f03ec2b96011a258c0bbcdbd08d17b8ee&width=1654&height=1048&",
      total: 30,
      completed: 5,
      corrupted: 10,
      tags: ["Front end", "ReactJS", "NextJS"],
    },
    {
      title: "Bl3",
      imgSrc:
        "https://media.discordapp.net/attachments/586589326813429800/1274389151021666466/121356450_p1_master1200.png?ex=67fa8662&is=67f934e2&hm=75861df38099bbb9268a681eaf71888f03ec2b96011a258c0bbcdbd08d17b8ee&width=1654&height=1048&",
      total: 30,
      completed: 5,
      corrupted: 10,
      tags: ["Front end", "ReactJS", "NextJS"],
    },
    {
      title: "Bl3",
      imgSrc:
        "https://media.discordapp.net/attachments/586589326813429800/1274389151021666466/121356450_p1_master1200.png?ex=67fa8662&is=67f934e2&hm=75861df38099bbb9268a681eaf71888f03ec2b96011a258c0bbcdbd08d17b8ee&width=1654&height=1048&",
      total: 30,
      completed: 5,
      corrupted: 10,
      tags: ["Front end", "ReactJS", "NextJS"],
    },
  ];

  return (
    <div className="mt-9 ml-12 flex flex-col gap-6 ">
      <h1 className="text-3xl">Your Challenges:</h1>
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
          />
        ))}
      </div>
      <div className="flex flex-row justify-between px-10">
        <h1 className="text-3xl">Browse Challenges:</h1>
        <input
          type="Text"
          className="text-md px-2 py-0.5 bg-background border border-primary rounded-full w-xl text-2xl"
          placeholder="Search..."
        />
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
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
