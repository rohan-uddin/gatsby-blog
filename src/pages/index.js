import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>My name is Rohan Uddin, a designer, developer and writer based in Waterloo, Ontario.</h2>
            <p>Need a helping hand in your fledgling startup? <Link to="/contact">Contact me!</Link></p>
        </Layout>
    )
}

export default IndexPage