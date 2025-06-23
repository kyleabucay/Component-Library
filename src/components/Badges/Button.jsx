import { clsx } from "clsx"
import "./Badge.css"

export default function Button({ children, variant, style, toggle }) {
    const classNames = clsx(
    {
        gray: variant === "Gray",
        red: variant === "Red",
        yellow: variant === "Yellow",
        green: variant === "Green",
        blue: variant === "Blue",
        indigo: variant === "Indigo",
        purple: variant === "Purple",
        pink: variant === "Pink",
        square: style === "Square"
    }, 
    {
        pill: style === "Pill"
    })
    
    return (
        <>
            {variant && <span className="badge-span">{variant} - {style}</span>}
            <button className={classNames}>{children}</button>
        </>
    )
}