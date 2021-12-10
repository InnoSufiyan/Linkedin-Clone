import React from 'react'
import styled from 'styled-components'

function Login(props) {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img src="/images/login-logo.svg"/>
                </a>
                <div>
                    <Join>
                        Join Now
                    </Join>
                </div>
            </Nav>
        </Container>
    )
}

export default Login

const Container = styled.div`

`
const Nav = styled.div`
    max-width: 1128px;
    margin: auto;;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content : space-between;
    flex-wrap: no-wrap;


    & > a {                     //it means anything inside a tag
        width: 135px;
        height: 34px;

        @media(max-width: 768px) {
            padding: 0 5px;
        }
    }   


`

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 16px;

    &:hover {
        background-color: rgba(0,0,0,0.08);
        color: rgba(0,0,0,0.9);
        text-decoration: none;
    }
`