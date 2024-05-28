import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function Apoio() {
    return (<div>
        <Head>
            <title>Apoio Piscológico</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        <br />
        <Jumbotron fluid className="head-sobre">
            <style>{`.head-sobre{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h1 className="text-center">Apoio Piscológico</h1>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="sobre">
            <style>{`.sobre{
            padding-top: 20px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }.featurette-divider{
            margin: 5rem 0;            
        }`}</style>
            <Container>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Acreditamos em Você.</h2>
                        <p className="lead">Acreditamos que cuidar de pessoas é um princípio aprendido com o Senhor Jesus e seus ensinos.  Pensando nisso, e  com o objetivo de ajudar a comunidade, o Projeto Integrar nasceu durante uma conversa entre psicólogos e irmãos que têm a visão de ajudar os outros em sua totalidade com atendimento psicológico prestado para todos os que precisarem. Os atendimentos acontecem desde 2016 todas as sextas-feiras na Sibre e a todas as faixas etárias.  
                            .</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/psicologo.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Amar é Viver.</h2>
                        <p className="lead">Acreditamos que cuidar de pessoas é um princípio aprendido com o Senhor Jesus e seus ensinos.  Pensando nisso, e  com o objetivo de ajudar a comunidade, o Projeto Integrar nasceu durante uma conversa entre psicólogos e irmãos que têm a visão de ajudar os outros em sua totalidade com atendimento psicológico prestado para todos os que precisarem. Os atendimentos acontecem desde 2016 todas as sextas-feiras na Sibre e a todas as faixas etárias.
.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/psicologo2.jfif" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default Apoio;