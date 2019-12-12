const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const recAlg = require('../../FrontEnd/Scripts/Recs/recs')

chai.use(chaiHttp);

describe('recommendation algorithm', () => {
    purpose.value = 1;
    speed.value = 1;
    pricing.value = 1;
    videoQuality.value = 1;
    capacity.value = 1;

    describe('processor generator', () => {
        it('should return the correct processor', function() {
            recAlg.expect(processorRec()).to.eq('Intel Celeron')
        })
    })
    describe('size generator', () => {
        it('should return the correct size', function() {
            recAlg.expect(sizeRec()).to.eq('12.5')
        })
    })
    describe('storage generator', () => {
        it('should return the correct processor', function() {
            recAlg.expect(storageRec()).to.eq('64')
        })
    })
    describe('RAM generator', () => {
        it('should return the correct processor', function() {
            recAlg.expect(ramRec()).to.eq('2')
        })
    })
    describe('graphics generator', () => {
        it('should return the correct processor', function() {
            recAlg.expect(graphicsRec()).to.eq('Intel HD Graphics 500')
        })
    })
    purpose.value = 3;
    speed.value = 2;
    pricing.value = 3;
    videoQuality.value = 1;
    capacity.value = 2;
    describe('processor generator t2', () => {
        it('should return the correct processor', function() {
            recAlg.expect(processorRec()).to.eq('Intel Core i7')
        })
    })
    describe('size generator t2', () => {
        it('should return the correct size', function() {
            recAlg.expect(sizeRec()).to.eq('14')
        })
    })
    describe('storage generator t2', () => {
        it('should return the correct processor', function() {
            recAlg.expect(storageRec()).to.eq('256')
        })
    })
    describe('RAM generator t2', () => {
        it('should return the correct processor', function() {
            recAlg.expect(ramRec()).to.eq('8')
        })
    })
    describe('graphics generator t2', () => {
        it('should return the correct processor', function() {
            recAlg.expect(graphicsRec()).to.eq('Intel UHD Graphics 620')
        })
    })
})