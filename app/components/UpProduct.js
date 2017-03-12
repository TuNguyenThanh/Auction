import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-crop-picker';
import { Input } from './common';

class UpProduct extends Component {
  constructor(props) {
    super(props);
    const utc = new Date();
    utc.setHours(utc.getHours() + 1);
    const dateNow = utc.toJSON().slice(0, 10).replace(/-/g, '-');
    const timeNow = utc.toLocaleTimeString('vi', { hour: '2-digit', minute:'2-digit' }).replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1");

    const d2 = new Date(utc);
    d2.setHours(utc.getHours() + 3);
    const timeEnd = d2.toLocaleTimeString('vi', { hour: '2-digit', minute:'2-digit' }).replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1");
    this.state = {
      dateNow,
      timeNow,
      dateEnd: dateNow,
      timeEnd,
      image: require('./images/default-thumbnail.jpg'),
    };
  }

  onPressUpProduct() {
    console.log(this.props.productName);
    console.log(this.props.productStartPrice);
    console.log(this.props.productCeilPrice);
    console.log(this.props.productDescription);
    console.log(this.state.dateNow + ' ' + this.state.timeNow);
    console.log(this.state.dateEnd + ' ' + this.state.timeEnd);
    console.log(this.state.image.uri);
  }

  onChangedProductName(text) {
    this.props.changedUpProductName(text);
  }

  onChangedProductStartPrice(text) {
    this.props.changedUpProductStartPrice(text);
  }

  onChangedProductCeilPrice(text) {
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
      //console.log(image);
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height },
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
      //console.log(image);
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

  render() {
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 5);
    maxDate = maxDate.toJSON().slice(0, 10).replace(/-/g, '/');
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Input
          lable="Tên sản phẩm"
          value={this.props.productName}
          onChangeText={this.onChangedProductName.bind(this)}
        />
        <Input
          lable="Giá khởi điểm"
          value={this.props.productStartPrice}
          onChangeText={this.onChangedProductStartPrice.bind(this)}
        />
        <Input
          lable="Giá trần"
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
        <View style={{ paddingTop: 8 }}>
          <Text style={{ marginLeft: 8, marginBottom: 8 }}>Ngày bắt đầu</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <DatePicker
              date={this.state.dateNow}
              mode="date"
              format="YYYY-MM-DD"
              minDate={this.state.dateNow}
              maxDate={maxDate}
              confirmBtnText="Chọn"
              cancelBtnText="Huỷ"
              iconSource={require('./images/calendar.png')}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(dateNow) => this.setState({ dateNow })}
            />
            <DatePicker
              style={{ marginLeft: 8 }}
              date={this.state.timeNow}
              minDate={this.state.timeNow}
              maxDate={this.state.timeEnd}
              mode="time"
              format="HH:mm"
              confirmBtnText="Chọn"
              cancelBtnText="Huỷ"
              minuteInterval={10}
              iconSource={require('./images/alarm-clock.png')}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(timeNow) => this.setState({ timeNow })}
            />
          </View>
        </View>
        <View style={{ paddingTop: 8 }}>
          <Text style={{ marginLeft: 8, marginBottom: 8 }}>Ngày kết thúc</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <DatePicker
              date={this.state.dateEnd}
              mode="date"
              format="YYYY-MM-DD"
              minDate={this.state.dateEnd}
              maxDate={maxDate}
              confirmBtnText="Chọn"
              cancelBtnText="Huỷ"
              iconSource={require('./images/calendar.png')}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(dateEnd) => this.setState({ dateEnd })}
            />
            <DatePicker
              style={{ marginLeft: 8 }}
              date={this.state.timeEnd}
              mode="time"
              format="HH:mm"
              minDate={this.state.timeEnd}
              confirmBtnText="Chọn"
              cancelBtnText="Huỷ"
              minuteInterval={10}
              iconSource={require('./images/alarm-clock.png')}
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(timeEnd) => this.setState({ timeEnd })}
            />
          </View>
        </View>
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
