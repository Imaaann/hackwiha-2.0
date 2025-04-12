"use client";
import { useState } from "react";
import Tag from "./Tag";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function TagSelect() {
  const [tags] = useState<string[]>([]);
  const [buffer, setBuffer] = useState<string>("");

  const appendTag: (arg0: string) => void = (tag) => {
    if (tag !== "") tags.push(tag);
  };

  return (
    <>
      <div className="grid grid-cols-5 items-center gap-4 max-w-3xl">
        <Label htmlFor="tags" className="text-right text-2xl col-span-2">
          Add Tags
        </Label>
        <Input
          id="tags"
          className="col-span-3"
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
        {tags.map((tag, index) => {
          if (index < 6) return <Tag name={tag} key={index} />;
          if (index == 6) return <Tag name="..." key={index} />;
        })}
      </div>
    </>
  );
}

export default TagSelect;
