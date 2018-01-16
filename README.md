<h1 align="center"> BlindDate </h1> <br>
<h4 align="center">
    BlindDate is a mobile app, written in React Native with Ruby on Rails as backend, aimed at bringing people together by connecting over personal descriptions rather than images.
</h4>
<p align="center">
<a href="https://andrewopes789.github.io/blinddate-website/">
    <img alt="BlindDate" title="BlindDate" src="https://media.giphy.com/media/3o6nUQfhZCYSKGqxc4/giphy.gif" >
</a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Swipe Page](#swipe-page)
- [Chat](#chat)



## Introduction

In [BlindDate](https://andrewopes789.github.io/blinddate-website/) 
All modern connection apps require that the image of an individual has to be front and center for your decision on whether or not to connect with that certain someone. We wanted to remove the stigma of people feeling they were being unfairly judged by an image before you learn anything about them.

Users sign up for an account, fill out their profile in order to personalize their experience. Users will be shown other profiles upon which they can swipe right or left (i.e. yes or no). Upon rejecting someone, an image will appear displaying the rejected user. Upon mutual acceptance of both parties, chat functionality will be made available. If both parties consent to sharing images, photo sharing capabilities will be made available.  


## Features

* Create profile
* Answer questions to flesh out profile
* Swipe through profiles of people that match the user's preferences
* Upon successful connection, the user will be allowed to chat with his/her match
* Pictures can be revealed if both the user and their match consent to it


## Swipe Page

<p align="center">
  <img src="https://media.giphy.com/media/l4EpiIF28KLNaHtni/giphy.gif">
</p>

Once your profile has been created, you will be taken to the swipes page. Here you can read about about the personality of someone else, scrolling down to discover more information. Here they can swipe yes or no, at which point a new profile will appear, repeating the process. From this page they can access their profile page, if they wish to edit their profile, and they can access the chat page, where they see all their matches listed.

In order to make sure profiles respond to the correction action of a user (e.g. rejection or acceptance), we created four joins tables in Rails, in order to track where a 'User' would exist as soon as a profile has been created: 'Eligible', 'Potential', 'Match', and 'Rejected'. Then in our React Native JavasScript, depending on a like or dislike, we would sort them accordingly.

```javascript
  handleLike() {
    if (this.props.user.potentials_by_id.includes(this.props.currentUser.id)) {
      this.props.createMatch(this.props.user.id);
    } else if (!this.props.user.rejects_by_id.includes(this.props.currentUser.id)) {
      this.props.createPotential(this.props.user.id);
    }
    this.props.deleteEligible(this.props.user.id).then(
      () => this.props.getUser(this.props.currentUser.eligibles_by_id[0])
    );
  }

  handleDislike() {
    if (this.props.user.potentials_by_id.includes(this.props.currentUser.id)) {
      this.props.createReject(this.props.user.id);
    }
    this.props.deleteEligible(this.props.user.id).then(
      () => this.props.getUser(this.props.currentUser.eligibles_by_id[0])
    );
  }
  ```
   
## Chat

<p align="center">
  <img src="https://media.giphy.com/media/l4Ep8TxCFFwWAcSVW/giphy.gif">
</p>

A list of all your matches are available on the matches page. Tapping on the name of the person will take you to the specific chat page between you and said individual, where you are free to chat to one another. Messages are saved to the database, and displayed in reverse order in order to keep recent messages at the bottom. 

```javascript
  componentDidMount() {
    let arr = Object.values(this.props.messages);
    let empty = [];
    arr.map(message => {
      if (this.props.navigation.state.params.user.match_first_name === message.recipient_first_name
      && message.sender_first_name === this.props.currentUser.first_name) {
        empty.push({_id: message.id, text: message.body, createdAt: message.created_at,
          user: { _id: this.props.currentUser.id,
            name: this.props.currentUser.first_name} });
      } else if (this.props.navigation.state.params.user.match_first_name === message.sender_first_name
      && message.recipient_first_name === this.props.currentUser.first_name) {
        empty.push({_id: message.id, text: message.body, createdAt: message.created_at,
          user: { _id: this.props.navigation.state.params.user.match_id,
            name: message.sender_first_name} });
      }
    });

    this.setState({mess: empty.reverse()});
  }
  ```



