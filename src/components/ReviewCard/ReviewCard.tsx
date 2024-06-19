import './ReviewCard.css';

export type ReviewCardProps = {
	productId?: number;
	reviewId: number;
	reviewAuthor: string;
	reviewRating: number;
	reviewComment: string;
};

export function ReviewCard({
	/* productId, */
	reviewId,
	reviewAuthor,
	reviewRating,
	reviewComment,
}: ReviewCardProps) {
	return (
		<div key={reviewId}>
			<div className='flex'>
				<span>👤</span>
				<h3>{reviewAuthor}</h3>
			</div>
			<div className='rating'>
				{[1, 2, 3, 4, 5].map((star) => {
					return (
						<span
							style={{
								color: reviewRating >= star ? 'gold' : 'gray',
								fontSize: '35px',
							}}
						>
							★
						</span>
					);
				})}
			</div>
			<h2>Review header</h2>
			<p>{reviewComment}</p>
		</div>
	);
}
