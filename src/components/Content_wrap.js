import React, { Component } from "react";
import Content from "./Content";
import FilterSidebar from "./FilterSidebar";
import RecomendCoupon from "./RecomendCoupon";
export default class Content_wrap extends Component {
  render() {
    return (
      <div className="content_wrap">
        <Content />
        <div className="content_sub">
          <FilterSidebar />
          <RecomendCoupon />
        </div>
      </div>
    );
  }
}
