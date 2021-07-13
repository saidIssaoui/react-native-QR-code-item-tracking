import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import InventoryListItem from '../../../components/inventory/list-item';
import {items} from './index.items';
import styles from './index.styles';
import {ChevronLeft} from 'react-native-iconly';
import {APP_DARK_GRAY, BLACK} from '../../../constants';
import ThreeDots from '../../../components/static/icons/three-dots';
import Margin from '../../../components/utils/margin';
import InventoryStatus from '../../../components/inventory/status';
import Background from '../../../components/static/backgound';
import T from 'react-native-i18n';
import axios from 'axios';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;

const MemberProfile = ({navigation, route}) => {
  const name = route.params.data.nom;
  const surname = route.params.data.prenom;
  const image = route.params.data.image;
  const [item, setItems] = useState();
  const iduserId = route.params.data._id;
  const iduser = {userId: iduserId};
  const [count, setcount] = useState();
 var items = item
  console.log(item)
  useEffect(() => {
    GetItems()
    
  }, []);
  //console.log(items)
  async function GetItems() {
     //console.log(iduser);
   await  axios.post(`http://192.168.1.14:9000/api/objet2`, iduser).then(res => {
      // const object = res.data;
      const objet = res.data
      setcount(objet.length)
       setItems(result => [{"data": objet,"title":objet.createdAt}]);
     });
  }
  const handlePress = id => {
    alert(id);
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const handlePressContextual = () => {
    navigation.navigate('Member Settings');
  };
  const [hasItems, setHasItems] = useState(true);
  
  const handleToggleStatus = () => {
    setHasItems(!hasItems);
  };
  
  

  const header = () => (
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
        <TouchableOpacity onPress={handlePressContextual}>
          <ThreeDots />
        </TouchableOpacity>
      </View>
      <View style={styles.userContainer}>
        <Margin mb1 />
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={{uri: image}} />
        </View>
        <Margin mb1 />
        <Text style={styles.username}>{name + ' ' + surname}</Text>
        <Margin mb1 />
      </View>
      <TouchableOpacity onPress={handleToggleStatus}>
        <View style={styles.itemsInfoContainer}>
          <InventoryStatus
            subtitleLeft={hasItems ? count: 0}
            subtitleRight={hasItems ? 20 : 0}
          />
        </View>
      </TouchableOpacity>
      <Margin mb2 />
      {hasItems && (
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>
            {T.translate('members.profile.Items')}
          </Text>
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
                source={require('../../../assets/images/illustrations/empty-inventory.png')}
              />
              <Margin mb3 />
              <Text style={styles.emptyText}>
                {T.translate('members.profile.No saved items')}
              </Text>
            </View>
          </View>
        )}
        {hasItems && (
          <SectionList
            sections={items}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <InventoryListItem
                  name={item.subcategorie}
                  QRImage={{uri: item.qrcode}}
                  categoryName={item.categorie}
                  personName={name + ' ' + surname}
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
            // ListFooterComponent={footer()}
          />
        )}
      </SafeAreaView>
      <Background />
    </>
  );
};

export default MemberProfile;
