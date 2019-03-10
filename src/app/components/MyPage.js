import React from "react";

import Information from "./Information";
import MypageItems from "./MypageItems";

export default class MyPage extends React.Component {
  render() {
    return (
      <>
        <Information />
        <MypageItems />
      </>
    );
  }
}
