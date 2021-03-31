import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Form, Title, Repositories } from './styles';
import {FiChevronRight} from 'react-icons/fi';

export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>
            <Form>
                <input type="text" placeholder="Digite o nome do repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="/blabla">
                    <div>
                        <strong>João Gabriel</strong>
                        <p>Repo bla bla</p>
                    </div>
                <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    );
}