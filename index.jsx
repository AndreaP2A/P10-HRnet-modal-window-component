import PropTypes from "prop-types";
import "./modalwindow.css";

const Modal = ({ show, onClose, children, closeButton }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        {closeButton && (
          <button onClick={onClose} className="modal-close-btn-x">
            &times;
          </button>
        )}
        {children}
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
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
