# quiniela-history

[![npm version](https://img.shields.io/npm/v/quiniela-history.svg)](https://www.npmjs.com/package/quiniela-history)
[![Travis branch](https://img.shields.io/travis/durancristhian/quiniela-history/master.svg?maxAge=2592000)](https://travis-ci.org/durancristhian/quiniela-history)
[![Dependency Status](https://dependencyci.com/github/durancristhian/quiniela-history/badge)](https://dependencyci.com/github/durancristhian/quiniela-history)
[![node](https://img.shields.io/node/v/quiniela-history.svg?maxAge=2592000)](https://www.npmjs.com/package/quiniela-history)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?maxAge=2592000)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![Greenkeeper badge](https://badges.greenkeeper.io/durancristhian/quiniela-history.svg)](https://greenkeeper.io/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000)](http://makeapullrequest.com)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/durancristhian/quiniela-history/blob/master/LICENSE)

:books: Module to obtain the results of the argentinian lotery.

## Instalation

```bash
# Use -g, --save or --save-dev. Whatever you need.
npm i quiniela-history
```

## Use

* As a CLI:

```bash
quiniela-history --from '2016-07-05' --to '2016-07-07'
```

* As any other npm module:

```javascript
const quinielaHistory = require('quiniela-history')
let opts = {
  emitLogs: true
}

quinielaHistory('2016-07-05', '2016-07-07', opts)
  .catch(error => console.error(error))
```

## Options

```javascript
{
  // false by default
  // always true if you're executing the CLI
  emitLogs: true
}
```

## How it works

1. It uses [quiniela-results](https://github.com/durancristhian/quiniela-results) to get the results of each day between `from` and `to` (including them).
2. It writes an array with all the results in `results.json`, located at the execution's directory. The content of the file looks like this:

```json
[{
  "date": "2016-07-04",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Sangre",
        "number": 3818
      },
      "matutina": {
        "meaning": "Gato",
        "number": 2505
      },
      "vespertina": {
        "meaning": "Muerto",
        "number": 3947
      },
      "nocturna": {
        "meaning": "Ahogado",
        "number": 5658
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "El Cerro",
        "number": 8328
      },
      "matutina": {
        "meaning": "Lombrices",
        "number": 9966
      },
      "vespertina": {
        "meaning": "Cristo",
        "number": 7033
      },
      "nocturna": {
        "meaning": "El pan",
        "number": 9950
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Linterna",
        "number": 2785
      },
      "matutina": {
        "meaning": "Muerto en sueño",
        "number": 6570
      },
      "vespertina": {
        "meaning": "La iglesia",
        "number": 5784
      },
      "nocturna": {
        "meaning": "Casamiento",
        "number": 18363
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Sangre",
        "number": 218
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Minero",
        "number": 5211
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "Loco",
        "number": 6422
      },
      "matutina": {
        "meaning": "La rata",
        "number": 3389
      },
      "vespertina": {
        "meaning": "Linterna",
        "number": 1685
      },
      "nocturna": {
        "meaning": "Ladrón",
        "number": 3079
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Arroyo",
        "number": 9109
      },
      "vespertina": {
        "meaning": "Hospital",
        "number": 873
      },
      "nocturna": {
        "meaning": "Ramera",
        "number": 2378
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "Serrucho",
        "number": 8351
      },
      "matutina": {
        "meaning": "Besos",
        "number": 7675
      },
      "vespertina": {
        "meaning": "Desgracia",
        "number": 6217
      },
      "nocturna": {
        "meaning": "Ladrón",
        "number": 3379
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Inundación",
        "number": 6062
      },
      "matutina": {
        "meaning": "Cocinero",
        "number": 6223
      },
      "vespertina": {
        "meaning": "Vicios",
        "number": 1769
      },
      "nocturna": {
        "meaning": "El pan",
        "number": 3150
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "El médico",
        "number": 5392
      },
      "matutina": {
        "meaning": "Soldado",
        "number": 912
      },
      "vespertina": {
        "meaning": "Ahogado",
        "number": 2058
      },
      "nocturna": {
        "meaning": "Pajarito",
        "number": 1235
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Ahogado",
        "number": 2258
      },
      "vespertina": {
        "meaning": "SanTa Rosa",
        "number": 4130
      },
      "nocturna": {
        "meaning": "Lavandera",
        "number": 3298
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "La bocha",
        "number": 8080
      },
      "matutina": {
        "meaning": "Ahogado",
        "number": 3458
      },
      "vespertina": {
        "meaning": "Dinero",
        "number": 3732
      },
      "nocturna": {
        "meaning": "Marido",
        "number": 5596
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 6170
      },
      "matutina": {
        "meaning": "Borracho",
        "number": 114
      },
      "vespertina": {
        "meaning": "Muerto en sueño",
        "number": 4270
      },
      "nocturna": {
        "meaning": "Pierna mujer",
        "number": 5977
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Piedras",
        "number": 1638
      },
      "matutina": {
        "meaning": "Cristo",
        "number": 7433
      },
      "vespertina": {
        "meaning": "Sobrinos",
        "number": 5968
      },
      "nocturna": {
        "meaning": "La cama",
        "number": 1504
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "El cuchillo",
        "number": 7341
      },
      "matutina": {
        "meaning": "El Cerro",
        "number": 4928
      },
      "vespertina": {
        "meaning": "El cazador",
        "number": 9965
      },
      "nocturna": {
        "meaning": "La caída",
        "number": 3356
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "La rata",
        "number": 6689
      },
      "matutina": {
        "meaning": "Muerto",
        "number": 1947
      },
      "vespertina": {
        "meaning": "Las flores",
        "number": 981
      },
      "nocturna": {
        "meaning": "Cristo",
        "number": 5833
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "La Fiesta",
        "number": 1920
      },
      "matutina": {
        "meaning": "Muerto en sueño",
        "number": 8670
      },
      "vespertina": {
        "meaning": "Casamiento",
        "number": 463
      },
      "nocturna": {
        "meaning": "El Cerro",
        "number": 128
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "Sangre",
        "number": 4218
      },
      "matutina": {
        "meaning": "Mal tiempo",
        "number": 4483
      },
      "vespertina": {
        "meaning": "La pelea",
        "number": 1782
      },
      "nocturna": {
        "meaning": "Gato",
        "number": 1005
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "El pan",
        "number": 3150
      },
      "matutina": {
        "meaning": "Mujer",
        "number": 2821
      },
      "vespertina": {
        "meaning": "Pajarito",
        "number": 7135
      },
      "nocturna": {
        "meaning": "Inundación",
        "number": 5662
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "Caballo",
        "number": 1624
      },
      "matutina": {
        "meaning": "El peine",
        "number": 7227
      },
      "vespertina": {
        "meaning": "Eucaliptus",
        "number": 5737
      },
      "nocturna": {
        "meaning": "Gente negra",
        "number": 1074
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Besos",
        "number": 2175
      },
      "vespertina": {
        "meaning": "El humo",
        "number": 2686
      },
      "nocturna": {
        "meaning": "Gallina",
        "number": 5725
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "El Cerro",
        "number": 128
      },
      "matutina": {
        "meaning": "Casamiento",
        "number": 463
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "La yeta",
        "number": 713
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2016-07-05",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "San Pedro",
        "number": 9129
      },
      "matutina": {
        "meaning": "La Luz",
        "number": 5431
      },
      "vespertina": {
        "meaning": "Mordida",
        "number": 7067
      },
      "nocturna": {
        "meaning": "Arroyo",
        "number": 6109
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "El cazador",
        "number": 5765
      },
      "matutina": {
        "meaning": "Cañon",
        "number": 8210
      },
      "vespertina": {
        "meaning": "Incendio",
        "number": 1208
      },
      "nocturna": {
        "meaning": "El vino",
        "number": 245
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Caballo",
        "number": 1924
      },
      "matutina": {
        "meaning": "El pan",
        "number": 2850
      },
      "vespertina": {
        "meaning": "La virgen",
        "number": 7960
      },
      "nocturna": {
        "meaning": "La Cabeza",
        "number": 37234
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "La pelea",
        "number": 2082
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Las flores",
        "number": 6481
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "El vino",
        "number": 1245
      },
      "matutina": {
        "meaning": "La virgen",
        "number": 5160
      },
      "vespertina": {
        "meaning": "Borracho",
        "number": 414
      },
      "nocturna": {
        "meaning": "SanTa Rosa",
        "number": 8130
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Castaña",
        "number": 5036
      },
      "vespertina": {
        "meaning": "Lavandera",
        "number": 5198
      },
      "nocturna": {
        "meaning": "Escopeta",
        "number": 3961
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "El Papa",
        "number": 1788
      },
      "matutina": {
        "meaning": "El cuchillo",
        "number": 241
      },
      "vespertina": {
        "meaning": "Ladrón",
        "number": 5279
      },
      "nocturna": {
        "meaning": "Mordida",
        "number": 3867
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Revolver",
        "number": 4507
      },
      "matutina": {
        "meaning": "Pescado",
        "number": 8519
      },
      "vespertina": {
        "meaning": "Castaña",
        "number": 3636
      },
      "nocturna": {
        "meaning": "Hermano",
        "number": 1499
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Lavandera",
        "number": 698
      },
      "matutina": {
        "meaning": "Incendio",
        "number": 8508
      },
      "vespertina": {
        "meaning": "Soldado",
        "number": 8612
      },
      "nocturna": {
        "meaning": "El miedo",
        "number": 9590
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Piojos",
        "number": 987
      },
      "vespertina": {
        "meaning": "SanTa Rosa",
        "number": 1330
      },
      "nocturna": {
        "meaning": "Niña Bonita",
        "number": 4715
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "Sorpresa",
        "number": 4472
      },
      "matutina": {
        "meaning": "Loco",
        "number": 8422
      },
      "vespertina": {
        "meaning": "El Cura",
        "number": 7140
      },
      "nocturna": {
        "meaning": "Desgracia",
        "number": 9617
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "El vino",
        "number": 745
      },
      "matutina": {
        "meaning": "La iglesia",
        "number": 7584
      },
      "vespertina": {
        "meaning": "Mordida",
        "number": 7967
      },
      "nocturna": {
        "meaning": "Anteojos",
        "number": 1895
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Cocinero",
        "number": 6023
      },
      "matutina": {
        "meaning": "La Cabeza",
        "number": 2934
      },
      "vespertina": {
        "meaning": "Sobrinos",
        "number": 4168
      },
      "nocturna": {
        "meaning": "Castaña",
        "number": 9836
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Hermano",
        "number": 4999
      },
      "matutina": {
        "meaning": "Anteojos",
        "number": 5295
      },
      "vespertina": {
        "meaning": "La vaca",
        "number": 654
      },
      "nocturna": {
        "meaning": "El anillo",
        "number": 4016
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "Agua",
        "number": 6001
      },
      "matutina": {
        "meaning": "Llanto",
        "number": 864
      },
      "vespertina": {
        "meaning": "Cañon",
        "number": 6610
      },
      "nocturna": {
        "meaning": "La música",
        "number": 8455
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "La pelea",
        "number": 6782
      },
      "matutina": {
        "meaning": "San Pedro",
        "number": 8429
      },
      "vespertina": {
        "meaning": "La carne",
        "number": 7149
      },
      "nocturna": {
        "meaning": "Piojos",
        "number": 7887
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "Ladrón",
        "number": 479
      },
      "matutina": {
        "meaning": "Piojos",
        "number": 5287
      },
      "vespertina": {
        "meaning": "La pelea",
        "number": 6882
      },
      "nocturna": {
        "meaning": "Desgracia",
        "number": 9617
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "Mordida",
        "number": 2667
      },
      "matutina": {
        "meaning": "Muerto en sueño",
        "number": 9470
      },
      "vespertina": {
        "meaning": "Muerto en sueño",
        "number": 9970
      },
      "nocturna": {
        "meaning": "El peine",
        "number": 8427
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "Sangre",
        "number": 8318
      },
      "matutina": {
        "meaning": "El pan",
        "number": 7550
      },
      "vespertina": {
        "meaning": "La Fiesta",
        "number": 8020
      },
      "nocturna": {
        "meaning": "Cristo",
        "number": 1633
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Gente negra",
        "number": 1374
      },
      "vespertina": {
        "meaning": "Huevos",
        "number": 8800
      },
      "nocturna": {
        "meaning": "Balcón",
        "number": 943
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "La caída",
        "number": 556
      },
      "matutina": {
        "meaning": "Muerto que habla",
        "number": 448
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Lombrices",
        "number": 766
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2016-07-06",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Soldado",
        "number": 812
      },
      "matutina": {
        "meaning": "Gente negra",
        "number": 4874
      },
      "vespertina": {
        "meaning": "Pajarito",
        "number": 3435
      },
      "nocturna": {
        "meaning": "Escopeta",
        "number": 7561
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "El humo",
        "number": 6186
      },
      "matutina": {
        "meaning": "El humo",
        "number": 4286
      },
      "vespertina": {
        "meaning": "Gato",
        "number": 9505
      },
      "nocturna": {
        "meaning": "Cañon",
        "number": 6110
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Balcón",
        "number": 4543
      },
      "matutina": {
        "meaning": "Pierna mujer",
        "number": 9477
      },
      "vespertina": {
        "meaning": "Ramera",
        "number": 6578
      },
      "nocturna": {
        "meaning": "Sangre",
        "number": 93918
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "El anillo",
        "number": 5316
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Marido",
        "number": 7896
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "Eucaliptus",
        "number": 4637
      },
      "matutina": {
        "meaning": "Piojos",
        "number": 9487
      },
      "vespertina": {
        "meaning": "Sangre",
        "number": 7218
      },
      "nocturna": {
        "meaning": "Castaña",
        "number": 8436
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Cocinero",
        "number": 623
      },
      "vespertina": {
        "meaning": "El humo",
        "number": 4886
      },
      "nocturna": {
        "meaning": "La iglesia",
        "number": 7384
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 8470
      },
      "matutina": {
        "meaning": "Las flores",
        "number": 4081
      },
      "vespertina": {
        "meaning": "Cocinero",
        "number": 5623
      },
      "nocturna": {
        "meaning": "El Cerro",
        "number": 30428
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Sobrinos",
        "number": 4768
      },
      "matutina": {
        "meaning": "La Luz",
        "number": 5031
      },
      "vespertina": {
        "meaning": "Marido",
        "number": 4596
      },
      "nocturna": {
        "meaning": "El Cura",
        "number": 9440
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Cañon",
        "number": 4810
      },
      "matutina": {
        "meaning": "Ladrón",
        "number": 279
      },
      "vespertina": {
        "meaning": "Besos",
        "number": 5675
      },
      "nocturna": {
        "meaning": "Vicios",
        "number": 1769
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Pajarito",
        "number": 8635
      },
      "vespertina": {
        "meaning": "Vicios",
        "number": 1769
      },
      "nocturna": {
        "meaning": "Minero",
        "number": 5711
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "Mesa",
        "number": 4397
      },
      "matutina": {
        "meaning": "Madre e Hijo",
        "number": 8352
      },
      "vespertina": {
        "meaning": "Inundación",
        "number": 8962
      },
      "nocturna": {
        "meaning": "Zapatillas",
        "number": 8142
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "Piojos",
        "number": 8787
      },
      "matutina": {
        "meaning": "La cama",
        "number": 8504
      },
      "vespertina": {
        "meaning": "Piojos",
        "number": 4487
      },
      "nocturna": {
        "meaning": "El anillo",
        "number": 9616
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Mesa",
        "number": 8297
      },
      "matutina": {
        "meaning": "Cañon",
        "number": 3910
      },
      "vespertina": {
        "meaning": "El Jorobado",
        "number": 6257
      },
      "nocturna": {
        "meaning": "Perro",
        "number": 1606
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Marido",
        "number": 2396
      },
      "matutina": {
        "meaning": "Gato",
        "number": 1705
      },
      "vespertina": {
        "meaning": "El barco",
        "number": 3453
      },
      "nocturna": {
        "meaning": "San Pedro",
        "number": 7429
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "Castaña",
        "number": 7136
      },
      "matutina": {
        "meaning": "Niño",
        "number": 8102
      },
      "vespertina": {
        "meaning": "La yeta",
        "number": 913
      },
      "nocturna": {
        "meaning": "El cuchillo",
        "number": 4241
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "La cárcel",
        "number": 3144
      },
      "matutina": {
        "meaning": "",
        "number": ""
      },
      "vespertina": {
        "meaning": "Mal tiempo",
        "number": 9883
      },
      "nocturna": {
        "meaning": "Muerto en sueño",
        "number": 2670
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "Sangre",
        "number": 4718
      },
      "matutina": {
        "meaning": "Ladrón",
        "number": 679
      },
      "vespertina": {
        "meaning": "La Fiesta",
        "number": 9320
      },
      "nocturna": {
        "meaning": "El cazador",
        "number": 2965
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "Borracho",
        "number": 7114
      },
      "matutina": {
        "meaning": "La pelea",
        "number": 1082
      },
      "vespertina": {
        "meaning": "La iglesia",
        "number": 984
      },
      "nocturna": {
        "meaning": "Cocinero",
        "number": 7823
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "La pelea",
        "number": 8782
      },
      "matutina": {
        "meaning": "Tomates",
        "number": 8046
      },
      "vespertina": {
        "meaning": "Revolver",
        "number": 2707
      },
      "nocturna": {
        "meaning": "La Fiesta",
        "number": 3320
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Enamorado",
        "number": 2893
      },
      "vespertina": {
        "meaning": "Linterna",
        "number": 3085
      },
      "nocturna": {
        "meaning": "Besos",
        "number": 6675
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "La carne",
        "number": 749
      },
      "matutina": {
        "meaning": "La bocha",
        "number": 880
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Pescado",
        "number": 619
      },
      "rawName": "La Rioja"
    }
  }
}]
```

## Contributing

No restriction at all. Feel free to contribute with whatever you want

## License

MIT
