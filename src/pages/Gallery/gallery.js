import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import img1 from '../../assets/gallery/img1.png'
import img2 from '../../assets/gallery/img2.png'
import img3 from '../../assets/gallery/img3.png'
import img4 from '../../assets/gallery/img4.png'
import img5 from '../../assets/gallery/img5.png'
import img6 from '../../assets/gallery/img6.png'
// import img7 from '../../assets/gallery/img7.png'
import img8 from '../../assets/gallery/img8.png'
import img9 from '../../assets/gallery/img9.png'
import img10 from '../../assets/gallery/img10.png'
import img11 from '../../assets/gallery/img11.png'
import img12 from '../../assets/gallery/img12.png'
import img13 from '../../assets/gallery/img13.png'
import img14 from '../../assets/gallery/img14.png'
import img15 from '../../assets/gallery/img15.png'
import img16 from '../../assets/gallery/img16.png'
import img17 from '../../assets/gallery/img17.png'
import img18 from '../../assets/gallery/img18.png'
import img19 from '../../assets/gallery/img19.png'
import img20 from '../../assets/gallery/img20.png'
import img21 from '../../assets/gallery/img21.png'
import img22 from '../../assets/gallery/img22.png'
import img23 from '../../assets/gallery/img23.png'
import img24 from '../../assets/gallery/img24.png'
import img25 from '../../assets/gallery/img25.png'
import img26 from '../../assets/gallery/img26.png'
import img27 from '../../assets/gallery/img27.png'
import img28 from '../../assets/gallery/img28.png'
import img29 from '../../assets/gallery/img29.png'
import img30 from '../../assets/gallery/img30.png'
import img31 from '../../assets/gallery/img31.png'
import img32 from '../../assets/gallery/img32.png'
import img33 from '../../assets/gallery/img33.png'
import img34 from '../../assets/gallery/img34.png'
import img35 from '../../assets/gallery/img35.png'
import img36 from '../../assets/gallery/img36.png'
import img37 from '../../assets/gallery/img37.jpg'
import img38 from '../../assets/gallery/img38.jpg'
import img39 from '../../assets/gallery/img39.JPG'
import img40 from '../../assets/photo1.jpg'
import img41 from '../../assets/gallery/img41.jpg'
import img42 from '../../assets/gallery/img42.jpg'

const GalleryPage = () => {

    const images = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img18,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img24,
      img28,
      img20,
      img21,
      img22,
      img23,
      img25,
      img27,
      img19,
      img29,
      img30,
      img31,
      img32,
      img34,
      img36,
      img26,
      img35,
      img38,
      img39,
      img33,
      img37,
      img40,
      img41,
      img42
      
    ]

    return ( 
        <>
            <div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 3, 750: 2, 900: 3}}
                >
                    <Masonry 
                    gutter="10px">
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                alt="gallery"
                                style={{width: "100%", display: "block"}}
                            />
                        ))}
                </Masonry>
               </ResponsiveMasonry>
            </div>
        </>
     );
}
 
export default GalleryPage;