import PropTypes from "prop-types";
import classNames from "classnames";
import { twMerge } from 'tailwind-merge';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
 }) {
    const classes = twMerge(classNames(
    rest.className,
    "flex items-center px-3 py-1.5 border-2", 
    {
        "bg-blue-500 border-blue-500 text-white": primary,
        "bg-gray-500 border-gray-500 text-white": secondary,
        "bg-green-500 border-green-500 text-white": success,
        "bg-orange-500 border-orange-500 text-white": warning,
        "bg-red-500 border-red-500 text-white": danger,
        "bg-white": outline,
        "text-blue-500": outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500": outline && success,
        "text-orange-500": outline && warning,
        "text-red-500": outline && danger,
        "rounded-full": rounded
    })
    );
    return <button {...rest} className={classes}>{ children }</button>;
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, warning, success, danger}) => {
        const count = 
        Number(!!primary) +
        Number(!!secondary) +
        Number(!!success) +
        Number(!!warning) +
        Number(!!danger);
        
        if (count > 1)
        {
            return new Error('Only one button variation can be passed!');
        }
    },
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
}

export default Button;