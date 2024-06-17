import Tag from "./Tag";

function QualificationComponent ({ headline, image, text, tags, link }: { headline: string, image: string, text: string, tags: string[], link: string }) {
    return (<a href={link} aria-label={text}>
    <div className="flex flex-col transition-all hover:scale-105 scale-100 bg-opacity-20 bg-black rounded-lg max-h-max max-w-96 m-3 text-white">
        <img className="w-fit h-fit rounded-t-lg max-h-64" alt={text} src={image}/>
        <div className="p-4">
            <div className="text-xl font-medium mb-4">{headline}</div>
            <p>{text}</p>
        </div>
    </div>
    </a>);
}


export default QualificationComponent;