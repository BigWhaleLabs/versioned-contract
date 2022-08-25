import { ethers } from 'hardhat'
import { expect } from 'chai'

describe('Versioned contract tests', () => {
  before(async function () {
    this.version = '0.0.1'
    this.factory = await ethers.getContractFactory('Versioned')
    this.contract = await this.factory.deploy(this.version)
    await this.contract.deployed()
  })

  describe('Constructor', function () {
    it('should deploy the contract with the correct fields', async function () {
      expect(await this.contract.version()).to.equal(this.version)
    })
  })
})
