
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


## TODO:
[] sa adaug redux ca sa tin comentariile in store si sa le pun in Sidebar
[] sa filtrez comentariile dupa un cuvant/parte din cuvant si sa colorez acel cuvant/parte din cuvant
[] adaug data comentariului
[] sa sortez comentariile in functie de likeuri/data etc
[] sa adaug validarea pe textfieldul de url cand apas pe search (ar trebuie sa aiba formatul https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/)
[] sa un un spinner pentru loading
[] sa adaug paginare pentru reviewuri (filtrarea sa tina cont si de paginare)
[] api-ul pentru reviewuri accepta maxim 100 pe request ar trebui sa il impart in cate 100
[] add a git hook with build before merging to master
[] inputul pentru filtrare sa il fac sticky sus
[] sa iau din url doar ce imi trebuie: https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/
[] sa refac url-ul venit , ar trebui sa fie de forma
    https://www.emag.ro/<titlu_telefon>/pd/<cod_produs>/
      url-ul poate sa aiba si forma
      https://www.emag.ro/telefon-mobil-samsung-galaxy-a32-dual-sim-128gb-4g-black-sm-a325fzkgeue/pd/D8DRHTMBM/?ref=hdr-favorite_products




