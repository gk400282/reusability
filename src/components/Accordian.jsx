import PropTypes from "prop-types"
import { FaCaretDown, FaCaretLeft } from "react-icons/fa6"

function Accordian ({ items, activeIndex, setActiveIndex }) {
    const handleAccordianClick = (index) => {
        setActiveIndex((currentActiveIndex) => {
            if (currentActiveIndex === index)
            {
                return -1;
            }
            else
            {
                return index;
            }
        });
    };

    const list = items.map((item, index) => {
        const text = activeIndex === index && <div className="bg-gray-100 border-b p-5">{item.text}</div>;
        const icon = activeIndex === index ? <FaCaretDown /> : <FaCaretLeft />;
        return (
            <div key={index}>
                <div 
                className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer" 
                onClick={() => handleAccordianClick(index)}
                >
                    {item.title}
                    <span className="text-xl">{icon}</span>
                </div>
                {text}
            </div>
        );
    });
    return <div className="border-x border-t rounded">{ list }</div>;
}

Accordian.propTypes = {
    items: PropTypes.array,
    activeIndex: PropTypes.number,
    setActiveIndex: PropTypes.func
}

export default Accordian;