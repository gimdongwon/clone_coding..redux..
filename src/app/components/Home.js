import React from 'react';

import ContentWrap from './ContentWrap';
import MapComponent from './MapComponent';

export default class Home extends React.Component {
  render() {
    return (
      <>
        <MapComponent />
        <ContentWrap />
      </>
    );
  }
}
