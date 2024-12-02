import React, { Component } from 'react';
import BagsFootwear from '../data/BagsFootwear';
import BeautyHealth from '../data/BeautyHealth';
import Electronics from '../data/Electronics';
import HomeAndKitchen from '../data/HomeAndKitchen';
import JewelleryAccessories from '../data/JewelleryAccessories';
import Kids from '../data/Kids';
import Men from '../data/Men';
import WomenEthnic from '../data/WomenEthnic';
import WomenWestern from '../data/WomenWestern';
import './Navigation.css';

// Function to render submenu items
const renderSubMenu = (data) => {
  return data.map(el => (
    <div className="column" key={el.heading}>
      <h4>{el.heading}</h4>
      {el.data.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  ));
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subMenus: {
        womenEthic: [],
        womenWestern: [],
        men: [],
        kids: [],
        homeAndKitchen: [],
        beautyAndHealth: [],
        jewelleryAndAccessories: [],
        bagsFootwear: [],
        electronics: [],
      }
    };
  }

  componentDidMount() {
    this.setState({
      subMenus: {
        womenEthic: WomenEthnic,
        womenWestern: WomenWestern,
        men: Men,
        kids: Kids,
        homeAndKitchen: HomeAndKitchen,
        beautyAndHealth: BeautyHealth,
        jewelleryAndAccessories: JewelleryAccessories,
        bagsFootwear: BagsFootwear,
        electronics: Electronics,
      }
    });
  }

  render() {
    const { subMenus } = this.state;

    return (
      <nav>
        <ul>
          <li>Women Ethnic
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.womenEthic)}
              </div>
            </div>
          </li>
          <li>Women Western
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.womenWestern)}
              </div>
            </div>
          </li>
          <li>Men
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.men)}
              </div>
            </div>
          </li>
          <li>Kids
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.kids)}
              </div>
            </div>
          </li>
          <li>Home & Kitchen
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.homeAndKitchen)}
              </div>
            </div>
          </li>
          <li>Beauty & Health
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.beautyAndHealth)}
              </div>
            </div>
          </li>
          <li>Jewellery & Accessories
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.jewelleryAndAccessories)}
              </div>
            </div>
          </li>
          <li>Bags & Footwear
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.bagsFootwear)}
              </div>
            </div>
          </li>
          <li>Electronics
            <div className="subMenu">
              <div className="submenuList">
                {renderSubMenu(subMenus.electronics)}
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
