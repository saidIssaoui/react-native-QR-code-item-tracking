import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import InventoryListItem from '../../components/inventory/list-item';
//import {items as allItems} from './index.items';
import styles from './index.styles';
import {Search, ChevronLeft, Category, Filter} from 'react-native-iconly';
import {
  APP_DARK_GRAY,
  BLACK,
  APP_GRAY,
  APP_GREEN,
  APP_PURPLE,
} from '../../constants';
import ThreeDots from '../../components/static/icons/three-dots';
import Margin from '../../components/utils/margin';
import InventoryStatus from '../../components/inventory/status';
import Background from '../../components/static/backgound';
import T from 'react-native-i18n';
import Notification from '../../components/buttons/notification';
import Input from '../../components/inputs/text';
import PlusCircle from '../../components/static/icons/plus-circle/large';
import ActionButton from '../../components/buttons/action';
import RoundedArrow from '../../components/static/icons/rounded-arrow';
import axios from 'axios';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const create = <PlusCircle width={64} height={64} />;

const CatalogScreen = ({navigation}) => {
  const [allItems, setallItems] = useState();
  const [user, setuser] = useState();
  useEffect(() => {
    GetItems()
    
  }, []);
  
  async function GetItems() {
    
   await  axios.get(`http://192.168.1.14:9000/api/objet`).then(res => {
     
      const objet = res.data
      console.log(objet)
      setallItems(result => [{"data": objet,"title":'objet.createdAt'}]);

     }).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
       // ADD THIS THROW error
        throw error;
      });
  }
  console.log(allItems)
  const handlePress = id => {
    alert(id);
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressContextual = () => {
    navigation.navigate('Member Settings');
  };
  const [hasItems, setHasItems] = useState(false);
  const handleToggleStatus = () => {
    setHasItems(!hasItems);
  };
  const handlePressCreate = () => {
    setHasItems(!hasItems);
  };
  const handlePressFilter = () => {
    alert('Filter');
  };

  const [items, setItems] = useState(allItems);
  
  const [text, setText] = useState('');
  const handleTextChange = text => {
    const is = [];
    setText(text);
    allItems.forEach(element => {
      let arr = [];
      if (element.data) {
        arr = element.data.filter(e =>
          e.name.toUpperCase().includes(text.toUpperCase()),
        );
      }
      if (arr.length > 0) {
        is.push({title: element.title, data: arr});
      }
    });
    setItems(is);
  };
  const header = () => (
    <View>
      <View style={styles.topBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
          <Margin ml2 />
          <Category color={APP_GREEN} size={24} set="bold" />
          <Margin ml1 />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{T.t('catalogue.title')}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handlePressFilter}>
          <Filter color={APP_GRAY} size={24} set="light" />
        </TouchableOpacity>
      </View>
      <Margin mb3 />
      {hasItems && (
        <View style={styles.searchContainer}>
          <Input
            value={text}
            placeholder={T.t('catalogue.title')}
            small
            iconRight={<Search set="light" color={APP_GRAY} size={24} />}
            onChangeText={handleTextChange}
          />
        </View>
      )}
    </View>
  );

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!hasItems && (
          <View style={styles.emptyContainer}>
            {header()}
            <View style={styles.emptyBottom}>
              <Image
                source={require('../../assets/images/illustrations/empty-inventory.png')}
              />
              <Margin mb2 />
              <View>
                <Text style={styles.emptyText}>
                  {T.t("catalogue.You don't have any object")}
                </Text>
                <View
                  style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                  <View style={{left: 64}}>
                    <RoundedArrow />
                  </View>
                </View>
                <Text style={styles.smallText}>
                  {T.t('catalogue.start now')}
                </Text>
              </View>
              <Margin mb2 />
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  bottom: 64,
                  alignItems: 'center',
                }}
                onPress={handlePressCreate}>
                <View style={styles.addButtonShadow} />
                <Text>{create}</Text>
                <Margin mb1 />
                <Text style={styles.emptyText}>
                  {T.t('catalogue.Add an object')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {hasItems && (
          <SectionList
            sections={allItems}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <InventoryListItem
                  name={item.subcategorie}
                  QRImage={{uri: item.qrcode}}
                  categoryName={item.categorie}
                  personName={item.userName}
                  localImage={{uri : item.uri}}
                  ribbonColor={item.ribbonColor}
                  onPress={() => handlePress(item.id)}
                />
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.header}>{title}</Text>
            )}
            ListHeaderComponent={header()}
            ListFooterComponent={<Margin mb4 />}
          />
        )}
      </SafeAreaView>
      {hasItems && (
        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={handlePressCreate}>
          <View style={styles.addButtonShadow}></View>
          <Text>{create}</Text>
        </TouchableOpacity>
      )}
      <Background />
    </>
  );
};

export default CatalogScreen;
