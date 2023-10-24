import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <nav
        style={{
          height: '60px',
          outline: '1px solid red',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ width: '1000px', outline:'1px solid yellow' }}>
          <button>
            <Image
              src='https://nile.blob.core.windows.net/images/assets/images/icon/ico_logo.svg'
              alt={''}
              width={85}
              height={24}
            />
          </button>
          <button>Dao</button>
          <button>NEITH Station</button>
          <button>MarketPlace</button>
          <button>NFTFi</button>
          <button>Projects</button>
          <button>Community</button>
          <button>Tokens</button>
        </div>
      </nav>
    </>
  );
}
