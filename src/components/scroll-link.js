import { Link, scroller } from 'react-scroll';


export const linkStyle = {
    textDecoration: "underline",
    cursor: "pointer",
    color: "#12a1e3",
}
export const scrollOptions = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active"
}
export default function ScrollLink({ children, ...rest }) {
    return <Link style={linkStyle} {...scrollOptions} {...rest}>{children}</Link>
}