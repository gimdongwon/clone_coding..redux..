import React from "react";

export default class Header extends React.Component {
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
      </div>
    );
  }
}
