import MainButton from "@/components/main-button";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import TitleLogo from "@/components/ui/TitleLogo";

export default function Home() {
  return (
    <main>
      <TitleLogo />
      <div className="w-screen justify-between flex h-screen absolute top-0 left-0">
        <div className="flex flex-col gap-4 justify-center items-center h-screen w-[50vw]">
          <h1 className="text-4xl max-w-sm text-center">
            The <span className="text-primary">FULL</span> Learning Experience
          </h1>
          <MainButton />
          <Button variant={"ghost"} size={"sm"} className="rounded-lg text-primary text-lg">
            log in
          </Button>
          <Button variant={"ghost"} size={"sm"} className="rounded-lg text-lg">
            learn more
          </Button>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center great-gradiant h-screen w-[50vw]">
          <Logo size={200} />
          <h2 className="text-white text-4xl">MindForge</h2>
          <h3 className="text-muted-foreground text-xl ">Forging the perfect hivemind</h3>
        </div>
      </div>
    </main>
  );
}
