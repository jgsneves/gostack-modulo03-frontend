import React, { FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { Form, Title, Repositories } from './styles';
import {FiChevronRight} from 'react-icons/fi';
import {api} from '../../services/api';

interface IRepository {
    full_name: string;
    owner : {
        login: string;
        avatar_url: string;
    };
    description: string;
}

export const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = React.useState<IRepository[]>([]);
    const [newRepo, setNewRepo] = React.useState('');

    async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await api.get<IRepository>(`repos/${newRepo}`);
        const repository = response.data;
        setRepositories([...repositories, repository]);
        setNewRepo("");
    }
    
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>
            <Form onSubmit={handleAddRepository}>
                <input 
                    type="text" 
                    placeholder="Digite o nome do repositório"
                    onChange={e => setNewRepo(e.target.value)}
                    value={newRepo}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map( repo => (
                    <a href="ss" key={repo.full_name}>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                        <div>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Repositories>
        </>
    );
}