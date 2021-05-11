import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiChevronsLeft, FiChevronRight} from 'react-icons/fi';
import {Header, Issues, RepositoryInfo} from './styles';
import { api } from '../../services/api';

interface RepositoryParams {
    repository: string;
}

interface IRepository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner : {
        login: string;
        avatar_url: string;
    };
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}

export const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
    const [repository, setRepository] = useState<IRepository | null>(null);
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        api.get(`repos/${params.repository}`).then(res => setRepository(res.data));
        api.get(`repos/${params.repository}/issues`).then(res => setIssues(res.data));
    }, [params.repository]);

    return(
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer"/>
                <Link to='/'>
                    <FiChevronsLeft size={16}/>
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <img src={repository?.owner.avatar_url} alt={repository?.owner.login}/>
                <h1>{repository?.full_name}</h1>
                <p>{repository?.description}</p>
                <ul>
                    <li>
                        <h2>{repository?.stargazers_count}</h2>
                        <p>star</p>
                    </li>
                    <li>
                        <h2>{repository?.forks_count}</h2>
                        <p>fork</p>
                    </li>
                    <li>
                        <h2>{repository?.open_issues_count}</h2>
                        <p>issues</p>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                {issues.map(issue => (
                    <a href={issue.html_url} key={issue.id}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        </>
    );
}