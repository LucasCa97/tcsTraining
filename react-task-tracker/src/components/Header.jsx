import { ReactPropTypes } from "react"

const Header = ({ title }) => {
  return (
    <header>
        <h1 style={{color: 'red'}}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.ReactPropTypes = {
    title: ReactPropTypes.string.isRequired
}

export default Header
