import React, { Component } from "react";

export default class Content extends Component {
  state = {
    title: [1, 2, 3, 4, 5, 6, 7]
  };
  render() {
    return (
      <div className="content">
        <div className="content_items">
          {this.state.title.map(item => (
            <div className="content_item">
              <img
                src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-0F-27-rBVaJFiid_KAWQTEAACJzY-3dS4814.jpg/hot-sale-for-peanuts-snoopy-love-vinyl-funny.jpg"
                alt="img"
              />
              <div class="card-body">
                <h5 class="card-title">{item}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="reserve-btn">예약 하기</button>
                <button className="review-btn">리뷰 쓰기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
