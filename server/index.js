import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'koa-cors'

const app = new Koa()

app.use(
  cors({
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
  }),
)
app.use(bodyParser())
app.use(async (ctx) => {
  console.log(ctx.request.body)
})

app.listen(8080)