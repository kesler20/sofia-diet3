import * as React from "react";
import Modal from "@mui/material/Modal";
import CustomModals from "./CustomModal";

export default function ModalButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="btn" onClick={handleOpen}>
        {props.buttonTitle}
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <CustomModals
          buttonTitle={props.modalButtonTitle}
          items={props.items}
          onClose={handleClose}
        />
      </Modal>
    </div>
  );
}
