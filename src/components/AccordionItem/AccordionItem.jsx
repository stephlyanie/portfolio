// Styles
import "./AccordionItem.scss";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

function AccordionItem({ title, details }) {
  return (
    <Accordion
      sx={{
        margin: "0.25rem",
      }}
    >
      <AccordionSummary
        sx={{
          bgcolor: "#8FB56B",
          borderRadius: "1.5rem",
          padding: "0.5rem 1rem",
          ['& .css-1twr7re-JoyAccordionSummary-button:not(.Mui-selected, [aria-selected="true"]):hover']:
            { bgcolor: "#8FB56B",
              borderRadius: "1.5rem",
              padding: "0.5rem 1rem",
            },
        }}
      >
        <p className="accordion-item__title">{title}</p>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
