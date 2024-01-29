import {RecordingInterface} from './RecordingInterface';
import Config from 'react-native-config';
import {EpochCalculator} from '../uilib/player/EpochCalculator';

export class Ad {
  constructor(slug) {
    this.slug = slug;
  }

  getName() {
    return this.slug;
  }
}

export default Ad;
