# LifeDashboard-ReactNative

#### 14th February 2023

Customisable dashboard consisting of widgets such as task tracking, countdowns, quotes, lists, habits and more.
Built using React Native & TypeScript.

Work In Progress - Includes the following functionality:
- Quotes screen including functionality add a quote.
- Move template widgets on the dashboard.
- Swipe between dashboards.

https://github.com/taylahlucas/LifeDashboard-ReactNative/assets/53559103/6f2cf161-5c4b-4500-905f-e8652550b074

## Setup

- cd LifeDashboard
- npm install
- cd ios
- pod install
- cd ..
- npm start
- npm run ios   // Only tested on iOS so far, Android in progress

## Folder Navigation

/common - Reusable componants and layouts.
/components - Custom components, layouts and pages.
/data - Mock data.
/navigation - Navigation stack functions.
/ utils - Constants and redux.

## Packages

react-native-draggable-flatlist
  - react-native-reanimated
  - react-native-gesture-handler

react-native-reanimated-carousel
  - react-native-reanimated

@react-navigation/native
  - react-native-screens
  - react-native-safe-area-context
  - @react-navigation/native-stack

react-redux
redux
redux-immutable
immutable

react-native-reanimated/plugin

## License

Shield: [![CC BY-NC-ND 4.0][cc-by-nc-nd-shield]][cc-by-nc-nd]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License][cc-by-nc-nd].

[![CC BY-NC-ND 4.0][cc-by-nc-nd-image]][cc-by-nc-nd]

[cc-by-nc-nd]: http://creativecommons.org/licenses/by-nc-nd/4.0/
[cc-by-nc-nd-image]: https://licensebuttons.net/l/by-nc-nd/4.0/88x31.png
[cc-by-nc-nd-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg
