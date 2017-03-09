import React, { Component } from 'react';
import { StatusBar, Image, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Form, Item, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

class ForgotForm extends Component {
  renderResetPassword() {
    const a = 1;
    if (a === 1) {
      return (
        <Button block style={styles.button} onPress={this.onPressForgotPassword.bind(this)}>
          <Text style={{ color: 'white' }}>ĐẶT LẠI MẬT KHẨU</Text>
        </Button>
      );
    }
    return (
      <Button block style={styles.button}>
        <Spinner color='white' />
      </Button>
    );
  }

  onChangedForgotPassword(text) {
    this.props.changedForgotPassword(text);
  }

  onPressForgotPassword() {
    const { email } = this.props;
    if (email) {
      this.props.forgotPassword(email);
    }
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <StatusBar hidden />
        <TouchableOpacity style={styles.iconClose} onPress={() => { Actions.pop(); }}>
          <Image
            style={{ flex: 1 }}
            source={require('./images/close.png')}
          />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.content}>
          <View style={styles.form}>
            <Image
              style={styles.logo}
              source={require('./images/ico-logo.png')}
            />
            <Text style={styles.textForm}>QUÊN MẬT KHẨU</Text>
            <View style={{ flexDirection: 'row' }}>
              <Card>
                <Form>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.email}
                      onChangeText={this.onChangedForgotPassword.bind(this)}
                    />
                  </Item>
                </Form>
              </Card>
            </View>
            {this.renderResetPassword()}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20
  },

  logo: {
    width: 200,
    height: 50,
    marginBottom: 30
  },

  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textForm: {
    fontSize: 25,
    color: '#EF5E92',
    marginBottom: 20
  },

  input: {
    color: '#5B5A5A'
  },

  button: {
    backgroundColor: '#EF5E92',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20
  },

  iconClose: {
    width: 26,
    height: 26,
    marginTop: 20,
    marginLeft: 10
  }
};

export default ForgotForm;
