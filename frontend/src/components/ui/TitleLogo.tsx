import Logo from "./Logo";

function TitleLogo() {
  return (
    <div className="absolute flex gap-6 top-9 left-9">
      <Logo size={80} />
      MindForge
    </div>
  );
}

export default TitleLogo;
