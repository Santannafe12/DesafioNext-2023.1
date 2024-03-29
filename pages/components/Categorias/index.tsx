import styles from './categorias.module.scss'
import Image from 'next/image';
import Slider from "react-slick";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { useRef, useState } from 'react';
import { NextArrow, PrevArrow } from '../Utils';
import { AiOutlineRight } from 'react-icons/ai';
import { categories } from '../constants';

export default function Categorias() {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    sliderRef?.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.CategoriasApp}>
      <div className={styles.CategoriasTop}>
        <div>
        <h1>Explore por categorias</h1>
        <AiOutlineRight className={styles.CategoriasTopIcon}/>
        </div>
        <div className={styles.arrowButtonsCategorias}>
          < IoIosArrowDropleftCircle className={styles.prevButtonIconCategorias} onClick={goToPrev} />
          < IoIosArrowDroprightCircle className={styles.nextButtonIconCategorias} onClick={goToNext} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} className={styles.categoriasSlider}>
        {categories.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardTop}  >
              <Image src={item.imageUrl} alt="" width={3072} height={2048} className={styles.CategoriasImg} quality={100} />
              <div className={styles.cardBottom}>
                <p className={styles.description}>{item.categorie}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}