import {storiesOf} from '@storybook/react-native';
import React, {useState, Fragment} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Center from '../../../utils/center';
import withContent from './with-content';
import tiles from './constants/tiles';
import {Search} from 'react-native-iconly';
import {APP_GRAY} from '../../../../constants';
import TextInput from '../../../inputs/text';

const handlePress = id => {
  alert('Pressed ' + id);
};

const RealWorld = () => {
  const handlePress = id => {
    alert('Category ' + id);
  };

  const allCategories = [];
  tiles.forEach(tile => {
    allCategories.push(tile);
  });
  const [categories, setCategories] = useState(allCategories);
  const handleTextChange = text => {
    const c = [];
    tiles
      .filter(t => t.title.toUpperCase().includes(text.toUpperCase()))
      .forEach(tile => {
        c.push(tile);
      });
    setCategories(c);
  };

  return (
    <ScrollView>
      <View
        style={{
          width: '80%',
          justifyContent: 'center',
          alignSelf: 'center',
          marginVertical: 24,
        }}>
        <TextInput
          placeholder="Search"
          small
          iconRight={<Search set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
          onChangeText={handleTextChange}
        />
      </View>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between',
          width: '80%',
          alignSelf: 'center',
          marginBottom: 24,
        }}
        data={categories}
        numColumns={2}
        keyExtractor={({id}) => id}
        renderItem={({
          item: {
            id,
            Cmp,
            title,
            subtitle,
            titleColor,
            subtitleColor,
            onPress,
            ...props
          },
        }) =>
          withContent(Cmp)({
            id,
            title,
            subtitle,
            titleColor,
            subtitleColor,
            onPress: handlePress,
            ...props,
          })
        }
      />
    </ScrollView>
  );
};

storiesOf('Categories tiles', module).add('_real world', () => <RealWorld />);
