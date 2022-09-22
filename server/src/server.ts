// HTTP Codes ===> IMPORTANTE SABER

/* 
Tipos de Parametros

* Query: persistir estado - ?id=1
* Route: identificar algo 
* Body: Enciar várias informações em uma unica req

*/

import express from "express"
import { PrismaClient } from "@prisma/client"
import ConvertHourToMinutes from "./utils/convertHourToMinutes"
import ConvertMinutesToHour from "./utils/convertMinutesToHour"
var cors = require('cors')
const app = express()

// express não reconhece requests em json por padrão
// é necessário esta config
app.use(express.json())

const prisma = new PrismaClient({
  log: ['query']
})

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: { // conta quantos ads tem em cada game
      _count: {
        select: {
          ads: true
        }
      }
    }
  })
  return res.json(games)
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  const body: any = req.body

  const ad: any = await prisma.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: ConvertHourToMinutes(body.hourStart),
      hourEnd: ConvertHourToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel
    }
  })

  return res.status(201).json(body)
})

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true
    },
    where: {
      gameId
    }
  })
  return res.json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: ConvertMinutesToHour(ad.hourStart),
      hourEnd: ConvertMinutesToHour(ad.hourEnd)
    }
  }))
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id
  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })
  return res.json({
    discord: ad.discord,
  })
})

app.listen(3333)