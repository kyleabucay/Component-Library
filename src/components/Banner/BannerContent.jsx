import { useContext } from "react";
import { NotifContext } from "../../App";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { HiMiniXCircle } from "react-icons/hi2";
import { HiInformationCircle } from "react-icons/hi";
import { clsx } from "clsx"
import "./Banner.css"

export default function BannerContent({ title, message }) {
    const { types } = useContext(NotifContext)

    const classNames = clsx({
        success: title === types[0],
        warning: title === types[1],
        error: title === types[2],
        neutral: title === types[3]
    })

    const iconStyle = { 
        marginRight: "5px", 
        width: message ? "1.5rem" : "1.3rem",
        height: message ? "1.5rem" : "1.3rem"
    }

    const getIcon = () => {
        if (title === types[0]) {
            return <FaCheckCircle style={iconStyle} color="#34D399"/>
        }

        if (title === types[1]) {
            return <FaExclamationTriangle style={iconStyle} color="#FBBF24" />
        }

        if (title === types[2]) {
            return <HiMiniXCircle style={iconStyle} color="#F87171" />
        }

        if (title === types[3]) {
            return <HiInformationCircle style={iconStyle} color="#60A5FA" />
        }
    }

    return (
        <>
            {getIcon()}
            <div className={clsx("content", classNames)}>
                <span className={classNames}>{title}</span>
                {message && <p className={classNames}>{message}</p>}
            </div>
        </>
    )
}