import {expect, test} from '@jest/globals';
import { isEmailFormat } from '.';

test.each([
    "a@b.co",
    "ac@ema.co",
    "testing@email.com",
])('checks that email %s is valid', mail => {
    expect(isEmailFormat(mail)).toBe(true);
});

test.each([
    "xc",
    "ab.c",
    "ab@email",
    "@email.com",
])('checks that email %s not is valid', mail => {
    expect(isEmailFormat(mail)).toBe(false);
});