import { Swap } from '@strata-foundation/react';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { CreateButton, ITokenState } from '../components/CreateButton';
import { TokenDisplay } from '../components/TokenDisplay';
import { CandyMachine } from '../components/CandyMachine';
import styles from '../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar"
    }
  }
}

const Home: NextPage = ({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [tokenState, setTokenState] = React.useState<ITokenState>({});

  return (
    <div className={styles.container}>
      <Head>
        <title>IMSO Minter</title>
        <meta name="description" content="IMSO Standard Chimp Minter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <video height="200" width="450" src="/trailer.mov" loop autoPlay muted />
          <CandyMachine />
          <TokenDisplay  {...tokenState} />
          <div style={{ width: "400px" }}>
            {tokenState.tokenBonding && <Swap tokenBondingKey={tokenState.tokenBonding} />}
          </div>
          <Toaster
            position="bottom-left"
            containerStyle={{
              margin: "auto",
              width: "420px",
            }}
          />
      </main>
    </div>
  );
};

export default Home;
