import FooterLinks from "../footer/footer";
import ProjectColumn from "./projectColumn/projectColumn";
import {
  portfolioPageColliers,
  portfolioPageDigitalJournal,
  portfolioPageLifeAquatic,
  portfolioPageTrek,
  portfolioPageColliers_2x,
  portfolioPageDigitalJournal_2x,
  portfolioPageLifeAquatic_2x,
  portfolioPageTrek_2x,
} from "../../assets/images";

const PortfolioPage = () => {
  return (
    <>
      <main id="portfolio-page-main">
        <ProjectColumn
          linkPath={"digital-journal"}
          projectDetails={{
            title: "Digital Journal",
            number: "01",
            slideDirection: "left"
          }}
          imageDetails={{
            imgAlt: "Digital Journal Cover",
            imgSrc: portfolioPageDigitalJournal,
            imgSmall: portfolioPageDigitalJournal,
            imgLarge: portfolioPageDigitalJournal_2x
          }}
        />
        <ProjectColumn
          linkPath={"colliers"}
          projectDetails={{
            title: "Colliers",
            number: "02",
            slideDirection: "right"
          }}
          imageDetails={{
            imgAlt: "Colliers Cover",
            imgSrc: portfolioPageColliers,
            imgSmall: portfolioPageColliers,
            imgLarge: portfolioPageColliers_2x
          }}
        />
        <ProjectColumn
          linkPath={"trek-for-trees"}
          projectDetails={{
            title: "Trek for Trees",
            number: "03",
            slideDirection: "left"
          }}
          imageDetails={{
            imgAlt: "Trek for Trees Cover",
            imgSrc: portfolioPageTrek,
            imgSmall: portfolioPageTrek,
            imgLarge: portfolioPageTrek_2x
          }}
        />
        <ProjectColumn
          linkPath={"life-aquatic"}
          projectDetails={{
            title: "Life Aquatic",
            number: "04",
            slideDirection: "right"
          }}
          imageDetails={{
            imgAlt: "Life Aquatic Cover",
            imgSrc: portfolioPageLifeAquatic,
            imgSmall: portfolioPageLifeAquatic,
            imgLarge: portfolioPageLifeAquatic_2x
          }}
        />
      </main>
      <FooterLinks
        leftLinkPath ="/about"
        leftLinkText ="about"
        rightLinkPath ="/resume"
        rightLinkText ="resume"
      />
    </>
  )
}

export default PortfolioPage;
