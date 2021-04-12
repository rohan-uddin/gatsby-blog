import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1 className={indexStyles.heading}>I'm a writer, designer and technology enthusiast.</h1>
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

            <h3>Writing</h3>
            <p>I currently write occasional personal essays <Link to="/essays">here</Link>. Any interesting topic is fair game.</p>
            <p>This year I started a publication called <a href="https://obsidian.substack.com/p/introducing-obsidian">Obsidian</a> with my partner-in-crime Allahyar Rehman. We cover topics in business, equity markets and other tangential topics that pique our interest. I'm very excited to be a part of this, and even though there's a lot of stuff that needs to be done, I'm up for the challenge.</p>

            <h3>Consulting</h3>
            <p>In 2020, along with three other amazing partners I was part of a tiny consulting group called <a href="https://darkhorseconsultants.com/">Dark Horse</a>. We worked directly with founders and product leaders and helped them in marketing, sales, operational strategy and financial due-diligence. Our clients were based in Vancouver and Seattle.</p>

            

            <h3>Projects</h3>
            <p>I occasionally build cool stuff as a way to experiment with new technologies. You can view some of these experiments <a href="https://github.com/rohan-uddin?tab=repositories">here</a>.</p>

            <hr></hr>
            <p>You can follow me on <a href="https://twitter.com/m_rohan_uddin">Twitter</a> and connect with me on <a href="https://www.linkedin.com/in/rohan-uddin/">LinkedIn</a>.</p>
        </Layout>
    )
}

export default IndexPage