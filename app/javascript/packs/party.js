// party.js

import { screensharMode, setButtonDisplay, streamLayout } from './app_helpers';

export default class Party {
  constructor(session) {
    this.session = session;
    this.watchLink = document.getElementById("watch-mode");
    this.subscribers = document.getElementById('subscribers');
    this.participantCount = document.getElementById("participant-count");
    this.videoPublisher = this.setupVideoPublisher();
    this.clickStatus = 'off';
    this.setupEventHandlers();
    this.connectionCount = 0;
    setButtonDisplay(this.watchLink);
  }

  setupVideoPublisher() {
    return OT.initPublisher('publisher', {
      insertMode: 'append',
      width: "100%",
      height: "100%"
    }, function (error) {
      if (error) {
        console.error('Failed to initialise publisher', error);
      };
    });
  }

}
