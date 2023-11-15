# MVC+P Utilizando NodeJs

## Introdução
O projeto Node.js CRUD Alunos foi desenvolvido para demonstrar um aplicativo web simples utilizando o padrão MVC (Model-View-Controller) para realizar operações CRUD (Create, Read, Update, Delete) em registros de alunos em um banco de dados MySQL.

## Pré-Requisitos
Antes de iniciar a instalação, certifique-se de que o Node.js e o MySQL estejam instalados em seu sistema.
 - NodeJS
 - MySql

## Instalação
1.	Clone ou faça download do projeto no repositório.
 'git clone https://github.com/AlessanBass/MVC-P_Engenharia_De_Software/tree/master'
1.	Navegue até o diretório do projeto.
'cd nome-do-diretório'

1.	Execute o comando install para instalar as dependências do projeto.
'npm install'
## Configuração do Banco de Dados
1.	Crie um banco de dados MySQL chamado universidade.
1.	Execute o seguinte script SQL para criar a tabela aluno com as colunas id, nome, matricula e universidade.
'''
CREATE TABLE aluno (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  matricula VARCHAR(255) UNIQUE NOT NULL,
  universidade VARCHAR(255) NOT NULL
);
'''

## Configuração do Projeto
Abra o arquivo alunoModel.js (encontrado na pasta models) e edite as configurações do banco de dados conforme suas credenciais MySQL.
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu-usuario-mysql',
    password: 'sua-senha',
    database: 'universidade'
  });

## Execução
Execute o aplicativo usando o seguinte comando:
'node app.js'
Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

##	Uso da Aplicação
1.	Na página inicial, você verá uma lista de alunos cadastrados.
1.	Para adicionar um novo aluno, clique em "Adicionar Aluno" e preencha o formulário.
1.	Para editar um aluno existente, clique em no símbolo correspondente a uma caneta ao lado do aluno desejado e faça as alterações.
1.	Para excluir um aluno, clique na lixeira ao lado do aluno desejado.

## Considerações Finais
O projeto Node.js CRUD Alunos é um exemplo básico que pode ser utilizado como ponto de partida para o desenvolvimento de aplicativos mais complexos. Sinta-se à vontade para modificar e expandir o código conforme necessário.
Este relatório fornece instruções claras sobre como instalar, configurar e executar o projeto Node.js CRUD Alunos. Siga os passos mencionados acima para explorar e entender a estrutura básica de um aplicativo Node.js usando o padrão MVC.
