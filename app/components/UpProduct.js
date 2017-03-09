import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Input } from './common';

class UpProduct extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Input lable="Tên sản phẩm" />
        <Input lable="Giá khỏi điểm" />
        <Input lable="Giá trần" />
        <Input
          style={{ height: 50, fontSize: 18 }}
          lable="Miêu tả sản phẩm"
          multiline
          editable
          numberOfLines={4}
        />
        <View style={{ height: 40, flexDirection: 'row' }}>
          <Text>Ngày kết thúc</Text>
          <Text>2017-03-09 14:20:00</Text>
        </View>
        <View style={{ height: 180 }}>
          <Text>Chọn hình sản phẩm</Text>
          <Image
            resizeMode="contain"
            style={{ flex: 1, marginTop: 8 }}
            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
          />
        </View>
        <View style={styles.buttonUp}>
          <Text style={styles.buttonTextUp}>Đăng sản phẩm</Text>
        </View>
      </ScrollView>
    );
  }
}

// <Content>
//     <Form>
//       <Item>
//         <Label>Tên sản phẩm</Label>
//         <Input />
//       </Item>
//       <Item>
//         <Label>Giá khỏi điểm</Label>
//         <Input />
//       </Item>
//       <Item>
//         <Label>Giá trần</Label>
//         <Input />
//       </Item>
//       <Item >
//         <Label>Ngày kết thúc</Label>
//         <View style={{ flex: 1, height: 60, backgroundColor: 'red' }}>
//         </View>
//       </Item>
//       <Item >
//         <Label>Chọn hình sản phẩm</Label>
//         <View style={{ flex: 1, height: 60, backgroundColor: 'red' }}>
//         </View>
//       </Item>
//     </Form>
// </Content>

const styles = {
  container: {
    flex: 1,
    marginTop: 64,
    padding: 8
  },

  buttonUp: {
    backgroundColor: '#EF5E92',
    height: 40,
    marginTop: 10,
    borderRadius: 20,
    // marginLeft: 20,
    // marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonTextUp: {
    color: 'white'
  }
};

export default UpProduct;
