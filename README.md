
---

# 📘 SADC Traffic Signs API

API oficial para consulta de sinais de trânsito da região SADC.
Fornece dados estruturados para aplicações educativas, sistemas de formação de condução e quizzes interativos.

---

## 🚀 Base URL

```
https://SEU-DEPLOY.vercel.app/api
```

---

## 📦 Recursos Disponíveis

A API disponibiliza informações sobre sinais rodoviários organizados por categorias:

* 🟡 Perigo
* 🛑 Proibição
* 🟢 Obrigação
* 📌 Prescrição específica

---

## 🔗 Endpoints

### 📍 Listar todos os sinais

```
GET /sinais
```

#### ✔️ Exemplo de requisição

```
https://SEU-DEPLOY.vercel.app/api/sinais
```

#### 📤 Resposta

```json
[
  {
    "id": 1,
    "nome": "Stop",
    "tipo": "proibição",
    "descricao": "Obrigação de parar o veículo",
    "imagem": "https://..."
  }
]
```

---

### 🔍 Obter sinal por ID

```
GET /sinais/:id
```

#### ✔️ Exemplo

```
GET /sinais/1
```

#### 📤 Resposta

```json
{
  "id": 1,
  "nome": "Stop",
  "tipo": "proibição",
  "descricao": "Obrigação de parar o veículo",
  "imagem": "https://..."
}
```

---

### 🎯 Filtrar sinais por tipo

```
GET /sinais?tipo=perigo
```

#### Tipos disponíveis

| Tipo                  | Descrição                 |
| --------------------- | ------------------------- |
| perigo                | Sinais de alerta          |
| obrigação             | Regras obrigatórias       |
| proibição             | Ações proibidas           |
| prescrição-específica | Regulamentações especiais |

---

## 💡 Exemplos de uso

### JavaScript (Fetch API)

```javascript
fetch("https://SEU-DEPLOY.vercel.app/api/sinais")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

### React / Next.js

```javascript
useEffect(() => {
  fetch("/api/sinais")
    .then(res => res.json())
    .then(data => setSinais(data));
}, []);
```

---

## ⚙️ Tecnologias

* Next.js API Routes
* Node.js
* JSON como base de dados (mock/stático)
* Deploy via Vercel + GitHub

---

## 🌐 CORS

A API está configurada para acesso público:

```
Access-Control-Allow-Origin: *
```

---

## 📊 Status Codes

| Código | Significado              |
| ------ | ------------------------ |
| 200    | Requisição bem-sucedida  |
| 404    | Recurso não encontrado   |
| 500    | Erro interno do servidor |

---

## 🧠 Melhorias Futuras

* 🔐 Autenticação com API Key
* 📄 Paginação de resultados
* 🔎 Pesquisa por nome de sinal
* 🖼️ Otimização de imagens
* 📊 Dashboard administrativo

---

## 👨‍💻 Autor

Desenvolvido por ** (Rui Gomes)**
Fullstack Developer | API & Web Systems

---

## 📌 Nota

Esta API foi desenvolvida com fins educativos e pode ser expandida para sistemas de formação de condução e plataformas digitais de ensino.

---

## 🚀 Resultado final


---

