import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

function TimelineModal({show,onHide,selectedTask}) {
 
   
  return (
    <>
    
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          {/* dynamically displaying selected task name in modal */}
          <Modal.Title>{selectedTask.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* creating react bootstrap card inside modal and displaying the image and description   */}
            <Card className="bg-dark text-white">
                {/* dynamically displaying image of selected task in modal */}
                <Card.Img src={selectedTask.image} alt="Card image" />
                    <Card.ImgOverlay>
                        {/* dynamically displaying the description of selected task in modal */}
                    Task Description: {selectedTask.description}
                    </Card.ImgOverlay>
           </Card>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TimelineModal