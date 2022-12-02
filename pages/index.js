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

//SSR

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポ年とに渡すためのprops
//     },
//   }
// }

export default function Home(allPostsData) {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私はフルスタックエンジニアです。</p>
      </section>
      <section>
        <div className={styles.grid}>
          <h2>エンジニアのブログ</h2>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
