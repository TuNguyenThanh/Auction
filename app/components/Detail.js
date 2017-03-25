import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { Actions } from 'react-native-router-flux';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const MessageBarAlert = require('react-native-message-bar').MessageBar;
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class Detail extends Component {
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillReceiveProps(nextProps) {
    const { isOn } = nextProps.product[this.props.id];
    if (!isOn) {
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: 'Sản phẩm đã kết thúc đấu giá',
        alertType: 'info'
      });
      Actions.pop();
    }
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView
          style={{ flex: 1 }}
          tabBarBackgroundColor={'#F8F8F8'}
          tabBarUnderlineStyle={{ backgroundColor: '#EF5E92', borderRadius: 5 }}
          tabBarActiveTextColor={'#EF5E92'}
          tabBarInactiveTextColor={'#646464'}
        >
          <Tab1 tabLabel="Đấu giá" product={this.props.product[this.props.id]} token={this.props.token} />
          <Tab2 tabLabel="Chi tiết" description={this.props.product[this.props.id].description} />
        </ScrollableTabView>
        <MessageBarAlert ref="alert" />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 64 : 44,
  }
};

export default Detail;
