"use client";
import ComposedInput from "@/components/ComposedInput";
import CreateResource from "@/components/createResource";
import ResourceCard, { resourceCardProps } from "@/components/resource";
import TagSelect from "@/components/TagSelect";

import { mockResources } from "@/lib/mock";
import { useEffect, useState } from "react";

function Home() {
  const [resources, setResources] = useState<resourceCardProps[]>([]);

  // replace with appropriate fetching logic
  useEffect(() => {
    setResources(mockResources);
  }, []);

  return (
    <div className="mt-9 ml-12 flex flex-col gap-6 ">
      <div className="self-center gap-4 flex flex-col">
        <ComposedInput label="Browse Resources" id="resources" />
        <TagSelect />
      </div>
      <hr />
      <div className="flex justify-between px-8">
        <h1 className="text-4xl text-foreground ">Resources</h1>
        <CreateResource />
      </div>
      <div className="flex flex-row flex-wrap max-w-full gap-4">
        {resources.map((props, index) => (
          <ResourceCard key={index} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Home;
