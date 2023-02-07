import React from "react";
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import catIcon from "../images/cat-icon.png";

export default function Card(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="col">
          <div className="card h-100">
             <img src={props.cardImg} className="card-img-top h-100" />
             <div className="card-header">
              <div className="row">
                <div className="col-12 text-center">
                <h4>{props.title}</h4>
                </div>
                <div className="col-12 text-center">

              <> {/*MODAL*/}
              <Button className="btn-card" onClick={handleShow}>
                Read More
                <img src={catIcon} className="btn-card-icon"></img>
              </Button>
              <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                <div className="row">
                  <div className="col-12 pt-3 px-3">
                  <h3>{props.title}</h3>
                  </div>
                </div>
                </Modal.Header>
                <Modal.Body>
                  <p className="modal-text">{props.text}</p>
                </Modal.Body>
                <Modal.Footer>
                <a className="btn btn-modal" href={props.link} target="_blank">Read more at the Purina Website ❯❯</a>
                </Modal.Footer>
              </Modal>
              </>{/*MODAL*/}

                </div>
              </div>
             </div>
          </div>
      </div>
    )
}

