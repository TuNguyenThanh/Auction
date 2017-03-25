import React, { Component } from 'react';
import {
  View, Text, ListView, TouchableOpacity, Dimensions, Image, StyleSheet, Alert
} from 'react-native';
import { Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';
import { Header } from './common';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentWillMount() {
    this.props.productFetchData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  onPressAuction(item) {
    const { token, id } = this.props;
    if (item.sellerId != id) {
      if (item.highestUserId != id) {
        this.props.auctionProduct(token, item);
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

  onPressProductRow(item, rowID) {
    Actions.detail({ title: item.name, id: rowID });
  }

  toggleMenu() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  openUpProduct() {
    if (this.props.token) {
      Actions.upProduct({ token: this.props.tokenLogin });
    }
  }

  createDataSource({ product }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(product);
  }

  renderRow(item, rowID) {
    return (
      <TouchableOpacity style={styles.row} onPress={this.onPressProductRow.bind(this, item, rowID)}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: item.image }}
        />
        <View>
          <Text style={styles.textProduct} numberOfLines={2}>
            {item.name}
          </Text>
          <View style={styles.viewItem}>
            <Text style={styles.textPriceNow}>{item.displayCurrentPrice}</Text>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.icon}
              source={require('./images/hourglass.png')}
            />
            <Text>{item.timeleft}</Text>
          </View>
          <View style={styles.bid}>
            <Text>{item.displayNextPrice}</Text>
          </View>
          <TouchableOpacity
            style={styles.btnAuction}
            onPress={this.onPressAuction.bind(this, item)}
          >
            <Text style={styles.textAuction}>Đấu giá</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const fetching = this.props.loading;
    return (
      <View style={styles.container}>
        <SideMenu
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}
          menu={<Menu navigator={navigator} />}
        >
          <Header
            title={'VBid'}
            titleColor={'#646464'}
            bgColor={'#F8F8F8'}
            leftHeaderButtonIcon={require('./images/menu.png')}
            rightHeaderButtonIcon={require('./images/edit.png')}
            onItemLeftPress={this.toggleMenu.bind(this)}
            onItemRightPress={this.openUpProduct.bind(this)}
          />
          {
            fetching
            ?
            <View style={styles.bodyStyles}>
              <Spinner color='#646464' />
              <Text style={styles.textLoadStyles}>Đang tải dữ liệu</Text>
            </View>
            :
            <ListView
              style={{ backgroundColor: '#EBEBEB' }}
              enableEmptySections
              contentContainerStyle={styles.listView}
              dataSource={this.dataSource}
              renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
            />
          }
        </SideMenu>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  },

  btnAuction: {
    backgroundColor: '#EF5E92',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 2
  },

  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },

  row: {
    width: ((width / 2) - 10),
    height: height / 2.4,
    borderRadius: 2,
    borderColor: '#D8D8D8',
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 8,
    padding: 5,
    backgroundColor: '#FFFFFF'
  },

  viewItem: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textProduct: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4
  },

  textPriceNow: {
    color: 'red',
    fontWeight: '700',
  },

  bid: {
    borderColor: '#D8D8D8',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 4,
    borderRadius: 2
  },

  icon: {
    width: 16,
    height: 16,
    marginRight: 4
  },

  textAuction: {
    color: 'white'
  },

  bodyStyles: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textLoadStyles: {
    marginTop: -20,
    color: '#646464'
  }
};

export default Home;
