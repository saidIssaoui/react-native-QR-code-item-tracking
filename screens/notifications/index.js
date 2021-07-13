import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {items} from './index.items';
import styles from './index.styles';
import {ChevronLeft} from 'react-native-iconly';
import {APP_DARK_GRAY, APP_PURPLE, BLACK} from '../../constants';
import ThreeDots from '../../components/static/icons/three-dots';
import Margin from '../../components/utils/margin';
import Background from '../../components/static/backgound';
import T from 'react-native-i18n';
import {User, Notification as Bell} from 'react-native-iconly';
import Item from './item';

const back = <ChevronLeft set="light" color={APP_DARK_GRAY} size={32} />;
const bell = <Bell set="bold" color={APP_PURPLE} size={32} />;

const NotificationsScreen = ({navigation}) => {
  const handlePress = id => {
    alert(id);
  };
  const handlePressBack = () => {
    navigation.pop();
  };
  const [hasItems, setHasItems] = useState(true);
  const header = () => (
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handlePressBack}>{back}</TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Margin mb1 />
        <View style={styles.iconContainer}>{bell}</View>
        <Margin mb1 />
        <Text style={styles.iconText}>Notifications</Text>
        <Margin mb1 />
      </View>
      <Margin mb2 />
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
              <Margin mb3 />
              <Text style={styles.emptyText}>
                {"Vous n'avez pas\nde notifications"}
              </Text>
            </View>
          </View>
        )}
        {hasItems && (
          <SectionList
            sections={items}
            keyExtractor={(item, index) => item + index}
            renderItem={({item: {id, type, sender, text, color}}) => (
              <View style={styles.item}>
                <Item
                  id={id}
                  type={type}
                  sender={sender}
                  text={text}
                  color={color}
                  onPress={() => handlePress(id)}
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

export default NotificationsScreen;
