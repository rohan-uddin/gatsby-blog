import React from 'react'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import blogPageStyles from './blog.module.scss'

export const query = graphql`
    query ( $slug: String! ) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate (formatString: "ddd, MMMM Do YYYY")
            body {
                json
            }
        }
    }

`

const Blog = (props) => {
    const options = {
        // for rendering images by odifying how it's rendered
        renderNode: {
            "embedded-asset-block": (node) => {
                if (node.data.target.fields) {
                    const alt = node.data.target.fields.title["en-US"]
                    const url = node.data.target.fields.file["en-US"].url
                    return <img alt={alt} src={url} style={{display: 'block', marginLeft: 'auto', marginRight:'auto'}}/>
                }
                else {
                    console.log(node.data.target.fields)
                    return <img alt="Image unknown." src="" style={{display: 'block', marginLeft: 'auto', marginRight:'auto'}}/>
                }  
            },
            "blockquote": (node) => {
                const stuff = node.content[0].content[0].value
                // console.log(stuff)
                return <p style={{display: 'block', color: '#4B0A0A', fontFamily:'Sentinel Light Italic', padding: '0 30px', fontSize:'2rem', lineHeight: 'normal'}}>{stuff}</p>
            }
        }
    }

    // the actual layout is here
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1 className={blogPageStyles.mainHeading}>{props.data.contentfulBlogPost.title}</h1>
            <p className={blogPageStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
            <hr/>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            <p className={blogPageStyles.date}><Link to="/essays">More essays<span>→</span></Link></p>
        </Layout>
    )
}

export default Blog