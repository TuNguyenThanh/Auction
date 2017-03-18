import React, { Component } from 'react';
import {
  View, Text, ListView, TouchableOpacity, Dimensions, Image, StyleSheet
} from 'react-native';
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
    //this.socket.emit('CLIEN_SEND_PRICE_PRODUCT_BY_ID', item);
    const { token } = this.props;
    this.props.auctionProduct(token, item);
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
    Actions.upProduct();
  }

  createDataSource({ product }) {
    //console.log(product);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(product);
  }

  renderRow(item, rowID) {
    //console.log(item);
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
    return (
      <View style={styles.container}>
        <SideMenu
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}
          menu={<Menu navigator={navigator} />}
        >
          <Header
            title={'STU'}
            titleColor={'#646464'}
            bgColor={'#F8F8F8'}
            leftHeaderButtonIcon={require('./images/menu.png')}
            rightHeaderButtonIcon={require('./images/edit.png')}
            onItemLeftPress={this.toggleMenu.bind(this)}
            onItemRightPress={this.openUpProduct.bind(this)}
          />
          <ListView
            style={{ backgroundColor: '#EBEBEB' }}
            enableEmptySections
            contentContainerStyle={styles.listView}
            dataSource={this.dataSource}
            renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
          />
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
  }
};

export default Home;

// Actions.refresh({
//   rightTitle: 'Add', onRight: this.toggleMenu.bind(this)
// });
//
