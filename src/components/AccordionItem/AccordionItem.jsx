// Styles
import "./AccordionItem.scss";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";

function AccordionItem({ title, details }) {
  return (
    <Accordion>
      <AccordionSummary
        sx={{
          [`&:hover`]: { bgcolor: "#E7E3F1" },
          ['& .css-1twr7re-JoyAccordionSummary-button:not(.Mui-selected, [aria-selected="true"]):hover']:
            { bgcolor: "#E7E3F1" },
        }}
      >
        <p className="accordion-item__title">{title}</p>
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionItem;
