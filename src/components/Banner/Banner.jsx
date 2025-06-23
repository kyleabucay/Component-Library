import { clsx } from "clsx"
import { useContext } from "react"
import { NotifContext } from "../../App"

export default function Banner({ children, variant = "neutral" }) {
    const { types } = useContext(NotifContext)

    const className = clsx("banner-container", {
        success: variant === types[0],
        warning: variant === types[1],
        error: variant === types[2],
        neutral: variant === types[3]
    })

    return (
        <div className={className}>
            {children}
        </div>
    )
}