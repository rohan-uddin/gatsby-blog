import React from 'react'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'
import blogStyles from './essays.module.scss'
import Head from '../components/head'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: {
            fields: publishedDate,
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate (formatString: "ddd, MMMM Do YYYY")
              imageThumbnail {
                title
                file {
                  url
                }
              }
              description {
                description
              }
            }
          }
        }
      }
    `)
    return (
        <Layout>
            <Head title="Essays"/>
            <h1>Essays</h1>
            <p>The latest essays.</p>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                      <li className={blogStyles.post}>
                        <Link to={`/essays/${edge.node.slug}`}>

                        <div className={blogStyles.mainRow}>

                          <div className={blogStyles.imgContainer}>
                            <img src={edge.node.imageThumbnail.file.url} alt={edge.node.imageThumbnail.title}></img>
                          </div>

                          <div className={blogStyles.content}>
                            <h2>{edge.node.title}</h2>
                            <br></br>
                            <p className={blogStyles.desc}>{edge.node.description.description}</p>
                          </div>
                          
                        </div>

                        </Link>
                      </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage