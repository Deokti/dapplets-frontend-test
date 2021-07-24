import { GetStaticProps } from 'next';
import React from 'react';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import { withLayout } from '../HOC/withLayout';

function Home(): React.ReactElement {

  return (
    <div>
      Контент
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await axios(API_URL.tags);
    const { data: tags } = data;
    return {
      props: {
        tags,
      }
    };
  } catch (error) {
    console.error(error);
  }
};

export default withLayout(Home);