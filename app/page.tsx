import { Calendar } from "@/components/ui/calendar";
import { TypographyH1 } from "./heading";
import { ButtonSecondary } from "./buttonsecondary";


export default function Home() {
  return (
<div>
  
  <h1 className="text-center text-red-600 text-3xl pt-5"> Shadcn</h1>
  
  <div className="grid grid-cols-2 gap-4  m-7"> 
  <div className="bg-blue-400 h-5 text-center"> Heading</div>
  <div className="bg-red-400 h-5  text-center">calander</div>
    <TypographyH1/>
    
    <Calendar/>
    
    <div><ButtonSecondary text={"search"}/> <ButtonSecondary text={"Profile"}/></div>
    
   
    </div></div>
  );
}