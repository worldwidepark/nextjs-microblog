import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/post'

export async function getStaticPaths() {
  //getStaticPropsを一緒に使わないといけない
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false, //アクセスできなかったときの処理を決める。s
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: { postData },
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article>
        {postData.title}
        <br />
        {postData.date}
        <br />
        {postData.blogContentHTML}
      </article>
    </Layout>
  )
}
