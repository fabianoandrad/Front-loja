import React, { useState } from "react";

import Head from "next/head";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

import {
  Container,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

function Admin() {
  // function useState começa com os objetos vazio
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  // resposta para o alerta
  const [response, setResponse] = useState({
    formSave: false, // se form foi enviado e esta sendo salvo, bloqueia o botão
    type: "", // tipo de error
    message: "", // e a menssagem de erro
  });

  // salva na var product alguma alteração no form
  const onChangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // executa esta function quando botão do formulario for precionado
  const sendProduct = async (e) => {
    e.preventDefault();

    setResponse({ formSave: true})
    console.log(product);

    try {
      const response = await fetch("http://localhost:8080/admin", {
        // envia dados a api e o bd
        method: "POST", // usa o metodo POST
        body: JSON.stringify(product), // envia a variavel product no formato de um objeto
        headers: { "Content-Type": "application/json" }, // indica que vai enviar um conteudo em formato json
      });

      const responseSend = await response.json();

      // salva na variavel response se houve error ou success
      if (responseSend.error) {
        setResponse({
          formSave: false,
          type: "error",
          message: responseSend.message,
        });
      } else {
        setResponse({
          formSave: false,
          type: "success",
          message: responseSend.message,
        });
      }

      // neste caso não houve uma resposta da api
    } catch (error) {
      setResponse({
        formSave: false,
        type: "error",
        message: "Erro: Orçamento não enviado!",
      });
    }

  };

  return (
    <div>
      <Head>
        <title>Admin</title>
        <meta
          name="description"
          content="Compra online de comidas lanches food"
        />
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
            background-color: #050c3d;
            color: #00a1fc;
            padding: 40px 40px;
            margin-bottom: 0rem;
          }`}
        </style>

        <Container className="text-center">
          <h1 className="display-4">Área do administrador</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-product">
        <style>
          {`.form-product{
             padding: 80px;
             background-color: #ffffff;
             margin-top: 0rem;
        }`}
        </style>

        <Container>

          {response.type === 'error' ?  <Alert color="danger">{response.message}</Alert> : ""}
          {response.type === 'success' ?  <Alert color="success">{response.message}</Alert> : ""}
         

          <Form onSubmit={sendProduct}>
            <FormGroup>
              <Label for="name">Nome do produto</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Preencha com o nome do produto"
                onChange={onChangeInput}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="price">Preço do produto</Label>
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="Insira o preço do produto"
                onChange={onChangeInput}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="description">Descrição do produto</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Descreva sobre seu produto"
                onChange={onChangeInput}
                required
              />
            </FormGroup>

           

            {response.formSave == true ? <Button type="submit" outline color="warning" disabled >Enviando...</Button> : <Button type="submit" outline color="primary">Salvar produto</Button> } 

          </Form>
        </Container>
      </Jumbotron>

      <Footer />
    </div>
  );
}

export default Admin;
