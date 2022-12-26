import { PageEnum } from "../navigation/hooks/useReactNavigation.native";

export enum IconType {
  MaterialIcon,
  IonIcons,
}

export type SideMenuItemType = {
  // TODO: Turn into enum
  type: string;
  page: PageEnum;
  iconType: IconType;
  icon: string;
  backgroundColor: string;
};

export const widgetData: Array<SideMenuItemType> = [
  {
    type: 'quotes',
    page: PageEnum.Quotes,
    iconType: IconType.MaterialIcon,
    icon: 'format-quote',
    backgroundColor: '#27D5A3'
  },
  {
    type: 'countdown',
    page: PageEnum.Quotes,
    iconType: IconType.IonIcons,
    icon: 'calendar',
    backgroundColor: '#5686EA'
  },
  {
    type: 'lists',
    page: PageEnum.Quotes,
    iconType: IconType.MaterialIcon,
    icon: 'library-books',
    backgroundColor: '#F26159'
  },
  {
    type: 'tasks',
    page: PageEnum.Quotes,
    iconType: IconType.IonIcons,
    icon: 'checkbox',
    backgroundColor: '#F2B359'
  },
  {
    type: 'goals',
    page: PageEnum.Quotes,
    iconType: IconType.IonIcons,
    icon: 'flag',
    backgroundColor: '#BF59F2'
  }
];