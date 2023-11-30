import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from "../../hooks/auth";

import { Container , Profile, Logout } from "./styles";

import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
    const { signOut, user } = useAuth();

    const  avatarURL = user.avatar ? 
    `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src={avatarURL} //pega de forma dinamica o avatar do usuário
                    alt={user.name} //pega de forma dinamica o nome do usuário
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div> 
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine>

                </RiShutDownLine>
            </Logout>

        </Container>
    );
}
