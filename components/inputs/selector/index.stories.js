import {storiesOf} from '@storybook/react-native';
import React, {useState} from 'react';
import Center from '../../utils/center';
import Margin from '../../utils/margin';
import {ChevronDown} from 'react-native-iconly';
import {
  BLACK,
  APP_PURPLE,
  APP_RED,
  APP_GREEN,
  APP_ORANGE,
} from '../../../constants';
import {View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Selector from './index';

const icon = <ChevronDown set="bold" color={BLACK} size={24} />;

const handlePress = action => {
  alert('Pressed ' + action);
};

const allCountries = [
  {
    id: '1',
    label: 'France',
  },
  {
    id: '2',
    label: 'Germany',
  },
  {
    id: '3',
    label: 'Italy',
  },
  {
    id: '4',
    label: 'Greece',
  },
  {
    id: '5',
    label: 'Portugal',
  },
  {
    id: '6',
    label: 'Spain',
  },
];
const RealWorld = ({countries}) => {
  const [open, setOpen] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleSelect = id => {
    const country = countries.find(element => element.id === id);
    setSelectedCountry(country);
  };
  return (
    <Center>
      <Selector
        textLeft="Countries"
        textMiddle={selectedCountry.label}
        iconRight={icon}
        onPress={handleOpen}
        open={open}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {countries.map(({id, label}) => (
            <TouchableOpacity
              onPress={() => handleSelect(id)}
              key={id}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              disabled={selectedCountry.id === id}>
              <Margin mb1 />
              <Text
                style={{
                  color: selectedCountry.id === id ? APP_PURPLE : BLACK,
                  fontWeight: selectedCountry.id === id ? '700' : 'normal',
                }}>
                {label}
              </Text>
              <Margin mb1 />
            </TouchableOpacity>
          ))}
        </View>
      </Selector>
    </Center>
  );
};

const Example = ({isOpen = false, hasSecond = false}) => {
  const [openCountriesDropdown, setOpenCountiesDropdown] = useState(isOpen);
  const [openFruitsDropdown, setOpenFruitsDropdown] = useState(false);
  const handleOpenCountriesDropdown = () => {
    setOpenCountiesDropdown(!openCountriesDropdown);
  };
  const handleOpenFruitsDropdown = () => {
    setOpenFruitsDropdown(!openFruitsDropdown);
  };
  return (
    <Center>
      <Selector
        textLeft="Countries"
        textMiddle="Germany"
        iconRight={icon}
        onPress={handleOpenCountriesDropdown}
        open={openCountriesDropdown}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Margin mb1 />
          <Text>France</Text>
          <Margin mb1 />
          <Text style={{color: APP_PURPLE, fontWeight: '700'}}>Germany</Text>
          <Margin mb1 />
          <Text>Italy</Text>
          <Margin mb1 />
          <Text>Greece</Text>
          <Margin mb1 />
          <Text>Portugal</Text>
          <Margin mb1 />
          <Text>Spain</Text>
          <Margin mb1 />
        </View>
      </Selector>
      <Margin mb2 />
      {hasSecond && (
        <Selector
          textLeft="Fruits"
          textMiddle="Apple"
          iconRight={icon}
          onPress={handleOpenFruitsDropdown}
          open={openFruitsDropdown}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Margin mb1 />
            <Text>Orange</Text>
            <Margin mb1 />
            <Text>Fig</Text>
            <Margin mb1 />
            <Text>Grape</Text>
            <Margin mb1 />
            <Text>Pear</Text>
            <Margin mb1 />
            <Text style={{color: APP_PURPLE, fontWeight: '700'}}>Apple</Text>
            <Margin mb1 />
            <Text>Strawberry</Text>
            <Margin mb1 />
          </View>
        </Selector>
      )}
      <Margin mb2 />
      <Text>Selected country: Germany</Text>
      <Margin mb1 />
      {hasSecond && <Text>Selected fruit: Apple</Text>}
    </Center>
  );
};

storiesOf('Selector', module)
  .add('_real world selector', () => <RealWorld countries={allCountries} />)
  .add('normal', () => <Selector />)
  .add('centered', () => (
    <Center>
      <Selector
        textLeft="Countries"
        textMiddle="Tunisia"
        iconRight={icon}
        onPress={() => handlePress()}
      />
    </Center>
  ))
  .add('with dropdown', () => <Example />)
  .add('with dropdown open', () => <Example isOpen />)
  .add('multiple', () => <Example hasSecond />);
