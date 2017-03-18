import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

class Detail extends Component {
  render() {
    return (
      <ScrollableTabView
        style={{ flex: 1, marginTop: 64 }}
        tabBarBackgroundColor={'#F8F8F8'}
        tabBarUnderlineStyle={{ backgroundColor: '#EF5E92', borderRadius: 5 }}
        tabBarActiveTextColor={'#EF5E92'}
        tabBarInactiveTextColor={'#646464'}
      >
        <Tab1 tabLabel="Đấu giá" product={this.props.product[this.props.id]} token={this.props.token} />
        <Tab2 tabLabel="Chi tiết" />
      </ScrollableTabView>
    );
  }
}

export default Detail;
