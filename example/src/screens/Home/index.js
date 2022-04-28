import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Text> Back </Text>
            </TouchableOpacity>
        );
    }
}

export default Home;
