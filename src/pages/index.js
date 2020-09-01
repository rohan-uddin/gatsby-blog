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
            <br/>

            <h3>About</h3>
            <p>I'm currently studying Computer Science and Business in Waterloo, ON.</p>
            <p>I'm on a quest to become part of that "small class of scholars who are encyclopedic, insightful and non-dull". For me this means reading widely, being rational and taking risks.</p>

            <h3>Work</h3>
            <p>My current work focuses on the intersection of modern analytical technologies and capital markets.</p>
            <p>I'm endlessly fascinated by the role capital allocators play in the progression of society, and how they're an integral part of the technology ecosystem.</p>
            <p>Currently I'm learning the minutiae of financial modelling to understand transactions in the technology space. My goal is to build a framework for understanding capital markets and be able to synthesize information in it. I'm particularly inspired by the work of <a href="https://andymatuschak.org/">Andy Matuschak</a> in this regard.</p>
            <p>Previously I worked on the Risk Analytics team at <a href="https://www.omerscapitalmarkets.com/">OMERS Capital Markets</a> where I helped the Risk Management team visualize Risk Metrics by building interactive dashboards for them.</p>
            <p>I've also worked in the education space, running marketing for an <a href="https://www.facebook.com/taleemsabkeliye">education NGO</a> in Pakistan.</p>

            <h3>Consulting</h3>
            <p>Along with three other amazing partners I run a tiny consulting firm called <a href="https://darkhorseconsultants.com/">Dark Horse</a>. We work directly with founders and product leaders and help them in marketing, sales, operational strategy and financial due-diligence. We currently have clients in Vancouver and Seattle.</p>

            <h3>Writing</h3>
            <p>I currently write occasional essays <Link to="/essays">here</Link>. I focus on business, but some of them are more philosophical/theoretical as well. Any interesting topic is fair game.</p>

            <h3>Projects</h3>
            <p>I occasionally build cool stuff as a way to experiment with new technologies. You can view some of these experiments <Link to="/projects">here</Link>.</p>

            <hr></hr>
            <p>You can follow me on <a href="https://twitter.com/m_rohan_uddin">Twitter</a> and connect with me on <a href="https://www.linkedin.com/in/rohan-uddin/">LinkedIn</a>.</p>
        </Layout>
    )
}

export default IndexPage