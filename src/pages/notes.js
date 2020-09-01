import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>Hey!</h1>
            <p>You've stumbled upon my braindump. Here you'll find small notes on the media I consume.</p>
            <p>This is different from the Essays, which are structured writing projects. These notes are more like breadcrumbs - ideas that may lead somewhere, or maybe not.</p>
        </Layout>
    )
}

export default AboutPage

