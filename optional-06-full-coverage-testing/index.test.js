import { test } from 'node:test';
import assert from 'node:assert';
import sum  from './index.js';


test('harus mengembalikan hasil penjumlahan dua angka positif', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 5), 15);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(1, 0), 1);
});

test('harus mengembalikan 0 ketika salah satu input bukan angka', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum({}, 10), 0);
  assert.strictEqual(sum([], 5), 0);
  assert.strictEqual(sum(true, 1), 0);
});

test('harus mengembalikan 0 ketika salah satu input adalah angka negatif', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(2, -3), 0);
  assert.strictEqual(sum(-2, -3), 0);
});

test('harus mengembalikan 0 untuk kombinasi input yang tidak valid', () => {
  assert.strictEqual(sum(-1, '5'), 0);
  assert.strictEqual(sum('2', -3), 0);
  assert.strictEqual(sum(null, -3), 0);
  assert.strictEqual(sum(undefined, -5), 0);
});