import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

function TitleLogo() {
  return (
    <div className="absolute flex gap-6 top-9 left-9 items-center text-3xl z-10">
      <Logo size={80} />
      MindForge
      <ModeToggle />
    </div>
  );
}

export default TitleLogo;
