import {storiesOf} from '@storybook/react-native';
import React, {useState, Fragment} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {APP_PURPLE} from '../../../constants';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import InventoryListItem from './index';
import items from './index.items';

const handlePress = id => {
  alert('Pressed ' + id);
};

const RealWorld = () => {
  return (
    <View style={{marginBottom: 200}}>
      <Margin mb2 />
      <View>
        <Text
          style={{
            color: APP_PURPLE,
            fontSize: 24,
            marginLeft: 32,
            fontWeight: '700',
          }}>
          My inventory
        </Text>
      </View>
      <Margin mb3 />
      <View>
        <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
          {items.map(item => (
            <Fragment>
              <InventoryListItem
                name={item.name}
                categoryName={item.category}
                personName={item.person}
                localImage={item.image}
                ribbonColor={item.ribbonColor}
                onPress={() => handlePress(item.id)}
              />
              <Margin mb2 />
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

storiesOf('Inventory List Item', module)
  .add('_real world', () => <RealWorld />)
  .add('silhouette', () => <InventoryListItem />)
  .add('centered', () => (
    <Center>
      <InventoryListItem />
    </Center>
  ))
  .add('full', () => (
    <Center>
      <InventoryListItem
        personName="Bob Bason"
        categoryName="Clothing"
        name="Ford Mustang"
        ribbonColor="#FFA000"
        image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg"
      />
    </Center>
  ))
  .add('with image from internet', () => (
    <Center>
      <InventoryListItem image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg" />
    </Center>
  ))
  .add('with image locally', () => (
    <Center>
      <InventoryListItem
        localImage={require('../../../assets/images/dummy/1.jpg')}
      />
    </Center>
  ))
  .add('with image local and internet', () => (
    <Center>
      <InventoryListItem
        image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg"
        localImage={require('../../../assets/images/dummy/1.jpg')}
      />
    </Center>
  ))
  .add('with amber ribbon', () => (
    <Center>
      <InventoryListItem ribbonColor="#FFA000" />
    </Center>
  ))
  .add('with item name', () => (
    <Center>
      <InventoryListItem name="Bonnet" />
    </Center>
  ))
  .add('with category name', () => (
    <Center>
      <InventoryListItem categoryName="Clothing" />
    </Center>
  ))
  .add('with person name', () => (
    <Center>
      <InventoryListItem personName="Alice Alley" />
    </Center>
  ));
