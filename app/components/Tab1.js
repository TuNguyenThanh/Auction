import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { auctionProduct } from '../actions';

class Tab1 extends Component {
  onPressAuctionProduct(product) {
    Alert.alert(
      'Đấu giá',
      'Bạn có chắc muốn đấu giá cho sản phẩm này?',
      [
        { text: 'Đồng ý',
          onPress: () => {
            //Oke Auction
            const { token, id } = this.props;
            if (product.sellerId != id) {
              if (product.highestUserId != id) {
                this.props.auctionProduct(token, product);
              } else {
                Alert.alert(
                  'Thông báo',
                  'Bạn đã đấu giá cho sản phẩm này rồi!',
                  [
                    { text: 'Đồng ý', onPress: () => console.log('OK Pressed') }
                  ],
                  { cancelable: false }
                );
              }
            } else {
              Alert.alert(
                'Thông báo',
                'Bạn không thể đấu giá vì bạn là người bán sản phẩm này!',
                [
                  { text: 'Đồng ý', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
            }
          }
        },
        { text: 'Để sau', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
      ],
      { cancelable: false }
    );
  }

  render() {
    const { image, timeleft, startAt, endAt, sellerFirstname, sellerPhone, highestUserName, displayCurrentPrice, displayNextPrice, ceilPrice } = this.props.product;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: image }}
        />
        <View>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconStyles}
              source={require('./images/avatar.png')}
            />
            <Text>{sellerFirstname}</Text>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.iconStyles}
              source={require('./images/phone-call.png')}
            />
            <Text>{sellerPhone}</Text>
          </View>
          <View style={styles.viewItem}>
            <Text>Bắt đầu: {startAt}</Text>
          </View>
          <View style={styles.viewItem}>
            <Text>Kết thúc: {endAt}</Text>
          </View>
          <View style={styles.viewTime}>
            <Image
              style={styles.iconStyles}
              source={require('./images/customer.png')}
            />
            <Text>{highestUserName}</Text>
            <Text style={styles.textPriceNow}>{displayCurrentPrice}</Text>
          </View>
          <View style={styles.viewTime}>
            <Image
              style={styles.icon}
              source={require('./images/hourglass.png')}
            />
            <Text style={styles.textTime}>{timeleft}</Text>
          </View>
          <View style={styles.viewTime}>
            <View style={styles.viewPriceNew}>
              <Text>{displayNextPrice}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btnAuction}
            onPress={this.onPressAuctionProduct.bind(this, this.props.product)}
          >
            <Text style={styles.btnAuctionText}>ĐẤU GIÁ</Text>
          </TouchableOpacity>
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
    tintColor: '#646464'
  },

  iconStyles: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: '#646464'
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

const mapStateToProps = (state) => {
  return {
    id: state.Login.idUser,
    balance: state.Login.balance
  };
};

export default connect(mapStateToProps, { auctionProduct })(Tab1);
