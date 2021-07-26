import './modal.css';

const Modal = ({ children, id }) => {
    return (
        <div className = 'Modal' id = { id }>
            <div id = 'holder'>
                { children }
            </div>
        </div>
    )
}

export default Modal;