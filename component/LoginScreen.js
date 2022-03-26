import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { app } from '../Config/Firebase';
import { updateEmail, updatePassword, updateUid, login, getUser } from '../Action/User'
import { withNavigation } from 'react-navigation';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
  }

  constructor(props) {
    super(props);

    this.state = {
        isLoading: false,
        hidePassword: true
    }
  }

  _loginAsync = () => {
      this.setState(
          { isLoading: true }
      )
      this.props.login();
  }

  _toggleHidePassword = () => {
      this.setState({
          hidePassword: !this.state.hidePassword
      })
  }

  componentDidMount = () => {
      app.auth().onAuthStateChanged(user => {
          if (user) {
              this.props.updateUid(user.uid);
              this.props.getUser(user.uid);
          }
      })
  }

  goToForgotPassword = () => this.props.navigation.navigate('ResetPassword')

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Animood</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={email => this.props.updateEmail(email)}
              value={this.state.email}
              placeholder="帳號"
              placeholderTextColor={'#FF986D'}
              textContentType='username'
              keyboardAppearance='dark'
            />
            <TextInput
              style={styles.input}
              onChangeText={password => this.props.updatePassword(password)}
              value={this.state.Password}
              placeholder="密碼"
              placeholderTextColor={'#FF986D'}
              textContentType='password'
              keyboardAppearance='dark'
              secureTextEntry={true}
              right={<TextInput.Icon icon={this.state.hidePassword ? 'eye-off-outline' : 'eye-outline'} onPress={this._toggleHidePassword} />}
            />
          </View>
          <TouchableOpacity style={{width: 280, alignItems: 'flex-end', marginBottom: 5}} onPress={this.goToForgotPassword}>
              <Text style={styles.forget}>忘記密碼？</Text>
          </TouchableOpacity>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.login} onPress={this._loginAsync}>
              <Text style={styles.btnText}>登入</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUp}>
              <Text style={styles.btnText}>註冊</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFBB9E',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  title:{
    fontSize: 80,
    fontWeight:"bold",
    lineHeight: 94,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFF9F7',
    height: 55,
    width: 285,
    margin: 15,
    borderWidth: 1,
    borderColor: '#FF986D',
    borderRadius: 20,
    padding: 15,
    fontSize: 18,
    fontWeight:"bold",
  },
  forget: {
    fontSize: 14,
    fontWeight:"bold",
    color: '#FFFFFF',
    textDecorationLine: 'underline'
  },
  btn: {
    width: 285,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signUp: {
    width: 125,
    height: 60,
    backgroundColor: '#FF7D3C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  login: {
    width: 125,
    height: 60,
    backgroundColor: '#F95A5A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight:"bold",
    color: '#FFFFFF'
  }
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updateUid, login, getUser }, dispatch)
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Login))