import React, { useEffect, useRef } from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const AdBanner = () => {
 const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER 
 : 'ca-app-pub-4209556911281829/6653021725';

 const adRef = useRef(null);

 useEffect(() => {
    if (adRef.current) {
      adRef.current.loadAd();
    }
 }, []);

 return (
    <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.BANNER}
      ref={adRef}
    />
 );
};

export default AdBanner;
