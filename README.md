
# bim-conectados-ouro

Diretório exclusivo de membros BIM Conectados Ouro, criado pela Conexão BIM para facilitar networking, visibilidade profissional e conexões estratégicas entre especialistas em BIM, engenharia, arquitetura e construção.

## Funcionalidades
- Cadastro, remoção e listagem de membros com links de LinkedIn e Instagram
- Todos os dados são salvos e sincronizados em tempo real usando **Firebase Realtime Database**
- Qualquer usuário vê a mesma lista de membros
- Exportação e importação de membros em JSON

## Como funciona
O sistema é 100% web, sem backend próprio. O banco de dados é fornecido gratuitamente pelo Firebase.

## Deploy gratuito
Você pode publicar este diretório em qualquer serviço de hospedagem estática, como **Vercel** ou **Netlify**:

### Vercel
1. Crie uma conta em https://vercel.com/
2. Clique em "Add New Project" e conecte seu repositório ou faça upload manual da pasta.
3. Escolha o diretório onde está o arquivo `bim-conectados-ouro.html`.
4. Em "Framework Preset", selecione "Other".
5. Em "Build and Output Settings", coloque como "output directory": `.` (ponto, para raiz).
6. Clique em "Deploy" e obtenha seu link público.

### Netlify
1. Crie uma conta em https://app.netlify.com/
2. Clique em "Add new site" > "Import an existing project" ou arraste a pasta com o HTML.
3. O site será publicado e você receberá um link público.

## Banco de dados
O projeto já está configurado para usar o Firebase. Se quiser usar outro banco, basta adaptar o código JS.

---
Desenvolvido por Conexão BIM
