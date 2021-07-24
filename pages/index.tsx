import { GetStaticProps } from 'next';
import React from 'react';
import { compose } from 'redux';
import { API_URL } from '../config/API_URL';
import { axios } from '../config/axios';
import { withLayout } from '../HOC/withLayout';

function Home(): React.ReactElement {

  return (
    <div>
      контента
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

export default compose(withLayout)(Home);