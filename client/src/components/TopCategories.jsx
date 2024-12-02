import React, { Component } from 'react';
import './TopCategories.css';
import women from '../assets/img/women Store.webp';
import MenStore from '../assets/img/MensStore.webp';
import Kids from '../assets/img/Kids Store.webp';
import viewall from '../assets/img/viewall.webp';
import Homecore from '../assets/img/homecore.webp';
import HomeSymbol from '../assets/img/Homesymbol.webp';
import kitchen from '../assets/img/kitchenappliances.webp';
import kitchensymbol from '../assets/img/kitchensymbol.webp';
import Healthcare from '../assets/img/healthcare.webp';
import Healthcaresymbol from '../assets/img/Healtcaresymbol.webp';
import Accessories from '../assets/img/Accessoriesimg.webp';
import Accessoriessymbol from '../assets/img/Accessymbol.webp';
import footware from '../assets/img/footwearimg.webp';
import footwaresymbol from '../assets/img/footwaresymbol.webp';
import Appstore from '../assets/img/appstoreIcon.webp';
import Electronicimg from '../assets/img/Electronicimg.webp';
import Electronicsymbol from '../assets/img/Electronicsymbol.webp';
import GooglePay from '../assets/img/GooglePlay.webp';
import Becomeseller from '../assets/img/Becomesellerbackground.webp';
import verify from '../assets/img/verify.svg';

class TopCategoriesBanner extends Component {
  render() {
    return (
      <div className="topCategoriesFrom">
        <div className="topCategoriesHeading">
          <span className="horizontalLine"></span>
          <h1>Top Categories to choose</h1>
          <span className="horizontalLine"></span>
        </div>
        <div className="topCategoreisImage">
          <img src={women} alt="Women" />
          <img src={MenStore} alt="Men" />
          <img src={Kids} alt="Kids" />
        </div>

        <div className="essentialContaienr">
          <img src={viewall} className="essen-btn" alt="View All" />

          <div className="essential_item">
            <img src={Homecore} alt="Homecore" />
            <img src={HomeSymbol} alt="Home Symbol" />
          </div>

          <div className="essential_item">
            <img src={kitchen} alt="Kitchen Appliances" />
            <img src={kitchensymbol} alt="Kitchen Symbol" />
          </div>

          <div className="essential_item">
            <img src={Healthcare} alt="Healthcare" />
            <img src={Healthcaresymbol} alt="Healthcare Symbol" />
          </div>
        </div>

        <div className="newContaienr">
          <img src={viewall} className="essen-btn" alt="View All" />

          <div className="essential_item">
            <img src={Accessories} alt="Accessories" />
            <img src={Accessoriessymbol} alt="Accessories Symbol" />
          </div>

          <div className="essential_item">
            <img src={footware} alt="Footwear" />
            <img src={footwaresymbol} alt="Footwear Symbol" />
          </div>

          <div className="essential_item">
            <img src={Electronicimg} alt="Electronics" />
            <img src={Electronicsymbol} alt="Electronics Symbol" />
          </div>
        </div>

        <div className="becomesellerBanner_Container">
          <img src={Becomeseller} className="becomesellerBanner" alt="Become a Seller" />
          <div className="becomeSeller_Content">
            <div className="becomeSeller_content_content">
              <h2>Become a Seller and</h2>
              <h1>Start your Online Business with Zero Investment</h1>
              <div className="becomerSeller_appDownload_container">
{/*                 <a href="#" className="becomerSeller_appDownload"> */}
<a href="/seller" className="becomeSeller_appDownload">Become a Seller

                  <img src={GooglePay} alt="Google Play" />
                </a>
{/*                 <a href="#" className="becomerSeller_appDownload"> */}
                   <a href="/seller" className="becomeSeller_appDownload">Become a Seller
                  <img src={Appstore} alt="App Store" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="meesho_supper_container">
          <img src="img/supplyBannerDesktop.webp" alt="Meesho Supplier" />
          <div className="meesho_supper_container_content">
            <div className="meesho_supper_container_content_content">
              <h1>Register as a Meesho Supplier</h1>
              <p>Sell your products to crores of customers at 0% commission</p>
              <div className="meesho-suppliear_benifit_container">
                <div className="meesho_supper_benifit">
                  <img className="meeesho_benifit_image" src={verify} alt="Benefit" />
                  <p>Grow your business 10x</p>
                </div>
                <div className="meesho_supper_benifit">
                  <img className="meeesho_benifit_image" src={verify} alt="Benefit" />
                  <p>Enjoy 100% Profit</p>
                </div>
                <div className="meesho_supper_benifit">
                  <img className="meeesho_benifit_image" src={verify} alt="Benefit" />
                  <p>Sell all over India</p>
                </div>
              </div>
{/*               <a href="#" className="signup_btn_now">Sign up now</a> */}
              <a href="/signup" className="signup_btn_now">Sign up now</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopCategoriesBanner;
