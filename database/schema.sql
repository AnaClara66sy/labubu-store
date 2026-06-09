CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    serie VARCHAR(100) NOT NULL,
    preco NUMERIC(10,2) NOT NULL,
    quantidade_estoque INTEGER NOT NULL,
    imagem_url TEXT NOT NULL,
    descricao TEXT,
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    CHECK (preco >= 0),
    CHECK (quantidade_estoque >= 0)
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    total NUMERIC(10,2) NOT NULL DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'pendente',
    data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CHECK (total >= 0),
    CHECK (
        status IN (
            'pendente',
            'confirmado',
            'cancelado',
            'finalizado'
        )
    )
);

CREATE TABLE itens_pedidos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER NOT NULL,
    produto_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CHECK (quantidade > 0),
    CHECK (preco_unitario >= 0)
);

CREATE INDEX idx_produtos_nome
    ON produtos(nome);

CREATE INDEX idx_produtos_serie
    ON produtos(serie);

CREATE INDEX idx_pedidos_usuario
    ON pedidos(usuario_id);

CREATE INDEX idx_pedidos_status
    ON pedidos(status);

CREATE INDEX idx_itens_pedido
    ON itens_pedidos(pedido_id);

CREATE INDEX idx_itens_produto
    ON itens_pedidos(produto_id);