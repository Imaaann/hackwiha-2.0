import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

export type resourceCardProps = {
  title: string;
  type: "Official" | "Video" | "Feed" | "Article";
  description: string;
  linkRef: string;
  user: {
    name: string;
    honor: number;
    skill: "Iron" | "Bronze" | "Silver" | "Diamond" | "Expert";
  };
  tags: string[];
};

function ResourceCard(props: resourceCardProps) {
  return (
    <Card className="h-[200px] w-[325px]">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-md">{props.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-col text-sm ">
          <span className="font-bold">by: {props.user.name}</span>
          <span className="text-primary">Honor: {props.user.honor}</span>
          <span className="text-xs">
            Skill: {props.tags[0]} {props.user.skill}
          </span>
        </div>
        <Button asChild>
          <Link href={props.linkRef}>Visit</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ResourceCard;
