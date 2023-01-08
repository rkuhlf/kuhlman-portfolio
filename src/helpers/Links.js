

export function StyledLink(props) {
    return <a
                className="white-text"
                href={props.href}
                target="_blank"
            >
                {props.children}
            </a> 
}