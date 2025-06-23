import "./Tooltip.css"
import { MdOutlineInbox } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { clsx } from "clsx"
import TooltipButton from "./TooltipButton"
import useToggle from "../../hooks/useToggle";

export default function Tooltip({ children, variant }) {
    const [isDark, setIsDark] = useToggle(true)

    const className = clsx(variant, {
        dark: !isDark,
    })

    const inboxColor = 
    {
        default: isDark ? "#6B7280" : "#C7C7C7",
        blue: isDark ? "#1C51B9" : "#7EA6F2",
        magenta: isDark ? "#C7369E" : "#F462E6",
        green: isDark ? "#41A557" : "#C1FFCF"
    }

    const exitColor = {
        default: isDark ? "#6B7280" : "#C7C7C7",
        blue: isDark ? "#1C51B9" : "#D8D8D8",
        magenta: isDark ? "#C7369E" : "#D8D8D8",
        green: isDark ? "#3C8C4E" : "#D8D8D8"
    }

    return (
        <>
        <div className={`tooltip ${className}`}>
            <MdOutlineInbox size="1.75rem" color={inboxColor[variant]} className="icon-transition" />
            <div className={`tooltip-content ${className}`}>
                {children}
            </div>
            <button><IoClose color={exitColor[variant]} className="icon-transition" /></button>
            <span className={`tooltip-arrow ${className}`}></span>
        </div>
        <TooltipButton toggle={setIsDark}>Switch Mode</TooltipButton>
        </>
    )
}