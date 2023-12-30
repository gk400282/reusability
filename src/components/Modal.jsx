import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({handleClose, actionBar, children}) {
    useEffect(() => {
        let overflowAlreadyHidden = document.body.classList.contains('overflow-hidden');

        if (!overflowAlreadyHidden)
        {
            document.body.classList.add('overflow-hidden');
            return () => document.body.classList.remove('overflow-hidden');
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={handleClose}></div>
            <div className="fixed inset-60 p-10 bg-cyan-100 border rounded p-3 shadow overflow-y-scroll">
                <div className="flex flex-col justify-between h-full">
                    {children}
                    <div className="flex justify-end">
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-container')
    );
}

export default Modal;