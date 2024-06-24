import './PlusMinusButton.css';

type plusMinusButtonProps = {
	className?: string;
	buttonText: string;
	buttonClick?: () => void;
};

function PlusMinusButton({ buttonText, buttonClick }: plusMinusButtonProps) {
	return (
		<>
			<button className={'plus-minus-button'} onClick={buttonClick}>
				{buttonText}
			</button>
		</>
	);
}

export default PlusMinusButton;
