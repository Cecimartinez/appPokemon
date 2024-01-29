import {upperCase} from 'lodash';
import Config from 'react-native-config';

export const log = (key, message, type = 'log') => {
  if (Config.LOG_KEYWORDS.includes(key) || Config.LOG_KEYWORDS.length === 0) {
    switch (type) {
      case 'log':
        console.log(upperCase(key) + ' | ' + message);
        break;
      case 'warning':
        console.warn(upperCase(key) + ' | ' + message);
        break;
      case 'error':
        console.error(upperCase(key) + ' | ' + message);
        break;
    }
  }
};

export const formatDate = value => {
  if (value !== undefined && value !== null) {
    return value.toLocaleDateString();
  } else {
    return '';
  }
};

export const formatTime = (value, options) => {
  if (value !== undefined && value !== null) {
    return value.toLocaleTimeString([], options);
  } else {
    return '';
  }
};

export const formatDatetime = value => {
  if (value !== undefined && value !== null) {
    return value.toLocaleString();
  } else {
    return '';
  }
};
