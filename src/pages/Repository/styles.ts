import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        & > svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.main`
    display: grid;
    grid-template-areas: 
        "photo title title" 
        "photo description description" 
        "field field field"
    ;
    width: 400px;
    margin-top: 52px;

    & > img {
        grid-area: photo;
        margin: auto;
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    & > h1 {
        grid-area: title;
        font-size: 36px;
        color: #3d3d4d;
        text-align: right;
    }

    & > p {
        grid-area: description;
        font-size: 18px;
        color: #737380;
        text-align: right;
    }

    & > ul {
        grid-area: field;
        display: flex;
        list-style: none;
        margin-top: 16px;
        justify-content: space-between;
    }

    & ul > li > h2 {
        color: #3d3d4d;
    }

    & ul > li > p {
        color: #6c6c80;
    }
    
`;

export const Issues = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }

        &:hover {
            transform: translateX(18px);
        }

        & + a {
            margin-top: 16px;
        }
    }
`;