import {storiesOf} from '@storybook/react-native';
import React, {useState, Fragment} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {APP_PURPLE, APP_RED} from '../../../constants';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import UsersListItem from './index';
import items from './index.items';

const handlePress = id => {
  alert('Pressed ' + id);
};

const RealWorldNavigator = () => {
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
              <UsersListItem
                name={item.name}
                sexe={item.sexe}
                name={item.fullName}
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

const RealWorldSelector = () => {
  const isSelectable = true;

  const [selectedIds, setSelectedIds] = useState([]);
  const handleSelect = id => {
    setSelectedIds(old => [...old, id]);
  };
  const handleDeselect = id => {
    setSelectedIds(selectedIds.filter(element => element !== id));
  };
  const handleSelection = (selected, id) => {
    if (selected) {
      handleDeselect(id);
    } else {
      handleSelect(id);
    }
  };
  const handleSelectAll = () => {
    const arr = [];
    items.forEach(({id}) => arr.push(id));
    setSelectedIds(arr);
  };
  const handleDeselectAll = () => {
    setSelectedIds([]);
  };
  return (
    <Fragment>
      <Margin mt5 />
      <View>
        <Text
          style={{
            color: APP_PURPLE,
            fontSize: 24,
            marginLeft: 32,
            fontWeight: '700',
          }}>
          Administrators
        </Text>
      </View>
      <Margin mb2 />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={handleSelectAll}>
          <View
            style={{
              borderColor: APP_PURPLE,
              borderWidth: 1,
              borderRadius: 12,
              width: 120,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 12,
              marginLeft: 40,
            }}>
            <Text style={{color: APP_PURPLE, fontWeight: '700'}}>
              Select All
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeselectAll}>
          <View
            style={{
              borderColor: APP_RED,
              borderWidth: 1,
              borderRadius: 12,
              width: 120,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 12,
              marginLeft: 12,
            }}>
            <Text style={{color: APP_RED, fontWeight: '700'}}>
              Deselect All
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Margin mb2 />
      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
        {items.map(item => (
          <Fragment>
            <UsersListItem
              name={item.name}
              sexe={item.sexe}
              name={item.fullName}
              localImage={item.image}
              ribbonColor={item.ribbonColor}
              onPress={() =>
                handleSelection(selectedIds.includes(item.id), item.id)
              }
              selectable={isSelectable}
              selected={selectedIds.includes(item.id)}
            />
            <Margin mb2 />
          </Fragment>
        ))}
      </ScrollView>
    </Fragment>
  );
};

storiesOf('Users List Item', module)
  .add('_real world navigator', () => <RealWorldNavigator />)
  .add('_real world selector', () => <RealWorldSelector />)
  .add('silhouette', () => <UsersListItem />)
  .add('centered', () => (
    <Center>
      <UsersListItem />
    </Center>
  ))
  .add('full', () => (
    <Center>
      <UsersListItem
        name="Bob Bason"
        categoryName="Clothing"
        name="Ford Mustang"
        ribbonColor="#FFA000"
        image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg"
      />
    </Center>
  ))
  .add('with image from internet', () => (
    <Center>
      <UsersListItem image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg" />
    </Center>
  ))
  .add('with image locally', () => (
    <Center>
      <UsersListItem
        localImage={require('../../../assets/images/avatars/1.png')}
      />
    </Center>
  ))
  .add('with image local and internet', () => (
    <Center>
      <UsersListItem
        image="https://www.wallpapertip.com/wmimgs/75-755890_hd-wallpaper-guru-randhawa-hd-wallpaper-download-guru.jpg"
        localImage={require('../../../assets/images/dummy/1.jpg')}
      />
    </Center>
  ));
