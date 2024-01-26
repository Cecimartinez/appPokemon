import { AdManager } from 'react-native-admob-native-ads';

const AdManagerClass = {
 loadBannerAd() {
    return AdManager.instance.requestAd({
      adUnitId: 'ca-app-pub-4209556911281829/6653021725',
      type: 'banner',
    });
 },

 loadInterstitialAd() {
    return AdManager.instance.requestAd({
      adUnitId: 'ca-app-pub-4209556911281829/7296853700',
      type: 'interstitial',
    });
 },
};

export default AdManagerClass;
