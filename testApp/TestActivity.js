/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
    Dimensions,
    DeviceEventEmitter
} from 'react-native';
let WIDTH = Dimensions.get('window').width;
import CodePush from 'react-native-code-push';

export default class App extends Component {

    constructor(props){
        super(props);
        console.log("TestActivity 执行构造函数")
    }

    componentDidMount() {
        // let data =  CodePush.sync({
        //     updateDialog: {
        //         appendReleaseDescription:true,
        //         descriptionPrefix:'更新内容:',
        //         mandatoryContinueButtonLabel:'更新',
        //         mandatoryUpdateMessage:'好贷宝有新版本了，请您及时更新',
        //         optionalInstallButtonLabel: '立即更新',
        //         optionalIgnoreButtonLabel: '稍后',
        //         optionalUpdateMessage:'有新版本了，是否更新？',
        //         title: '提示'
        //     },
        //     installMode: CodePush.InstallMode.IMMEDIATE
        // });
        console.log("TestActivity componentDidMount")
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.hello}>Hello, 这里是RN view</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:WIDTH,
        backgroundColor:'gray'
    },
    hello: {
        marginTop:20,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});



