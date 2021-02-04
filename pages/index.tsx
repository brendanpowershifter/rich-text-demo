import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Document } from '@contentful/rich-text-types'
import '../styles/Home.module.css'
import RichText from '@components/RichText'
import { EMBEDDED_ENTRIES } from '@components/EmbeddedEntriesFactory/EmbeddedEntriesFactory'
import { getContent } from './api/contentful/getContent'

interface IndexProps {
  richText?: Document
}

export const getStaticProps: GetStaticProps = async () => {
  const richText = await getContent('') // TODO: Add the identifier field value here
  return {
    props: {
      richText,
    },
    revalidate: 1,
  }
}

const Home: React.FC<IndexProps> = ({ richText }) => {
  // TODO: add any extra props for components that are in EMBEDDDED_ENTRIES here.
  // TODO: Use the EMBEDDED_ENTRIES keys as the keys for the extra prop objects.
  const extraProps = {
    [EMBEDDED_ENTRIES.foo]: {
      list: ['Foo', 'Bar', 'Baz'],
    },
  }
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to
          <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing
          <code className="code">pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
        {richText && <RichText content={richText} externalProps={extraProps} />}
      </main>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}

export default Home
