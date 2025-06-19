export const generateLessons = (module) => {
  const lessons = [];
  
  if (module.id === 'python-basics') {
    lessons.push(
      {
        id: 'python-basics-1',
        title: 'Introdução ao Python',
        difficulty: 'Básico',
        content: `# Bem-vindo ao Python!

Python é uma linguagem de programação poderosa e fácil de aprender. Criada por Guido van Rossum em 1991, Python se tornou uma das linguagens mais populares do mundo.

## Por que Python?
- **Sintaxe simples**: Fácil de ler e escrever
- **Versátil**: Web, ciência de dados, IA, automação
- **Grande comunidade**: Milhões de desenvolvedores
- **Bibliotecas ricas**: Soluções para quase tudo

## Filosofia do Python
"Bonito é melhor que feio. Explícito é melhor que implícito. Simples é melhor que complexo."

## Primeiro Programa
Vamos começar com o tradicional "Olá, mundo!":`,
        code: `# Meu primeiro programa Python
print("Olá, mundo!")
print("Bem-vindo ao CodeMaster!")

# Você pode usar aspas simples ou duplas
print('Python é incrível!')

# Comentários começam com #
# Eles são ignorados pelo interpretador`,
        explanation: 'A função print() é usada para exibir texto na tela. É uma das funções mais básicas e úteis do Python. Note que não precisamos declarar tipos ou usar ponto e vírgula!',
        tips: [
          'Use comentários para explicar seu código',
          'Python é case-sensitive (maiúsculas e minúsculas importam)',
          'Indentação é importante em Python - use espaços consistentemente'
        ]
      },
      {
        id: 'python-basics-2',
        title: 'Variáveis e Tipos de Dados',
        difficulty: 'Básico',
        content: `# Variáveis em Python

Em Python, você não precisa declarar o tipo da variável. O Python determina automaticamente o tipo baseado no valor atribuído.

## Tipos Básicos:
- **int**: números inteiros (1, 42, -10)
- **float**: números decimais (3.14, -2.5, 0.0)
- **str**: texto/strings ("hello", 'world')
- **bool**: verdadeiro ou falso (True, False)
- **NoneType**: valor nulo (None)

## Regras para Nomes de Variáveis:
- Devem começar com letra ou underscore
- Podem conter letras, números e underscores
- São case-sensitive
- Não podem ser palavras reservadas`,
        code: `# Variáveis numéricas
idade = 25
altura = 1.75
pi = 3.14159

# Strings (texto)
nome = "João"
sobrenome = 'Silva'
mensagem = """Esta é uma
string de múltiplas linhas"""

# Boolean (verdadeiro/falso)
ativo = True
inativo = False

# None (valor nulo)
valor_vazio = None

# Verificando tipos
print(type(idade))      # <class 'int'>
print(type(altura))     # <class 'float'>
print(type(nome))       # <class 'str'>

# Exibindo as variáveis
print(f"Nome: {nome} {sobrenome}")
print(f"Idade: {idade} anos")
print(f"Altura: {altura}m")`,
        explanation: 'Python usa tipagem dinâmica, o que significa que você não precisa especificar o tipo da variável ao criá-la. O tipo é determinado automaticamente pelo valor atribuído.',
        tips: [
          'Use nomes descritivos para suas variáveis',
          'Prefira snake_case para nomes de variáveis (ex: nome_completo)',
          'f-strings são a forma moderna de formatar strings em Python'
        ],
        exercise: {
          description: 'Crie variáveis para armazenar informações pessoais e exiba-as formatadas.',
          starter: `# Crie variáveis para:
# - Seu nome
# - Sua idade  
# - Sua cidade
# - Se você gosta de programar (True/False)

# Seu código aqui

# Exiba as informações usando f-strings`
        }
      },
      {
        id: 'python-basics-3',
        title: 'Operadores e Expressões',
        difficulty: 'Básico',
        content: `# Operadores em Python

Os operadores permitem realizar operações com variáveis e valores.

## Operadores Aritméticos:
- **+** : adição
- **-** : subtração  
- ***** : multiplicação
- **/** : divisão (resultado float)
- **//** : divisão inteira
- **%** : módulo (resto da divisão)
- ****** : exponenciação

## Operadores de Comparação:
- **==** : igual a
- **!=** : diferente de
- **<** : menor que
- **>** : maior que
- **<=** : menor ou igual
- **>=** : maior ou igual

## Operadores Lógicos:
- **and** : E lógico
- **or** : OU lógico  
- **not** : NÃO lógico`,
        code: `# Operadores aritméticos
a = 10
b = 3

print(f"a + b = {a + b}")    # 13
print(f"a - b = {a - b}")    # 7
print(f"a * b = {a * b}")    # 30
print(f"a / b = {a / b}")    # 3.333...
print(f"a // b = {a // b}")  # 3 (divisão inteira)
print(f"a % b = {a % b}")    # 1 (resto)
print(f"a ** b = {a ** b}")  # 1000 (10³)

# Operadores de comparação
x = 5
y = 10

print(f"x == y: {x == y}")   # False
print(f"x != y: {x != y}")   # True
print(f"x < y: {x < y}")     # True
print(f"x > y: {x > y}")     # False

# Operadores lógicos
tem_carteira = True
maior_idade = True
pode_dirigir = tem_carteira and maior_idade

print(f"Pode dirigir: {pode_dirigir}")  # True

# Precedência de operadores
resultado = 2 + 3 * 4  # 14, não 20
print(f"2 + 3 * 4 = {resultado}")

# Use parênteses para clareza
resultado2 = (2 + 3) * 4  # 20
print(f"(2 + 3) * 4 = {resultado2}")`,
        explanation: 'Os operadores seguem uma ordem de precedência específica. Multiplicação e divisão têm precedência sobre adição e subtração. Use parênteses para deixar a ordem explícita.',
        tips: [
          'Use parênteses para deixar a precedência clara',
          'O operador // é útil quando você quer apenas a parte inteira da divisão',
          'O operador % é muito usado para verificar se um número é par (n % 2 == 0)'
        ],
        exercise: {
          description: 'Crie uma calculadora simples que realiza operações básicas.',
          starter: `# Calculadora simples
num1 = 15
num2 = 4

# Realize todas as operações aritméticas
# e exiba os resultados formatados

# Exemplo: print(f"{num1} + {num2} = {num1 + num2}")

# Seu código aqui`
        }
      },
      {
        id: 'python-basics-4',
        title: 'Entrada de Dados com input()',
        difficulty: 'Básico',
        content: `# Entrada de Dados

A função input() permite que o usuário digite informações que serão usadas pelo programa.

## Características do input():
- Sempre retorna uma string
- Pode exibir uma mensagem para o usuário
- Pausa a execução até o usuário pressionar Enter
- Para usar como número, precisa converter

## Conversões Comuns:
- **int()**: converte para número inteiro
- **float()**: converte para número decimal
- **str()**: converte para string (raramente necessário)
- **bool()**: converte para booleano`,
        code: `# Entrada básica
nome = input("Digite seu nome: ")
print(f"Olá, {nome}!")

# Entrada numérica - SEMPRE converter!
idade_str = input("Digite sua idade: ")
idade = int(idade_str)  # Converte string para int

# Ou em uma linha
altura = float(input("Digite sua altura (m): "))

# Calculando com os dados
ano_atual = 2024
ano_nascimento = ano_atual - idade

print(f"Você nasceu em {ano_nascimento}")
print(f"Sua altura é {altura}m")

# Validação simples
resposta = input("Você gosta de Python? (s/n): ")
if resposta.lower() == 's':
    print("Ótima escolha!")
else:
    print("Que pena, mas continue aprendendo!")

# Múltiplas entradas
print("Digite dois números:")
num1 = float(input("Primeiro número: "))
num2 = float(input("Segundo número: "))

soma = num1 + num2
print(f"A soma é: {soma}")`,
        explanation: 'Lembre-se: input() SEMPRE retorna uma string! Se você precisar de um número, deve converter usando int() ou float(). Isso é uma fonte comum de erros para iniciantes.',
        tips: [
          'Sempre converta input() para o tipo correto antes de usar em cálculos',
          'Use mensagens claras para orientar o usuário',
          'Considere usar .lower() ou .upper() para comparar strings',
          'Em programas reais, sempre valide a entrada do usuário'
        ],
        exercise: {
          description: 'Crie um programa que calcula a área de um retângulo com dados do usuário.',
          starter: `# Calculadora de área do retângulo

# Peça ao usuário a largura e altura
# Calcule e exiba a área
# Bonus: calcule também o perímetro

print("=== Calculadora de Área ===")

# Seu código aqui`
        }
      },
      {
        id: 'python-basics-5',
        title: 'Estruturas Condicionais - if, elif, else',
        difficulty: 'Básico',
        content: `# Estruturas Condicionais

As estruturas condicionais permitem que o programa tome decisões baseadas em condições.

## Sintaxe:
- **if**: executa se a condição for verdadeira
- **elif**: "else if" - condição alternativa
- **else**: executa se nenhuma condição anterior for verdadeira

## Importante:
- Use dois pontos (:) após cada condição
- Indentação é obrigatória (4 espaços recomendados)
- Pode ter múltiplos elif
- else é opcional`,
        code: `# Estrutura if simples
idade = 18

if idade >= 18:
    print("Você é maior de idade")
    print("Pode votar!")

# if-else
temperatura = 25

if temperatura > 30:
    print("Está muito quente!")
else:
    print("Temperatura agradável")

# if-elif-else
nota = 85

if nota >= 90:
    print("Conceito A - Excelente!")
elif nota >= 80:
    print("Conceito B - Bom!")
elif nota >= 70:
    print("Conceito C - Regular")
elif nota >= 60:
    print("Conceito D - Suficiente")
else:
    print("Conceito F - Insuficiente")

# Condições múltiplas
usuario = "admin"
senha = "123456"

if usuario == "admin" and senha == "123456":
    print("Login realizado com sucesso!")
elif usuario == "admin":
    print("Senha incorreta!")
elif senha == "123456":
    print("Usuário incorreto!")
else:
    print("Usuário e senha incorretos!")

# Operador ternário (if inline)
status = "ativo" if idade >= 18 else "inativo"
print(f"Status: {status}")

# Verificando múltiplas condições
dia = "sábado"

if dia in ["sábado", "domingo"]:
    print("É fim de semana!")
else:
    print("É dia útil")`,
        explanation: 'A indentação em Python não é apenas estilo - é parte da sintaxe! Todas as linhas que pertencem ao mesmo bloco devem ter a mesma indentação.',
        tips: [
          'Use 4 espaços para indentação (padrão Python)',
          'Evite condições muito complexas - quebre em variáveis',
          'O operador "in" é muito útil para verificar se um valor está em uma lista',
          'Teste sempre os casos extremos (valores limite)'
        ],
        exercise: {
          description: 'Crie um programa que classifica a idade de uma pessoa em categorias.',
          starter: `# Classificador de idade
# 0-12: Criança
# 13-17: Adolescente  
# 18-59: Adulto
# 60+: Idoso

idade = int(input("Digite sua idade: "))

# Seu código aqui`
        }
      }
    );
  } else if (module.id === 'js-basics') {
    lessons.push(
      {
        id: 'js-basics-1',
        title: 'Introdução ao JavaScript',
        difficulty: 'Básico',
        content: `# Bem-vindo ao JavaScript!

JavaScript é a linguagem da web! Criada em 1995 por Brendan Eich, JavaScript evoluiu de uma linguagem simples para uma das mais poderosas e versáteis do mundo.

## Por que JavaScript?
- **Linguagem da Web**: Roda em todos os navegadores
- **Full Stack**: Frontend e backend (Node.js)
- **Dinâmica**: Tipagem dinâmica e flexível
- **Comunidade Ativa**: Milhões de desenvolvedores
- **Ecossistema Rico**: NPM com milhões de pacotes

## Onde JavaScript é usado?
- Sites interativos
- Aplicações web (React, Vue, Angular)
- Servidores (Node.js)
- Aplicativos mobile (React Native)
- Desktop (Electron)
- IoT e muito mais!

## Primeiro Programa
Vamos começar com o clássico "Hello, World!":`,
        code: `// Meu primeiro programa JavaScript
console.log("Olá, mundo!");
console.log("Bem-vindo ao CodeMaster!");

// Você pode usar aspas simples, duplas ou template literals
console.log('JavaScript é incrível!');
console.log("Vamos aprender juntos!");
console.log(\`Template literals são úteis!\`);

// Comentários de linha única começam com //

/*
  Comentários de múltiplas linhas
  ficam entre /* e */
*/

// Exibindo no navegador (se estiver em uma página web)
// alert("Olá do JavaScript!");

// Diferentes formas de saída
console.log("Para desenvolvedores");
console.warn("Aviso importante");
console.error("Mensagem de erro");`,
        explanation: 'console.log() é usado para exibir informações no console do navegador ou terminal. É a ferramenta principal para debug e desenvolvimento em JavaScript.',
        tips: [
          'Use console.log() para debugar seu código',
          'Template literals (`) permitem interpolação de variáveis',
          'JavaScript é case-sensitive (maiúsculas e minúsculas importam)',
          'Ponto e vírgula é opcional, mas recomendado'
        ]
      },
      {
        id: 'js-basics-2',
        title: 'Variáveis e Tipos de Dados',
        difficulty: 'Básico',
        content: `# Variáveis em JavaScript

JavaScript tem três formas de declarar variáveis: var, let e const.

## Declarações:
- **let**: variável que pode mudar (escopo de bloco)
- **const**: constante (não pode ser reatribuída)
- **var**: forma antiga (evite usar)

## Tipos Primitivos:
- **number**: números (inteiros e decimais)
- **string**: texto
- **boolean**: true ou false
- **undefined**: valor não definido
- **null**: valor nulo intencionalmente
- **symbol**: identificador único (ES6)
- **bigint**: números muito grandes (ES2020)

## Tipos de Referência:
- **object**: objetos, arrays, funções`,
        code: `// Declaração de variáveis
let idade = 25;              // number
const nome = "João";         // string
let ativo = true;            // boolean
let indefinido;              // undefined
let nulo = null;             // null

// JavaScript é dinamicamente tipado
let valor = 42;              // number
valor = "agora é string";    // string
valor = true;                // boolean

// const não pode ser reatribuída
const PI = 3.14159;
// PI = 3.14; // Erro!

// Mas objetos const podem ser modificados
const pessoa = { nome: "Ana", idade: 30 };
pessoa.idade = 31; // OK!
pessoa.cidade = "São Paulo"; // OK!

// Verificando tipos
console.log(typeof idade);     // "number"
console.log(typeof nome);      // "string"
console.log(typeof ativo);     // "boolean"
console.log(typeof indefinido); // "undefined"
console.log(typeof nulo);      // "object" (peculiaridade do JS)

// Template literals (ES6)
const saudacao = \`Olá, \${nome}! Você tem \${idade} anos.\`;
console.log(saudacao);

// Conversões de tipo
const numeroString = "42";
const numero = Number(numeroString);  // 42
const texto = String(123);            // "123"
const booleano = Boolean(1);          // true

console.log(\`Conversões: \${numero}, \${texto}, \${booleano}\`);`,
        explanation: 'Use "let" para variáveis que podem mudar, "const" para constantes. Evite "var" em código moderno. JavaScript converte tipos automaticamente, mas é melhor ser explícito.',
        tips: [
          'Prefira const quando o valor não vai mudar',
          'Use let quando precisar reatribuir a variável',
          'Template literals (`) são mais legíveis que concatenação',
          'typeof null retorna "object" - é uma peculiaridade histórica do JavaScript'
        ],
        exercise: {
          description: 'Crie variáveis para informações pessoais e exiba-as formatadas.',
          starter: `// Crie variáveis para:
// - Seu nome (const)
// - Sua idade (let)
// - Se você é estudante (boolean)
// - Sua linguagem favorita (const)

// Seu código aqui

// Exiba as informações usando template literals
// Exemplo: console.log(\`Meu nome é \${nome}\`);`
        }
      }
    );
  } else if (module.id === 'cyber-basics') {
    lessons.push(
      {
        id: 'cyber-basics-1',
        title: 'Fundamentos de Cybersegurança',
        difficulty: 'Básico',
        featured: true,
        content: `# Introdução à Cybersegurança

A cybersegurança é a prática de proteger sistemas, redes e dados de ataques digitais. Em um mundo cada vez mais conectado, a segurança digital se tornou fundamental.

## Tríade CIA da Segurança:

### 🔒 Confidencialidade (Confidentiality)
- Garantir que informações sejam acessíveis apenas por pessoas autorizadas
- Exemplos: criptografia, controle de acesso, autenticação

### 🛡️ Integridade (Integrity)  
- Assegurar que dados não sejam alterados de forma não autorizada
- Exemplos: checksums, assinaturas digitais, controle de versão

### ⚡ Disponibilidade (Availability)
- Manter sistemas e dados acessíveis quando necessário
- Exemplos: backups, redundância, proteção contra DDoS

## Tipos Comuns de Ameaças:
- **Malware**: vírus, trojans, ransomware
- **Phishing**: engenharia social via email/sites falsos
- **Ataques de Força Bruta**: tentativas repetidas de login
- **SQL Injection**: exploração de vulnerabilidades em bancos de dados
- **Cross-Site Scripting (XSS)**: injeção de código malicioso em sites`,
        code: `# Exemplo: Verificação básica de senha
import hashlib
import re

def verificar_senha_segura(senha):
    """
    Verifica se uma senha atende critérios básicos de segurança
    Retorna: (bool, str) - (é_segura, mensagem)
    """
    
    # Critério 1: Comprimento mínimo
    if len(senha) < 8:
        return False, "Senha deve ter pelo menos 8 caracteres"
    
    # Critério 2: Deve conter maiúscula
    if not re.search(r'[A-Z]', senha):
        return False, "Senha deve conter pelo menos uma letra maiúscula"
    
    # Critério 3: Deve conter minúscula
    if not re.search(r'[a-z]', senha):
        return False, "Senha deve conter pelo menos uma letra minúscula"
    
    # Critério 4: Deve conter número
    if not re.search(r'[0-9]', senha):
        return False, "Senha deve conter pelo menos um número"
    
    # Critério 5: Deve conter caractere especial
    if not re.search(r'[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]', senha):
        return False, "Senha deve conter pelo menos um caractere especial"
    
    return True, "Senha segura!"

def hash_senha(senha):
    """
    Cria um hash seguro da senha usando SHA-256
    """
    return hashlib.sha256(senha.encode()).hexdigest()

# Testando senhas
senhas_teste = [
    "123456",           # Fraca
    "password",         # Fraca  
    "MinhaSenh@123",    # Forte
    "P@ssw0rd!",        # Forte
]

print("=== Análise de Senhas ===")
for senha in senhas_teste:
    segura, mensagem = verificar_senha_segura(senha)
    status = "✅ SEGURA" if segura else "❌ INSEGURA"
    
    print(f"Senha: {senha}")
    print(f"Status: {status}")
    print(f"Motivo: {mensagem}")
    
    if segura:
        hash_resultado = hash_senha(senha)
        print(f"Hash SHA-256: {hash_resultado[:20]}...")
    
    print("-" * 40)`,
        explanation: 'Senhas fortes são a primeira linha de defesa. Sempre use critérios rigorosos: comprimento mínimo, mistura de caracteres e nunca armazene senhas em texto plano - sempre use hash!',
        tips: [
          'Nunca armazene senhas em texto plano',
          'Use algoritmos de hash seguros como bcrypt ou Argon2',
          'Implemente autenticação de dois fatores quando possível',
          'Eduque usuários sobre senhas seguras'
        ],
        exercise: {
          description: 'Implemente um gerador de senhas seguras que atenda aos critérios de segurança.',
          starter: `import random
import string

def gerar_senha_segura(tamanho=12):
    """
    Gera uma senha segura com o tamanho especificado
    Deve conter: maiúscula, minúscula, número e símbolo
    """
    
    # Defina os conjuntos de caracteres
    # minusculas = string.ascii_lowercase
    # maiusculas = string.ascii_uppercase  
    # numeros = string.digits
    # simbolos = "!@#$%^&*"
    
    # Seu código aqui
    pass

# Teste sua função
senha = gerar_senha_segura(16)
print(f"Senha gerada: {senha}")

# Verifique se ela passa nos critérios de segurança`
        }
      }
    );
  }

  // Fill remaining lessons with placeholder content
  while (lessons.length < module.lessons) {
    const lessonNumber = lessons.length + 1;
    lessons.push({
      id: `${module.id}-${lessonNumber}`,
      title: `Lição ${lessonNumber} - ${module.title}`,
      difficulty: lessonNumber <= 5 ? 'Básico' : lessonNumber <= 15 ? 'Intermediário' : 'Avançado',
      content: `# Lição ${lessonNumber}: ${module.title}

Esta lição está sendo desenvolvida com conteúdo detalhado e exemplos práticos.

## O que você aprenderá:
- Conceitos fundamentais importantes
- Exemplos práticos e aplicáveis
- Exercícios para fixar o conhecimento
- Dicas e melhores práticas

## Conteúdo em desenvolvimento
Nossa equipe está preparando conteúdo de alta qualidade para esta lição, incluindo:
- Explicações detalhadas
- Códigos de exemplo funcionais
- Exercícios práticos
- Projetos reais

Continue explorando as outras lições disponíveis enquanto preparamos este conteúdo!`,
      code: `# Exemplo de código para a lição ${lessonNumber}
print("Esta lição está em desenvolvimento!")
print("Em breve teremos conteúdo completo aqui")

# Conceitos que serão abordados:
# - Tópico importante 1
# - Tópico importante 2  
# - Tópico importante 3

def exemplo_funcao():
    """
    Esta função será implementada com conteúdo real
    """
    return "Conteúdo em breve!"

resultado = exemplo_funcao()
print(resultado)`,
      explanation: '🚧 Esta lição está sendo desenvolvida com conteúdo completo e exemplos práticos. Em breve você terá acesso a explicações detalhadas, códigos funcionais e exercícios interativos!',
      tips: [
        'Continue praticando com as lições disponíveis',
        'Experimente o terminal interativo para testar códigos',
        'Explore os desafios práticos para aplicar seu conhecimento'
      ]
    });
  }

  return lessons;
};