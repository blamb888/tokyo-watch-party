const emoji = require('node-emoji');

export function screensharMode(session, mode) {
  if (mode == 'on'){
    window.location = '/screenshar?name=' + name;
    session.signal({
      type: 'screenshare',
      data: 'on'
    });
  } else if (mode == 'off') {
    window.location = '/part?name=' + name;
    session.signal({
      type: 'screenshare',
      data: 'off'
    });
  };
};

export function setButtonDisplay(element) {
  if (name == moderator_env_name) {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  };
};
