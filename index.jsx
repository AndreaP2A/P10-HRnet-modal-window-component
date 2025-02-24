import PropTypes from "prop-types";
import "./modalwindow.css";

const Modal = ({ show, onClose, children, closeButtonX, closeButton }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        {closeButtonX && (
          <button onClick={onClose} className="modal__close-btn-x">
            &times;
          </button>
        )}
        {children}
        {closeButton && (
          <button onClick={onClose} className="modal__close-btn">
            Close
          </button>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
