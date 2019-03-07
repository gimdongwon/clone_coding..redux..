import React, { Component } from "react";

export default class Filter_sidebar extends Component {
  render() {
    return (
      <div className="Filter_sidebar">
        <title>Filter bar</title>
        <div>지역 선택</div>
        <div>음식 종류</div>
        <div>예산</div>
        <div>부가 정보</div>
        <div>테이블 종류</div>
        <div>판매 주류 종류</div>
        <div>주차 기능</div>
        <button>레스토랑 검색</button>
      </div>
    );
  }
}
