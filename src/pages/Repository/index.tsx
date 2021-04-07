import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiChevronsLeft, FiChevronRight} from 'react-icons/fi';
import {Header, Issues, RepositoryInfo} from './styles';

interface RepositoryParams {
    repository: string;
}

export const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
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
                <img src="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2019/10/04/794834/20191004154953157610i.jpg" alt=""/>
                <h1>facebok/react</h1>
                <p>Official react repository.</p>
                <ul>
                    <li>
                        <h2>1808</h2>
                        <p>star</p>
                    </li>
                    <li>
                        <h2>48</h2>
                        <p>star</p>
                    </li>
                    <li>
                        <h2>67</h2>
                        <p>star</p>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                    <Link to={`bla`}>
                        <img src="" alt=""/>
                        <div>
                            <strong>dasda</strong>
                            <p>dasda</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </Link>
            </Issues>
        </>
    );
}