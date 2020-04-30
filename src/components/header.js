import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/essays" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>ESSAYS</Link>
                    </li>
                    <li>
                        <Link to="/design" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>DESIGNS</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>ABOUT</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={headerStyles.mainLogo}>
                <Link to="/" className={headerStyles.title}>
                    {/* site title goes here */}
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
        </header>
    )
}

export default Header