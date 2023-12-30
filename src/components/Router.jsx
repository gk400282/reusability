import useNavigation from "../hooks/useNavigation";

function Router({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath)
    {
        return children;
    }
    return null;
}

export default Router;