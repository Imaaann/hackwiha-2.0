import Logo from "./Logo";
import { ModeToggle } from "./mode-toggle";

function TitleLogo({ isAbsolute = true, size = 80 }: { isAbsolute?: boolean; size?: number }) {
  const absolutePosition = isAbsolute ? "absolute top-9 left-9" : "";
  const textSize = size < 80 ? "text-3xl" : "text-xl";
  return (
    <div className={`flex gap-6 items-center ${textSize} z-10 ${absolutePosition}`}>
      <Logo size={size} />
      MindForge
      <ModeToggle />
    </div>
  );
}

export default TitleLogo;
