import React from 'react';
import ApplicationList from '../components/ApplicationList';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import Layout from '../layouts/Layout';
import { setDapplets, setTags } from '../redux/actions';
import { wrapper } from '../redux/store';

function Home(): React.ReactElement {

  return (
    <Layout>
      <ApplicationList />
    </Layout>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const getTags = await axios.get(API_URL.tags);
    const getDapplets = await axios.get(API_URL.dapplets);
    const [{ data: dataTags }, { data: dataDapplets }] = await axios.all([getTags, getDapplets]);

    const { data: tags } = dataTags;
    // const { data: dapplets } = dataDapplets;

    store.dispatch({ type: setTags.toString(), payload: tags });
    // store.dispatch({ type: setDapplets.toString(), payload: dapplets });

    return {
      props: {}
    };
  } catch (error) {
    console.error(error);
    store.dispatch({ type: setTags.toString(), payload: [] });
    store.dispatch({ type: setDapplets.toString(), payload: [] });
  }
});

export default Home;