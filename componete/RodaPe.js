import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import Link from 'next/link';

const RodaPe = () => {
    return (
        <div>
            <Jumbotron fluid className="rodape">
                <style>{`.rodape{
	padding-top: 30px;
	padding-bottom: 30px;
	background-color: #14A1A7;
	marging-bottom: 0rem important;
	color: #fff;
                }
                .rodape ul li a.link-rodape{
                    color:#fff !important;
                }.rodape ul li a.link-rodape:hover{
                        color:green !important;
                        text-decoration: none;
                }`}</style>
                <Container>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4">
                            <h6>Sibre</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/">
                                        <a className="link-rodape">Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/oracao">
                                        <a className="link-rodape">Apoio Espiritual</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sobre">
                                        <a className="link-rodape">Sobre</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <h6>Contato</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link href="/contato">
                                        <a className="link-rodape">CNPJ:186855200001/40</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="tel:61991323236">
                                        <a className="link-rodape">(61)99132-3236</a>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://goo.gl/maps/nB3GEHK9yLHAeEYx8" target="_blank">
                                        <a className="link-rodape">Areá Esp.01 - Rec.Das Emas/DF</a>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4">
                            <h6>Redes Sociais</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.instagram.com/sibrecanto/?hl=pt-br" target="_blank">
                                        <a className="link-rodape">Instagram</a>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCWTywd1HwBLG3mpSI5hAmvg" target="_blank">
                                        <a className="link-rodape">Youtube</a>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://goo.gl/maps/nB3GEHK9yLHAeEYx8" target="_blank">
                                        <a className="link-rodape">Localização</a>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default RodaPe;