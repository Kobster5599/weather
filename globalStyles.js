import { Appearance } from "react-native";

const isDarkMode = Appearance.getColorScheme() === 'dark';

const FontConstants = {

};

const ColorConstants = {
    background: isDarkMode ? '#333333' : '#efefef',
    backgroundMedium: isDarkMode ? '#666666' : '#dddddd'
};

const SizeConstants = {
    paddingSmall: 2,
    paddingRegular: 8,
    paddingLarge: 16,
    borderRadius: 8
};