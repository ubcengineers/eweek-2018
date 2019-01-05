import * as React from "react";

import About from "../components/content/About";
import ButtonRow from "../components/content/ButtonRow";
import Hero from "../components/content/Hero";
import PictureGrid from "../components/content/PictureGrid";
import YouTube from "../components/content/YouTube";

import picture1 from "../assets/pictures/1.jpg";
import picture2 from "../assets/pictures/2.jpg";

import AboutContent from "../markdown/about.md";
import EBallContent from "../markdown/e-ball.md";
import VolunteerContent from "../markdown/volunteer.md";

export default () => {
  return (
    <div className="fadein">
      <Hero />
      <About color="white">
        <AboutContent />
        <YouTube src="https://www.youtube.com/embed/DGIT3Zgy7bc?controls=0&modestbranding=1&rel=0&showinfo=0" />
        <ButtonRow
          buttons={[
            {
              link: "schedule",
              logo: "far fa-calendar-alt",
              title: "View Schedule"
            },
            {
              link:
                "https://docs.google.com/document/d/1SU_1ObHUqKnJzZxcjIgos20AM8PnNnhzKvRRdWG92As/edit?usp=sharing&fbclid=IwAR19R4UFWdtdu0KGQmiS0tlD9lWeE3qbdHJk5Nfef3KVmdllHViisel4nBM",
              logo: "fas fa-external-link-alt",
              title: "E-Week Guidebook"
            },
            {
              link:
                "https://docs.google.com/forms/d/e/1FAIpQLSd-1WZQfIp7HaLPNjEiw76b8BO5TsSNeFfv_ARXwBdHYMXIxQ/viewform",
              logo: "fas fa-barcode",
              title: "Register you UBC Card"
            },
            {
              link: "https://goo.gl/forms/UqmslxGN1xcWMEpY2",
              logo: "fas fa-calendar-check",
              title: "RSVP for Old Red New Red"
            }
          ]}
        />
      </About>
      <About color="blue">
        <EBallContent />
        <PictureGrid images={[picture1, picture2]} />
        <ButtonRow
          buttons={[
            {
              link: "https://www.showpass.com/2nd-annual-99th-engineers-ball/",
              logo: "fas fa-ticket-alt",
              title: "Get your ticket"
            }
          ]}
        />
      </About>
      <About color="white">
        <VolunteerContent />
        <ButtonRow
          buttons={[
            {
              link:
                "https://docs.google.com/forms/d/e/1FAIpQLSdxqqdNIA6XRElnWqMcRkoheExYMQrDd0X7aUb3Gy3cegnadg/viewform?fbclid=IwAR00P4uZWg3H8ejPhWzuUhR7dOWsapN-mxpO82Ajv7qxK48yPhwC2l75KRo",
              logo: "fas fa-hands-helping",
              title: "Sign up"
            }
          ]}
        />
      </About>
    </div>
  );
};
