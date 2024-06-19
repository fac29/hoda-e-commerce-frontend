import './ReviewsList.css';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';
import { Review, Reviews } from '../../dataTypes/review';

type ReviewsListProp = {
	productId: number;
};

const fetchReviewsFromBack = async (productId: number) => {
	const response = await fetch(`http://localhost:3000/products/${productId}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);

	const data = await response.json();
	return data.reviews;
};

export default function ReviewsList({ productId }: ReviewsListProp) {
	const [reviews, setReviews] = useState<Reviews>([]);

	useEffect(() => {
		const fetchReviews = async () => {
			const reviews = await fetchReviewsFromBack(productId);
			setReviews(reviews);
		};

		fetchReviews();
	}, [productId]);

	return (
		<>
			<h2>Reviews</h2>
			<div className='reviews-list'>
				{reviews.length > 0 ? (
					reviews.map((review: Review) => (
						<ReviewCard
							key={review.review_id}
							reviewId={review.review_id}
							reviewAuthor={review.author}
							reviewRating={review.rating}
							reviewComment={review.comment}
						/>
					))
				) : (
					<p>There are no reviews for this product.</p>
				)}
			</div>
		</>
	);
}
