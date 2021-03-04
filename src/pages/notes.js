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
            <p>This is different from the Essays, which are structured writing projects. This section is inspired by the work of Dr. Cosma Shalizi on <a href="http://bactra.org/notebooks/">bactra.org</a>.</p>
        </Layout>
    )
}

export default AboutPage

