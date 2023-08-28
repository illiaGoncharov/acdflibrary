import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "./SimpleSwiper.module.css";

const SimpleSwiper = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = index => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
          <Carousel 
                selectedItem={currentIndex}
                onChange={handleSwipe}
                showArrows={false}
                showStatus={false} 
                showIndicators={false}
                emulateTouch={true}
                infiniteLoop={true}
                swipeable={true} 
                dynamicHeight={false} 
          >
              {imageUrls.map((imageUrl, index) => (
                  <div
                      key={index}
                      className={styles.slide}
                      style={{
                          backgroundImage: `url(${imageUrl})`
                      }}
                  />
              ))}
          </Carousel>
      </div>

  );
};

export default SimpleSwiper;
