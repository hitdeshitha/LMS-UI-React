import React, { Component } from "react";
import Item from "../SideBarItem/SideBarItem.jsx";
import CoverImage from "../../../assets/img/item-Image.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <div class="side-bar ">
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min" 
          />
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min"
          />
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min"
          />
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min"
          />
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min"
          />
          <Item
            cImage={CoverImage}
            title="Create Animated UI Using Android Studio"
            subTitle="Android Studio Tutorial 1"
            duration="24min"
          />
        </div>
      </div>
    );
  }
}

export default Sidebar;
