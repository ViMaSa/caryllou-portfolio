import FooterLinks from "../../footer/footer";
import {
  digitalJournalCover,
  digitalJournalSpread1,
  digitalJournalSpread2,
  digitalJournalSpread3,
  digitalJournalSpread4,
  digitalJournalSpread5,
  digitalJournalSpread6,
  digitalJournalSpread7,
  digitalJournalCover_2x,
  digitalJournalSpread1_2x,
  digitalJournalSpread2_2x,
  digitalJournalSpread3_2x,
  digitalJournalSpread4_2x,
  digitalJournalSpread5_2x,
  digitalJournalSpread6_2x,
  digitalJournalSpread7_2x,
} from "../../../assets/images";

const DigitalJournal = () => {
  return (
    <>
      <main className="project-main">
        <p className="project-number slide-right">01</p>
        <div className="project-heading-line slide-left" />
        <p className="project-title slide-right">Digital Journal</p>
        <div className="project-heading-line slide-left" />
        <p className="project-margin project-description-font">
          This is a passion project that documents 2021.
          <br /><br />
          My goal was to design as much as possible in my free time and to explore design
          without any constraints you would normally face when working on a project for a client.
          <br /><br />
          Photos used were taken with a point and shoot camera, as I also wanted to learn more
          about shooting with and developing film. Featured here a several spreads with varying
          layouts.
        </p>
        <section className="image-container">
          <img
            alt="Digital Journal Cover"
            src={digitalJournalCover}
            srcSet={`
              ${digitalJournalCover} 354w,
              ${digitalJournalCover_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 1"
            src={digitalJournalSpread1}
            srcSet={`
              ${digitalJournalSpread1} 354w,
              ${digitalJournalSpread1_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 2"
            src={digitalJournalSpread2}
            srcSet={`
              ${digitalJournalSpread2} 354w,
              ${digitalJournalSpread2_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 3"
            src={digitalJournalSpread3}
            srcSet={`
              ${digitalJournalSpread3} 354w,
              ${digitalJournalSpread3_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 4"
            src={digitalJournalSpread4}
            srcSet={`
              ${digitalJournalSpread4} 354w,
              ${digitalJournalSpread4_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 5"
            src={digitalJournalSpread5}
            srcSet={`
              ${digitalJournalSpread5} 354w,
              ${digitalJournalSpread5_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 6"
            src={digitalJournalSpread6}
            srcSet={`
              ${digitalJournalSpread6} 354w,
              ${digitalJournalSpread6_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
          <img
            alt="Digital Journal Spread 7"
            src={digitalJournalSpread7}
            srcSet={`
              ${digitalJournalSpread7} 354w,
              ${digitalJournalSpread7_2x} 708w
            `}
            sizes="
              (max-width: 600px) 354px,
              708px
            "
          />
        </section>
      </main>
      <FooterLinks
        leftLinkPath = "/portfolio"
        leftLinkText = "<< Portfolio"
        rightLinkPath = "/portfolio/colliers"
        rightLinkText = "02. Colliers >>"
      />
    </>
  )
}

export default DigitalJournal;
