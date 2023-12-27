import { useEffect, useState, useRef } from "react";
import { FaCaretDown } from "react-icons/fa6"
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [open, setOpen] = useState(false);
    const divElement = useRef();
    const handleSelection = (option) => {
        onChange(option);
        setOpen(false);
    };
    const handleOnClick = () => {
        setOpen((isOpen) => !isOpen);
    };
    const listOfItems = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.label} onClick={() => handleSelection(option)}>
                {option.description}
            </div>
        );
    });

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!divElement.current)
            {
                return;
            }
            if (!divElement.current.contains(event.target)) {
                setOpen(false);
            }
        }; 
        
        document.addEventListener("click", handleOutsideClick, true);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <div ref={divElement} className="w-60 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleOnClick}>
                { value?.description || "Select Spiciness" }
                <span><FaCaretDown /></span>
            </Panel>
            {open && (
            <Panel className="absolute top-full">
                {listOfItems}
            </Panel>
            )}
        </div>
    );
}

export default Dropdown;