import { useState } from "react"

export default function useToggle(initVal = false) {
    const [on, setOn] = useState(initVal)

    const toggle = () => setOn(prev => !prev)

    return [on, toggle]
}