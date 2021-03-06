import React, { Component } from 'react';
import {
  Text, View, StyleSheet, ScrollView, Dimensions, Image, Platform, TouchableOpacity,
  AsyncStorage, Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import normalize from '../lib/normalizeText.js';

const { height } = Dimensions.get('window');

class Menu extends Component {
  onPressLogout() {
    Alert.alert(
      'Đăng xuất',
      'Bạn có muốn đăng xuất hay không?',
      [
        { text: 'Đồng ý',
          onPress: () => {
            try {
              AsyncStorage.setItem('isLogin', '');
              console.log('Save login data');
            } catch (error) {
              // Error saving data
              console.log('Error saving data');
            }
            Actions.Login({ type: 'reset' });
          } },
        { text: 'Huỷ', style: 'cancel' },
      ],
      { cancelable: false }
    );
  }

  handleMenu() {
    Alert.alert('Coming soon...');
  }

  handleVersionApp() {
    Alert.alert('Version', 'Version 1.0.2 Blue Shark Team');
  }

  render() {
    let balance = this.props.balance + '';
    balance = balance.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {/*USER*/}
          <TouchableOpacity style={styles.userView} onPress={this.handleMenu.bind(this)}>
            <Image
              style={styles.userIcon}
              source={require('./images/user.png')}
            />
            <View>
              <Text style={styles.userText}>{this.props.firstName}</Text>
              <Text style={styles.moneyTextStyles}>
                {balance} VNĐ
              </Text>
            </View>
          </TouchableOpacity>

          {/*CHOOSE*/}
          <View style={styles.menuRow}>
            <View style={styles.menuSection}>
              <Text style={styles.menuSectionText}>NỘI DUNG</Text>
            </View>
            {/*Item - 1*/}
            <TouchableOpacity style={[styles.menuItem, { marginTop: 8 }]} onPress={this.handleMenu.bind(this)}>
              <Image
                style={[styles.menuItemImageCustom, { marginLeft: 3 }]}
                source={require('./images/Starfish_icon.png')}
              />
              <Text style={styles.menuItemTextCustom}>Đấu giá của tôi</Text>
            </TouchableOpacity>
            {/*Item - 2*/}
            <TouchableOpacity style={styles.menuItem} onPress={this.handleMenu.bind(this)}>
              <Image
                style={[styles.menuItemImageCustom, { marginLeft: 3 }]}
                source={require('./images/history_icon.png')}
              />
              <Text style={styles.menuItemTextCustom}>Lịch sử đăng</Text>
            </TouchableOpacity>
          </View>

          {/*ABOUT*/}
          <View style={styles.menuRow}>
            <View style={styles.menuSection}>
              <Text style={styles.menuSectionText}>THÔNG TIN ỨNG DỤNG</Text>
            </View>
            {/*Item - 1*/}
            <TouchableOpacity style={[styles.menuItem, { marginTop: 8 }]} onPress={this.handleVersionApp.bind(this)}>
              <Image
                style={styles.menuItemImage}
                source={require('./images/aboutproduct_icon.png')}
              />
              <Text style={styles.menuItemText}>Phiên bản hiện tại</Text>
              <View style={{ flex: 1 }}></View>
              <View >
                <Text style={styles.menuItemText}>1.0.2v</Text>
              </View>
            </TouchableOpacity>
            {/*Item - 2*/}
            <TouchableOpacity style={styles.menuItem} onPress={this.handleMenu.bind(this)}>
              <Image
                style={styles.menuItemImage}
                source={require('./images/Term_icon.png')}
              />
              <Text style={styles.menuItemText}>Điều khoản sử dụng</Text>
            </TouchableOpacity>
            {/*Item - 3*/}
            <TouchableOpacity style={styles.menuItem} onPress={this.handleMenu.bind(this)}>
              <Image
                style={styles.menuItemImage}
                source={require('./images/Ranking_icon.png')}
              />
              <Text style={styles.menuItemText}>Bình chọn</Text>
            </TouchableOpacity>
            {/*Item - 4*/}
            <TouchableOpacity style={[styles.menuItem, { marginLeft: 3, marginRight: 3 }]} onPress={this.handleMenu.bind(this)}>
              <Image
                style={styles.menuItemImageCustom}
                source={require('./images/Email_icon.png')}
              />
              <Text style={styles.menuItemTextCustom}>Gửi email góp ý</Text>
            </TouchableOpacity>
            {/*Item - 5*/}
            <TouchableOpacity
              style={[styles.menuItem, { marginLeft: 3, marginRight: 3 }]}
              onPress={this.onPressLogout.bind(this)}
            >
              <Image
                style={styles.menuItemImageCustom}
                source={require('./images/logout.png')}
              />
              <Text style={styles.menuItemTextCustom}>Đăng xuất</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const colorText = '#EF5E92';
const colorTextSection = 'gray';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        paddingTop: 30,
      },
      android: {
        paddingTop: 10,
      },
    }),
  },

  content: {
    flex: 1,
    flexDirection: 'column',
  },

  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },

  userIcon: {
    width: height / 15,
    height: height / 15,
    borderRadius: (height / 15) / 2
  },

  userText: {
    color: colorText,
    fontSize: normalize(18),
    marginLeft: 10
  },

  menuRow: {
    paddingLeft: 10,
    paddingRight: 10,
  },

  menuSection: {
    height: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  menuSectionText: {
    color: colorTextSection
  },

  menuItem: {
    height: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },

  menuItemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: colorText,
  },

  menuItemText: {
    color: colorText,
  },

  menuItemImageCustom: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: colorText,
  },

  menuItemTextCustom: {
    color: colorText,
    marginLeft: 3
  },

  moneyTextStyles: {
    marginLeft: 10,
    color: 'red'
  }
});

const mapStateToProps = (state) => {
  return {
    firstName: state.Login.firstName,
    balance: state.Login.balance
  };
};

export default connect(mapStateToProps)(Menu);
