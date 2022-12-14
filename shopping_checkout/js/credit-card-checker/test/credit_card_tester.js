// global  variables
import {expect} from 'chai';
import { validateCred, findInvalidCards, idInvalidCardCompanies } from '../main.js';

// getting data into required format.
const numberToArray = num => {
  // if (typeof(num) !== 'number') {
  //   return 'this isn\'t a number';
  // }
  num = Number(num);
  let numArray = num.toString().split('');
  return numArray;
};
// console.log('Testing number to array: ', numberToArray(2401238410));

const validCards = [];
const numbers = [
  '4716191986383028',    '4716069852168733',    '4485874847610478',
  '4539164834120152',    '4207593522101879',    '4363058041342040',
  '4716974667594827',    '4485211974486127',    '4539675243115996',
  '4539113091373517',    '4532824163325865',    '4716766370016266',
  '4539962198585658',    '2221664347455109',    '2720831386971868',
  '2720207913982175',    '5476909956841890',    '5301599828950663',
  '2720333818075699',    '2720512743443334',    '2720925409309302',
  '2221429739580892',    '5441119987645490',    '5266491366802246',
  '5404511770573670',    '2221723665594574',    '371520677705335',
  '344329965816505',     '346060215561520',     '340622350361945',
  '377834708688145',     '346470058560499',     '372624921499403',
  '374419892271651',     '378306188902220',     '348384165360180',
  '345286591816888',     '375281922906568',     '375621891782617',
  '62212643411442594',   '6405360246986500922', '6504679293450267394',
  '6011915201732946594', '6446578335506862755', '6530935157685001974',
  '6431457218607891261', '6441994800535474432', '6425701479540313021',
  '6221268718852582006', '6456255919452176523'
];
// turning numbers into digit arrays. Array in array.
numbers.forEach(val => {
  validCards.push(numberToArray(val));
});

describe('Credit card validator', function() {
  describe('validate Credit card', function() {
    it('Validates these credit cards correctly', function() {
      const returnedTests = [];
      validCards.forEach(card => {
        returnedTests.push(validateCred(card));
      });
      // is each result true?
      returnedTests.forEach(test => {
        expect(test).to.be.true;
      });
    });
  });

  describe('find invalid cards', function() {
    it('from a nested array of card nums, takes out the invalid ones', function() {

    });
  });

  describe('id card companies', function() {
    it('figures out what company issued a credit card', function() {

    });
  });
});
