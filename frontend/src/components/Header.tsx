"use client";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import TitleLogo from "./ui/TitleLogo";

function Header() {
  return (
    <header className="w-screen py-2 flex flex-row justify-around items-center border-b border-complement accent-shadow ">
      <TitleLogo isAbsolute={false} size={60} />
      <Button
        variant={"ghost"}
        size={"sm"}
        className="rounded-lg text-foreground text-md"
        onClick={() => {
          redirect("/dashboard");
        }}
      >
        Challenges
      </Button>
      <Button
        variant={"ghost"}
        size={"sm"}
        className="rounded-lg text-foreground text-md"
        onClick={() => {
          redirect("/dashboard/resources");
        }}
      >
        Resources
      </Button>
      <Button variant={"ghost"} size={"sm"} className="rounded-lg text-foreground text-md">
        Field: <span className="text-primary">CS</span>
      </Button>
    </header>
  );
}

export default Header;
