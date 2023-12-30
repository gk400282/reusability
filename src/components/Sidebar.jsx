import Link from "./Link";
import Panel from "./Panel";

function Sidebar({links}) {
    const renderedLinks = links.map((link) => {
        return (
            <Link 
            key={link.label} 
            to={link.path}
            className="mb-1"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
            >
                {link.label}
            </Link>
        );
    })

    return (
        <div className="min-h-96 sticky top-0 overflow-y-scroll flex flex-col items-start">{renderedLinks}</div>
    )
}

export default Sidebar;