/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Button } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/key-feature/performance.svg";
import Partnership from "assets/key-feature/partnership.svg";
import Subscription from "assets/key-feature/subscription.svg";
import Support from "assets/key-feature/support.svg";
import { useState } from "react";

const data = [
  {
    id: 1,
    imgSrc: Partnership,
    altText: "Vision Document",
    title: "Vision Document",
    text:
      "",
    link:"https://docs.google.com/document/d/e/2PACX-1vQO3liuUAq0T9MlmXD9pw__beJ_YeDJiLtUp0-yHgEvLDH7SU0_u51MgfgFWvirn94VT72yHAOocgO6/pub"
    },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Use Cases",
    title: "Use Cases",
    text:
      "",
    link:"https://docs.google.com/document/d/e/2PACX-1vSTvxCdoQVnzVF8na7W444X9rnIgfUvpMn31UiulpXCq_fNYChHmSJNYciLuhQYfXI5vw9M9Ro3XGtR/pub"
  },
  {
    id: 3,
    imgSrc: Partnership,
    altText: "Glossary",
    title: "Glossary",
    text:
      "",
    link:"https://docs.google.com/document/d/e/2PACX-1vQZkNw7Q9A1QHM8FXAtS_R5O-O1W7imIyPsWuXwgiqzHnHftSQuoFPSBM5cDj0Wo_xzoCu5fueYVWck/pub"
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: "WARs",
    title: "WARs",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 5,
    imgSrc: Partnership,
    altText: " SRS Poster",
    title: "SRS Poster",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 6,
    imgSrc: Partnership,
    altText: "User  manual",
    title: "User Manual",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 7,
    imgSrc: Partnership,
    altText: "Final Presentation",
    title: "Final Presentation",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 8,
    imgSrc: Partnership,
    altText: "Software Requirements Specification",
    title: "Software Requirements Specification",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 9,
    imgSrc: Partnership,
    altText: "Software Development Plan",
    title: "Software Development Plan",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 10,
    imgSrc: Partnership,
    altText: "Test Cases",
    title: "Test Cases",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
  {
    id: 11,
    imgSrc: Partnership,
    altText: "Developer Manual",
    title: "Developer Manual",
    text:
      "",
    link:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRBb_2lerEggcMHIvWF-WxKuRABW2p5vcJvQ2O6pMoQYdUzTigPDkUrdY3xy_gi_A/pubhtml"
  },
];

export default function KeyFeature() {
  const [id, setId] = useState(0)
  const toggle = (item)=>{
    console.log(item)
    setId(item.id)
  }
  return (
    <section sx={{ variant: "deliverables" }} id="deliverables">
      <Container>
        <SectionHeader
          slogan="Deliverables"
          title="Documentations"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <><FeatureCardColumn

              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
               />
              <Button onClick={()=>toggle(item)} > View</Button>
              

              </>
            
          ))}
          
        </Grid>
        {id === 1 && <iframe src="/2 Vision.pdf" width="100%" height="500px"></iframe>}
        {id === 2 && <iframe src="/UseCases.pdf" width="100%" height="500px"></iframe>}
        {id === 3 && <iframe src="/1 Glossary.pdf" width="100%" height="500px"></iframe>}
        {id === 4 && <iframe src="/Weekly Activity Report (1).pdf" width="100%" height="500px"></iframe>}
        {id === 5 && <iframe src="/Poster.pdf" width="100%" height="500px"></iframe>}
        {id === 6 && <iframe src="/User's Manual.pdf" width="100%" height="500px"></iframe>}
        {id === 7 && <iframe src="/Final Presentation.pdf" width="100%" height="500px"></iframe>}
        {id === 8 && <iframe src="/Software Requirements Specification.pdf" width="100%" height="500px"></iframe>}
        {id === 9 && <iframe src="/Development Plan.pdf" width="100%" height="500px"></iframe>}
        {id === 10 && <iframe src="/testCases.pdf" width="100%" height="500px"></iframe>}
        {id === 11 && <iframe src="/Developer's Manual.pdf" width="100%" height="500px"></iframe>}
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
