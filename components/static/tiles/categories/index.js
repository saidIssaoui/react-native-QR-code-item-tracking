import withContent from './with-content';
import EquipmentTile from './equipment';
import MultimediaTile from './multimedia';
import VehiculesTile from './vehicule';
import ToolsTile from './tools';
import ClothingTile from './clothing';
import FurnitureTile from './furniture';
import BooksTile from './books-and-documents';
import FixedTile from './fixed';
import DocumentsTile from './personal-documents';

const Equipment = ({...props}) =>
  withContent(EquipmentTile)({
    id: 'equipment',
    title: 'Equipment',
    titleColor: '#00580F',
    ...props,
  });

const Multimedia = ({...props}) =>
  withContent(MultimediaTile)({
    id: 'multimedia',
    title: 'Multimedia',
    titleColor: '#5D43C6',
    ...props,
  });

const Vehicules = ({...props}) =>
  withContent(VehiculesTile)({
    id: 'vehicules',
    title: 'Vehicules',
    titleColor: '#6349CE',
    ...props,
  });

const Tools = ({...props}) =>
  withContent(ToolsTile)({
    id: 'tools',
    title: 'Multimedia',
    titleColor: '#987600',
    ...props,
  });

const Clothing = ({...props}) =>
  withContent(ClothingTile)({
    id: 'clothing',
    title: 'Multimedia',
    titleColor: '#A27500',
    ...props,
  });

const Furniture = ({...props}) =>
  withContent(FurnitureTile)({
    id: 'furniture',
    title: 'Furniture',
    titleColor: '#604333',
    ...props,
  });

const Books = ({...props}) =>
  withContent(BooksTile)({
    id: 'books',
    title: 'Books & Documents',
    titleColor: '#006760',
    ...props,
  });

const Fixed = ({...props}) =>
  withContent(FixedTile)({
    id: 'fixed',
    title: 'Fixed',
    titleColor: '#E24F4A',
    ...props,
  });

const Documents = ({...props}) =>
  withContent(DocumentsTile)({
    id: 'documents',
    title: 'Personal Documents',
    titleColor: '#9A0000',
    ...props,
  });

export {
  Equipment,
  Multimedia,
  Vehicules,
  Tools,
  Clothing,
  Furniture,
  Books,
  Fixed,
  Documents,
};
