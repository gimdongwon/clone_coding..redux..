import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className="Header">
        <h1>Chaibi</h1>
        <select name="city">
          <option value="서울">서울</option>
          <option value="대구">대구</option>
          <option value="부산">부산</option>
        </select>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>search</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mypage">mypage</Link>
          </li>
        </ul>
      </div>
    );
  }
}
