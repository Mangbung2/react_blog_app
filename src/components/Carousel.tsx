import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGear } from "@fortawesome/free-solid-svg-icons";

const IMAGE_1_URL =
  "https://images.unsplash.com/photo-1701339023431-49f2d3eb9c13?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_2_URL =
  "https://plus.unsplash.com/premium_photo-1700577888245-9729a4fe6040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_3_URL =
  "https://images.unsplash.com/photo-1701184556705-7f125ff3624b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <>
      <div className="carousel__box">
        <div className="carousel__img-box">
          <img className="carousel__img" alt="img1" src={IMAGE_1_URL} />
        </div>
        <div className="carousel__img-box">
          <img className="carousel__img" alt="img2" src={IMAGE_2_URL} />
        </div>
        <div className="carousel__img-box">
          <img className="carousel__img" alt="img3" src={IMAGE_3_URL} />
        </div>
      </div>
      <div className="carousel__link">
        <div className="carousel__btn">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="carousel__btn">
          <FontAwesomeIcon icon={faGear} />
        </div>
        <div className="carousel__btn">
          <FontAwesomeIcon icon={faGear} />
        </div>
      </div>
    </>
  );
}
