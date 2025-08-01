import "./WorkCard.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-header">Projects</h1>
      <div className="project-container">
         
          {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard 
                 key={ind}
                 imgsrc={val.imgsrc}
                 title={val.title}
                 text={val.text}
                 view={val.view}
                />
            )
          })}
       </div>
      </div>
  );
}

export default Work;