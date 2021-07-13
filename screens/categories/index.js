import React, {useState, useContext, useEffect} from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import T from 'react-native-i18n';
import {Search, Activity} from 'react-native-iconly';
import styles from './index.styles';
import {APP_GRAY, APP_PURPLE} from '../../constants';
import withContent from '../../components/static/tiles/categories/with-content';
import Input from '../../components/inputs/text';
import Background from '../../components/static/backgound';
import CancelButton from '../../components/buttons/cancel';
import Margin from '../../components/utils/margin';
import {CategoriesContext} from '../../navigator/stacks/create-item';

const CategoriesScreen = ({navigation, route}) => {
  const [uri, seturi] = useState();
  useEffect(() => {
    seturi(route.params.data);
    //console.log(result)
  }, []);

  const tiles = useContext(CategoriesContext);
  const handlePressCancel = () => {
    navigation.pop();
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressTile = (id, title) => {
    navigation.navigate('Sub Categories', {id, uri});
  };

  const allCategories = tiles;
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

  const header = () => (
    <View style={styles.root}>
      <View style={styles.cancelContainer}>
        <TouchableOpacity onPress={handlePressCancel}>
          <Text style={styles.cancelText}>{T.t('categories.Cancel')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Activity set="light" color={APP_PURPLE} size={24} />
        <Text style={styles.title}>{T.t('categories.Your category')}</Text>
      </View>
      <View style={styles.searchContainer}>
        <Input
          placeholder={T.t('categories.Search')}
          small
          iconRight={<Search set="light" color={APP_GRAY} size={24} />}
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
            onPress: handlePressTile,
            ...props,
          })
        }
        ListFooterComponent={footer}
      />

      <Background />
    </>
  );
};

export default CategoriesScreen;
