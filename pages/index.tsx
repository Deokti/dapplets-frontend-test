import React, { useEffect } from 'react';
import { Dapplets } from '../components/Dapplets';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import { IDapplets } from '../interfaces/redux.state';
import Layout from '../layouts/Layout';
import { setDapplets, setTags } from '../redux/actions';
import { wrapper } from '../redux/store';

export interface HomeProps {
  dapplets: IDapplets[]
}

function Home({ dapplets }: HomeProps): React.ReactElement<HomeProps> {

  return (
    <Layout>
      <Dapplets dapplets={dapplets} />
    </Layout>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const getTags = await axios.get(API_URL.tags);
    const getDapplets = await axios.get(API_URL.dapplets);
    const [{ data: data1 }, { data: data2 }] = await axios.all([getTags, getDapplets]);

    const { data: tags } = data1;
    const { data: dapplets } = data2;

    store.dispatch({ type: setTags.toString(), payload: tags });
    store.dispatch({ type: setDapplets.toString(), payload: dapplets });

    return {
      props: {
        dapplets
      }
    };
  } catch (error) {
    console.error(error);
    store.dispatch({ type: setTags.toString(), payload: [] });
    store.dispatch({ type: setDapplets.toString(), payload: [] });
  }
});

export default Home;