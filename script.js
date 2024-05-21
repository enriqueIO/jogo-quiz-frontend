const dadosQuiz = [
  {
    pergunta: "Qual é o nome verdadeiro do personagem 'Jinx'?",
    opcoes: ["Vi", "Jinx", "Powder", "Caitlyn"],
    correta: "Powder",
  },
  {
    pergunta: "Qual é a região de origem de 'Ahri'?",
    opcoes: ["Ionia", "Piltover", "Noxus", "Zaun"],
    correta: "Ionia",
  },
  {
    pergunta: "Qual campeão é conhecido como o 'Rei Destruído'?",
    opcoes: ["Thresh", "Viego", "Hecarim", "Mordekaiser"],
    correta: "Viego",
  },
  {
    pergunta: "Qual é o nome da passiva de 'Teemo'?",
    opcoes: ["Guerrilha", "Tiro Tóxico", "Movimentação Rápida", "Camuflagem"],
    correta: "Camuflagem",
  },
  {
    pergunta: "Qual campeão é famoso por sua habilidade de 'Pentakill'?",
    opcoes: ["Yasuo", "Master Yi", "Zed", "Darius"],
    correta: "Darius",
  },
  {
    pergunta: "Qual é a função principal de 'Soraka'?",
    opcoes: ["Atirador", "Suporte", "Assassino", "Mago"],
    correta: "Suporte",
  },
  {
    pergunta: "Qual campeão é conhecido como 'O Curandeiro do Riacho'?",
    opcoes: ["Dr. Mundo", "Nami", "Soraka", "Sylas"],
    correta: "Nami",
  },
  {
    pergunta: "Quem é o irmão de 'Yasuo'?",
    opcoes: ["Zed", "Shen", "Yone", "Kayn"],
    correta: "Yone",
  },
  {
    pergunta: "Qual é o nome da habilidade ultimate de 'Garen'?",
    opcoes: ["Julgamento", "Coragem", "Decisão Demaciana", "Justiça Demaciana"],
    correta: "Justiça Demaciana",
  },
  {
    pergunta: "Qual campeão é conhecido como 'O Terror do Vazio'?",
    opcoes: ["Kog'Maw", "Cho'Gath", "Kha'Zix", "Rek'Sai"],
    correta: "Cho'Gath",
  },
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const botaoProxima = document.getElementById("botao-proxima");
const resultadoEl = document.getElementById("resultado");

function carregarPergunta() {
  const perguntaAtual = dadosQuiz[indicePerguntaAtual];
  perguntaEl.textContent = perguntaAtual.pergunta;
  opcoesEl.innerHTML = "";

  perguntaAtual.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("opcao");
    botao.addEventListener("click", () => selecionarResposta(opcao));
    opcoesEl.appendChild(botao);
  });
}

function selecionarResposta(opcao) {
  const respostaCorreta = dadosQuiz[indicePerguntaAtual].correta;
  if (opcao === respostaCorreta) {
    pontuacao++;
  }

  Array.from(opcoesEl.children).forEach((botao) => {
    botao.disabled = true;
    if (botao.textContent === respostaCorreta) {
      botao.style.backgroundColor = "green";
    } else {
      botao.style.backgroundColor = "red";
    }
  });

  botaoProxima.style.display = "block";
}

botaoProxima.addEventListener("click", () => {
  indicePerguntaAtual++;
  if (indicePerguntaAtual < dadosQuiz.length) {
    carregarPergunta();
    botaoProxima.style.display = "none";
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  perguntaEl.style.display = "none";
  opcoesEl.style.display = "none";
  botaoProxima.style.display = "none";
  resultadoEl.textContent = `Você acertou ${pontuacao} de ${dadosQuiz.length} perguntas.`;
}

carregarPergunta();
botaoProxima.style.display = "none";
