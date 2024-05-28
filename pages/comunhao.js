import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function Encontros() {
    return (<div>
        <Head>
            <title>Comunhão</title>
            <meta name='robots' content='index, follow' />
            <meta name="description" content="Logo abaixo temos a historia da Segunda Igreja Batista no Recanto das Emas-DF"></meta>
            <meta name="author" content="Ernilson Daniel Lima de Souza" />
        </Head>
        <Menu />
        <br />
        <Jumbotron fluid className="head-comunhao">
            <style>{`.head-comunhao{
            padding-top: 40px;
            padding-buttom:20px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }`}</style>
            <Container>
                <h1 className="text-center">Comunhão</h1>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="comunhao">
            <style>{`.comunhao{
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
                        <h2 className="featurette-heading">Nossos Encontros.</h2>
                        <p className="lead">Viver em comunhão é uma marca da nossa comunidade.
                        Venha ser igreja com a gente!
                        Encontros de oração: terças às 07hs -
                        PG homens: terça às 20hs -
                        Culto de oração: quarta às 20hs -
                        Escola Bíblica Dominical EBD: domingo às 09hs -
                        Culto de celebração domingo: às 19hs
                        .</p>  
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/PrLacir.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/CultoPrLaci.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Louvai ao Senhor.</h2>
                        <p className="lead">“Tudo que respira louve ao Senhor!” Como Deus habita no meio dos louvores, no lugar da adoração é onde queremos estar.
                        .</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/Minstr.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/MLASibre.jpeg" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Orai sem cessar.</h2>
                        <p className="lead">Buscamos ao Senhor, buscamos a Sua soberana vontade e Sua graça.
                        “A fé sobe pelas escadas que o amor construiu, e olha pelas janelas que a esperança abriu”
                        .</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/oracao1.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default Encontros;