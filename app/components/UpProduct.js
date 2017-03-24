import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Picker } from 'native-base';
import { Input } from './common';

class UpProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: require('./images/default-thumbnail.jpg'),
      selectedHours: '1',
      selectedMoney: '1000',
    };
  }

  onPressUpProduct() {
    const bidAmount = 1000; //1k
    const duration = 2; // 2hour
    const categoryId = 1;
    const { productName, productStartPrice, productCeilPrice, productDescription } = this.props;
    this.props.uploadProduct(
      this.props.token, this.state.image.uri, productName,
      productStartPrice, productCeilPrice, productDescription,
      duration, bidAmount, categoryId
    );
  }

  onChangedProductName(text) {
    this.props.changedUpProductName(text);
  }

  onChangedProductStartPrice(text) {
    text = text.replace(/\./g, '');
    text = text.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    this.props.changedUpProductStartPrice(text);
  }

  onChangedProductCeilPrice(text) {
    text = text.replace(/\./g, '');
    text = text.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    this.props.changedUpProductCeilPrice(text);
  }

  onChangedProductDescription(text) {
    this.props.changedUpProductDescription(text);
  }

  onPressPhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 1,
    }).then(image => {
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height },
        //image: {uri: `data:${image.mime};base64,`
        //+ image.data, width: image.width, height: image.height},
      });
    }).catch(e => alert(e));
  }

  onPressCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 1,
    }).then(image => {
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height },
      });
    }).catch(e => alert(e));
  }

  chooseImage() {
    Alert.alert(
      'Chọn hình ảnh',
      'Vui lòng chọn một',
      [
        { text: 'Photo', onPress: this.onPressPhoto.bind(this) },
        { text: 'Camera', onPress: this.onPressCamera.bind(this) },
        { text: 'Huỷ', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
      ],
      { cancelable: false }
    );
  }

  handleBidMountValueChange(value) {
    this.setState({
      selectedMoney: value
    });
  }

  handleHoursValueChange(value) {
    this.setState({
      selectedHours: value
    });
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Input
          lable="Tên sản phẩm"
          value={this.props.productName}
          onChangeText={this.onChangedProductName.bind(this)}
        />
        <Input
          lable="Giá khởi điểm"
          keyboardType={'numeric'}
          placeholder={'.000 VNĐ'}
          value={this.props.productStartPrice}
          onChangeText={this.onChangedProductStartPrice.bind(this)}
        />
        <Input
          lable="Giá trần"
          keyboardType={'numeric'}
          placeholder={'.000 VNĐ'}
          value={this.props.productCeilPrice}
          onChangeText={this.onChangedProductCeilPrice.bind(this)}
        />
        <Input
          style={{ height: 50, fontSize: 18 }}
          lable="Miêu tả sản phẩm"
          multiline
          editable
          numberOfLines={4}
          value={this.props.productDescription}
          onChangeText={this.onChangedProductDescription.bind(this)}
        />
        <View style={{ marginTop: 10, paddingLeft: 8 }}>
          <Text>Số tiền mỗi lần dự thầu</Text>
        </View>
        <Picker
          iosHeader="Chọn giá"
          mode="dropdown"
          selectedValue={this.state.selectedMoney}
          onValueChange={this.handleBidMountValueChange.bind(this)}
        >
          <Picker.Item label="1.000 VNĐ" value="1000" />
          <Picker.Item label="5.000 VNĐ" value="5000" />
          <Picker.Item label="10.000 VNĐ" value="10000" />
          <Picker.Item label="50.000 VNĐ" value="50000" />
          <Picker.Item label="100.000 VNĐ" value="100000" />
          <Picker.Item label="200.000 VNĐ" value="200000" />
          <Picker.Item label="300.000 VNĐ" value="300000" />
          <Picker.Item label="500.000 VNĐ" value="500000" />
        </Picker>
        <View style={{ marginTop: 10, paddingLeft: 8 }}>
          <Text>Thời gian đấu giá</Text>
        </View>
        <Picker
          iosHeader="Thời gian"
          mode="dropdown"
          selectedValue={this.state.selectedHours}
          onValueChange={this.handleHoursValueChange.bind(this)}
        >
          <Picker.Item label="1 giờ" value="1" />
          <Picker.Item label="2 giờ" value="2" />
          <Picker.Item label="5 giờ" value="5" />
          <Picker.Item label="10 giờ" value="10" />
          <Picker.Item label="15 giờ" value="15" />
          <Picker.Item label="24 giờ" value="24" />
          <Picker.Item label="48 giờ" value="48" />
        </Picker>
        <View style={{ paddingTop: 8 }}>
          <Text>Chọn hình sản phẩm</Text>
          <TouchableOpacity
            style={styles.viewImageProduct}
            onPress={this.chooseImage.bind(this)}
          >
            <Image
              style={{ flex: 1 }}
              source={this.state.image}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonUp} onPress={this.onPressUpProduct.bind(this)}>
          <Text style={styles.buttonTextUp}>ĐĂNG SẢN PHẨM</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 64,
    padding: 8,
    paddingTop: 0
  },

  buttonUp: {
    backgroundColor: '#EF5E92',
    height: 40,
    marginTop: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },

  buttonTextUp: {
    color: 'white'
  },

  viewImageProduct: {
    marginTop: 8,
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
};

export default UpProduct;
