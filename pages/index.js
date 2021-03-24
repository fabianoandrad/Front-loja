import React from "react";

import Head from "next/head";

import {
  Jumbotron,
  Container,
  Button,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Media,
} from "reactstrap";

import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Slider from "../components/Slides";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

// function Home({ data }) { // em {data} esta o json vindo api
function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Site de orçamento para desenvolvimento web e Apps"
        />
      </Head>
      <Menu />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #ffffff;
            color: #00a1fc;
            margin-top: 6rem;
            margin-bottom: 0rem;
            padding-top: 0rem;
          }.descr-text{
            font-size: 40px;
          }`}
        </style>

        <Container className="text-center">
          {/* text-center já do proprio reactstrap */}
          <div>
            <Slider />
          </div>

          <h1 className="display-4 descr-text">Sua melhor opção esta aqui!</h1>
          {/* <p className="lead">Faça seu orçamento</p>
           <p className="lead">
            <a
              href="/orcamento"
              className="btn btn-outline-primary btn-lg mt-4"
            >
              Orçamento
            </a>
          </p> */}
        </Container>
      </Jumbotron>

      {/****************************************************************************/}
      <Container className="cards">
        <style>
          {`.cards{
               padding: 4rem;

            }`}
        </style>

        <CardColumns>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://www.setead.org.br/wp-content/uploads/2020/03/loja-virtual.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </CardColumns>
      </Container>

      {/****************************************************************************/}

      <Jumbotron fluid className="services">
        <style>
          {`.services{
             background-color: #ffffff;
             margin-bottom: 0rem !important;
          }.circle{
            width:140px;
            height:140px;
            background-color: #0a197d;
            font-size: 52px;
            color: #ffffff;
            padding: 24px
          }.centralize{
            margin: 0 auto;
            float: none;
          }
          `}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
          </div>
          <p className="lead pb-4">
            Lorem ipsum suscipit cras duis pellentesque ipsum class quam taciti.
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
                <FontAwesomeIcon icon="laptop-code" />
              </div>
              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti Lorem ipsum suscipit cras duis pellentesque ipsum class
                quam taciti
              </p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
                <FontAwesomeIcon icon="mobile-alt" />
              </div>
              <h2 className="mt-4 mb-4">Serviço dois</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti quam taciti
              </p>
            </div>

            <div className="col-md-4">
              <div className="rounded-circle circle centralize">
                <FontAwesomeIcon icon="network-wired" />
              </div>
              <h2 className="mt-4 mb-4">Serviço tres</h2>
              <p>
                Lorem ipsum suscipit cras duis pellentesque ipsum class quam
                taciti Lorem ipsum suscipit cras duis p quam taciti
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:8080/home"); //obtem de get /home da api
//   const data = await response.json();

//   return { props: { data } }
// }

export default Home;
