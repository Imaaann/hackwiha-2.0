"use client";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { geistMono } from "@/lib/utils";

function MainButton() {
  return (
    <Button
      variant={"default"}
      size={"lg"}
      className={`rounded-2xl primary-accent-gradiant text-white max-w-fit text-2xl px-4 py-2 ${geistMono.className} hover:scale-110`}
      onClick={() => {
        redirect("/dashboard");
      }}
    >
      Start
    </Button>
  );
}

export default MainButton;
