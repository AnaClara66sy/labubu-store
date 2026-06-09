# Coleções MongoDB – Labubu Store

## conversas

Armazena o histórico das conversas do chatbot.

Campos:

* usuario_id
* mensagens

  * role
  * content
  * timestamp
* criado_em
* atualizado_em

---

## logs_chatbot

Armazena logs das interações do chatbot.

Campos:

* usuario_id
* mensagem_usuario
* intencao_detectada
* produtos_retornados
* resposta_gerada
* tempo_resposta_ms
* timestamp

---

## preferencias_usuario

Armazena preferências utilizadas para personalização.

Campos:

* usuario_id
* series_interesse
* faixa_preco_maxima
* cores_preferidas
* atualizado_em

---

## produtos_consultados

Armazena estatísticas de consultas realizadas pelo chatbot.

Campos:

* produto_id
* vezes_consultado
* ultima_consulta

---

## notificacoes

Armazena notificações exibidas aos usuários.

Campos:

* usuario_id
* titulo
* mensagem
* lida
* criado_em

---

## cache_produtos

Armazena informações temporárias de produtos para agilizar respostas do chatbot.

Campos:

* produto_id
* nome
* serie
* preco
* estoque
* imagem_url
* descricao
* atualizado_em
