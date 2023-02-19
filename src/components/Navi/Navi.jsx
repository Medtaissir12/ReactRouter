import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Button, Modal, Form } from "react-bootstrap";
import ReactStars from "react-stars";
import { v4 as uuidv4 } from "uuid";

const Navi = ({
  movies,
  setMovies,
  inputSearch,
  setInputSearch,
  stars,
  setStars,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setMovies([...movies, newMovie]);
    setShow(false);
  };

  const handleSearch = (e) => {
    setInputSearch(e.target.value);
    console.log(inputSearch);
  };
  const handleStars = (new_rating) => {
    setStars(new_rating);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MoviezLand</Navbar.Brand>
          <input
            style={{ width: "50%" }}
            className="filmName"
            type="text"
            placeholder="Enter Film Name"
            onChange={handleSearch}
          />
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            half={false}
            onChange={handleStars}
            value={stars}
          />
          <Button variant="warning" onClick={handleShow}>
            Add Movie
          </Button>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <label>Movie Name</label>
          <Form.Control type="text" onChange={handleChange} name="title" />
          <br />
          <Form.Label>Movie Description</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="description"
          />
          <Form.Label>Movie Image</Form.Label>
          <Form.Control type="text" onChange={handleChange} name="posterURL" />
          <br />
          <Form.Label>Movie rating</Form.Label>
          <Form.Control type="number" onChange={handleChange} name="rating" />
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navi;
