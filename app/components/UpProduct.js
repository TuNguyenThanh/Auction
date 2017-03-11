import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Input } from './common';

class UpProduct extends Component {
  constructor(props) {
    super(props);
    const utc = new Date();
    const dateNow = utc.toJSON().slice(0, 10).replace(/-/g, '-');
    const timeNow = utc.toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1");
    this.state = {
      dateNow,
      timeNow,
      dateEnd: dateNow,
      timeEnd: timeNow,
    };
  }

  onPressUpProduct() {
    console.log(this.state.dateNow + ' ' + this.state.timeNow);
    console.log(this.state.dateEnd + ' ' + this.state.timeEnd);
  }

  render() {
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 5);
    maxDate = maxDate.toJSON().slice(0, 10).replace(/-/g, '/');
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Input lable="Tên sản phẩm" />
        <Input lable="Giá khởi điểm" />
        <Input lable="Giá trần" />
        <Input
          style={{ height: 50, fontSize: 18 }}
          lable="Miêu tả sản phẩm"
          multiline
          editable
          numberOfLines={4}
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
          <Image
            resizeMode="contain"
            style={{ height: 200 , flex: 1 }}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
        </View>
        <TouchableOpacity style={styles.buttonUp} onPress={this.onPressUpProduct.bind(this)}>
          <Text style={styles.buttonTextUp}>Đăng sản phẩm</Text>
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
  }
};

export default UpProduct;
