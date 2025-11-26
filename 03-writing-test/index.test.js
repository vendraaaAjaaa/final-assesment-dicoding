import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Mengembalikan hasil penjumlahan dua bilangan positif', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('Mengembalikan hasil penjumlahan dua bilangan negatif', () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test('Mengembalikan hasil penjumlahan bilangan positif dan negatif', () => {
  assert.strictEqual(sum(5, -3), 2);
});

test('Mengembalikan hasil penjumlahan dengan angka nol', () => {
  assert.strictEqual(sum(0, 7), 7);
  assert.strictEqual(sum(0, -4), -4);
  assert.strictEqual(sum(0, 0), 0);
});

test('Menangani penjumlahan bilangan desimal', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
  assert.strictEqual(sum(-1.1, 2.2), 1.1);
});

test('Menangani penjumlahan bilangan besar', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});

test('Mengembalikan nilai yang benar untuk berbagai kombinasi angka', () => {
  assert.strictEqual(sum(10, 20), 30);
  assert.strictEqual(sum(-10, 20), 10);
  assert.strictEqual(sum(10, -20), -10);
});