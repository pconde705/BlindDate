<h1 align="center"> BlindDate </h1> <br>
<h4 align="center">
    BlindDate is a mobile app aimed at bringing people together by connecting over personal descriptions rather than images.
</h4>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [MVP](#mvp)
- [Technologies](#technologies)
- [Technical Challenges](#technical-challenges)
- [Group Members](#group-members)
- [Schedule](#schedule)


## Introduction

All modern connection apps require that the image of an individual has to be front and center 
for your decision on whether or not to connect with that certain someone. We wanted to remove the stigma of people feeling they were
being unfairly judged by an image before you learn anything about them.

Our app was therefore designed with two simple ideas in mind:

1. People are not shown any images of an individual unless they swipe no after reading the user's profile description
2. Once two people connect, images are not revealed unless some conversation has happened, and both parties mutually agree to show each other pictures of themselves

## Features

* Create profile
* Answer questions to flesh out profile
* Swipe through profiles of people that match the user's preferences
* Upon successful connection, the user will be allowed to chat with his/her match
* Pictures can be revealed if both the user and his/her match consent to it

## MVP

   - [ ] Auth, login and signup
   - [ ] Profile creation
   - [ ] Profile page
   - [ ] Swipe features
   - [ ] Seeding database with a large diversity of people
   - [ ] Chat between two individuals
   - [ ] Picture reveal
   
#### Bonus Features
   - [ ] Facial reognition
   - [ ] Delete conversations/connections
   - [ ] Edit pictures
   - [ ] Edit descriptions

## Technologies
  #### Backend: Ruby on Rails
  #### Frontend: React / React Native / Redux

## Technical Challenges

#### React Native in general
+ React Native has its own rules when it comes to Redux implementation, and we would have to figure out what changes need to be made and which aspects will remain unchanged. 
+ Folder structure is completely foreign and still somewhat undecided in the Native community, hence we will largely have to improvise based on what we think is correct.

#### Styling
+ Unlike React in a rails web app, you cannot use CSS files to style your mobile app. This introduces a number of hurdles when it comes to correct structuring and already established style-terms now meaning something different.

#### Chat
+ Neither member in the group has any experience with chat, therefore websockets will be a challenge as we will have to learn not only how to correctly implement it, but also implement it in a native app.

## Wireframes

insert images here...
 
## Group Members

**Patrick Conde**,
**Andrew Cho**

## Schedule

### Day 1
  - implement auth
  - create Rails backend
  - style auth page

### Day 2
  - start profile creation
  - allow image upload
  - style profile creation

### Day 3
 - start swipe features
 - start matching functionality
 - start rejection functionality

### Day 4
  - start showcase webpage for the app
  - finish swipe features
  - finished matching functionality
  - finish rejection functionality
  - start chat between matches functionality

### Day 5
  - style every element that still needs styling
  - finish chat functionality
  - implement image sharing in chat
  - seed database with remaining users
