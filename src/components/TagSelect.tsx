"use client";
import { useState } from "react";
import Tag from "./Tag";

function TagSelect() {
  const [tags] = useState<string[]>([]);
  const [buffer, setBuffer] = useState<string>("");

  const appendTag: (arg0: string) => void = (tag) => {
    if (tag !== "") tags.push(tag);
  };

  return (
    <>
      <div className="flex flex-row gap-4 px-10">
        <h1 className="text-3xl">Tags:</h1>
        <input
          type="Text"
          className="text-md px-2 py-0.5 bg-background border border-primary rounded-full w-xl text-2xl"
          placeholder="Search..."
          onChange={(e) => {
            setBuffer(e.target.value);
          }}
          onKeyDown={(e) => {
            console.log(e.key);
            if (e.key == "Enter") {
              console.log(buffer, tags);
              appendTag(buffer);
              setBuffer("");
            }
          }}
        />
      </div>
      <div className="flex flex-row gap-12 max-w-screen flex-wrap overflow-auto py-2 px-1 text-md">
        {tags.map((tag, index) => (
          <Tag name={tag} key={index} />
        ))}
      </div>
    </>
  );
}

export default TagSelect;
