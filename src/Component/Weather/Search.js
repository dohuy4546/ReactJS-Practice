import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
function Search() {
    const [keyword, setKeyWord] = useState("")
    const [locationArr, setLocationArr] = useState([])
    let history = useHistory()
    const handleSearchBtn = async () => {
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https://www.metaweather.com/api/location/search/?query=${keyword}` },
        })
        if (response && response.data) {
            let _locationArr = []
            for (let index in response.data) {
                _locationArr.push(response.data[index])
            }
            setLocationArr(_locationArr)
        }
    }
    const handleViewDetail = (id) => {
        history.push(`/weather/detail/${id}`)
    }
    return (
        <div className='search-weather-container'>
            <div className="search-input">
                <input type="text" placeholder="Search any city..." value={keyword} onChange={(e) => setKeyWord(e.target.value)} />
                <button onClick={handleSearchBtn}>Search</button>
            </div>
            <div className="result-container">
                {locationArr && locationArr.length > 0 &&
                    locationArr.map((item, index) => {
                        return (
                            <div className="result-child" key={item.id}>
                                <div className="title">Title: {item.title}</div>
                                <div className="type">Type: {item.location_type}</div>
                                <div className="id" onClick={() => handleViewDetail(item.id)}>Id: {item.id}</div>
                                <div className="latt_long">Latt_long: {item.latt_long}</div>
                            </div>
                        )
                    })}
            </div>


        </div>
    )
}
export default Search