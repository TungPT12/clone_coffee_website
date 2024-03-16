// ReviewList.tsx

import React, { useState } from "react";
import styles from "./Rating.module.scss";

interface Review {
  rating: number;
  comment: string;
  avatar: string;
}

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleReviewSubmit = (rating: number, comment: string) => {
    const newReview: Review = { rating, comment, avatar: "" };
    setReviews([...reviews, newReview]);
  };

  return (
    <div className="review-list">
      <h2>Các đánh giá </h2>
      {reviews.length === 0 ? (
        <p>Chưa có đánh giá nào.</p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <div className="avatar user-avatar">
                {review.avatar && <img src={review.avatar} alt="Avatar" />}
              </div>
              <div className="comment">
                <div className="rating">
                  Số sao:
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index} className="star-icon filled"></span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, index) => (
                    <span key={index} className="star-icon"></span>
                  ))}
                </div>
                <p className="comment-text">{review.comment}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

interface ReviewFormProps {
  onSubmit: (rating: number, comment: string) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(rating, comment);
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Hãy đánh giá sản phẩm của chúng tôi</h3>
      <div className={`${styles.rating}`}>
        <label htmlFor="rating">Số sao:</label>
        <select id="rating" value={rating} onChange={handleRatingChange}>
          <option value={1}>1 sao</option>
          <option value={2}>2 sao</option>
          <option value={3}>3 sao</option>
          <option value={4}>4 sao</option>
          <option value={5}>5 sao</option>
        </select>
      </div>
      <div className={`${styles.comment}`}>
        <label htmlFor="comment">Bình luận:</label>
        <textarea
          cols={2}
          id="comment"
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button type="submit">Gửi đánh giá</button>
    </form>
  );
};

export default ReviewList;
