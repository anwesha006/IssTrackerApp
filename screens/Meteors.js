import * as React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';

export default class MeteorScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <Text>Meteor Screen</Text>
            </View>
        )
    }
}