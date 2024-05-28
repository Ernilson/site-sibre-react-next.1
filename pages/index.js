import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';

import { Jumbotron, Container } from 'reactstrap';

function Home({ data }) {
    return (
        <div>
            <Head>
                <title>Sibre</title>
                <meta name='robots' content='index, follow' />
                <meta name="description" content="Site da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
                <meta name="author" content="Ernilson Daniel Lima de Souza" />

            </Head>
            <Menu />
            <Jumbotron fluid className="descr-top">
                <style>{`.descr-top{
                background-image: url(/month.jpg);
                background-repeat: no-repeat;
                background-position: center;
                padding-top: 100px;
                padding-buttom:80px;
                color: #FFF;
                text-align: center;
                margin-bottom: 0ren ! important;                
            }`}</style>
                <Container><h2 className="display-5">Um lugar de comunhão, louvor e adoração a Deus</h2>
                    <p className="lead mb-4">Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração." Jeremias 29:12-13!"</p>
                    <Link href="/contato">
                        <a className="btn btn-outline-light btn-lg">Entre em Contato</a>
                    </Link>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>{`.servicos{
            padding-top: 10px;
            padding-buttom:60px;
            background: #FFF;
            margin-bottom: 0ren ! important;

            }.circulo1{
            width:140px;
            height: 140px;
            background-image: url(/CultoPrLaci2.jpg);           
            }.centralizar{
            margin: 0 auto !important;
            float: none !important;

            }.circulo2{
            width:140px;
            height: 140px;
            background-image: url(/nino2.png);
            }.centralizar2{
            margin: 0 auto !important;
            float: none !important;

            }.circulo3{
            width:140px;
            height: 140px;
            background-image: url(/psicologo.png);
            }.centralizar3{
            margin: 0 auto !important;
            float: none !important;
            }`}</style>

                <Container className="text-center">
                    <div>
                        <h3 className="display-6"> Segunda Igreja Batista no Recanto das Emas</h3>
                        <p className="lead pb-4">"Servi ao Senhor com alegria!"</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo1 centralizar" />
                            <h2 className="mt-4 mb-4">Nossos Encontros</h2>
                            <Link href="/comunhao">
                                <a className="btn btn-light"><p>Viver em comunhão é uma marca da nossa comunidade.
                                Venha ser igreja com a gente!
                                Culto de oração teça feira às 7h -
                                PG homens terça às 20h -
                                Culto de oração quarta às 20h -
                                Escola Biblica Dominical EBD às 09hs -                                
                                Culto de celebração domingo às 19h
                                    </p></a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo2 centralizar2" />
                            <h2 className="mt-4 mb-4">Ação Social</h2>
                            <Link href="/acao_social">
                                <a className="btn btn-light"><p>Ajudar como Cristo ajudaria e amar como Ele nos ama é a missão do ministério de Ação Social. Seja servindo com doação de alimentos ou roupas, trabalhamos para socorrer ao próximo em sua necessidade.

</p></a>
                            </Link>
                        </div>
                        <div className="col-lg-4">
                            <div className="rounded-circle circulo3 centralizar3" />
                            <h2 className="mt-4 mb-4">Apoio Psicológico</h2>
                            <Link href="/apoio_Psicologico">
                                <a className="btn btn-light"><p>Nosso objetivo está em prestar atendimento psicológico à comunidade em geral. Estes são realizados todas as sextas-feiras nas dependências de nossa igreja por um trio de psicólogos preparados para acolher aqueles que nos procuram..</p></a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
            <RodaPe />
        </div>

    );
}

export default Home;