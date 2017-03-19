import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Card, Form, Item, Input, Button, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import md5 from 'blueimp-md5';

const MessageBarAlert = require('react-native-message-bar').MessageBar;
const MessageBarManager = require('react-native-message-bar').MessageBarManager;

class LoginForm extends Component {
  componentDidMount() {
    // Register the alert located on this master page
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillUnmount() {
    // Remove the alert located on this master page from te manager
    MessageBarManager.unregisterMessageBar();
  }

  onPressLogin() {
    const { username, password } = this.props;
    if (!username) {
      this.message('Bạn chưa điền tên đăng nhập');
    } else if (!password) {
      this.message('Bạn chưa điền mật khẩu');
    }
    if (username && password) {
      if (password.length < 6) {
        this.message('Mật khẩu ít nhất 6 ký tự');
      } else {
        this.props.login(username, md5(password));
      }
    }
  }

  onPressForgotPass() {
    Actions.forgotForm();
  }

  onChangedUsername(text) {
    this.props.changedLoginUsername(text);
  }

  onChangedPassword(text) {
    this.props.changedLoginPassword(text);
  }

  message(text) {
    MessageBarManager.showAlert({
      title: 'Thông báo',
      message: text,
      alertType: 'error'
    });
  }

  renderButtonLogin() {
    if (!this.props.loading) {
      return (
        <Button block style={styles.button} onPress={this.onPressLogin.bind(this)}>
          <Text style={{ color: 'white' }}>ĐĂNG NHẬP</Text>
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
        <Content contentContainerStyle={styles.content}>
          <View style={styles.form}>
            <Image
              style={styles.logo}
              source={require('./images/ico-logo.png')}
            />
            <Text style={styles.textForm}>ĐĂNG NHẬP</Text>
            <View style={{ flexDirection: 'row' }}>
              <Card>
                <Form>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Tên đăng nhập"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.username}
                      onChangeText={this.onChangedUsername.bind(this)}
                    />
                  </Item>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Mật khẩu"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      secureTextEntry
                      autoCorrect={false}
                      value={this.props.password}
                      onChangeText={this.onChangedPassword.bind(this)}
                    />
                  </Item>
                </Form>
              </Card>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <TouchableOpacity
                style={styles.forgotPass}
                onPress={this.onPressForgotPass.bind(this)}
              >
                <Text style={{ color: '#5B5A5A' }}>Quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            {this.renderButtonLogin()}
          </View>
        </Content>
        <Text style={styles.title}>Bạn không có tài khoản?</Text>
        <TouchableOpacity onPress={() => { Actions.registerForm(); }}>
          <Text style={styles.createAccount}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
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
    height: 50,
    marginBottom: 60
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
    marginTop: 10
  },

  title: {
    textAlign: 'center',
    color: '#505050'
  },

  createAccount: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#FF7260'
  },

  forgotPass: {
    flex: 1,
    alignItems: 'flex-end'
  },

};

export default LoginForm;
