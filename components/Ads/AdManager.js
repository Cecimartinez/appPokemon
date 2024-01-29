import {AdManager as AdMobManager} from 'react-native-admob-native-ads';
import Config from 'react-native-config';
import mobileAds, {BannerAdSize} from 'react-native-google-mobile-ads';
import {Ad} from '../../models/Ad';
import {log} from '../../utils';

 class AdManager {
  start() {
    log('ADS', 'AdManager start');
    if (this.mustShowAds()) {
      mobileAds().initialize();
      this._initRepositories();
    }
  }
  mustShowAds(key) {
    return true;
}

  testAdMod() {
    return AdMobManager.isTestDevice()
}

getBannerSize() {
  return BannerAdSize.FULL_BANNER;
}

getBannerId() {
  return Config.ADS_BANNER_ID;
}

getNativeId() {
  return Config.ADS_NATIVE_ID;
}

getInterstitialId() {
  return Config.AD_INTERSTITIAL;
}

fillAd(key, list, index, adKey = '__AD__') {
  if (this.mustShowAds(key)) {
    list.splice(index, 0, new Ad(adKey));
  }
}



_initStandardRepository(name, adUnitId) {
  AdMobManager.registerRepository({
    name: name,
    adUnitId: adUnitId,
    numOfAds: 3,
    nonPersonalizedAdsOnly: false,
    videoOptions: {
      mute: false,
    },
    expirationPeriod: 3600000, // in milliseconds (optional)
    mediationEnabled: false,
  }).then(result => {
    log('ADS', 'Repo registration ' + name + ' ' + result);
  });
}

_initRepositories() {
  log('ADS', 'Repo registration starts');
  this._initStandardRepository('native_popular_shows', Config.NATIVE_POPULAR_SHOWS_);
  log('ADS', 'Repo registration end');
}

}

export default new AdManager();