import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((isOpen) => !isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const actionBar = <Button success outline className="mt-5" onClick={handleClose}>Got it!</Button>;

    const modal = <Modal handleClose={handleClose} actionBar={actionBar}>
        <div>
            <h2 className="text-xl font-bold">Information!</h2>
            <p>Lorem Ipsum Dolor Sit Amet! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
    </Modal>;

    return (
        <div className="relative">
            <Button primary rounded onClick={handleClick}>Show Details</Button>
            {open && modal}
        </div>
    );
}

export default ModalPage;