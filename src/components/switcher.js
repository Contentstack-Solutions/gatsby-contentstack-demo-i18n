import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import { locales } from '../i18n/languages'

const LanguageSwitcher = props => {
  const languageClicked = (e, language) => {
    e.preventDefault()
    changeLocale(language)
  }

  return (
    <div className={props.className}>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={e => languageClicked(e, language)}
              style={{
                color: currentLocale === language ? `yellow` : `white`,
                margin: 10,
              }}
              href="/"
            >
              {locales[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default LanguageSwitcher