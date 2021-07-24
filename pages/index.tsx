import React from 'react';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import Layout from '../layouts/Layout';
import { setTags } from '../redux/actions';
import { wrapper } from '../redux/store';

function Home(): React.ReactElement {

  return (
    <Layout>
      Контент
    </Layout>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const { data } = await axios(API_URL.tags);
    const { data: tags } = data;
    store.dispatch({ type: setTags.toString(), payload: tags });

    return { props: {} };
  } catch (error) {
    console.error(error);
    store.dispatch({ type: setTags.toString(), payload: [] });
  }
});

export default Home;