import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import utilStyle from '../styles/utils.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'
import { getPostData } from '../lib/post'

//SSG
export async function getStaticProps() {
  const allPostsData = getPostData()
  return {
    props: {
      allPostsData, //何でコンマ?
    },
  }
}

export default function Home(allPostsData) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです。</p>
      </section>
      <section>
        <div className={styles.grid}>
          <h2>エンジニアのブログ</h2>
          <article>
            <Link href="/"></Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつかな。
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="fvicon.ico" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつかな。
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="fvicon.ico" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>
                SSGとSSRの使い分けの場面はいつかな。
              </a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  )
}
