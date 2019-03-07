import React, { Component } from "react";
import Content from "./Content";
import Filter_sidebar from "./Filter_sidebar";
import Recomend_coupon from "./Recomend_coupon";
export default class Content_wrap extends Component {
  render() {
    return (
      <div className="content_wrap">
        <Content />
        <Filter_sidebar />
        <Recomend_coupon />
      </div>
    );
  }
}
