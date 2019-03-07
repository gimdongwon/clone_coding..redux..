import React, { Component } from "react";

export default class Content extends Component {
  state = {
    title: [1, 2, 3, 4, 5, 6, 7]
  };
  render() {
    return (
      <div className="Content">
        {this.state.title.map(item => (
          <div className="content_item">
            <img
              src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-0F-27-rBVaJFiid_KAWQTEAACJzY-3dS4814.jpg/hot-sale-for-peanuts-snoopy-love-vinyl-funny.jpg"
              alt="image"
            />
            {item}
            <button>리뷰쓰기</button>
          </div>
        ))}
      </div>
    );
  }
}
