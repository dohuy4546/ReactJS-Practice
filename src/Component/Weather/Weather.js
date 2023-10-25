import { useState } from 'react'
import './Weather.scss'
import Search from './Search'
function Weather() {
    const [title, setTitle] = useState("")
    return (
        <div className='weather-app-container'>
            <Search />
        </div>
    )
}
export default Weather