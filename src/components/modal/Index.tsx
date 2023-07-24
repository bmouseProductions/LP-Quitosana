import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ModalProps{
    title: string;
    text: string;
}

export default function ModalComponent( { title, text }:ModalProps ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className=' !bg-[#f55303] !text-white'>Saiba mais</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className='!text-2xl'>
                {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {text}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}
