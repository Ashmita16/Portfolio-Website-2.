import QualificationComponent from "@/static/Qualification";
import qualificationData from "../../../../public/data/qualifications.json";

function Qualification() {
    return <div id="Qualification" className="bg-gradient-to-r from-gradientLeft to-gradientRight">
        <img className="w-full h-44" src="/transitions/transition_grey.svg" alt="transition" />
        <p className="flex text-4xl my-8 justify-center text-white font-bold">My Qualifications</p>
        <div className="flex flex-wrap w-full desktop:px-20 justify-center">
            {qualificationData.data.map((item, index) =>
                <QualificationComponent key={index} headline={item.title} image={item.image} text={item.text} tags={item.tags} link={item.link} />
            )}
        </div>
    </div>
}

export default Qualification;