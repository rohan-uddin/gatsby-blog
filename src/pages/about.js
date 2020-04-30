import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
            <h1>Hey!</h1>
            <p>I'm currently studying Computer Science and Business in Waterloo, ON.</p>
            <p>I'm on a quest to become part of that "small class of scholars who are encyclopedic, insightful and non-dull". For me this means reading widely, being rational and taking risks.</p>
            <h3>Right now I am:</h3>
            <ul>
                <li>Working on the Risk Analytics team at <a href="https://www.omers.com/About-OMERS">OMERS</a>.</li>
                <li>Writing weekly essays <Link to="/essays">here</Link>.</li>
                <li>Exploring the possibilities of connected notes and thoughts, inspired by the work of <a href="https://www.amazon.ca/How-Take-Smart-Notes-Nonfiction-ebook/dp/B06WVYW33Y">Sonke Ahrens</a> and <a href="https://andymatuschak.org/">Andy Matuschak</a>.</li>
            </ul>
            <p>You can follow me on <a href="https://twitter.com/m_rohan_uddin">Twitter</a> and connect with me on <a href="https://www.linkedin.com/in/rohan-uddin/">LinkedIn</a>.</p>
        </Layout>
    )
}

export default AboutPage

