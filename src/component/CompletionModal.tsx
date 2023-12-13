import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface CompletionModalProps {
  show: boolean;
  handleClose: () => void;
}

const CompletionModal: React.FC<CompletionModalProps> = ({
  show,

  handleClose,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This task is Completed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are the best</Modal.Body>
        <Modal.Body>
          <img
            width="470px"
            src="https://avatars.dzeninfra.ru/get-zen_doc/5231562/pub_61a876d6f5a1761f88f1e582_61a8782127040867c2e5741d/scale_1200"
            alt="congrats image"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CompletionModal;
