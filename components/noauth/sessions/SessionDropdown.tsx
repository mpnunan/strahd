import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Link from 'next/link';
import SessionButtons from './SessionButtons';

type SessionDropdownObj = {
  id: string;
  session: number;
  title: string;
  date: string;
  summary: string;
}

export default function SessionDropdown({
  id,
  session,
  title,
  date,
  summary,
}: SessionDropdownObj) {

  const summaryJoined = summary.replace('\n', ' ');

  const summaryClipped = summaryJoined.substring(0, 250);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`Session-${session}-content`}
          id={`sessionDrop-${id}`}
        >
          {`Session ${session}: ${title}`}
        </AccordionSummary>
        <AccordionDetails>
          {`${summaryClipped}...`}
          <sub>{date}</sub>
        </AccordionDetails>
        <AccordionActions>
          <Link href={`/sessions/${id}`} passHref >
            <Button variant='outlined'>{`Session Details`}</Button>
          </Link>
        </AccordionActions>
        <SessionButtons sessionId={id} />
      </Accordion>
    </div>
  );
}
