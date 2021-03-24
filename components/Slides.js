import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'assets/carrinho.png',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'assets/carrinho2.png',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'assets/carrinho3.png',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  }
];

const Slides = () => <UncontrolledCarousel items={items} />;

export default Slides;