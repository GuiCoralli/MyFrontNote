import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    /*a tag (>) vai me permitir estilizar e trabalhar apenas na img do peril do usuário*/
    > img {
        width:56px;
        height:56px;
        border-radius: 50%;
    }
     /*a tag (>) vai me permitir trabalhar apenas na div de (textos) do peril do usuário, 
      ficando um abaixo do outro*/
    > div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;    
     /*Não precisamos colocar (>), pois já existe um grau de especificidade de dois níveis. Ex:
                Profile > div > span*/    
     span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
     }

     strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};   
     }
    }
`;

export const Logout = styled.button`
    border:none;
    background:none;

    > svg {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-size: 38px;
    }
`;