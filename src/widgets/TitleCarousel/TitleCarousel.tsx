import { useState, useRef } from "react";
import Image from "next/image";
import useWindowSize from "~/shared/lib/hook/useWindowSize";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import { SimilarMovy } from "~/full-page/TitlePage/types";

import imgBtn from "../../shared/assets/svgBtn.svg";

interface ITitleCaruousel {
  dataSimilarMovies: SimilarMovy[];
}

export const TitleCarousel = ({ dataSimilarMovies }: ITitleCaruousel) => {
  const [transform, setTransform] = useState(0);
  const router = useRouter();
  const refImg = useRef<any>(null);
  const refContainer = useRef<any>(null);
  const size = useWindowSize();
  const lengthData = refImg.current?.clientWidth * dataSimilarMovies.length;

  const swithHandlerRight = () => {
    if (transform - refImg.current.clientWidth * 7 < -lengthData) {
      setTransform(0);
    } else setTransform((prev) => prev - refImg.current.clientWidth * 2);
  };
  const swithHandlerLeft = () => {
    if (transform + refImg.current.clientWidth >= 0) {
      setTransform(-lengthData + refImg.current.clientWidth * 6);
    } else setTransform((prev) => prev + refImg.current.clientWidth * 2);
  };

  const handleNavigate = (id: number) => {
    router.push(`/title/${id}`);
  };

  return (
    <div className={styles.container}>
      <h4>Похожие фильмы</h4>
      <div className={styles.slider}>
        <div ref={refContainer} className={styles.container_slider}>
          {dataSimilarMovies.map((title) => (
            <div
              onClick={() => handleNavigate(title.id)}
              key={title.id}
              className={styles.sliderCard}
              style={{ transform: `translateX(${transform}px)` }}
            >
              <img ref={refImg} src={title.poster.url} alt="" />
              <span className={styles.text_banner}>
                <p>{title.rating?.kp.toFixed(1)}</p>
              </span>
            </div>
          ))}
        </div>
        {size.width <= 530 ? (
          ""
        ) : (
          <>
            <button
              onClick={swithHandlerLeft}
              className={styles.btn_slider_left}
            >
              <Image src={imgBtn} alt="imgbtn" />
            </button>
            <button
              onClick={swithHandlerRight}
              className={styles.btn_slider_rigth}
            >
              <Image src={imgBtn} alt="imgbtn" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
