'use strict';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import NativeAdView from 'react-native-admob-native-ads';

const AdNativeViewBase = ({ children }) => {
  const nativeAdViewRef = React.useRef();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [debugError, setDebugError] = useState();

  useEffect(() => {
    setLoading(true);
    setLoaded(false);
    setError(false);
    nativeAdViewRef.current?.loadAd();
  }, []);


  const onAdFailedToLoad = event => {
    const errorMessage = event.error ? event.error.message : 'Unknown error';
    setError(true);
    setLoading(false);
    setDebugError(errorMessage);
  };

  const onNativeAdLoaded = () => {
    setLoading(false);
    setLoaded(true);
    setError(false);
    setDebugError('');
  };

  return (
    <View>
      {!error && (
        <NativeAdView
          ref={nativeAdViewRef}
      
          onNativeAdLoaded={onNativeAdLoaded}
          onAdFailedToLoad={onAdFailedToLoad}>
          {children}
        </NativeAdView>
      )}
    </View>
  );
};

export default AdNativeViewBase;
