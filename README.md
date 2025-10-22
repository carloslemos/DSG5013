# **Leituras Algorítmicas**
### *Prototipagem de uma Interface Não Linear de Leitura em Rede*  
**Protótipo para seminário da disciplina DSG5013 - Arte e design de interface em escala urbana (2025)**

---

## 1. Visão Geral

**Resumo**  
Este projeto investiga modos de leitura mediados por algoritmos em um ambiente digital contemporâneo, propondo o desenvolvimento de uma **Progressive Web App (PWA)** que reorganiza, em tempo real, o texto e suas conexões a partir do **comportamento de leitura do usuário**.  

A proposta nasce da hipótese de que, na era das timelines infinitas e da economia da atenção, **a linearidade textual tornou-se um resquício anacrônico**, e que o design pode propor novas formas de experiência de leitura baseadas em **relação, fluxo e recombinação**.  

O sistema observa variáveis como **tempo de permanência**, **curtidas** e **saltos de tópico**, ajustando a estrutura narrativa para conduzir o leitor a uma “completude de leitura”, sem impor linearidade. O leitor pode, se desejar, **acelerar tópicos de menor interesse**, permitindo um diálogo entre **controle humano e curadoria algorítmica**.

---

## 2. Fundamentação Teórica

O projeto se ancora em três grandes campos conceituais:

1. **A estética do tempo e da atenção** — com base em *[24/7: Late Capitalism and the Ends of Sleep](https://www.versobooks.com/products/2315-24-7)* (Jonathan Crary, 2013), propõe-se uma reflexão sobre a dissolução das fronteiras entre tempo de vida e tempo de produção. Crary argumenta que o capitalismo tardio estende o regime produtivo à totalidade do tempo humano, abolindo o sono como último refúgio da experiência não mediada.  
   → Inspiração: **tornar visível o ritmo** da leitura como resistência estética à automatização total.

2. **A lógica algorítmica como campo de modulação** — em diálogo com o artigo *[O design multimodal do Instagram: da barra de rolagem infinita à organicidade algoritmizada do feed de notícias](https://www.revistasuninter.com/intersaberes/index.php/revista/article/view/2496)* (Revista Intersaberes), e a dissertação *[Os algoritmos das redes sociais como dispositivos de modulação comportamental](https://repositorio.ufmg.br/items/1853233f-aa30-407c-b60a-7830a33aee53)* (UFMG), compreende-se o algoritmo como **agente estético e político** que organiza o mundo informacional a partir de critérios de engajamento e previsibilidade.  
   → Proposição: deslocar essa lógica de controle para uma de **negociação entre usuário e sistema**.

3. **O invisível técnico como matéria de design** — a tese de doutorado *[O que está acontecndo aqui? TikTok e a plataformização da autenticidade a partir da teoria fundamentada](https://sucupira-legado.capes.gov.br/sucupira/public/consultas/coleta/trabalhoConclusao/viewTrabalhoConclusao.jsf?popup=true&id_trabalho=10657975)* (Luiz Henrique Rauber, 2021) aborda a relação entre **infraestrutura e interface**, e inspira uma abordagem de design que **expõe o back-end como linguagem visual**.  
   → Questão: *como projetar uma interface que revele seus próprios mecanismos sem perder legibilidade e experiência estética?*

---

## 3. Problema de Design e Proposição

A leitura digital contemporânea é **mediada por sistemas que ocultam seu funcionamento interno**, produzindo uma estética de fluidez total — uma “transparência opaca”.  
Essa invisibilidade técnica neutraliza o atrito cognitivo, o momento em que o leitor percebe a estrutura e pensa sobre o ato de ler.  

**Proposição:** desenvolver uma interface que **reintroduza a fricção e a consciência da mediação**, transformando o ato de ler em um processo dialógico entre humano e máquina.

O PWA funcionará a partir de um **grafo de tópicos interconectados**, nos quais cada nó representa um fragmento textual com metadados (tema, relevância, conexões semânticas).  
O sistema recomendará o próximo tópico a ser lido com base em padrões de comportamento, mas pretende **permitir ao leitor observar a manipulação essa ordem**, expandindo ou condensando a experiência.

**Hipóteses de design:**
- A leitura algorítmica pode revelar o próprio algoritmo como linguagem estética.  
- A fricção é uma forma de atenção.  
- A visibilidade técnica é também uma forma de ética.  

---

## 4. Arquitetura e Funcionamento Técnico

### Estrutura do Sistema (PWA)
- **Front-end:** interface em HTML5/CSS/JS com visualização dinâmica dos tópicos.  
- **Back-end:** banco de dados em grafo.  
- **Motor algorítmico:** módulo de recomendação simples baseado em pesos de comportamento (tempo, curtidas, saltos).  
- **Camada de observação:** sistema registra interações de leitura (tempo médio por tópico, ordem de navegação, taxa de abandono).  

### Lógica de Funcionamento
1. O usuário inicia a leitura por um nó central.  
2. O sistema observa seu tempo e interações.  
3. Com base nas variáveis, recalcula a relevância dos próximos nós.  
4. O leitor pode “pular”, “expandir” ou “resumir” tópicos, acelerando sua jornada.  
5. A interface se adapta, revelando visualmente as conexões entre trechos, como um **mapa mental vivo**.  

### Camada Estética da Visibilidade
O projeto incorpora indicadores visuais do comportamento algorítmico — fluxos, desvios, recombinações — transformando o invisível técnico (o back-end) em **linguagem gráfica**.

---

## 5. Estética, Interação e Experiência de Leitura

A interface rejeita a noção de *frictionless design*. Aqui, o atrito é parte da experiência.  
O usuário vê o texto se mover, recompor e se adaptar — não como um erro, mas como uma **expressão viva do sistema**.  

**Metáfora central:** a **janela**.  
Se a tela é uma janela e a timeline sua terceira dimensão, o projeto propõe observar **como o espaço-tempo digital pode se dobrar em camadas de leitura**.  

**Premissas:**
- O scroll infinito é um gesto de diluição do tempo.  
- A timeline é um vetor unidimensional que o projeto busca expandir.  
- A recombinação dos fragmentos cria uma percepção não cronológica do saber.  

Cada leitura é única, e o sistema registra essa diferença como memória — **um arquivo de percursos possíveis**.

---

## 6. Metodologia de Pesquisa e Prototipagem

### Etapas
1. Levantamento conceitual e mapeamento de referências (fase atual).  
2. Modelagem do grafo de tópicos e definição de atributos de comportamento (proposta em andamento).  
3. Prototipagem do PWA.  
4. Testes.  
5. Análise qualitativa e quantitativa dos dados de leitura.  
6. Iteração do modelo visual e algorítmico.  

### Critérios de Análise
- Tempo médio de leitura por nó.  
- Diversidade de caminhos percorridos.  
- Grau de “completude” da leitura.  
- Percepção de agência do leitor (via entrevistas).  

---

## 7. Resultados Esperados e Limitações

**Resultados esperados:**
- Compreensão crítica da leitura como processo algorítmico.  
- Desenvolvimento de uma interface experimental que articule leitura, rede e comportamento.  
- Contribuição ao debate sobre design ético e estética da visibilidade técnica.  

**Limitações:**
- Risco de sobrecarga cognitiva ao introduzir fricção intencional.  
- Complexidade técnica para implementar recomendação adaptativa em tempo real.  

---

## 8. Como Contribuir

Este projeto é aberto para colaboração e debate acadêmico.  

**Contribuições possíveis:**
- Discussões registradas como *issues* teóricas ou de implementação.  
- Inclusão de novos tópicos, visualizações ou ensaios críticos.  
- Sugestões de interfaces experimentais ou métricas de leitura.  

**Licença:** Creative Commons Zero v1.0 Universal  
**Contato:** carlos.tlemos@alumni.usp.br

---

## 9. Referências

- Crary, Jonathan. *24/7: Late Capitalism and the Ends of Sleep.* Verso Books, 2013.  
- Souza, L. A. (2021). *O design multimodal do Instagram: da barra de rolagem infinita à organicidade algoritmizada do feed de notícias.* Revista Intersaberes.  
  [https://www.revistasuninter.com/intersaberes/index.php/revista/article/view/2496](https://www.revistasuninter.com/intersaberes/index.php/revista/article/view/2496)  
- Gomes, F. (2020). *Os algoritmos das redes sociais como dispositivos de modulação comportamental.* Dissertação (Mestrado), UFMG.  
  [https://repositorio.ufmg.br/items/1853233f-aa30-407c-b60a-7830a33aee53](https://repositorio.ufmg.br/items/1853233f-aa30-407c-b60a-7830a33aee53)  
- RAUBER, Luiz Henrique (2021). O que está acontecendo aqui? TikTok e a plataformização da autenticidade a partir da teoria fundamentada.* Tese (Doutorado em Diversidade Cultural e Inclusão Social), Universidade Feevale. [https://sucupira-legado.capes.gov.br/sucupira/public/consultas/coleta/trabalhoConclusao/viewTrabalhoConclusao.jsf?popup=true&id_trabalho=10657975](https://sucupira-legado.capes.gov.br/sucupira/public/consultas/coleta/trabalhoConclusao/viewTrabalhoConclusao.jsf?popup=true&id_trabalho=10657975)  

---

## 10. Autores

- **Seyey CUNIOCI**
- **Gilberto PASCHOAL**
- **Carlos TREMONTE DE LEMOS**
