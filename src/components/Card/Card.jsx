import { HiArrowRight } from "react-icons/hi";

export default function Card({ icon, children }) {
    return (
        <div className="card-container special">
            <div className="icon-container">
                {icon}
            </div>
            {children}
            <a href="#" className="link-with-icon">
                View details <HiArrowRight style={{ marginLeft: "4px" }} />
            </a>
        </div>
    )
}