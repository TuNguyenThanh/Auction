import React, { Component } from 'react';
import { Alert } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Actions } from 'react-native-router-flux';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

class Detail extends Component {
  componentWillReceiveProps(nextProps) {
    const { isOn } = nextProps.product[this.props.id];
    if (!isOn) {
      // Alert.alert(
      //   'Thông báo',
      //   'Bạn không thể đấu giá vì bạn là người bán sản phẩm này!',
      //   [
      //     { text: 'Đồng ý', onPress: () => console.log('OK Pressed') }
      //   ],
      //   { cancelable: false }
      // );
      Actions.pop();
    }
  }

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
        <Tab2 tabLabel="Chi tiết" description={this.props.product[this.props.id].description} />
      </ScrollableTabView>
    );
  }
}

export default Detail;
