import { useState } from "react"

function AddNewProduct() {
    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [color, setColor] = useState("")
    const handleClickBtn = () => {
        let object = {
            name, price, size, color
        }
        let productList = localStorage.getItem("productList")
        if (productList) {
            let arr = JSON.parse(productList)
            arr.push(object)
            localStorage.setItem("productList", JSON.stringify(arr))
        } else {
            localStorage.setItem("productList", JSON.stringify([object]))
        }

        setName("")
        setPrice(0)
        setSize(0)
        setColor("")
    }
    const handleHideShow = () => {
        setIsShow(!isShow)
    }
    return (
        <div>
            {
                isShow === true &&
                <fieldset>
                    <legend>Add New Product</legend>
                    <div className="input-product">
                        <label htmlFor="">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-product">
                        <label htmlFor="">Price</label>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="input-product">
                        <label htmlFor="">Size</label>
                        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                    </div>
                    <div className="input-product">
                        <label htmlFor="">Color</label>
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                    </div>
                    <div>
                        <button onClick={handleClickBtn}>Add New Product</button>
                    </div>
                </fieldset>
            }

            {
                isShow === true ? <div onClick={handleHideShow}>Hide this form</div> :
                    <div onClick={handleHideShow}>Show this form</div>
            }
            <div>
                List product:
                <div>
                    {localStorage.getItem("productList")}
                </div>
            </div>
        </div>
    )
}
export default AddNewProduct