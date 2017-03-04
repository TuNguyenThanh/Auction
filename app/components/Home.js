import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity, Dimensions, Image, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

class Home extends Component {
  componentWillMount() {
    this.props.productFetchData();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ product }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(product);
  }

  // <View style={{ flex: 2 }}>
  //   <Text>{item.ten}</Text>
  //   <Text>{item.gia}</Text>
  //   <Text>{item.thoigianbatdau}</Text>
  //   <Text>{item.thoigianketthuc}</Text>
  // </View>

  renderRow(item) {
    //console.log(item);
    return (
      <View style={styles.row}>
        <Image
          style={{ flex: 1 }}
          source={{ uri: 'https://www.imore.com/sites/imore.com/files/styles/larger_wm_blw/public/field/image/2016/11/macbook-pro-2016-coffee-hero.jpg?itok=aqJZaHN_' }}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.textProduct}>Macbook pro retina 2016 99% i7 512SSD</Text>
          <View style={styles.viewItem}>
            <Image
              style={styles.icon}
              source={require('./images/user.png')}
            />
            <Text>Thanh Tu</Text>
          </View>
          <View style={styles.viewItem}>
            <Image
              style={styles.icon}
              source={require('./images/hourglass.png')}
            />
            <Text>03:15:25</Text>
          </View>
          <View style={styles.bid}>
            <Text>50.000 VND</Text>
          </View>
          <TouchableOpacity style={styles.btnAuction}>
            <Text style={styles.textAuction}>Đấu giá</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          contentContainerStyle={styles.listView}
          dataSource={this.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: 'rgba(246, 246, 246, 0.6)'
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
    height: height / 2.5,
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
    fontSize: 15,
    marginBottom: 4
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
