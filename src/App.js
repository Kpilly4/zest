import './App.css';
import React, {useState} from "react";
import Image1 from "./assets/image1.jpeg"
import Image2 from "./assets/image2.jpeg"
import Image3 from "./assets/image3.jpeg"
import Image4 from "./assets/image4.jpeg"
import Image5 from "./assets/image5.jpeg"
import Image6 from "./assets/image6.jpeg"


const images = [Image1, Image2, Image3, Image4, Image5, Image6]

const Loading = ({calculatedWidth}) => (
    <aside>
        <div className="loading-bar">
            <label htmlFor={"images-loaded"}> Loading All Your Favourite Images</label>
            <progress id={"images-loaded"} max={"100"} value={calculatedWidth}/>
        </div>
    </aside>
)

const App = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [numLoaded, setNumLoaded] = useState(0)
    const length = images.length - 1

    const handleClick = () => {
        setCurrentImage((currentImage) => {
            return currentImage < length ? currentImage + 1 : 0;
        })
    }

    const handleImageLoad = () => {
        setNumLoaded((numLoaded) => numLoaded + 1)
    };

    return (
        <section>
            <header>
                <h1>
                    Zesty
                </h1>
                <h2>
                    A photography Project <br/> by KP4
                </h2>
            </header>
            <figure>
                {numLoaded < images.length && (
                    <Loading calculatedWidth={(numLoaded / images.length) * 100} />
                )}
                <figcaption> {currentImage + 1} / {images.length} </figcaption>
                {images.map((imageURL, index) => (
                    <img
                        alt={""}
                        src={imageURL}
                        key={imageURL}
                        onClick={handleClick}
                        onLoad={handleImageLoad}
                        className={currentImage === index ? "display" : "hide"  }
                    />
                ))}
            </figure>
        </section>
    );
}

export default App;
