const form = document.querySelector('form')

const nome = document.getElementById('name')

const periodo_turma = document.getElementById('periodo-turma')
const disciplina1 = document.getElementById('disciplina1')
const disciplina2 = document.getElementById('disciplina2')
const disciplina3 = document.getElementById('disciplina3')
const disciplina4 = document.getElementById('disciplina4')
const disciplina5 = document.getElementById('disciplina5')

const quest1 = document.getElementById('quest1')
const quest2 = document.getElementById('quest2')
const quest3 = document.getElementById('quest3')
const quest4 = document.getElementById('quest4')
const quest5 = document.getElementById('quest5')
const quest6 = document.getElementById('quest6')
const quest7 = document.getElementById('quest7')

const res = document.getElementById('results')


form.addEventListener('submit', e => {
    e.preventDefault()


    res.innerHTML += `
    <div style="border-bottom-style: solid;">
        <div>
            <label>Aluno(a): ${nome.value}, ${periodo.value} </label 
        </div>
        <div>
        <h2>Avaliação das disciplinas </h2>
        <p>1 - Péssima <br>
                2 - Ruim <br>
                3 - Regular <br>
                4 - Boa <br>
                5 - Ótima</p>
        </div>
        <div>
            <label>Programação Web I: <strong>${disciplina1.value}</strong></label>
        </div>
        <div>
            <label>Introdução à Programação: <strong>${disciplina2.value}</strong></label>
        </div>
        <div>
            <label>Análise de Projeto de Software: <strong>${disciplina3.value}</strong></label>
        </div>
        <div>
            <label>Introdução a Redes de Computadores: <strong>${disciplina4.value}</strong></label>
        </div>
        <div>
            <label>Projeto de Interface de Usuário: <strong>${disciplina5.value}</strong></label>
        </div>
        




        <div>
            <h2>Autoavaliação Discente</h2>
            <p><strong>CF</strong> (concordo fortemente) <strong>C</strong> (concordo) <strong>D</strong> (discordo) <strong>DF</strong> (discordo fortemente)</p>
        </div>
        <div>
            <label>1. Cumpri os prazos estabelecidos para as atividades: <strong>${quest1.value}</strong></label>
        </div>
        <div>
            <label>2. Fui as aulas todos os dias e cheguei pontualmente: <strong>${quest2.value}</strong></label>
        </div>
        <div>
            <label>3. Quando faltei as aulas procurei me informar sobre o que foi dado pelo professor: <strong>${quest3.value}</strong></label>
        </div>
        <div>
            <label>4. Concentrei-me na aula e nas atividades propostas: <strong>${quest4.value}</strong></label>
        </div>
        <div>
            <label>5. Fiz perguntas ao professor quando não entendi a explicação: <strong>${quest5.value}</strong></label>
        </div>
        <div>
            <label>6. Em casa, concentrei-me no estudo e desliguei tudo que poderia me atrapalhar: <strong>${quest6.value}</strong></label>
        </div>
        <div>
        <label for="deacordo7"><strong>Agora descreva o que você acha do seu desempenho acadêmico:</strong></label>
            </br>
        <p>${quest7.value}</p>
        </div>
    </div>
    `
    form.reset()    
})

