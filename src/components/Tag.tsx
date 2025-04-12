import { Tags } from "lucide-react";

function Tag({ name }: { name: string }) {
  return (
    <div className="text-lg px-2 py-0.5 bg-background border border-primary rounded-full w-fit flex flex-row gap-2 items-center">
      <Tags />
      {name}
    </div>
  );
}

export default Tag;
