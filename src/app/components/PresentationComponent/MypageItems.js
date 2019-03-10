import React from "react";
import { Link } from "react-router-dom";

function MypageItems({ match }) {
  return (
    <div className="MypageItems">
      <ul>
        <li>
          <Link to={`${match.url}/reserve`}>예약 하기</Link>
        </li>
        <li>
          <Link to={`${match.url}/pickes`}>찜 하기</Link>
        </li>
      </ul>
    </div>
  );
}

export default MypageItems;
