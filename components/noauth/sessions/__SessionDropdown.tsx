import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';

type SessionDropdownObj = {
  id: string;
  session: number;
  date: string;
  summary: string;
}

export default function SessionDropdown({
  id,
  session,
  date,
  summary,
}: SessionDropdownObj) {

  const summaryJoined = summary.replace('\n', ' ');

  const summaryClipped = summaryJoined.substring(0, 250);

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`Session ${session} content`}
          id={`sessionDrop-${id}`}
        >
          {`Session ${session}: ${date}`}
        </AccordionSummary>
        <AccordionDetails>
          {`${summaryClipped}...`}
        </AccordionDetails>
        <AccordionActions>
          <Link href={`/sessions/${id}`} passHref >
            <Button>{`Session Details`}</Button>
          </Link>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
