import styled from 'styled-components';

export const StyledContact = styled.footer`
    background-color: ${({ theme }) => theme.color.darkGreen};
    color: ${({ theme }) => theme.color.darkOrange};
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-2px);
    a {
        color: inherit;
        text-decoration: none;
    }
    .question {
        transform: translate(-80%, -130%);
        font-size: 1rem;
        ${({ theme }) => theme.device.tablet} {
            transform: translate(-140%, -200%);
            font-size: 1.5rem;
        }
        ${({ theme }) => theme.device.laptop} {
            transform: translate(-180%, -200%);
        }
    }
    .email {
        color: white;
        font-size: 1.4rem;
        padding-bottom: 5px;
        border-bottom: 1px solid white;
        transform: translateY(-80%);
        transition: all 0.3s ease;
        &:hover {
            color: ${({ theme }) => theme.color.darkOrange};
            border-color: ${({ theme }) => theme.color.darkOrange};
        }
        ${({ theme }) => theme.device.tablet} {
            font-size: 3.5rem;
        }
    }
    .social-media {
        position: absolute;
        bottom: 10vh;
        right: 20vw;
        ${({ theme }) => theme.device.tablet} {
            right: 12vw;
        }
        ul {
            padding: 0;
            li {
                list-style: none;
                transition: all 0.3s ease;
                &:hover {
                    transform: scale(1.15);
                }
                .link {
                    font-size: 1rem;
                    line-height: 1.6;
                    ${({ theme }) => theme.device.tablet} {
                        font-size: 1.8rem;
                    }
                }
            }
        }
    }
    .credits,
    .photography-credits {
        position: absolute;
        z-index: 9999;
        bottom: 7vh;
        width: 100%;
        text-align: center;
        color: white;
        line-height: 1.4;
        font-size: 0.8rem;
        ${({ theme }) => theme.device.lgPhone} {
            bottom: 5vh;
        }
        ${({ theme }) => theme.device.tablet} {
            width: auto;
            left: 5vw;
            bottom: 2vh;
        }
        a {
            font-style: italic;
        }
    }
    .photography-credits {
        bottom: 2vh;
        ${({ theme }) => theme.device.tablet} {
            left: auto;
            right: 5vw;
        }
    }
`;
