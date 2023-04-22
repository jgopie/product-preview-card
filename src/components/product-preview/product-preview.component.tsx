import { FC, useEffect, useState } from "react";
import './product-preview.component.css';

export const ProductPreview: FC = () => {
    let mobileImage = new URL('/product-preview-images/image-product-mobile.jpg', import.meta.url).href;
    let desktopImage = new URL('/product-preview-images/image-product-desktop.jpg', import.meta.url).href;
    let [displayImage, setDisplayImage] = useState(window.outerWidth > 375 ? desktopImage : mobileImage);
    const onResize = () => {
        setDisplayImage(window.outerWidth > 375 ? desktopImage : mobileImage);
    }
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <div className="productPreview">
            <img src={displayImage}/>
            <div className="textContainer">
                <p>Perfume</p>
                <p>Gabrielle Essence Eau De Parfum</p>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <p>$149.99 <span>$169.99</span></p>
                <button type="button"><img src="/product-preview-images/icon-cart.svg"/>&emsp;Add To Cart</button>
            </div>
        </div>
    )
}