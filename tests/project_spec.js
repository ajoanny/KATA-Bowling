const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon')
const Project = require('../app/project.js');

describe('Project Test', () => {

    const project = new Project()

    context('Expect', () => {
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
})
