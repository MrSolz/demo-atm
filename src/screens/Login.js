import { toJS } from 'mobx';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { rootStore } from '../store';
import { useObserver } from "mobx-react";
import { observer } from "mobx-react-lite"
import apiService from "../utils/apiService";
import { LoginAction } from '../services/userServices';
const Login = observer(({ }) => {
    useEffect(() => {
        // RootStore.mainStore.setENV({ API_URL: "abc" })
    }, [])
    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <Text>
                {toJS(rootStore.mainStore.env.API_URL)}
            </Text>

            <TouchableOpacity style={{ marginTop: 20 }} onPress={() => {

                const form = new FormData();
                // formData.append('comment', { 'string': JSON.stringify({ content: message }), type: 'application/json' });
                const data = { username: "pockyjr", password: "123456" }
                LoginAction(data).then(res => {
                    console.log("res", res)
                }).catch(err => {
                    console.log("err", err)
                })
            }}>
                <Text>Check</Text>
            </TouchableOpacity>
        </View>
    );
})

export default Login;
