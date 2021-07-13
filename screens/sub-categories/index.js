import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import T from 'react-native-i18n';
import Tile from '../../components/static/tiles/sub-categories/tile';
import {Search, Activity} from 'react-native-iconly';
import styles from './index.styles';
import {APP_GRAY, APP_PURPLE} from '../../constants';
import Input from '../../components/inputs/text';
import Background from '../../components/static/backgound';
import CancelButton from '../../components/buttons/cancel';
import Margin from '../../components/utils/margin';
import {
  CategoriesContext,
  SubCategoriesContext,
} from '../../navigator/stacks/create-item';

const SubCategoriesScreen = ({
  route: {
    params: {id, uri},
  },
  navigation,
}) => {
  const [categorie, setcategorie] = useState();
  useEffect(() => {
    setcategorie(id);
  }, []);
  const category = useContext(CategoriesContext).find(c => c.id === id);
  const tiles = useContext(SubCategoriesContext)[id];
  const [subCategories, setSubCategories] = useState(tiles);
  console.log(categorie + ' ' + uri);
  const handlePressCancel = () => {
    navigation.pop();
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePress = id => {
    navigation.navigate(category.link + ' Form', {id, uri, categorie});
  };
  const handleTextChange = text => {
    const c = [];
    tiles
      .filter(t => t.title.toUpperCase().includes(text.toUpperCase()))
      .forEach(tile => {
        c.push(tile);
      });
    setSubCategories(c);
  };
  const header = () => (
    <View style={styles.root}>
      <View style={styles.cancelContainer}>
        <TouchableOpacity onPress={handlePressCancel}>
          <Text style={styles.cancelText}>{T.t('sub categories.Cancel')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Image source={category.icon} />
        <Text style={styles.title}>{category.title}</Text>
      </View>
      <View style={styles.searchContainer}>
        <Input
          placeholder={T.t('sub categories.Search')}
          small
          iconRight={<Search set="light" color={APP_GRAY} size={24} />}
          action={handlePress}
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );

  const footer = () => (
    <View style={styles.footer}>
      <CancelButton onPress={handlePressBack} />
      <Margin mb5 />
    </View>
  );

  return (
    <>
      {header()}
      <FlatList
        columnWrapperStyle={styles.grid}
        data={subCategories}
        numColumns={2}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Tile
            id={item.id}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            onPress={handlePress}
          />
        )}
        ListFooterComponent={footer}
      />

      <Background />
    </>
  );
};

export default SubCategoriesScreen;
