import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";
import { useState } from "react";
import Personal from "./formComponents/Personal";
import Description from "./formComponents/Description";

export const ResumeForm = (props) => {
  const [expanded, setExpanded] = useState();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Merriweather, serif", fontSize: "1rem", mt: 2 }}
        variant="h6"
        align={"center"}
      >
        Resume PlayGround
      </Typography>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Accordion
          expanded={expanded === "personal"}
          onChange={handleChange("personal")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="personal-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Personal
              formData={props.formData}
              onFormChange={props.onFormChange}
              formError={props.formError}
              onError={props.onError}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "brief"}
          onChange={handleChange("brief")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="brief-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Brief Description
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Description formData={props.formData}
              onFormChange={props.onFormChange}
              formError={props.formError}
              onError={props.onError}/>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "skills"}
          onChange={handleChange("skills")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="skills-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Skills</Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "education"}
          onChange={handleChange("education")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="education-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Education
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "project"}
          onChange={handleChange("project")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="project-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Project/ Certification/ Internship
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "links"}
          onChange={handleChange("links")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="links-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              web Links
            </Typography>
          </AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};
