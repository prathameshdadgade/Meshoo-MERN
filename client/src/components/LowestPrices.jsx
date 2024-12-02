import React from 'react';
import'./LowestPrices';
import Topic from '../assets/img/Topicimg.webp';
class LowestPrices extends React.Component {
    render(){
  return (
    <div className="lowestpriceContainer">
        <div className="lowestPrice_text">
            <h1>Lowest Prices </h1>
            <h1>Best Quality Shopping</h1>
            <div className="lowestPriceWhay">
                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/freeDelivery.svg" />
                    </div>
                    <p>Free Delivery</p>
                </div>

                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/cod.svg" />
                    </div>
                    <p>Cash on Delivery</p>
                </div>
                <div className="lowestPriceItem">
                    <div className="lowestPrice_icon">
                        <img src="https://images.meesho.com/images/pow/easyReturns.svg" />
                    </div>
                    <p>Easy Returns</p>
                </div>
            </div>

            <button className="downloadApp_contianer">
                <div className="downloadAppIcon">
                    <img src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp" />
                </div>
                <p>Download the Meesho App</p>
            </button>

        </div>
        <div className="lowestPrice_image">
            <img src={Topic} />
        </div>
    </div>
  );
}
};

export default LowestPrices;
