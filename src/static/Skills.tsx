import { SkillsData } from "../types/types.d";

function SkillsComponents (skillsData : SkillsData) {
        return <div className="flex min-h-full flex-col desktop:w-1/3 m-4 mobile:w-3/4 p-8 rounded-md transition-colors hover:bg-slate-700">
        <img className="w-2/3 h-auto self-center p-14" src={skillsData.img} alt="transition" />
            <p className="text-xl font-bold">{skillsData.hl}</p>
            <p className="mt-3 text-lg">{skillsData.desc}</p>
        </div>
    }
    
    
export default SkillsComponents;