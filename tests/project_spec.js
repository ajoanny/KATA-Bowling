const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project Test', () => {

    const project = new Project()

    context('When there is no spare and strike', () => {
        it('should return 0 when no pin has been knocked down', () => {
            // given
            const listOfKnockedPins = [0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]
            // when
            const score = project.calculateScore(listOfKnockedPins)
            // then
            expect(score).to.equal(0)
        })

        it('should return 10 when 10 pins have been knocked down', () => {
            // given
            const listOfKnockedPins = [0,2, 0,0, 0,1, 0,0, 0,5, 0,0, 1,0, 1,0, 0,0, 0,0]
            // when
            const score = project.calculateScore(listOfKnockedPins)
            // then
            expect(score).to.equal(10)
        })
    })

    context('When there is one strike', () => {
        it('should return 12 when there is a strike', () => {
            // given
            const listOfKnockedPins = [0,0, 10, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]
            // when
            const score = project.calculateScore(listOfKnockedPins)
            // then
            expect(score).to.equal(12)
        })
    })

    context('When there is one spare', () => {
        it('should return 10 when there is a spare', () => {
            // given
            const listOfKnockedPins = [0,0, 5,5, 4,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]
            // when
            const score = project.calculateScore(listOfKnockedPins)
            // then
            expect(score).to.equal(18)
        })
    })
})
