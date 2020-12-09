const { assert } = require('chai')
const { Item } = require('react-bootstrap/lib/Breadcrumb')
const _deploy_contracts = require('../migrations/2_deploy_contracts')

const DaiToken = artifacts.require('DaiToken')
const DappToken = artifacts.require('DappToken')
const TokenFarm = artifacts.require('TokenFarm')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('TokenFarm', (accounts) => {

    describe('Mock Dai deployment', async () => {
        Item('has a name', async () => {
            let daiToken = await DaiToken.new()
            assert.equal(name, 'Mock Dai Token')
        })
    })
})