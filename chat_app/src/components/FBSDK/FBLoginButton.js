import React, {Component} from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../actions/index'

import { loginToServerWithFacebook } from '../auth/facebook'

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
class FBLoginButton extends Component<{}> {
    componentDidMount(){
        console.log('this is our FBSDK Button props', this.props)
    }
    render() {
        return (

            <View>
                <LoginButton
                    onLoginFinished={
                        async (error, result) => {
                            if (error) {
                                // alert("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                // alert("login is cancelled.");
                            } else {
<<<<<<< HEAD
<<<<<<< HEAD
                                const result = await loginToServerWithFacebook().catch(e => console.log('there was an error in FBLoginButton/loginToServerWithFacebook()', e))
=======
                                const result = await loginToServerWithFacebook()
>>>>>>> parent of 0cca5eb... fb auth setup and splash screen integration
                                if(result.login){
                                    this.props.handleLoginResult(result)

                                }
=======
                                const token = await loginToServerWithFacebook()
>>>>>>> parent of 7432380... login auth flow
                            }
                        }
                    }
                    onLogoutFinished={() => alert("logout.")}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(ActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FBLoginButton)