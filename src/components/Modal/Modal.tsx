import styles from './Modal.module.css';


type ModalProps = {
	textModal: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Modal({ textModal, setIsOpen }: ModalProps) {

	return (
		<>
			<div className={styles.darkBG} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}> Can't checkout yet!</h5>
					</div>
					<div className={styles.modalContent}>{textModal}</div>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button
								className={styles.deleteBtn}
								onClick={() => setIsOpen(false)}
							>
								cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
