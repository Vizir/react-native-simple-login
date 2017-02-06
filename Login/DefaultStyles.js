import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    marginBottom: 10
  },
  fieldsetWrapper: {
    alignSelf: 'stretch',
    borderRadius: 2
  },
  inputWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 5
  },
  input: {
    height: 40,
    color: '#333',
    paddingLeft: 30,
    alignSelf: 'stretch'
  },
  inputIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 11
  },
  backButton: {
    height: 40
  },
  backButtonText: {
    fontSize: 30,
    color: '#6C7A89'
  },
  baseButton: {
    height: 40,
    backgroundColor: '#446cb3',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginVertical: 10
  },
  baseButtonText: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20
  },
  formWrappper: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 15,
    bottom: 80
  },
  loginResetPasswordLink: {
    height: 30,
    marginVertical: 5,
    justifyContent: 'center',
    alignSelf: 'flex-end'
  },
  loginResetPasswordLinkText: {
    fontSize: 17,
    color: '#6C7A89'
  },
  resetPasswordFormSubmitButton: {
    marginTop: 20
  }
})
