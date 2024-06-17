import SkillComponents from "@/static/Skills";

function Skills() {
    return <div id="Skills" className="flex text-white min-h-full flex-col items-center bg-slate-800">
        <img className="w-full h-44" src="/transitions/transition_gradient.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">My Skills</p>
        <div className="flex desktop:flex-row mobile:flex-col mobile:items-center flex-grow justify-around text-center">
            <SkillComponents hl="Technical Skills" desc="Programming Language- C,Python,Java Tools-Matlab,MS Word, MS Powerpoint" img="/icons/spa.svg"/>
            <SkillComponents h1="Soft Skills" desc="Communication, Creativity, Problem-Solving, Teamwork" img="/icons/api.svg"/>
        </div>
    </div>
}

export default Skills;