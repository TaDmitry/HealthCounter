import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<section className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="modal-content__messages">
					<h3>Messages</h3>
					<button className="modal-close" onClick={onClose}>
						<FontAwesomeIcon icon={faXmark} className="your-icon-class" />
					</button>
				</div>
				{children}
			</div>
		</section>
	);
};

export default Modal;
