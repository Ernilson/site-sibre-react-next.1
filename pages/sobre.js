import React from 'react';
import Head from 'next/head';
import Menu from '../componete/Menu.js';
import RodaPe from '../componete/RodaPe';
import { Jumbotron, Container } from 'reactstrap';

function sobre() {
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
                <h2 className="text-center">Nossa história</h2>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="sobre">
            <style>{`.sobre{
            padding-top: 40px;
            padding-buttom:10px;
            background: #FFF;
            margin-bottom: 0ren ! important;
        }.featurette-divider{
            margin: 5rem 0;            
        }`}</style>
            <Container>
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Segunda Igreja Batista no Recanto das Emas - DF.</h2>
                        <p className="lead">A Segunda Igreja Batista foi organizada como igreja em 2009.  Esta era congregação
                        da Segunda Igreja Batista do Plano Piloto e ficava localizada na quadra 103 quando, em 2003, a SIBPP adquiriu
                        um lote para a construção de um lugar próprio e definitivo. A construção do templo foi realizada pela Segunda
                        Igreja Batista do Plano Piloto e contou com a ajuda de um grupo de irmãos norte americanos vindos ao Brasil com esta
                        finalidade. A Sibre está localizada na quadra 105 área especial 01 - Avenida Vargem da Benção.
                        Ao relembrarmos nossa história, algumas pessoas foram determinantes para que a nossa igreja fosse estabelecida e estas contribuíram em nosso
                        crescimento. Vale mencionar Pr. Jaime França e sua família, Pr. Alexandre e sua esposa Raquel Mousinho de Moura Fé, Pr. Daniel Ventura, Pr. Edvan Xavier, Pr. Regivaldo Dantas e Pr. Josias Alves da Costa.
                        Hoje a Sibre é pastoreada pelo Pr.Lacir com o auxilio dos seminaristas: Jairo Guimarães, Lucio Macedo e Gostavo Lenor.
</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img002.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Missão</h2>
                        <p className="lead">Amar a Deus, servir ao próximo, fazer o maior número discípulos
                         até a volta de Cristo e ser uma igreja relevante para sua comunidade. </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src="/img007.png" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            width="500" height="500" alt="Sibre" />

                    </div>
                </div>

            </Container>
        </Jumbotron>

        <RodaPe />
    </div>)
}

export default sobre;