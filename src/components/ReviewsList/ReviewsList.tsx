import 'ReviewsList.css';
import { ReviewCard } from '../ReviewCard/ReviewCard';
import { useEffect, useState } from 'react';

const fetchReviewsFromBack = async (productId: number) => {
	const response = await fetch(`http://localhost:3000/products/${productId}`);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	console.log(response);

	const data = await response.json();
	return data;
};

export default function ReviewsList(productId: number) {
	const [reviews, setReviews] = useState<Reviews>([]);

	useEffect(() => {
		const fetchReviews = async () => {
			const reviews = await fetchReviewsFromBack(productId);
			setReviews(reviews);
		};

		fetchReviews();
	});

	return (
		<div>
			<h2>Reviews</h2>
			<ReviewCard />
		</div>
	);
}
