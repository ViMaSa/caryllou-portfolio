import {
  lifeAquaticLogoMock,
  lifeAquaticLogoMock2x,
  lifeAquaticPoster,
  lifeAquaticPoster2x,
  lifeAquaticStationery,
  lifeAquaticStationery2x,
} from "../../../assets/images";
import FooterLinks from "../../footer/footer";

const LifeAquatic = () => {
  return (
    <>
      <main className="project-main">
        <p className="project-number slide-right">04</p>
        <div className="project-heading-line slide-left" />
        <p className="project-title slide-right">Life Aquatic</p>
        <div className="project-heading-line slide-left" />
        <p className="project-margin project-description-font">
          <em>Student Project</em><br /><br />
          <strong>Brief: </strong>
          Choose from one of many of Las Vegas’ entertainment/venue and rebrand it, creating your
          own branding and identity for it.<br /><br />
          <strong>Solution: </strong>
          Rebrand Mandalay Bay’s Shark Reef Aquarium into the LIFE AQUATIC. It brings to life Wes
          Anderson’s 2004 film, The Life Aquatic with Steve Zissou.
        </p>
        <p className="project-section-header">Branding & Identity</p>
        <div className="image-container">
          <img
            alt="Life Aquatic logo mock"
            src={lifeAquaticLogoMock}
            srcSet={`
              ${lifeAquaticLogoMock} 354w,
              ${lifeAquaticLogoMock2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Life Aquatic Stationery"
            src={lifeAquaticStationery}
            srcSet={`
              ${lifeAquaticStationery} 354w,
              ${lifeAquaticStationery2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Life Aquatic Poster"
            src={lifeAquaticPoster}
            srcSet={`
              ${lifeAquaticPoster} 354w,
              ${lifeAquaticPoster2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
        </div>
      </main>
      <FooterLinks
        leftLinkPath = "/portfolio/trek-for-trees"
        leftLinkText = "<< 03. Trek for Trees"
        rightLinkPath = "/portfolio"
        rightLinkText = "Portfolio >>"
      />
    </>
  )
}

export default LifeAquatic;
