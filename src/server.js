 //
 const proffys = [{
     name: "Pedro Costa",
     avatar: "https://avatars1.githubusercontent.com/u/44477779?s=460&u=31199b614c8009b3313f6151d29af357e5c06cc1&v=4",
     whatsapp: "91383025",
     bio: "Entusiasta das melhores tecnologias de quimida avançada<br><br> Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas através da experiencia. Mais de 200.00 pessoas ja passaram por uma das minhas explosões",
     subject: "Quimica",
     cost: "20",
     weekday: [0],
     time_from: [720],
     time_to: [1220]
 }, {
     name: "Lucas Faria",
     avatar: "https://avatars0.githubusercontent.com/u/54821401?s=460&u=75442f777c8c39199489efd15c64cf1c17c224ae&v=4",
     whatsapp: "95383025",
     bio: "Entusiasta das melhores tecnologias de quimida avançada<br><br> Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas através da experiencia. Mais de 200.00 pessoas ja passaram por uma das minhas explosões",
     subject: "Educação Fisica",
     cost: "50",
     weekday: [1],
     time_from: [720],
     time_to: [1220]
 }]

 function pageLanding(req, res) {
     return res.render("index.html") // renderizar a home
 }

 function pageStudy(req, res) {
     return res.render("study.html", { proffys, title: "Hi from " })
 }

 function pageGiveClasses(req, res) {
     return res.render("give-classes.html")
 }

 // FAZEMOS O SERVIDOR PARA O BACKEND - E TAMBEM AS ROTAS DA NOSSA EXPLICAÇÃO
 const express = require('express')
 const server = express()

 //configurando nunjucks
 const nunjucks = require('nunjucks')
 nunjucks.configure('src/views', {
     express: server,
     noCache: true,
 })

 server
 // configurar arquivos estaticos (css, scripts, img)
     .use(express.static("public"))
     // rotas da aplicação
     .get("/", pageLanding)
     .get("/study", pageStudy)
     .get("/give-classes", pageGiveClasses)
     .listen(5500)

 // este codigo acima é todo nosso servidor que esta em nossa maquina ta PRONTO!!!