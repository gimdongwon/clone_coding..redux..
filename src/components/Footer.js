import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <h2>Chaibi</h2>
        <p>최고의 레스토랑을 즐기는 특별한 방법.</p>
        <p>검색부터 예약까지 한번에, 포잉</p>
        <p>
          지금까지 총 <b>1,069,453</b>명의 사용자가 <b>68,293</b>개의 정성스런
          리뷰를 남기셨고,
          <br /> Poing 예약 서비스를 이용하여 <b>318,148</b>번의 식사를
          하셨습니다.
        </p>
      </div>
    );
  }
}
