const Router = require('koa-router')
const database = require('database')

const router = Router()
router.get('/', async ctx => { ctx.status = 200 })

router.get('/id', async ctx => {
	const result = await database.query('SELECT * FROM test')
	const results = { testdaten: (result) ? result.rows : null }
	ctx.body = results
})

router.post('/id', async ctx => {
	await database.query('INSERT INTO test VALUES (42, \'Koa JS\')')
	ctx.status = 200
})

router.get('/id/:id', async ctx => {
	const result = await database.query ('SELECT * FROM test WHERE test1 = ' + ctx.params.id)
	const results = { test: (result) ? result.rows : null }
	ctx.body = results
})

router.delete('/id/:id', async ctx => {
	await database.query('DELETE FROM test WHERE test1 = ' + ctx.params.id)
	ctx.status = 200
})

module.exports = router
