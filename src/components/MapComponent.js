import React from "react";

export default class MapComponent extends React.Component {
  componentDidMount() {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.daum.maps.LatLng(37.541383, 126.988155), //지도의 중심좌표.
      level: 12 //지도의 레벨(확대, 축소 정도)
      // 지도 레벨은 1부터 14레벨이 있으며 숫자가 작을수록 지도 확대 수준이 높습니다
    };

    let map = new window.daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    let mapTypeControl = new window.daum.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, window.daum.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    let zoomControl = new window.daum.maps.ZoomControl();
    map.addControl(zoomControl, window.daum.maps.ControlPosition.RIGHT);

    // 마커를 표시할 위치와 title 객체 배열입니다
    let positions = [
      {
        title: "카카오",
        latlng: new window.daum.maps.LatLng(33.450705, 126.570677)
      },
      {
        title: "생태연못",
        latlng: new window.daum.maps.LatLng(33.450936, 126.569477)
      },
      {
        title: "텃밭",
        latlng: new window.daum.maps.LatLng(33.450879, 126.56994)
      },
      {
        title: "근린공원",
        latlng: new window.daum.maps.LatLng(33.451393, 126.570738)
      },
      {
        title: "myhome",
        latlng: new window.daum.maps.LatLng(37.560638, 126.96136)
      }
    ];

    // 마커 이미지의 이미지 주소입니다
    let imageSrc =
      "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new window.daum.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new window.daum.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new window.daum.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지
      });
    }
  }
  render() {
    return (
      <>
        <div id="map" />
      </>
    );
  }
}
