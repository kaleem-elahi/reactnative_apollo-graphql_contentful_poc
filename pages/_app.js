import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Loader from './components/Loader';
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../styles/globals.css'
import { SafeAreaView } from 'react-native-web';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/2ksp2ht52729',
  cache,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer vi4ywkeZXpeRhzPj7Bo1ve4XQ-jSI96dHUXI6ffmXaM`,
  },
});



function MyApp({ Component, pageProps }) {

  const [loadingCache, setLoadingCache] = useState(true);
  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return <Loader />;
  }


console.log("client:", client)
  return <ApolloProvider client={client}>
          <SafeAreaView style={{flex: 1}}>

  <Component {...pageProps} />
</SafeAreaView>
  </ApolloProvider>
}

export default MyApp
