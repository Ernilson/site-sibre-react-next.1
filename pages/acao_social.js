import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import Link from 'next/link';
import { Jumbotron, Container } from 'reactstrap';

function acao_Social() {
    return (<div>
        <Head>
            <title>Sobre</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        Sobre<br />
        <Jumbotron fluid className="head-sobre">
            <style>{`.head-sobre{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h1 className="text-center">Sobre a Sibre</h1>
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
                        <h2 className="featurette-heading">Ajude alguém hoje.</h2>
                        <p className="lead">A Bíblia diz “Se alguém tiver recursos materiais e, vendo seu irmão em necessidade,
                        não se compadecer dele, como pode permanecer nele o amor de Deus?”. Como buscamos aplicar
                        a Palavra de Deus em cada detalhe de nossa vida,, trabalhamos para servir aqueles que precisam
                        ser supridos em suas necessidades básicas e ajudados em suas privações.
                        O ministério de Ação Social tem ajudado a população carente do Recanto das Emas
                        ao distribuir marmitas no horário de almoço, arrecadar roupas que são distribuídas
                        para famílias carentes e também tem realizado outras ações pontuais de acordo com a
                        carência apresentada de forma pessoal.  <Link href="/contato">Faça a sua contribuição!                           
                        </Link></p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/Fran5.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Doe um pouco do seu dia.</h2>
                        <p className="lead">A Bíblia diz “Se alguém tiver recursos materiais e, vendo seu irmão em necessidade,
                         não se compadecer dele, como pode permanecer nele o amor de Deus?”. Como buscamos aplicar
                         a Palavra de Deus em cada detalhe de nossa vida,, trabalhamos para servir aqueles que precisam
                         ser supridos em suas necessidades básicas e ajudados em suas privações.
                        O ministério de Ação Social tem ajudado a população carente do Recanto das Emas ao distribuir 
                        marmitas no horário de almoço, arrecadar roupas que são distribuídas para famílias carentes e 
                        também tem realizado outras ações pontuais de acordo com a carência apresentada de forma pessoal.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/nino2.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}
export default acao_Social;