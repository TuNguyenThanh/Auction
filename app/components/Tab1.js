import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Tab1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: 'https://cdn.shopify.com/s/files/1/0808/0067/products/ip7_plus_nh_gold_title_02_large.jpg?v=1483565532' }}
        />
        <View>
          <View style={styles.viewItem}>
            <Image
              style={{ width: 18, height: 18, marginRight: 8 }}
              source={require('./images/user.png')}
            />
            <Text>Nguyễn Thị Thu Hằng</Text>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={{ width: 18, height: 18, marginRight: 8 }}
              source={require('./images/phone-call.png')}
            />
            <Text>0903017965</Text>
          </View>
          <View style={styles.viewItem}>
            <Text>Bắt đầu: 04/03/2017 lúc 12:30</Text>
          </View>
          <View style={styles.viewItem}>
            <Text>Kết thúc: 05/03/2017 lúc 12:00</Text>
          </View>
          <View style={styles.viewTime}>
            <Image
              style={{ width: 18, height: 18, marginRight: 8 }}
              source={require('./images/customer.png')}
            />
            <Text>Nguyen thanh tu</Text>
            <Text style={styles.textPriceNow}>40.000 VND</Text>
          </View>
          <View style={styles.viewTime}>
            <Image
              style={styles.icon}
              source={require('./images/hourglass.png')}
            />
            <Text style={styles.textTime}>03:15:25</Text>
          </View>
          <View style={styles.viewTime}>
            <View style={styles.viewPriceNew}>
              <Text>50.000 VND</Text>
            </View>
          </View>
          <View style={styles.btnAuction}>
            <Text style={styles.btnAuctionText}>Đấu giá</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    marginBottom: 8,
  },

  btnAuction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF5E92',
    padding: 15
  },

  btnAuctionText: {
    color: 'white',
    fontSize: 18
  },

  viewPriceNew: {
    borderRadius: 4,
    borderColor: 'gray',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    paddingBottom: 8
  },

  viewTime: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8
  },

  icon: {
    width: 25,
    height: 25,
    marginRight: 4,
    tintColor: 'black'
  },

  textTime: {
    fontSize: 18
  },

  viewItem: {
    paddingLeft: 30,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  textPriceNow: {
    color: 'red',
    fontSize: 18,
    fontWeight: '800',
    marginLeft: 8
  }


};


export default Tab1;
