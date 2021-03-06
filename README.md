
<h1 align="center">
<br>
  "foarte multumit"
</h1>

<p align="center">print all reviews on a product on emag</p>

<hr />
<br />


## 📚 Project Definition

Full web app for price tracking


## 🛠️ Features

Technologies used:

- ⚛️ **NextJs**
- ⚛️ **react-query**
- ⚛️ **redux**
- 🌐 **Docker** - Containerization sistem


## 🚀 Instalation
With docker, inside root folder: 
```sh
docker-compose up -d
```

## 💻 Development
- fill .env.local (NextJs load this file automaticaly) based on .env.example
- mandatory to update:
  APP_NAME=foartemultumit
  NEXT_PUBLIC_SERVER_API_URL=

## 💻 Deployment
- check if NEXT_PUBLIC_SERVER_API_URL is set

## Documentation
- https://headlessui.dev/react/disclosure


## TODO:
- [ ] sa fac tot background-ul fill cu gri pe pagina cu reviewuri
- [ ] sa adaug paginare pentru reviewuri (filtrarea sa tina cont si de paginare)
- [ ] add a git hook with build before merging to master
- [ ] sa sortez comentariile in functie de likeuri/data etc
- [ ] sa marchez cumva ce iconita de sortare a fost selectata, poate cu un background
- [ ] sa factot background-ul fill cu gri
- [ ] sa pun lazy loading pe review-uri cand sunt multe pe pagin, sa vad cum fac cu filtrarea in cazul asta
- [ ] sa adaug o pagina de admin, cu mongoDB
- [ ] sa adaug primary, secondary color la tema
- [ ] sa adaug sectiune cu sortarea review-urile in functie de tema
- [ ] implement wave + man yoga on first page on footer first page
- [ ] sa stilizez cuvintele gasite cu un  background, ca un label
- [x] sa persiste tema light/dark
- [x] topNavigation fix
- [x] sa extrag ce am nevoie din raspunsul emag
- [x] sa ma gandesc la o strategie pentru layout-uri diferite in functie de pagina
  https://simplernerd.com/nextjs-multiple-layouts/
  https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
  https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
  https://sampotter.me/tech/how-not-to-do-layouts-in-nextjs
  https://dev.to/ozanbolel/layout-persistence-in-next-js-107g
- [x] sa adaug redux ca sa tin comentariile in store si sa le pun in Sidebar
- [x] sa filtrez comentariile dupa un cuvant/parte din cuvant si sa colorez acel cuvant/parte din cuvant
- [x] adaug data comentariului
- [x] sa unific directoarele utils si misc
- [x] sa adaug validarea pe textfieldul de url cand apas pe search (ar trebuie sa aiba formatul https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/)
- [x] sa un un spinner pentru loading
- [x] api-ul pentru reviewuri accepta maxim 100 pe request ar trebui sa il impart in cate 100
- [x] inputul pentru filtrare sa il fac sticky sus
- [x] sa iau din url doar ce imi trebuie: https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/
- [x] sa refac url-ul venit , ar trebui sa fie de forma
    https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/
      url-ul poate sa aiba si forma
      https://www.emag.ro/telefon-mobil-samsung-galaxy-a32-dual-sim-128gb-4g-black-sm-a325fzkgeue/pd/D8DRHTMBM/?ref=hdr-favorite_products


## Testing
https://www.emag.ro/gel-booster-zilnic-vichy-mineral-89-cu-efect-de-hidratare-fortifiere-si-reumplere-cu-acid-hialuronic-50ml-3337875543248/pd/DTHDQFBBM/
https://www.emag.ro/televizor-led-star-light-60-cm-hd-clasa-f-24dm3500/pd/D1ZF82BBM/



