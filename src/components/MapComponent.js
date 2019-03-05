import React from "react";

export default class MapComponent extends React.Component {
  componentDidMount() {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 4 //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴
  }
  render() {
    return (
      <>
        <div id="map" />
      </>
    );
  }
}
