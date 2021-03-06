import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import ApplicationList from '../components/ApplicationList';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import { IDapplets, IData } from '../interfaces/redux.state';
import Layout from '../layouts/Layout';
import { setRequestStartNumber, setDapplets, setTags, setLoading } from '../redux/actions';
import { wrapper } from '../redux/store';
import { notification } from '../utils/notification';
import { scrollStatus } from '../utils/scroll-status';

interface HomeProps {
  dapplets: IDapplets[];
  menuOpen: boolean;
  settingOpen: boolean;
  requestStartNumber: number;
  setDapplets: (dapplets: IDapplets[]) => void;
  setLoading: (state: boolean) => void;
  setRequestStartNumber: (start: number) => void;
}

function Home({ dapplets, setDapplets, requestStartNumber, setLoading, setRequestStartNumber, menuOpen, settingOpen }: HomeProps): React.ReactElement<HomeProps> {
  const createRef = useRef<HTMLElement>(null);
  const [blockedRequest, setBlockedRequest] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  });

  function onScroll() {
    const scroll = scrollStatus(createRef);

    // При поиске элементов может быть мало и эта строка проверяет высоту экрана 
    // Если она равняется ширине экрана, то есть 1080 например, запрос посылать не нужно
    const innerHeight = scroll !== window.innerHeight;

    if (blockedRequest === false && innerHeight) {
      if (scroll === 0 && requestStartNumber <= 200) {
        // Блокируем возможность отпавлять новый запрос вызывать
        // пока не выполнится старый, чтобы не отпаврять много запросов
        setBlockedRequest(true);
        getData();
      }
    }
  }

  async function getData() {
    setLoading(true);

    const PARAMS = { params: { start: requestStartNumber } };
    const { data } = await axios(API_URL.dapplets, PARAMS);

    if (data !== null) {
      notification({ content: 'New Apps Received', appearance: 'success' });
      const { data: newData } = data;
      const newItems = [...dapplets, ...newData];
      onSuccess(newItems);
      return false;
    }

    onError();
  }

  function onError() {
    notification({ content: 'An error has occurred! New request!', appearance: 'error' });
    setLoading(false);
    getData();
  }

  function onSuccess(newItems: IDapplets[]): void {
    setDapplets(newItems);
    setRequestStartNumber(newItems.length);
    setLoading(false);
    setBlockedRequest(false);
  }

  return (
    <main ref={createRef}>
      <Layout menuOpen={menuOpen} settingOpen={settingOpen}>
        <ApplicationList />
      </Layout>
    </main>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const getTags = await axios.get(API_URL.tags);
    const getDapplets = await axios.get(API_URL.dapplets);
    const [{ data: dataTags }, { data: dataDapplets }] = await axios.all([getTags, getDapplets]);

    const { data: tags } = dataTags;
    const { data: dapplets } = dataDapplets;

    store.dispatch({ type: setTags.toString(), payload: tags });
    store.dispatch({ type: setDapplets.toString(), payload: dapplets });
    store.dispatch({ type: setRequestStartNumber.toString(), payload: dapplets.length });

    return {
      props: {}
    };
  } catch (error) {
    console.error(error);
    store.dispatch({ type: setTags.toString(), payload: [] });
    store.dispatch({ type: setDapplets.toString(), payload: [] });
  }
});

const mapStateToProps = ({ dapplets, requestStartNumber, menuOpen, settingOpen }: IData) => ({ dapplets, requestStartNumber, menuOpen, settingOpen });

export default connect(mapStateToProps, { setDapplets, setLoading, setRequestStartNumber })(Home);