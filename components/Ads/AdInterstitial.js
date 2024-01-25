import { useEffect } from 'react';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const AdInterstitial = () => {
 const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-4209556911281829/7296853700';

 const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
   keywords: ['pokemon', 'game'],
 });

 useEffect(() => {
   const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
     interstitial.show();
   });

   interstitial.load();

   return unsubscribe;
 }, []);

 return null;
};

export default AdInterstitial;
