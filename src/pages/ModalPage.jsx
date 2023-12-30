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

    return (
        <div className="relative">
            <Button primary rounded onClick={handleClick}>Show Details</Button>
            {open && <Modal handleClose={handleClose}/>}
        </div>
    );
}

export default ModalPage;