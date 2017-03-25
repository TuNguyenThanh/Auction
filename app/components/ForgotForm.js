import React, { Component } from 'react';
import { StatusBar, Image, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Form, Item, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';

const MessageBarAlert = require('react-native-message-bar').MessageBar;
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class ForgotForm extends Component {
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  onChangedForgotPassword(text) {
    this.props.changedForgotPassword(text);
  }

  onPressForgotPassword() {
    const { email } = this.props;
    if (email) {
      if (!this.validateEmail(email)) {
        MessageBarManager.showAlert({
          title: 'Thông báo',
          message: 'Địa chỉ email không hợp lệ',
          alertType: 'error'
        });
      } else {
        this.props.forgotPassword(email);
      }
    } else {
      MessageBarManager.showAlert({
        title: 'Thông báo',
        message: 'Bạn chưa điền Email',
        alertType: 'error'
      });
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  renderResetPassword() {
    if (!this.props.loading) {
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
        <MessageBarAlert ref="alert" />
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
    height: 75,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
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
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default ForgotForm;
