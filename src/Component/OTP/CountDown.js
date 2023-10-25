import { useEffect, useState } from "react"


function CountDown(props) {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) return props.setIsDisableBtn(true);
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{Math.floor(count / 60)}:{count % 60 < 10 ? `0${count % 60}` : count % 60}</div>
    )
}
export default CountDown