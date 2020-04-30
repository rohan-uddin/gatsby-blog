import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1 className={indexStyles.heading}>I'm a designer, writer and technology enthusiast.</h1>

            <h2 className={indexStyles.byline}>My current work intersects the fields of machine learning, finance and data visualization.</h2>
            <p>This blog is a live document. Head on to the <Link to="/essays">Essays</Link> tab to read what I've written. I tend to read widely, and (hopefully) it shows in my writings. I also occasionally design things, and you can view those designs over at my <Link to="/design">design portfolio</Link>.</p>
        </Layout>
    )
}

export default IndexPage