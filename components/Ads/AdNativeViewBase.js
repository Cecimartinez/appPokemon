'use strict';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native-ui-lib';
import NativeAdView from 'react-native-admob-native-ads';
import AdManager from './AdManager';
import {Loading} from '../../uilib/player/Loading';
import {log} from '../../utils';

const AdNativeViewBase = ({children, repository}) => {
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
    log('ADS', 'FAILED' + repository, event.error.message);
    setError(true);
    setLoading(false);
    setDebugError(event.error.message);
  };

  const onNativeAdLoaded = event => {
    setLoading(false);
    setLoaded(true);
    setError(false);
    setDebugError('');
    log('ADS', 'RECIEVED ' + repository, 'Unified ad  Recieved', event);
  };

  if (AdManager.mustShowAds(repository)) {
    return (
      <View>
        {!error && (
          <NativeAdView
            ref={nativeAdViewRef}
            repository={repository}
            onNativeAdLoaded={onNativeAdLoaded}
            onAdFailedToLoad={onAdFailedToLoad}>
            {loading && <Loading />}
            {children}
          </NativeAdView>
        )}
      </View>
    );
  } else {
    return null;
  }
};

export default AdNativeViewBase;
