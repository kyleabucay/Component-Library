export default function Button({ children, toggle }) {
    return (
        <>
            <button onClick={toggle}>{children}</button>
        </>
    )
}