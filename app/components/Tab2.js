import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

class Tab2 extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Chi tiet san pham</Text>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 8
  },

};
export default Tab2;
