import React, { Component } from 'react';
import { StatusBar, Image, View, Text, TouchableOpacity } from 'react-native';
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

  onChangedFirstName(text) {
    this.props.changedFirstName(text);
  }

  onChangedLastName(text) {
    this.props.changedLastName(text);
  }

  onChangedEmail(text) {
    this.props.changedEmail(text);
  }

  onChangedPhone(text) {
    this.props.changedPhone(text);
  }

  onChangedUsername(text) {
    this.props.changedUsername(text);
  }

  onChangedPassword(text) {
    this.props.changedPassword(text);
  }

  onChangedRePassword(text) {
    this.props.changedRePassword(text);
  }

  createAccount() {
    const { firstname, lastname, email, phone, username, password, repassword } = this.props;
    if (!firstname) {
      this.message('Ban chưa điền Tên');
    } else {
      if (!lastname) {
        this.message('Bạn chưa điền Họ');
      } else {
        if (!email) {
          this.message('Bạn chưa điền Email');
        } else {
          if (!this.validateEmail(email)) {
            this.message('Địa chỉ email không hợp lệ');
          } else {
            if (!phone) {
              this.message('Bạn chưa điền số điện thoại');
            } else {
              if (!username) {
                this.message('Bạn chưa điền tên đăng nhập');
              } else {
                if (!password) {
                  this.message('Bạn chưa điền mật khẩu');
                } else {
                  if (password.length < 6) {
                    this.message('Mật khẩu ít nhất 6 ký tự');
                  } else {
                    if (!repassword) {
                      this.message('Bạn chưa điền nhập lại mật khẩu');
                    } else {
                      if (password !== repassword) {
                        this.message('Mật khẩu và nhập lại phải giống nhau');
                      } else {
                        this.props.createAccount(firstname, lastname, email, phone, username, md5(password));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  message(text) {
    MessageBarManager.showAlert({
      title: 'Thông báo',
      message: text,
      alertType: 'error'
    });
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  renderButtonRegister() {
    if (!this.props.loading) {
      return (
        <Button block style={styles.button} onPress={this.createAccount.bind(this)}>
          <Text style={{ color: 'white' }}>TẠO TÀI KHOẢN</Text>
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
    //console.log(this.props.error);
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
            <Text style={styles.textForm}>TẠO TÀI KHOẢN MỚI</Text>
            <View style={{ flexDirection: 'row' }}>
              <Card>
                <Form>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Tên"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.firstname}
                      onChangeText={this.onChangedFirstName.bind(this)}
                    />
                    <View style={styles.line}></View>
                    <Input
                      style={styles.input}
                      placeholder="Họ"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.lastname}
                      onChangeText={this.onChangedLastName.bind(this)}
                    />
                  </Item>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.email}
                      onChangeText={this.onChangedEmail.bind(this)}
                    />
                  </Item>
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Số điện thoại (Xác thực CODE)"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      autoCorrect={false}
                      value={this.props.phone}
                      keyboardType={'phone-pad'}
                      onChangeText={this.onChangedPhone.bind(this)}
                    />
                  </Item>
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
                  <Item regular>
                    <Input
                      style={styles.input}
                      placeholder="Nhập lại mật khẩu"
                      placeholderTextColor="#989899"
                      autoCapitalize={'none'}
                      secureTextEntry
                      autoCorrect={false}
                      value={this.props.repassword}
                      onChangeText={this.onChangedRePassword.bind(this)}
                    />
                  </Item>
                </Form>
              </Card>
            </View>
            {this.renderButtonRegister()}
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

  line: {
    height: 50,
    width: 0.5,
    backgroundColor: '#989899'
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

export default LoginForm;
