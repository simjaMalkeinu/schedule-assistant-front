import PropTypes from 'prop-types'
import './modal.css'

export default function Modal(props) {

  const { update } = props;

  return (
    <div>
        <div className="modal open">
            <div className="modal-content">
            <span className="close-button">&times;</span>
            <p>Some text in the Modal..</p>
            <button onClick={update}>Close</button>
            </div>
        </div>
    </div>
  )
}

Modal.propTypes = {
  update: PropTypes.func,
};