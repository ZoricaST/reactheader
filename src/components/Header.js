import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
return (
        <header>
        <h1 style = {headingStyle}>{title}</h1>
        </header>
 )
}

Header.defaultProps = {
title:'Hallo',
 }

Header.propTypes = {
title:PropTypes.string,
}
const headingStyle = {
    color:'red',
    backgroundColor:'black'}
  
export default Header