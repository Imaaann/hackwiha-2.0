import Logo from "./Logo";

function TitleLogo() {
  return (
    <div className="absolute flex gap-4 top-9 left-9 items-center">
      <Logo size={70} />
      <p className="font-medium text-2xl text-white ">MindForge</p>
    </div>
  );

}
export default TitleLogo;
