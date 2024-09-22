import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { addReview, updateReview, deleteReview } from '../features/reviewsSlice';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const ReviewsModal = ({ product, show, handleClose }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews.filter((review) => review.productId === product.id));
  const [newReview, setNewReview] = useState({ name: '', email: '', review: '', score: 1 });
  const [editingReviewId, setEditingReviewId] = useState(null); // To track if we are editing an existing review

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editingReviewId) {
//       // Update existing review
//       dispatch(updateReview({ ...newReview, id: editingReviewId, productId: product.id }));
//     } else {
//       // Add new review
//       dispatch(addReview({ ...newReview, id: uuidv4(), productId: product.id }));
//     }
//     resetForm();
//   };
const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user has already submitted a review for this product using the same email
    const existingReview = reviews.find((rev) => rev.email === newReview.email);

    if (existingReview) {
      // If an existing review is found with the same email, update it
      dispatch(updateReview({ ...newReview, id: existingReview.id, productId: product.id }));
    } else {
      // Otherwise, add a new review
      dispatch(addReview({ ...newReview, id: uuidv4(), productId: product.id }));
    }

    resetForm();
  };
  const resetForm = () => {
    setNewReview({ name: '', email: '', review: '', score: 1 });
    setEditingReviewId(null); // Reset editing mode
  };

  const handleEdit = (review) => {
    setNewReview({ name: review.name, email: review.email, review: review.review, score: review.score });
    setEditingReviewId(review.id); // Set the review to edit
  };

  const handleDelete = (reviewId) => {
    dispatch(deleteReview({ id: reviewId }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reviews for {product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Existing Reviews:</h5>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id}>
              <strong>{review.name}</strong> ({review.email}): {review.review} (Score: {review.score}/5)
              <div>
              <Button variant="secondary" onClick={() => handleEdit(review)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(review.id)}>Delete</Button>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}

        <h5>Add or Edit Review:</h5>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={newReview.email}
              onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              value={newReview.review}
              onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Score</Form.Label>
            <Form.Control
              as="select"
              value={newReview.score}
              onChange={(e) => setNewReview({ ...newReview, score: e.target.value })}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            {editingReviewId ? 'Update Review' : 'Submit Review'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewsModal;
