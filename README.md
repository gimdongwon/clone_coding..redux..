# 치느님과 함께하는 poing 서비스

## Poing 서비스 따라 만들기

맛집데이터를 입력하면 지도에 picker가 찍히고 해당하는 음식점 데이터들을 인스타그램 처럼 그림과 제목을 나열하는 형식으로 구성

[포잉](https://www.poing.co.kr/seoul/restaurant/search?query%5Bper_page%5D=12&query%5Bplace_area%5D=2080&query%5Bfood_types%5D=)

1. gitflow 전략 사용
2. firebase 쓰자구!

## 동원 메모

현재 존재하는 데이터

1. pickes
2. points
3. products
4. reviews
5. users

- 움직이는 데이터(Redux로 다루어야 될 state들, 전부 CRUD가 들어가야 된다.)
  - Footer부분 조회, 리뷰계수, 사용자 수
  - 회원 가입 했을 시 user추가
  - product 입력했을 시 추가
  - 물건을 사면 point 적립
  - 내가 원하는 장소를 pick 했을 시 pickes에 추가
- 고정적인 데이터
  - 입력되 있는 음식점의 정보들(좌표, 이름, 사진 등등의 정보)
  - 피커에 찍히는 데이터 주소들
  - 별점
