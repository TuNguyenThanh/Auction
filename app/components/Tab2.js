import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

class Tab2 extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>{this.props.description}</Text>
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
