use("labubu_store");

db.createCollection("conversas");
db.createCollection("logs_chatbot");
db.createCollection("preferencias_usuario");
db.createCollection("produtos_consultados");
db.createCollection("notificacoes");
db.createCollection("cache_produtos");

db.conversas.createIndex({ usuario_id: 1 });

db.logs_chatbot.createIndex({
    usuario_id: 1,
    timestamp: -1
});

db.preferencias_usuario.createIndex(
    { usuario_id: 1 },
    { unique: true }
);

db.produtos_consultados.createIndex({
    produto_id: 1
});

db.notificacoes.createIndex({
    usuario_id: 1,
    lida: 1
});

db.cache_produtos.createIndex(
    { produto_id: 1 },
    { unique: true }
);

db.conversas.insertOne({
    usuario_id: 1,
    mensagens: [
        {
            role: "user",
            content: "Quais Labubus vocês têm disponíveis?",
            timestamp: new Date()
        },
        {
            role: "assistant",
            content: "Temos diversos modelos disponíveis em estoque.",
            timestamp: new Date()
        }
    ],
    criado_em: new Date(),
    atualizado_em: new Date()
});

db.logs_chatbot.insertOne({
    usuario_id: 1,
    mensagem_usuario: "Quais Labubus vocês têm disponíveis?",
    intencao_detectada: "consulta_produtos",
    produtos_retornados: [1, 2],
    resposta_gerada: true,
    tempo_resposta_ms: 824,
    timestamp: new Date()
});

db.preferencias_usuario.insertOne({
    usuario_id: 1,
    series_interesse: [
        "Exciting Macaron",
        "Have a Seat"
    ],
    faixa_preco_maxima: 250,
    cores_preferidas: [
        "rosa",
        "azul"
    ],
    atualizado_em: new Date()
});

db.produtos_consultados.insertMany([
    {
        produto_id: 1,
        vezes_consultado: 5,
        ultima_consulta: new Date()
    },
    {
        produto_id: 2,
        vezes_consultado: 2,
        ultima_consulta: new Date()
    }
]);

db.notificacoes.insertOne({
    usuario_id: 1,
    titulo: "Pedido confirmado",
    mensagem: "Seu pedido foi confirmado com sucesso.",
    lida: false,
    criado_em: new Date()
});

db.cache_produtos.insertMany([
    {
        produto_id: 1,
        nome: "Labubu Exciting Macaron",
        serie: "Exciting Macaron",
        preco: 189.90,
        estoque: 12,
        imagem_url: "https://exemplo.com/labubu-macaron.jpg",
        descricao: "Labubu da coleção Exciting Macaron.",
        atualizado_em: new Date()
    },
    {
        produto_id: 2,
        nome: "Labubu Have a Seat",
        serie: "Have a Seat",
        preco: 219.90,
        estoque: 7,
        imagem_url: "https://exemplo.com/labubu-have-a-seat.jpg",
        descricao: "Labubu da coleção Have a Seat.",
        atualizado_em: new Date()
    }
]);

print("MongoDB labubu_store inicializado com sucesso.");
print("Coleções criadas:");
print("- conversas");
print("- logs_chatbot");
print("- preferencias_usuario");
print("- produtos_consultados");
print("- notificacoes");
print("- cache_produtos");