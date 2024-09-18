// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form, ListGroup, Alert } from 'react-bootstrap';

// const ReviewsModal = ({ product, show, handleClose }) => {
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState({ name: '', email: '', comment: '' });
//   const [existingReview, setExistingReview] = useState(null);
//   const [alert, setAlert] = useState('');

//   useEffect(() => {
//     if (show) {
//       fetchReviews();
//     }
//   }, [show]);

//   // Fetch reviews for the current product
//   const fetchReviews = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/reviews?productId=${product.id}`);
//       const data = await response.json();
//       setReviews(data);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//     }
//   };

//   // Submit a new review
//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     if (existingReview) {
//       setAlert("You've already reviewed this product. You can edit or delete your review.");
//       return;
//     }

//     const reviewData = { ...newReview, productId: product.id };

//     try {
//       const response = await fetch('http://localhost:5000/reviews', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(reviewData),
//       });
//       if (response.ok) {
//         fetchReviews(); // Fetch updated reviews
//         setNewReview({ name: '', email: '', comment: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting review:', error);
//     }
//   };

//   // Delete a review
//   const handleDeleteReview = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/reviews/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         fetchReviews(); // Fetch updated reviews
//       }
//     } catch (error) {
//       console.error('Error deleting review:', error);
//     }
//   };

//   // Edit a review
//   const handleEditReview = async (id) => {
//     const updatedReview = { ...existingReview, comment: newReview.comment };
//     try {
//       const response = await fetch(`http://localhost:5000/reviews/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedReview),
//       });
//       if (response.ok) {
//         fetchReviews(); // Fetch updated reviews
//         setExistingReview(null);
//         setNewReview({ name: '', email: '', comment: '' });
//       }
//     } catch (error) {
//       console.error('Error editing review:', error);
//     }
//   };

//   // Check if the user has already reviewed the product
//   const checkIfUserReviewed = () => {
//     const review = reviews.find((r) => r.email === newReview.email);
//     if (review) {
//       setExistingReview(review);
//       setNewReview(review);
//     }
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Rate & Reviews for {product.title}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {alert && <Alert variant="warning">{alert}</Alert>}

//         <ListGroup className="mb-3">
//           {reviews.map((review) => (
//             <ListGroup.Item key={review.id}>
//               <strong>{review.name}</strong> <br />
//               {review.comment}
//               <div className="d-flex justify-content-end">
//                 <Button
//                   variant="danger"
//                   size="sm"
//                   className="me-2"
//                   onClick={() => handleDeleteReview(review.id)}
//                 >
//                   Delete
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   size="sm"
//                   onClick={() => setExistingReview(review)}
//                 >
//                   Edit
//                 </Button>
//               </div>
//             </ListGroup.Item>
//           ))}
//         </ListGroup>

//         <Form onSubmit={handleSubmitReview}>
//           <Form.Group controlId="reviewName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter your name"
//               value={newReview.name}
//               onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="reviewEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email"
//               value={newReview.email}
//               onBlur={checkIfUserReviewed}
//               onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="reviewComment">
//             <Form.Label>Comment</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               placeholder="Enter your review"
//               value={newReview.comment}
//               onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//               required
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit" className="mt-3">
//             {existingReview ? 'Update Review' : 'Submit Review'}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ReviewsModal;
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, ListGroup, Alert } from 'react-bootstrap';

const ReviewsModal = ({ product, show, handleClose }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', email: '', comment: '', score: 5 });
  const [existingReview, setExistingReview] = useState(null);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (show) {
      fetchReviews();
    }
  }, [show]);

  // Fetch reviews for the current product
  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:5000/reviews?productId=${product.id}`);
      const data = await response.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Submit a new review or update an existing one
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (existingReview) {
      setAlert("You've already reviewed this product. You can edit or delete your review.");
      return;
    }

    const reviewData = { ...newReview, productId: product.id };

    try {
      const response = await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });
      if (response.ok) {
        fetchReviews(); // Fetch updated reviews
        setNewReview({ name: '', email: '', comment: '', score: 5 });
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Delete a review
  const handleDeleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchReviews(); // Fetch updated reviews
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  // Edit a review
  const handleEditReview = (review) => {
    setExistingReview(review);
    setNewReview({ name: review.name, email: review.email, comment: review.comment, score: review.score });
  };

  // Submit the edited review
  const handleSubmitEditReview = async (e) => {
    e.preventDefault();

    if (existingReview) {
      const updatedReview = { ...existingReview, comment: newReview.comment, score: newReview.score };
      try {
        const response = await fetch(`http://localhost:5000/reviews/${existingReview.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedReview),
        });
        if (response.ok) {
          fetchReviews(); // Fetch updated reviews
          setExistingReview(null);
          setNewReview({ name: '', email: '', comment: '', score: 5 });
        }
      } catch (error) {
        console.error('Error editing review:', error);
      }
    }
  };

  // Check if the user has already reviewed the product
  const checkIfUserReviewed = () => {
    const review = reviews.find((r) => r.email === newReview.email);
    if (review) {
      setExistingReview(review);
      setNewReview(review);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Rate & Reviews for {product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {alert && <Alert variant="warning">{alert}</Alert>}

        <ListGroup className="mb-3">
          {reviews.map((review) => (
            <ListGroup.Item key={review.id}>
              <strong>{review.name}</strong> <br />
              {review.comment} <br />
              <span>Rating: {review.score}/5</span>
              <div className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => handleEditReview(review)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  className="ms-2"
                  onClick={() => handleDeleteReview(review.id)}
                >
                  Delete
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Form onSubmit={existingReview ? handleSubmitEditReview : handleSubmitReview}>
          <Form.Group controlId="reviewName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="reviewEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={newReview.email}
              onBlur={checkIfUserReviewed}
              onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="reviewComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your review"
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="reviewScore" className="mt-3">
            <Form.Label>Score</Form.Label>
            <Form.Control
              as="select"
              value={newReview.score}
              onChange={(e) => setNewReview({ ...newReview, score: e.target.value })}
              required
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            {existingReview ? 'Update Review' : 'Submit Review'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ReviewsModal;
