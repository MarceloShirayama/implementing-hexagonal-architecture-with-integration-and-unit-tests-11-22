DELETE FROM hexa_arch_11_22.card_transaction;

CREATE schema hexa_arch_11_22;

DROP TABLE hexa_arch_11_22.card_transaction;

CREATE TABLE
  hexa_arch_11_22.card_transaction (
    card_number text,
    description text,
    amount NUMERIC,
    currency text,
    DATE TIMESTAMP
  );

INSERT INTO
  hexa_arch_11_22.card_transaction (card_number, description, amount, currency, DATE)
VALUES
  (
    '1234',
    'Mercado Livre',
    100,
    'BRL',
    '2023-07-01T10:00:00'
  ),
  (
    '1234',
    'Amazon',
    300,
    'USD',
    '2023-07-01T10:00:00'
  ),
  (
    '1234',
    'Submarino',
    50,
    'BRL',
    '2023-07-01T10:00:00'
  ),
  (
    '1234',
    'Extra',
    1000,
    'BRL',
    '2023-06-01T10:00:00'
  ),
  (
    '1234',
    'Google',
    50,
    'USD',
    '2023-06-01T10:00:00'
  );