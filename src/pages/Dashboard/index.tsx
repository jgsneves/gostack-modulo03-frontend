import React, { FormEvent } from 'react';
import logoImg from '../../assets/logo.svg';
import { Form, Title, Repositories, Error } from './styles';
import {FiChevronRight} from 'react-icons/fi';
import {api} from '../../services/api';
import { Link } from 'react-router-dom';

interface IRepository {
    full_name: string;
    owner : {
        login: string;
        avatar_url: string;
    };
    description: string;
}

export const Dashboard: React.FC = () => {
    const [repositories, setRepositories] = React.useState<IRepository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GitHubExplorer: repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        } else return [];
    });
    const [inputError, setInputError] = React.useState('');
    const [newRepo, setNewRepo] = React.useState('');

    React.useEffect(() => {
        localStorage.setItem('@GitHubExplorer: repositories', JSON.stringify(repositories))
    }, [repositories]);

    async function handleAddRepository(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!newRepo) {
            setInputError("Digite o autor/nome do respositório");
            return;
        }

        try {
            const response = await api.get<IRepository>(`repos/${newRepo}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepo("");
            setInputError("");
        } catch(error) {
            setInputError("Erro na busca por este repositório");
        }
    }
    
    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input 
                    type="text" 
                    placeholder="Digite o nome do repositório"
                    onChange={e => setNewRepo(e.target.value)}
                    value={newRepo}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Error>
                {inputError ? inputError : null}
            </Error>

            <Repositories>
                {repositories.map( repo => (
                    <Link to={`/repositories/${repo.full_name}`} key={repo.full_name}>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                        <div>
                            <strong>{repo.full_name}</strong>
                            <p>{repo.description}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </Link>
                ))}
            </Repositories>
        </>
    );
}