import { Link } from "react-router-dom";

const ProjectColumn = ({linkPath, projectDetails, imageDetails}) => {
  const link = linkPath;
  const projectNum = projectDetails.number;
  const projectTitle = projectDetails.title;
  const slideDirection = projectDetails.slideDirection;
  const imgAlt = imageDetails.imgAlt;
  const imgSrc = imageDetails.imgSrc;
  const imgSmall = imageDetails.imgSmall;
  const imgLarge = imageDetails.imgLarge;

  return (
    <>
        <Link to={link}>
          <section className={`slide-${slideDirection}`}>
            <p className="project-number">{projectNum}</p>
            <div className="project-heading-line" />
            <p className="project-title">{projectTitle}</p>
            <img
              alt={imgAlt}
              src={imgSrc}
              srcSet={`
                ${imgSmall} 173w,
                ${imgLarge} 346w
              `}
              sizes="
                (max-width: 600px) 173px,
                346px
              "
            />
          </section>
        </Link>
    </>
  )
}

export default ProjectColumn;
