// screenshare.js

import { screenshareMode } from './app_helpers';

export default class Screenshare {
  constructor(session, name) {
    this.session = session;
    this.name = name;
    this.watchLink = document.getElementById("watch-mode");
    this.clickStatus = 'on';
  }

  toggle() {
    if (this.name === moderator_env_name) {
      this.shareScreen();
    } else {
      this.subscribe();
    }
  }

  shareScreen() {
    this.setupPublisher();
    this.setupAudioPublisher();
    this.setupClickStatus();
  }

  setupClickStatus() {
    // screen share mode off if clicked off
    // Set click status
    let self = this;
    this.watchLink.addEventListener('click', function(event) {
      event.preventDefault();
      if(self.clickStatus == 'on') {
        self.clickStatus = 'off';
        screenshareMode(self.session, 'off');
      };
    });
  }



}
