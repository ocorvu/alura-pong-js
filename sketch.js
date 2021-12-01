
let colidiu = false;
let d = 100; // dificuldade
let pontosJogadorUm = 0;
let pontosJogadorDois = 0;
//Variaveis Fundo

let wFundo = 600;
let hFundo = 400;

// Váriáveis da Bolinha

//Medidas e Posição
let xBolinha = wFundo / 2;
let yBolinha = hFundo / 2;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;

// Velocidade
let k = 6; // velocidade da bolinha
let velocidadeXBolinha = k;
let velocidadeYBolinha = k;

// Variáveis da Raquete

//Medidas e Posição
let wRaquete = 10;
let hRaquete = 70;
let xRaquete = wRaquete;
let yRaquete = (hFundo - hRaquete) / 2 ;

// Variáveis da Raquete2
let xRaquete2 = wFundo - (2 * wRaquete);
let yRaquete2 = yRaquete;
let velocidadeYRaquete2 = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete); //raquete1(esquerda)
  mostraRaquete(xRaquete2, yRaquete2); //raquete2(direita)
  movimentaRaquete3();
  movimentaRaquete2();
  colisaoBiblioteca(xRaquete, yRaquete)
  colisaoBiblioteca(xRaquete2, yRaquete2);
  marcaPonto();
  incluiPlacar();
  
}


function mostraBolinha() {
      circle(xBolinha,yBolinha,diametroBolinha);
  }

function mostraRaquete(x, y){
  rect(x, y, wRaquete, hRaquete)
}

function movimentaRaquete1(){
  if(yRaquete === 0){
     yRaquete += 10;
     }
  if (yRaquete === 330){
    yRaquete -= 10;
  }
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 5;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 5;
  }
}

function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velocidadeYBolinha *= -1;
  }  
  
}

function movimentaRaquete2(){
  velocidadeYRaquete2 = yBolinha - yRaquete2 - (wRaquete / 2)  - d;
  yRaquete2 += velocidadeYRaquete2;
}

function movimentaRaquete3(){
  velocidadeYRaquete = yBolinha - yRaquete - (wRaquete / 2) - d;
  yRaquete += velocidadeYRaquete;
}

function verificaColisaoRaquete(x, y){
  let xBolinhaXRaquete = xBolinha - raioBolinha < x + wRaquete;
  
  let yBolinhaYRaqueteMenor = yBolinha - raioBolinha < y + hRaquete;
  
  let yBolinhaYRaqueteMaior = yBolinha + raioBolinha > y;
  
  if(xBolinhaXRaquete && yBolinhaYRaqueteMenor && yBolinhaYRaqueteMaior){
     velocidadeXBolinha *= -1;
     }
}

function colisaoBiblioteca(x, y){
  colidiu = collideRectCircle(x, y, 10, 70, xBolinha, yBolinha, raioBolinha)
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar(){
  textSize(24)
  fill(255);
  text(pontosJogadorUm, 150, 30);
  text(pontosJogadorDois, 450, 30);
}

function marcaPonto(){
  if (xBolinha < 10){
    pontosJogadorDois += 1;
  }
  if (xBolinha > 590){
    pontosJogadorUm += 1;
  }
}
