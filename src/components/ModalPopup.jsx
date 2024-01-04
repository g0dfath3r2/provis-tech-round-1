import { Box, Modal } from "@mui/material";
import React from "react";
import { FaVideo } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalPopup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="flex items-center justify-between flex-wrap"
        onClick={handleOpen}
      >
        <div className="rounded-full p-2 shadow-2xl bg-white mr-5 w-[57px] h-[57px] flex justify-center">
          <FaVideo className="w-[23px] h-[17px] m-auto" />
        </div>

        <span className="font-extrabold">Play Demo</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            src="https://www.youtube.com/embed/v=wNWyMsrpbz0&t=3323s"
            title="youtube"
            allowFullScreen
            
          >
          </iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalPopup;
