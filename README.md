
# bim-conectados-ouro

Diretório exclusivo de membros BIM Conectados Ouro, criado pela Conexão BIM para facilitar networking, visibilidade profissional e conexões estratégicas entre especialistas em BIM, engenharia, arquitetura e construção.

## Funcionalidades

- Cadastro, remoção e listagem de membros com links de LinkedIn e Instagram
- Todos os dados são salvos e sincronizados em tempo real usando **Firebase Realtime Database**
- Qualquer usuário vê a mesma lista de membros
- Exportação e importação de membros em JSON
- **Upload de foto de perfil**: Cole a URL da foto diretamente ou use avatares com iniciais

### Como obter URL da foto do LinkedIn

1. Acesse o perfil no LinkedIn
2. Clique com o botão direito na foto de perfil
3. Selecione "Copiar endereço da imagem" ou "Copy image address"
4. Cole a URL no campo "URL da foto" do formulário

### Como obter URL da foto do Instagram

1. Acesse o perfil no Instagram
2. Clique na foto de perfil para ampliá-la
3. Clique com o botão direito na imagem
4. Selecione "Copiar endereço da imagem" ou "Copy image address"
5. Cole a URL no campo "URL da foto" do formulário

## Como funciona

O sistema é 100% web, sem backend próprio. O banco de dados é fornecido gratuitamente pelo Firebase.

## Deploy no Vercel

### Passos para publicar:

1. **Acesse [vercel.com](https://vercel.com)** e faça login com sua conta GitHub
2. **Clique em "Add New Project"**
3. **Conecte seu repositório**: `Nucleo-SIEM/bim-conectados-ouro`
4. **Configure o projeto**:
   - **Framework Preset**: `Other`
   - **Root Directory**: `bim-conectados-ouro` (pasta que contém o HTML)
   - **Build Command**: Deixe vazio (é um site estático)
   - **Output Directory**: `.` (raiz da pasta)
5. **Clique em "Deploy"**
6. **Aguarde o deploy** - você receberá uma URL como `https://bim-conectados-ouro.vercel.app`

### ⚠️ Importante: Firebase Config

**NÃO HÁ INFORMAÇÕES SENSÍVEIS NO GITHUB** ✅

As credenciais do Firebase devem ser configuradas **diretamente no Vercel**, não no código.

#### Como configurar no Vercel:

1. **Após conectar o repositório no Vercel**, vá para **Settings > Environment Variables**
2. **Adicione estas variáveis** (use os valores reais do seu Firebase):

```
FIREBASE_API_KEY = AIzaSyBEmQ1QbWiE_ikIGg66vaw7Sev6QLmb2-E
FIREBASE_AUTH_DOMAIN = bim-conectados-ouro.firebaseapp.com
FIREBASE_DATABASE_URL = https://bim-conectados-ouro-default-rtdb.firebaseio.com
FIREBASE_PROJECT_ID = bim-conectados-ouro
FIREBASE_STORAGE_BUCKET = bim-conectados-ouro.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID = 1079293409808
FIREBASE_APP_ID = 1:1079293409808:web:f3aae3e70c6c90f8d2a895
FIREBASE_MEASUREMENT_ID = G-54HSRFZGBG
```

3. **No Vercel, clique em "Redeploy"** para aplicar as variáveis
4. **Teste o site** - o Firebase deve funcionar normalmente

#### Para desenvolvimento local:

- O arquivo `firebaseConfig.js` tem placeholders
- Para testar localmente, substitua os valores pelos reais temporariamente
- **Nunca commite** as credenciais reais!

### Netlify (Alternativa)

1. Crie uma conta em [https://app.netlify.com/](https://app.netlify.com/)
2. Clique em "Add new site" > "Import an existing project" ou arraste a pasta com o HTML.
3. O site será publicado e você receberá um link público.

## Banco de dados e segurança

Para proteger suas chaves do Firebase, **NÃO suba sua configuração para o GitHub**. Use variáveis de ambiente, especialmente ao usar Vercel:

### Passos recomendados

1. Copie o arquivo `firebase-config.example.js` para `firebase-config.js`.
2. NÃO suba `firebase-config.js` para o GitHub (já está no `.gitignore`).
3. No painel da Vercel, adicione as variáveis de ambiente:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_DATABASE_URL`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
4. No código, use sempre as variáveis de ambiente, nunca valores fixos.

Exemplo de uso seguro:

```js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

Assim, suas credenciais ficam protegidas e o deploy na Vercel funciona normalmente.

**Nota importante:** Como este projeto é HTML puro, as variáveis de ambiente não funcionam diretamente no navegador. Para usar variáveis de ambiente adequadamente, considere migrar para um framework como Next.js ou Vite. Se preferir manter HTML puro, use o arquivo `firebaseConfig.js` separado e não versionado.

Exemplo de uso seguro:

```js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

Assim, suas credenciais ficam protegidas e o deploy na Vercel funciona normalmente.
O arquivo HTML já está pronto para carregar essa configuração de forma segura.
