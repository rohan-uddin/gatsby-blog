import React from 'react'
import Link from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="OOPS"/>
            <h1>Oops. You've reached the end of the line.</h1>
            <p>Now stare into the abyss and scream into the pitiless void.</p>
            <Link to="/">Towards Civilization</Link>
        </Layout>
    )
}

export default NotFound