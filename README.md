# 🪆 Labubu Store

MVP de loja virtual de bonecos Labubu desenvolvido como projeto integrador da disciplina DAD 2026 — Instituto J&F Escola de Tecnologia.

---

## 👥 Integrantes

| Nome | Responsabilidade |
|---|---|
| [Seu Nome] | GitHub, Banco de dados (PostgreSQL + MongoDB), Chatbot com IA |
| Arthur | Frontend (JS Vanilla, HTML semântico, CSS, responsividade) |
| Eduardo | API (integração front ↔ back, endpoints) |
| Daniel | Apoio à API |

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Frontend | HTML5, CSS3, JavaScript Vanilla |
| Backend | Python + Flask |
| Banco relacional | PostgreSQL |
| Banco de documentos | MongoDB |
| Chatbot | Anthropic Claude API |
| Hospedagem | A definir (Vercel / Render / Railway) |

---

## ⚙️ Como rodar localmente

### Pré-requisitos
- Python 3.11+
- PostgreSQL instalado e rodando
- MongoDB instalado e rodando
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/labubu-store.git
cd labubu-store
```

### 2. Configure as variáveis de ambiente
```bash
cp .env.example .env
# Edite o .env com suas credenciais locais
```

### 3. Instale as dependências do backend
```bash
cd backend
pip install -r requirements.txt
```

### 4. Rode o banco de dados
```bash
# PostgreSQL — execute o schema
psql -U postgres -d labubu_store -f ../database/schema.sql

# MongoDB — inicia automaticamente com a aplicação
```

### 5. Inicie o servidor
```bash
python app.py
```

### 6. Abra o frontend
Abra o arquivo `frontend/index.html` diretamente no navegador ou use o Live Server do VS Code.

---

## 📁 Estrutura do projeto