const db = require('../data/dbConfig.js')
const hobbitsDb = require('./hobbitsModel.js')

describe('hobbits model', () => {


    describe('insert()', () => {
        afterEach(async () => {
            await db('hobbits').truncate()
        })
    
        it('should insert the provided hobbits into the db', async () => {
            await hobbitsDb.insert({ name: 'gaffer' })
            await hobbitsDb.insert({ name: 'Bart' })

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })

        it('should insert the provided hobbit into the db', async () => {
           let hobbit = await hobbitsDb.insert({ name: 'gaffer' })
            expect(hobbit.name).toBe('gaffer')

            hobbit = await hobbitsDb.insert({ name: 'sam' })
            expect(hobbit.name).toBe('sam')
        })
    })


})