import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode } from 'react';

interface PropsAcordion {
    id: string;
    title: string;
    text: string | ReactNode;
    style:string;
}

export default function Acordion( {id, title, text, style}:PropsAcordion ) {
    return (
        <>
            <Accordion className={style}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={id}
                    id={id}
                    className='rounded bg-[#f97d01] '
                >
                    <Typography className='font-bold'><p className='font-bold text-black text-xl'>{title}</p>  </Typography>
                </AccordionSummary>
                <AccordionDetails className='rounded text-black'>
                    <Typography>
                        {text}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}