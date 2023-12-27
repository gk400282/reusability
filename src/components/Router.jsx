import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Router({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    if (path === currentPath)
    {
        return children;
    }
    return <div>This page does not exist! Please check your URL</div>;
}

export default Router;