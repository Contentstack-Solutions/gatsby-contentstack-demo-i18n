import React from 'react'
import { Link, useIntl } from 'gatsby-plugin-intl'
import LanguageSwitcher from '../components/switcher'

const Header = ({ siteTitle }) => {
  const intl = useIntl()

  return (
    <div
      className="header"
      style={{
        padding: '8px',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0.55rem 2.0875rem',
        }}
      >
        <div className="display-flex">
          <h1 style={{ margin: 0 }}>
            <Link to="/" className="float-left">
              {intl.formatMessage({ id: 'menu.home' })}
            </Link>
          </h1>
          <h1>
            <Link to="/blogs" className="float-left margin-left">
              {intl.formatMessage({ id: 'menu.blogs' })}
            </Link>
          </h1>
          <LanguageSwitcher className="switcher" />
        </div>
      </div>
    </div>
  )
}

export default Header