# 🌱 Energias Renováveis no Brasil

Site educativo sobre as fontes de energia renovável do Brasil, desenvolvido como projeto acadêmico (APS — 1º Semestre).

---

## 📋 Sobre o Projeto

O Brasil possui **83% da sua matriz elétrica** proveniente de fontes renováveis, sendo um dos países mais sustentáveis do mundo em geração de energia. Este site apresenta, de forma visual e interativa, as principais fontes renováveis brasileiras, dados reais do setor e as metas para 2030 e 2050.

---

## 📄 Páginas

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Home — hero com parallax, gráfico da matriz elétrica, cards de navegação e barras de progresso animadas |
| `solar.html` | Energia Solar — diagrama animado do efeito fotovoltaico, gráfico de crescimento (2018–2024) e estados com maior potencial |
| `eolica.html` | Energia Eólica — turbinas animadas em CSS puro, destaque para o Nordeste, ranking mundial e curiosidades sobre CE e RN |
| `hidraulica.html` | Energia Hidráulica — maior fonte renovável (~60% da matriz), dados de Itaipu e Belo Monte, debate de prós e contras ambientais |
| `outras.html` | Biomassa & Outras — etanol de cana-de-açúcar, energia das marés, PCHs e biogás |
| `futuro.html` | O Futuro Renovável — metas 2030/2050, timeline de transição energética e formulário de "Compromisso Verde" |

---

## 🗂️ Estrutura de Arquivos

```
projeto/
├── index.html
├── solar.html
├── eolica.html
├── hidraulica.html
├── outras.html
├── futuro.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── fontes.txt
└── README.md
```

---

## 🎨 Design

- **Paleta de cores:** verde `#2ecc71`, amarelo `#f1c40f`, azul `#2980b9`, fundo escuro `#1a1a2e`
- **Tipografia:** [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts
- **Layout:** Mobile-first, 100% responsivo

---

## ✨ Funcionalidades

- Navbar fixa com efeito glassmorphism ao rolar a página
- Hero com efeito parallax (index.html)
- Turbinas eólicas animadas em **CSS puro** (sem JavaScript)
- Contadores numéricos animados com Intersection Observer
- Barras de progresso animadas ao entrar na viewport
- Gráfico de barras CSS mostrando crescimento solar 2018–2024
- Cards com hover effect (elevação + borda colorida)
- Diagrama animado do processo fotovoltaico
- Formulário "Compromisso Verde" com validação em JavaScript
- Botão "voltar ao topo" com scroll suave
- Menu hambúrguer para dispositivos móveis

---

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, Grid, Flexbox, animações, `@keyframes`)
- JavaScript puro (ES6+) — sem frameworks ou bibliotecas externas
- Google Fonts (Poppins)
- Imagens via [Unsplash](https://unsplash.com) (licença gratuita)

---

## 🚀 Como Rodar

Não há dependências ou build necessário. Basta abrir o arquivo diretamente no navegador:

```bash
# Opção 1 — abrir direto
open index.html

# Opção 2 — servidor local com Python (recomendado)
python3 -m http.server 8000
# Acesse: http://localhost:8000

# Opção 3 — extensão Live Server no VS Code
# Clique com botão direito em index.html → "Open with Live Server"
```

---

## 📊 Dados Utilizados

Os dados apresentados têm como referência o período **2023–2024** e foram extraídos de:

- **ANEEL** — Banco de Informações de Geração (BIG)
- **ONS** — Relatório de Operação do Sistema Elétrico Brasileiro
- **ABSOLAR** — Infográfico da Energia Solar Fotovoltaica
- **ABEEÓLICA** — Boletim Anual de Geração Eólica
- **GWEC** — Global Wind Report
- **IRENA** — Renewable Capacity Statistics
- **EPE** — Balanço Energético Nacional e Plano Nacional de Energia 2050
- **Itaipu Binacional** — Relatório de Sustentabilidade
- **UNICA** — Anuário do Setor Sucroenergético

> Consulte o arquivo `fontes.txt` para a lista completa com links diretos para cada fonte.

---

## 👤 Autoria

Desenvolvido por **guga0712**  
Disciplina: APS — 1º Semestre  
Ano: 2024
