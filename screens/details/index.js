import React from 'react';
import {Button, Text, View} from 'react-native';
import Margin from '../../components/utils/margin';

const DetailsScreen = ({
  navigation,
  route: {
    params: {data},
  },
}) => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Details</Text>
    <Margin mb2 />
    <Text>Data: {data}</Text>
    <Margin mb2 />
    <Button
      title="Scan again"
      onPress={() => navigation.navigate('Camera', {scan: true})}
    />
    <Margin mb2 />
    <Button title="Quit" onPress={() => navigation.navigate('Scan')} />
  </View>
);

export default DetailsScreen;
