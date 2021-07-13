import {storiesOf} from '@storybook/react-native';
import React, {useState, Fragment} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import Center from '../../../utils/center';
import Tile from './tile';
import {Search} from 'react-native-iconly';
import {APP_GRAY, WHITE} from '../../../../constants';
import TextInput from '../../../inputs/text';
import booksAndDocumentsTiles from './constants/books-and-documents';
import clothingTiles from './constants/clothing';
import equipmentTiles from './constants/equipment';
import fixedTiles from './constants/fixed';
import furnitureTiles from './constants/furniture';
import multimediaTiles from './constants/multimedia';
import personalDocumentsTiles from './constants/personal-documents';
import toolsTiles from './constants/tools';
import vehiculeTiles from './constants/vehicule';

const handlePress = id => {
  alert('Pressed ' + id);
};

const RealWorld = ({tiles}) => {
  const handlePress = id => {
    alert('Category ' + id);
  };

  const allSubCategories = [];
  tiles.forEach(tile => {
    allSubCategories.push(tile);
  });
  const [subCategories, setSubCategories] = useState(allSubCategories);
  const handleTextChange = text => {
    const c = [];
    tiles
      .filter(t => t.title.toUpperCase().includes(text.toUpperCase()))
      .forEach(tile => {
        c.push(tile);
      });
    setSubCategories(c);
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
        data={subCategories}
        numColumns={2}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Tile
            id={`${item.categoryId}/${item.id}`}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onPress={handlePress}
          />
        )}
      />
    </ScrollView>
  );
};

storiesOf('Sub Categories tiles', module)
  .add('_real world books & documents', () => (
    <RealWorld tiles={booksAndDocumentsTiles} />
  ))
  .add('_real world clothing', () => <RealWorld tiles={clothingTiles} />)
  .add('_real world equipment', () => <RealWorld tiles={equipmentTiles} />)
  .add('_real world fixed', () => <RealWorld tiles={fixedTiles} />)
  .add('_real world furniture', () => <RealWorld tiles={furnitureTiles} />)
  .add('_real world multimedia', () => <RealWorld tiles={multimediaTiles} />)
  .add('_real world personal documents', () => (
    <RealWorld tiles={personalDocumentsTiles} />
  ))
  .add('_real world tools', () => <RealWorld tiles={toolsTiles} />)
  .add('_real world vehicules', () => <RealWorld tiles={vehiculeTiles} />)
  .add('normal', () => (
    <Tile id="Tile" title="Title" subtitle="Subtitle" onPress={handlePress} />
  ))
  .add('centered', () => (
    <Center>
      <Tile
        id="books-and-documents/thriller"
        title="Thriller"
        subtitle="0 elements"
        icon={require('../../../../assets/images/sub-categories-icons/books-and-documents/thriller.png')}
        onPress={handlePress}
      />
    </Center>
  ));
