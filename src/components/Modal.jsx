import Button from "./Button";
import ReactDOM from 'react-dom';

function Modal({handleClose}) {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={handleClose}></div>
            <div className="absolute inset-20 p-10 bg-cyan-100 border rounded p-3 shadow overflow-y-scroll">
                <h2 className="text-xl font-bold">Information!</h2>
                <p>Lorem Ipsum Dolor Sit Amet! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <Button success outline className="mt-5" onClick={handleClose}>Got it!</Button>
            </div>
        </div>,
        document.getElementById('modal-container')
    );
}

export default Modal;