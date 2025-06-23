import React from "react"
import { Badge, Button, Banner, Card, Tooltip, TooltipButton } from "./components"
import { IoCloudUpload } from "react-icons/io5"
import { TfiLock } from "react-icons/tfi"
import { HiChartBar, HiChatAlt2, HiRefresh } from "react-icons/hi"

const NotifContext = React.createContext()

export { NotifContext }


export default function App() {
    const variants = ["Gray", "Red", "Yellow", "Green", "Blue", "Indigo", "Purple", "Pink"]

    const squareBadge = variants.map(variant => {
        return (
            <Badge key={variant}>
                <Button variant={variant} style="Square">Button</Button>
            </Badge>
        )
    })

    const pillBadge = variants.map((variant, index) => {
        return (
            <Badge key={index}>
                <Button variant={variant} style="Pill">Button</Button>
            </Badge>
        )
    })

    const cardData = [
    {
        name: "Easy Deployment",
        description: "Launch your app quickly and reliably with automated deployment tools and zero downtime." ,
        icon: <IoCloudUpload size="1.75rem" color="#FFFFFF" />
    }, 
    {
        name: "Enhanced Security",
        description: " Keep your data safe with multi-layered security, role-based access, and real-time risk detection." ,
        icon: <TfiLock size="1.75rem" color="#FFFFFF" />
    }, 
    {
        name: "Analytics Ready",
        description: "Track performance out of the box and extend insights with Python-powered analysis and visualization." ,
        icon: <HiChartBar size="1.75rem" color="#FFFFFF" />
    }, 
    {
        name: "Real-Time Feedback",
        description: "Monitor user behavior, errors, and logs in real time to improve your app as it runs." ,
        icon: <HiChatAlt2 size="2.05rem" color="#FFFFFF" />
    }, 
    {
        name: "Continuous Integration",
        description: "Automatically build, test, and deploy with every commit to ensure smooth, reliable updates." ,
        icon: <HiRefresh  size="1.75rem" color="#FFFFFF" />
    }]

    const cards = cardData.map((card, index) => {
        return (
            <Card icon={card.icon} key={index}>
                <h2>{card.name}</h2>
                <p>{card.description}</p>
            </Card>
        )
    })

    return (
        <main>
            <h1 className="heading">Component Library</h1>
            <div className="component-group">
                {squareBadge}
            </div>
            <div className="component-group">
                {pillBadge}
            </div>
            <br />
            <div className="component-group">
                <NotifContext.Provider value={{
                    types: ["Congratulations!", "Attention", "There is a problem with your application", "Update Available"],
                }}>
                <Banner variant="Congratulations!">
                    <Banner.Content 
                        title="Congratulations!"
                        message="Your action was successful."
                    />
                </Banner>
                <Banner variant="Congratulations!">
                    <Banner.Content 
                        title="Congratulations!"
                    />
                </Banner>
                <Banner variant="Attention">
                    <Banner.Content
                        title="Attention"
                        message="Please review the information carefully."
                    />
                </Banner>
                <Banner variant="Attention">
                    <Banner.Content
                        title="Attention"
                    />
                </Banner>
                <Banner variant="There is a problem with your application">
                    <Banner.Content
                        title="There is a problem with your application"
                        message="Something went wrong. Please try again."
                    />
                </Banner>
                <Banner variant="There is a problem with your application">
                    <Banner.Content
                        title="There is a problem with your application"
                    />
                </Banner>
                <Banner variant="Update Available">
                    <Banner.Content
                        title="Update Available"
                        message="A newer version is ready to install."
                    />
                </Banner>
                <Banner variant="Update Available">
                    <Banner.Content
                        title="Update Available"
                    />
                </Banner>
                </NotifContext.Provider>
            </div>
            <br />
            <div className="component-group">
                {cards}
            </div>
            <br />
            <div className="component-group">
                <div className="component-group column-layout">
                    <Tooltip variant="default">
                        <h2>Archive notes</h2>
                        <p>Store inactive notes securely without removing them permanently.</p>
                    </Tooltip>
                </div>
                <div className="component-group column-layout">
                    <Tooltip variant="blue">
                        <h2>Archive notes</h2>
                        <p>Store inactive notes securely without removing them permanently.</p>
                    </Tooltip>
                </div>
                <div className="component-group column-layout">
                    <Tooltip variant="magenta">
                        <h2>Archive notes</h2>
                        <p>Store inactive notes securely without removing them permanently.</p>
                    </Tooltip>
                </div>
                <div className="component-group column-layout">
                    <Tooltip variant="green">
                        <h2>Archive notes</h2>
                        <p>Store inactive notes securely without removing them permanently.</p>
                    </Tooltip>
                </div>
            </div>
        </main>
    )
}