
import Logo from "@/components/ui/Logo";
import TitleLogo from "@/components/ui/TitleLogo";
import WelcomCard from "@/components/ui/WelcomCard";

export default function Home() {
  return (
    
      
    <div  className=" h-[100vh] overflow-hidden w-full md:flex" >
      <div className=" w-[100%]  h-[100%] bg-black  md:w-[50%]">
        <TitleLogo/>
        <div className="flex justify-center items-center h-[100%]">
          <WelcomCard/>
        </div>
     </div>
      <div className="w-[50%]  flex-col justify-center items-center gap-2.5 bg-gradient-to-b from-[#610094] to-[#3C16A6] hidden md:flex">
        <Logo size={160}/>
        <p className="text-6xl text-white mb-5">MindForge</p>
        <p className="text-2xl text-white opacity-50 tracking-widest">forgint The perfect halfMind</p>
      </div>
    </div>
   
  );
}
