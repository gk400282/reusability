import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classNames(
        "text-blue-600",
        "visited:text-purple-600", 
        "visited:border-purple-600",
        "cursor-pointer", 
        "p-2", 
        "hover:underline",
        className,
        currentPath === to && activeClassName
        )
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey)
        {
            return;
        }
        event.preventDefault();

        navigate(to);
    }
    return <a href={to} onClick={handleClick} className={classes}>{children}</a>;
}

export default Link;