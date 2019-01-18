# Readable Project

<img src="https://raw.githubusercontent.com/zicrox/mobile-flashcards/master/src/assets/screenshots/iphoneX-cards.gif" align="left" height="682" width="344" >
<img src="https://raw.githubusercontent.com/zicrox/mobile-flashcards/master/src/assets/screenshots/iphoneX-new-card.gif" height="682" width="344" >

## Project Overview

This is the final assessment project for Udacity's React nanodegree the React-native part.

In the "mobile-flashcards" project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Development Overview

* Focus on didactic project for the developer's life and experiments.
* Plain react native without any component libraries and UI toolkits.
* Navigation set with the well known react-navigation.
* No Redux here. Basic state managment with react "setState".
* One global state: "screenProps" that are common to all screens nested in the main "Navigator".
* Two types of elements:
    * Components: Dumb, only recive props and can have some internal state.
    * Screens: Can access to global state (screenProps) but not necesary.

## Start Developing

To get started developing right away:

* install all project dependencies `npm install`
* start the development and expo environment `npm start`

