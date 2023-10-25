import "./Product.scss"
import sniker1 from "../../assets/images/sniker1.jpg"
import sniker2 from "../../assets/images/sniker2.jpg"
import sniker3 from "../../assets/images/sniker3.jpg"
import sniker4 from "../../assets/images/sniker4.jpg"
import { useState } from "react"
import Lightbox from 'react-image-lightbox';
function Product() {
    const images = [
        sniker1, sniker2, sniker3, sniker4
    ]
    const [photoIndex, setPhotoIndex] = useState(0)
    const [currentUpImg, setCurrentUpImg] = useState(sniker1)
    const [isOpen, setIsOpen] = useState(false)
    const handleClickPreviewing = () => {
        let index = images.findIndex(item => item === currentUpImg)
        setPhotoIndex(index)
        setIsOpen(true)
    }
    return (
        <div>
            <div className="product-container">
                <div className="contain-left">
                    <div className="img-up">
                        <img src={currentUpImg} onClick={() => handleClickPreviewing()} />
                    </div>
                    <div className="img-down">
                        {
                            images.map((item) => {
                                return (
                                    <div className="small-img">
                                        <img src={item} onClick={() => setCurrentUpImg(item)} className={currentUpImg === item ? "active" : ""} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="contain-right">
                    <div className="title">Giày chạy bộ nam New Balance - M860E11</div>
                    <div className="price">3.695.000<sup>₫</sup></div>
                    <div className="size">Size: 30</div>
                    <div className="action">
                        <label className="quantity"></label>
                        <input type="number" min={1} value={1} />
                        <button className="buy">Chọn mua</button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + images.length - 1) % images.length,
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex(
                            (photoIndex + 1) % images.length,
                        )
                    }
                />
            )}
        </div>
    )
}
export default Product