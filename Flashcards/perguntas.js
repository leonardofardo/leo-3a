<article class="cartao">
<div class="cartao__conteudo">
<h3>Geografia</h3>
<div class="cartao__conteudo__pergunta">
<p>Qual a capital da França?</p>
</div>
<div class="cartao__conteudo__resposta">
<p>A capital da França é Paris</p>
</div>
</div>
</article>
criaCartao(
    categoria,
    pergunta,
    resposta,
    )
criaCartao(
    'Programação',
    'O que é JavaScript?',
    'O JavaScript é uma linguagem de programação'
    )
    criaCartao(
    'Geografia',
    'Qual a capital da França?',
    'A capital da França é Paris'
    )
    criaCartao(
    'Programação',
    'O que é uma função?',
    'Uma função é um bloco de código que executa alguma tarefa'
    )
    function criaCartao(categoria, pergunta, resposta) {
        console.log(categoria, pergunta, resposta);
        }
        function criaCartao(categoria, pergunta, resposta) {

            let container = document.getElementById('container');
            let cartao = document.createElement('article')
            cartao.className = 'cartao'
            
            }
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>${categoria}</h3>
<div class="cartao__conteudo__pergunta">
<p>${pergunta}</p>
</div>
<div class="cartao__conteudo__resposta">
<p>${resposta}</p>
</div>
</div>
`
criaCartao('Língua Inglesa',
    'Como se diz oi em Inglês?',
'Oi em inglês se diz HI (RAI)'
)
let respostaEstaVisivel = false
container.appendChild(cartao)
function viraCartao () {
respostaEstaVisivel = !respostaEstaVisivel
cartao.classList.toogle('active', respostaEstaVisivel)
}
cartao.addEventListener('click', viraCartao)