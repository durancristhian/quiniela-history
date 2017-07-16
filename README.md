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
quiniela-history --from '2017-07-10' --to '2017-07-14'
```

* As any other npm module:

```javascript
const quinielaHistory = require('quiniela-history')
let opts = {
  emitLogs: true
}

quinielaHistory('2016-07-10', '2016-07-14', opts)
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
  "date": "2017-07-10",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Ramera",
        "number": 978
      },
      "matutina": {
        "meaning": "Excremento",
        "number": 4371
      },
      "vespertina": {
        "meaning": "La pelea",
        "number": 5882
      },
      "nocturna": {
        "meaning": "Revolver",
        "number": 9507
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "La cama",
        "number": 5904
      },
      "matutina": {
        "meaning": "Soldado",
        "number": 8112
      },
      "vespertina": {
        "meaning": "El miedo",
        "number": 490
      },
      "nocturna": {
        "meaning": "Enamorado",
        "number": 2193
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Pescado",
        "number": 6619
      },
      "matutina": {
        "meaning": "Incendio",
        "number": 408
      },
      "vespertina": {
        "meaning": "San Cono",
        "number": 4603
      },
      "nocturna": {
        "meaning": "La caída",
        "number": 98556
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Borracho",
        "number": 3714
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "La Cabeza",
        "number": 9534
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 3370
      },
      "matutina": {
        "meaning": "Vicios",
        "number": 6269
      },
      "vespertina": {
        "meaning": "San Cono",
        "number": 303
      },
      "nocturna": {
        "meaning": "Anteojos",
        "number": 4595
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "La yeta",
        "number": 9413
      },
      "vespertina": {
        "meaning": "Castaña",
        "number": 2136
      },
      "nocturna": {
        "meaning": "El peine",
        "number": 2427
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "Llanto",
        "number": 4164
      },
      "matutina": {
        "meaning": "La Misa",
        "number": 2126
      },
      "vespertina": {
        "meaning": "Excusado",
        "number": 7291
      },
      "nocturna": {
        "meaning": "Sorpresa",
        "number": 9172
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Caballo",
        "number": 8124
      },
      "matutina": {
        "meaning": "Hermano",
        "number": 4599
      },
      "vespertina": {
        "meaning": "Tomates",
        "number": 2446
      },
      "nocturna": {
        "meaning": "Muerto",
        "number": 547
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "El Cerro",
        "number": 3728
      },
      "matutina": {
        "meaning": "Piedras",
        "number": 6138
      },
      "vespertina": {
        "meaning": "Madre e Hijo",
        "number": 6752
      },
      "nocturna": {
        "meaning": "Eucaliptus",
        "number": 7437
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "La rata",
        "number": 989
      },
      "matutina": {
        "meaning": "La caída",
        "number": 6356
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Agua",
        "number": 701
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "Huevos",
        "number": 6800
      },
      "matutina": {
        "meaning": "Gato",
        "number": 705
      },
      "vespertina": {
        "meaning": "El anillo",
        "number": 9516
      },
      "nocturna": {
        "meaning": "Anteojos",
        "number": 2895
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "Incendio",
        "number": 1508
      },
      "matutina": {
        "meaning": "Perro",
        "number": 1106
      },
      "vespertina": {
        "meaning": "La caída",
        "number": 1156
      },
      "nocturna": {
        "meaning": "Inundación",
        "number": 4162
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Balcón",
        "number": 4143
      },
      "matutina": {
        "meaning": "La virgen",
        "number": 7160
      },
      "vespertina": {
        "meaning": "Cocinero",
        "number": 1523
      },
      "nocturna": {
        "meaning": "Cocinero",
        "number": 5823
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Tomates",
        "number": 3546
      },
      "matutina": {
        "meaning": "Inundación",
        "number": 8162
      },
      "vespertina": {
        "meaning": "Gallina",
        "number": 3925
      },
      "nocturna": {
        "meaning": "San Pedro",
        "number": 5829
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "Caballo",
        "number": 7824
      },
      "matutina": {
        "meaning": "El médico",
        "number": 7192
      },
      "vespertina": {
        "meaning": "El médico",
        "number": 9592
      },
      "nocturna": {
        "meaning": "El pan",
        "number": 7350
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "El Papa",
        "number": 5788
      },
      "matutina": {
        "meaning": "El cazador",
        "number": 2365
      },
      "vespertina": {
        "meaning": "Lombrices",
        "number": 4366
      },
      "nocturna": {
        "meaning": "Inundación",
        "number": 762
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "Niño",
        "number": 4802
      },
      "matutina": {
        "meaning": "Pescado",
        "number": 8819
      },
      "vespertina": {
        "meaning": "Caballo",
        "number": 9824
      },
      "nocturna": {
        "meaning": "Mal tiempo",
        "number": 9883
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "San Cono",
        "number": 103
      },
      "matutina": {
        "meaning": "Enamorado",
        "number": 9793
      },
      "vespertina": {
        "meaning": "El cuchillo",
        "number": 9541
      },
      "nocturna": {
        "meaning": "San Cono",
        "number": 9203
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Mordida",
        "number": 3667
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Revolver",
        "number": 2507
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Castaña",
        "number": 6536
      },
      "vespertina": {
        "meaning": "SanTa Rosa",
        "number": 130
      },
      "nocturna": {
        "meaning": "La vaca",
        "number": 3554
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "Pescado",
        "number": 619
      },
      "matutina": {
        "meaning": "Incendio",
        "number": 408
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "La caída",
        "number": 556
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2017-07-11",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Pescado",
        "number": 8019
      },
      "matutina": {
        "meaning": "Madre e Hijo",
        "number": 7252
      },
      "vespertina": {
        "meaning": "Arroyo",
        "number": 209
      },
      "nocturna": {
        "meaning": "Marido",
        "number": 8996
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "Castaña",
        "number": 636
      },
      "matutina": {
        "meaning": "Dinero",
        "number": 6732
      },
      "vespertina": {
        "meaning": "Minero",
        "number": 3211
      },
      "nocturna": {
        "meaning": "La caída",
        "number": 4956
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 5670
      },
      "matutina": {
        "meaning": "Desgracia",
        "number": 217
      },
      "vespertina": {
        "meaning": "El Cura",
        "number": 9840
      },
      "nocturna": {
        "meaning": "Perro",
        "number": 71706
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Marido",
        "number": 3096
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Gente negra",
        "number": 8574
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "El cazador",
        "number": 5065
      },
      "matutina": {
        "meaning": "SanTa Rosa",
        "number": 5630
      },
      "vespertina": {
        "meaning": "Gallina",
        "number": 8625
      },
      "nocturna": {
        "meaning": "Soldado",
        "number": 9212
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Lavandera",
        "number": 5298
      },
      "vespertina": {
        "meaning": "Mujer",
        "number": 5121
      },
      "nocturna": {
        "meaning": "Agua",
        "number": 5501
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "Las llamas",
        "number": 7076
      },
      "matutina": {
        "meaning": "Niño",
        "number": 1602
      },
      "vespertina": {
        "meaning": "Las plantas",
        "number": 5959
      },
      "nocturna": {
        "meaning": "Pajarito",
        "number": 8635
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "El Jorobado",
        "number": 5357
      },
      "matutina": {
        "meaning": "Mujer",
        "number": 9421
      },
      "vespertina": {
        "meaning": "Mordida",
        "number": 8267
      },
      "nocturna": {
        "meaning": "La cama",
        "number": 904
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Gallina",
        "number": 4125
      },
      "matutina": {
        "meaning": "La vaca",
        "number": 8954
      },
      "vespertina": {
        "meaning": "La vaca",
        "number": 3354
      },
      "nocturna": {
        "meaning": "El Cura",
        "number": 640
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "Agua",
        "number": 6201
      },
      "matutina": {
        "meaning": "",
        "number": ""
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "San Cono",
        "number": 8403
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "La caída",
        "number": 4856
      },
      "matutina": {
        "meaning": "Arroyo",
        "number": 9309
      },
      "vespertina": {
        "meaning": "La Cabeza",
        "number": 4334
      },
      "nocturna": {
        "meaning": "Niño",
        "number": 1202
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "Lluvia",
        "number": 339
      },
      "matutina": {
        "meaning": "El médico",
        "number": 3892
      },
      "vespertina": {
        "meaning": "El vino",
        "number": 8045
      },
      "nocturna": {
        "meaning": "Casamiento",
        "number": 2963
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Ramera",
        "number": 7278
      },
      "matutina": {
        "meaning": "El Cura",
        "number": 4740
      },
      "vespertina": {
        "meaning": "SanTa Rosa",
        "number": 5230
      },
      "nocturna": {
        "meaning": "Niña Bonita",
        "number": 8315
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Soldado",
        "number": 7112
      },
      "matutina": {
        "meaning": "Serrucho",
        "number": 6251
      },
      "vespertina": {
        "meaning": "La vaca",
        "number": 8554
      },
      "nocturna": {
        "meaning": "Cementerio",
        "number": 994
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "San Cono",
        "number": 6403
      },
      "matutina": {
        "meaning": "El peine",
        "number": 5827
      },
      "vespertina": {
        "meaning": "El médico",
        "number": 7992
      },
      "nocturna": {
        "meaning": "El barco",
        "number": 3453
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "Gallina",
        "number": 7225
      },
      "matutina": {
        "meaning": "Soldado",
        "number": 8112
      },
      "vespertina": {
        "meaning": "La Fiesta",
        "number": 9220
      },
      "nocturna": {
        "meaning": "Ramera",
        "number": 4778
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "SanTa Rosa",
        "number": 9830
      },
      "matutina": {
        "meaning": "Agua",
        "number": 7101
      },
      "vespertina": {
        "meaning": "Lombrices",
        "number": 2766
      },
      "nocturna": {
        "meaning": "Niño",
        "number": 1202
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "Madre e Hijo",
        "number": 652
      },
      "matutina": {
        "meaning": "Balcón",
        "number": 8443
      },
      "vespertina": {
        "meaning": "Mesa",
        "number": 9797
      },
      "nocturna": {
        "meaning": "Niña Bonita",
        "number": 6615
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Borracho",
        "number": 6014
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Inundación",
        "number": 3662
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Cañon",
        "number": 8210
      },
      "vespertina": {
        "meaning": "Enamorado",
        "number": 2293
      },
      "nocturna": {
        "meaning": "Excremento",
        "number": 2771
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 670
      },
      "matutina": {
        "meaning": "Desgracia",
        "number": 217
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Perro",
        "number": 706
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2017-07-12",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Madre e Hijo",
        "number": 3652
      },
      "matutina": {
        "meaning": "Anteojos",
        "number": 5095
      },
      "vespertina": {
        "meaning": "Anteojos",
        "number": 495
      },
      "nocturna": {
        "meaning": "La carne",
        "number": 3849
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "El barco",
        "number": 9553
      },
      "matutina": {
        "meaning": "La Cabeza",
        "number": 7634
      },
      "vespertina": {
        "meaning": "Casamiento",
        "number": 3063
      },
      "nocturna": {
        "meaning": "Las llamas",
        "number": 8876
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Muerto",
        "number": 5247
      },
      "matutina": {
        "meaning": "Niño",
        "number": 602
      },
      "vespertina": {
        "meaning": "Caballo",
        "number": 4124
      },
      "nocturna": {
        "meaning": "Besos",
        "number": 58275
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Hermano",
        "number": 199
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "El cuchillo",
        "number": 3141
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "Muerto que habla",
        "number": 3648
      },
      "matutina": {
        "meaning": "La cárcel",
        "number": 2544
      },
      "vespertina": {
        "meaning": "Madre e Hijo",
        "number": 4852
      },
      "nocturna": {
        "meaning": "Serrucho",
        "number": 4851
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Ahogado",
        "number": 258
      },
      "vespertina": {
        "meaning": "La bocha",
        "number": 4880
      },
      "nocturna": {
        "meaning": "Linterna",
        "number": 7085
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "Cementerio",
        "number": 5094
      },
      "matutina": {
        "meaning": "Serrucho",
        "number": 3151
      },
      "vespertina": {
        "meaning": "San Cono",
        "number": 5203
      },
      "nocturna": {
        "meaning": "Muerto que habla",
        "number": 4448
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Perro",
        "number": 206
      },
      "matutina": {
        "meaning": "Agua",
        "number": 101
      },
      "vespertina": {
        "meaning": "Revolver",
        "number": 8607
      },
      "nocturna": {
        "meaning": "La rata",
        "number": 9289
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Ahogado",
        "number": 658
      },
      "matutina": {
        "meaning": "Pajarito",
        "number": 5535
      },
      "vespertina": {
        "meaning": "Niño",
        "number": 302
      },
      "nocturna": {
        "meaning": "La yeta",
        "number": 1213
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "Sorpresa",
        "number": 4772
      },
      "matutina": {
        "meaning": "La yeta",
        "number": 8913
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Piojos",
        "number": 487
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "El Cura",
        "number": 5340
      },
      "matutina": {
        "meaning": "Mordida",
        "number": 6167
      },
      "vespertina": {
        "meaning": "Las flores",
        "number": 7881
      },
      "nocturna": {
        "meaning": "San Cono",
        "number": 7103
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "Borracho",
        "number": 3614
      },
      "matutina": {
        "meaning": "Gato",
        "number": 8205
      },
      "vespertina": {
        "meaning": "Cañon",
        "number": 1210
      },
      "nocturna": {
        "meaning": "Tomates",
        "number": 2946
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Cocinero",
        "number": 623
      },
      "matutina": {
        "meaning": "Mujer",
        "number": 1421
      },
      "vespertina": {
        "meaning": "El pan",
        "number": 4650
      },
      "nocturna": {
        "meaning": "El anillo",
        "number": 1916
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Lombrices",
        "number": 8266
      },
      "matutina": {
        "meaning": "Pajarito",
        "number": 4435
      },
      "vespertina": {
        "meaning": "Caballo",
        "number": 3724
      },
      "nocturna": {
        "meaning": "La Fiesta",
        "number": 7420
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "Las flores",
        "number": 3381
      },
      "matutina": {
        "meaning": "Llanto",
        "number": 2464
      },
      "vespertina": {
        "meaning": "Inundación",
        "number": 6562
      },
      "nocturna": {
        "meaning": "Lluvia",
        "number": 3339
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "Excremento",
        "number": 3771
      },
      "matutina": {
        "meaning": "La caída",
        "number": 5156
      },
      "vespertina": {
        "meaning": "Piojos",
        "number": 4987
      },
      "nocturna": {
        "meaning": "El Cura",
        "number": 8040
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "La iglesia",
        "number": 84
      },
      "matutina": {
        "meaning": "El Cerro",
        "number": 2528
      },
      "vespertina": {
        "meaning": "La bocha",
        "number": 8780
      },
      "nocturna": {
        "meaning": "Caballo",
        "number": 3624
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "Cementerio",
        "number": 7094
      },
      "matutina": {
        "meaning": "El miedo",
        "number": 3190
      },
      "vespertina": {
        "meaning": "Niña Bonita",
        "number": 9415
      },
      "nocturna": {
        "meaning": "Muerto",
        "number": 7947
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "Gallina",
        "number": 2825
      },
      "matutina": {
        "meaning": "Piedras",
        "number": 2938
      },
      "vespertina": {
        "meaning": "El Cerro",
        "number": 3728
      },
      "nocturna": {
        "meaning": "La iglesia",
        "number": 2884
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Lavandera",
        "number": 6498
      },
      "vespertina": {
        "meaning": "La iglesia",
        "number": 5684
      },
      "nocturna": {
        "meaning": "Gallina",
        "number": 125
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "Muerto",
        "number": 247
      },
      "matutina": {
        "meaning": "Niño",
        "number": 602
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Besos",
        "number": 275
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2017-07-13",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "La Cabeza",
        "number": 6934
      },
      "matutina": {
        "meaning": "La bocha",
        "number": 3980
      },
      "vespertina": {
        "meaning": "SanTa Rosa",
        "number": 1430
      },
      "nocturna": {
        "meaning": "Cristo",
        "number": 6133
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "El vino",
        "number": 3645
      },
      "matutina": {
        "meaning": "Pajarito",
        "number": 1435
      },
      "vespertina": {
        "meaning": "Hermano",
        "number": 5299
      },
      "nocturna": {
        "meaning": "Cristo",
        "number": 533
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Perro",
        "number": 7606
      },
      "matutina": {
        "meaning": "Escopeta",
        "number": 9561
      },
      "vespertina": {
        "meaning": "Lombrices",
        "number": 2366
      },
      "nocturna": {
        "meaning": "Pescado",
        "number": 68319
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Linterna",
        "number": 8285
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Pierna mujer",
        "number": 6077
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "Serrucho",
        "number": 4851
      },
      "matutina": {
        "meaning": "La carne",
        "number": 2149
      },
      "vespertina": {
        "meaning": "Zapatillas",
        "number": 3942
      },
      "nocturna": {
        "meaning": "Tomates",
        "number": 2946
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Agua",
        "number": 501
      },
      "vespertina": {
        "meaning": "Cocinero",
        "number": 7023
      },
      "nocturna": {
        "meaning": "SanTa Rosa",
        "number": 5930
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "La cárcel",
        "number": 7544
      },
      "matutina": {
        "meaning": "Agua",
        "number": 6801
      },
      "vespertina": {
        "meaning": "Excremento",
        "number": 8971
      },
      "nocturna": {
        "meaning": "El miedo",
        "number": 9690
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Caballo",
        "number": 1524
      },
      "matutina": {
        "meaning": "Soldado",
        "number": 5212
      },
      "vespertina": {
        "meaning": "Eucaliptus",
        "number": 2337
      },
      "nocturna": {
        "meaning": "El cazador",
        "number": 5365
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Hospital",
        "number": 6273
      },
      "matutina": {
        "meaning": "Hospital",
        "number": 2873
      },
      "vespertina": {
        "meaning": "Vicios",
        "number": 7169
      },
      "nocturna": {
        "meaning": "Las llamas",
        "number": 7676
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "Muerto en sueño",
        "number": 2270
      },
      "matutina": {
        "meaning": "Niña Bonita",
        "number": 4315
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "El Jorobado",
        "number": 5257
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "Anteojos",
        "number": 7595
      },
      "matutina": {
        "meaning": "La Luz",
        "number": 3931
      },
      "vespertina": {
        "meaning": "Sobrinos",
        "number": 668
      },
      "nocturna": {
        "meaning": "El cazador",
        "number": 99765
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "El peine",
        "number": 127
      },
      "matutina": {
        "meaning": "La yeta",
        "number": 5713
      },
      "vespertina": {
        "meaning": "Huevos",
        "number": 6100
      },
      "nocturna": {
        "meaning": "La cama",
        "number": 1404
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "El vino",
        "number": 6045
      },
      "matutina": {
        "meaning": "La cama",
        "number": 5204
      },
      "vespertina": {
        "meaning": "Mujer",
        "number": 921
      },
      "nocturna": {
        "meaning": "Dinero",
        "number": 132
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Casamiento",
        "number": 7463
      },
      "matutina": {
        "meaning": "La vaca",
        "number": 2854
      },
      "vespertina": {
        "meaning": "El Papa",
        "number": 2388
      },
      "nocturna": {
        "meaning": "Piojos",
        "number": 5987
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "La rata",
        "number": 2489
      },
      "matutina": {
        "meaning": "Gato",
        "number": 3605
      },
      "vespertina": {
        "meaning": "Huevos",
        "number": 2400
      },
      "nocturna": {
        "meaning": "Muerto que habla",
        "number": 7148
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "Las plantas",
        "number": 7759
      },
      "matutina": {
        "meaning": "El cazador",
        "number": 4965
      },
      "vespertina": {
        "meaning": "Sobrinos",
        "number": 6168
      },
      "nocturna": {
        "meaning": "Tomates",
        "number": 8846
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "Sobrinos",
        "number": 7568
      },
      "matutina": {
        "meaning": "Las flores",
        "number": 6181
      },
      "vespertina": {
        "meaning": "Incendio",
        "number": 3308
      },
      "nocturna": {
        "meaning": "Inundación",
        "number": 762
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "El miedo",
        "number": 2090
      },
      "matutina": {
        "meaning": "Soldado",
        "number": 4312
      },
      "vespertina": {
        "meaning": "Pajarito",
        "number": 8235
      },
      "nocturna": {
        "meaning": "Lombrices",
        "number": 1166
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "La pelea",
        "number": 8682
      },
      "matutina": {
        "meaning": "Cañon",
        "number": 6410
      },
      "vespertina": {
        "meaning": "Zapatillas",
        "number": 5942
      },
      "nocturna": {
        "meaning": "Revolver",
        "number": 4607
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Niña Bonita",
        "number": 5615
      },
      "vespertina": {
        "meaning": "El anillo",
        "number": 8116
      },
      "nocturna": {
        "meaning": "La virgen",
        "number": 1660
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "Perro",
        "number": 606
      },
      "matutina": {
        "meaning": "Escopeta",
        "number": 561
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Pescado",
        "number": 319
      },
      "rawName": "La Rioja"
    }
  }
},{
  "date": "2017-07-14",
  "results": {
    "nacional": {
      "laPrimera": {
        "meaning": "Dinero",
        "number": 4232
      },
      "matutina": {
        "meaning": "Tomates",
        "number": 6446
      },
      "vespertina": {
        "meaning": "Castaña",
        "number": 3336
      },
      "nocturna": {
        "meaning": "Muerto en sueño",
        "number": 170
      },
      "rawName": "Nacional"
    },
    "provincia": {
      "laPrimera": {
        "meaning": "La Fiesta",
        "number": 3520
      },
      "matutina": {
        "meaning": "Cocinero",
        "number": 2423
      },
      "vespertina": {
        "meaning": "Mal tiempo",
        "number": 6283
      },
      "nocturna": {
        "meaning": "Ladrón",
        "number": 7179
      },
      "rawName": "Provincia"
    },
    "santafe": {
      "laPrimera": {
        "meaning": "Muerto",
        "number": 5647
      },
      "matutina": {
        "meaning": "San Pedro",
        "number": 3729
      },
      "vespertina": {
        "meaning": "San Pedro",
        "number": 1729
      },
      "nocturna": {
        "meaning": "El cuchillo",
        "number": 14541
      },
      "rawName": "Santa Fe"
    },
    "montevideo": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "El miedo",
        "number": 3090
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "Cristo",
        "number": 333
      },
      "rawName": "Montevideo"
    },
    "entrerios": {
      "laPrimera": {
        "meaning": "El humo",
        "number": 8386
      },
      "matutina": {
        "meaning": "Besos",
        "number": 6075
      },
      "vespertina": {
        "meaning": "La rata",
        "number": 7189
      },
      "nocturna": {
        "meaning": "El vino",
        "number": 5645
      },
      "rawName": "Entre Ríos"
    },
    "mendoza": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "La pelea",
        "number": 4482
      },
      "vespertina": {
        "meaning": "El pan",
        "number": 7050
      },
      "nocturna": {
        "meaning": "Marido",
        "number": 6796
      },
      "rawName": "Mendoza"
    },
    "cordoba": {
      "laPrimera": {
        "meaning": "El cazador",
        "number": 1565
      },
      "matutina": {
        "meaning": "Desgracia",
        "number": 3317
      },
      "vespertina": {
        "meaning": "Marido",
        "number": 1296
      },
      "nocturna": {
        "meaning": "Gato",
        "number": 1105
      },
      "rawName": "Córdoba"
    },
    "corrientes": {
      "laPrimera": {
        "meaning": "Zapatillas",
        "number": 842
      },
      "matutina": {
        "meaning": "Muerto",
        "number": 4947
      },
      "vespertina": {
        "meaning": "Agua",
        "number": 1001
      },
      "nocturna": {
        "meaning": "Castaña",
        "number": 8636
      },
      "rawName": "Corrientes"
    },
    "chaco": {
      "laPrimera": {
        "meaning": "Lavandera",
        "number": 4098
      },
      "matutina": {
        "meaning": "El Cerro",
        "number": 1928
      },
      "vespertina": {
        "meaning": "Serrucho",
        "number": 8751
      },
      "nocturna": {
        "meaning": "La cama",
        "number": 8504
      },
      "rawName": "Chaco"
    },
    "santiago": {
      "laPrimera": {
        "meaning": "Lavandera",
        "number": 4898
      },
      "matutina": {
        "meaning": "Excusado",
        "number": 691
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "San Cono",
        "number": 44203
      },
      "rawName": "Santiago"
    },
    "neuquen": {
      "laPrimera": {
        "meaning": "Sorpresa",
        "number": 372
      },
      "matutina": {
        "meaning": "Las plantas",
        "number": 6059
      },
      "vespertina": {
        "meaning": "La pelea",
        "number": 982
      },
      "nocturna": {
        "meaning": "Cocinero",
        "number": 2523
      },
      "rawName": "Neuquén"
    },
    "sanluis": {
      "laPrimera": {
        "meaning": "La rata",
        "number": 4989
      },
      "matutina": {
        "meaning": "Besos",
        "number": 2975
      },
      "vespertina": {
        "meaning": "Dinero",
        "number": 3632
      },
      "nocturna": {
        "meaning": "Caballo",
        "number": 7324
      },
      "rawName": "San Luis"
    },
    "salta": {
      "laPrimera": {
        "meaning": "Ramera",
        "number": 7678
      },
      "matutina": {
        "meaning": "Cristo",
        "number": 8033
      },
      "vespertina": {
        "meaning": "Castaña",
        "number": 7736
      },
      "nocturna": {
        "meaning": "Cocinero",
        "number": 9123
      },
      "rawName": "Salta"
    },
    "jujuy": {
      "laPrimera": {
        "meaning": "Gato",
        "number": 1705
      },
      "matutina": {
        "meaning": "Pierna mujer",
        "number": 9577
      },
      "vespertina": {
        "meaning": "Piojos",
        "number": 87
      },
      "nocturna": {
        "meaning": "Linterna",
        "number": 6785
      },
      "rawName": "Jujuy"
    },
    "tucuman": {
      "laPrimera": {
        "meaning": "Muerto que habla",
        "number": 648
      },
      "matutina": {
        "meaning": "Madre e Hijo",
        "number": 7752
      },
      "vespertina": {
        "meaning": "Besos",
        "number": 4475
      },
      "nocturna": {
        "meaning": "Eucaliptus",
        "number": 7937
      },
      "rawName": "Tucumán"
    },
    "chubut": {
      "laPrimera": {
        "meaning": "Serrucho",
        "number": 3951
      },
      "matutina": {
        "meaning": "Borracho",
        "number": 5714
      },
      "vespertina": {
        "meaning": "Pajarito",
        "number": 5835
      },
      "nocturna": {
        "meaning": "Loco",
        "number": 4622
      },
      "rawName": "Chubut"
    },
    "formosa": {
      "laPrimera": {
        "meaning": "El vino",
        "number": 4545
      },
      "matutina": {
        "meaning": "Marido",
        "number": 6096
      },
      "vespertina": {
        "meaning": "Agua",
        "number": 701
      },
      "nocturna": {
        "meaning": "La música",
        "number": 3055
      },
      "rawName": "Formosa"
    },
    "misiones": {
      "laPrimera": {
        "meaning": "Linterna",
        "number": 4985
      },
      "matutina": {
        "meaning": "La Cabeza",
        "number": 4934
      },
      "vespertina": {
        "meaning": "Soldado",
        "number": 9312
      },
      "nocturna": {
        "meaning": "Vicios",
        "number": 7069
      },
      "rawName": "Misiones"
    },
    "catamarca": {
      "laPrimera": {
        "meaning": "Las flores",
        "number": 4881
      },
      "matutina": {
        "meaning": "El cazador",
        "number": 1365
      },
      "vespertina": {
        "meaning": "La Cabeza",
        "number": 8634
      },
      "nocturna": {
        "meaning": "La rata",
        "number": 4889
      },
      "rawName": "Catamarca"
    },
    "sanjuan": {
      "laPrimera": {
        "meaning": "",
        "number": ""
      },
      "matutina": {
        "meaning": "Ahogado",
        "number": 7358
      },
      "vespertina": {
        "meaning": "Sorpresa",
        "number": 1172
      },
      "nocturna": {
        "meaning": "Soldado",
        "number": 3812
      },
      "rawName": "San Juan"
    },
    "larioja": {
      "laPrimera": {
        "meaning": "Muerto",
        "number": 647
      },
      "matutina": {
        "meaning": "San Pedro",
        "number": 729
      },
      "vespertina": {
        "meaning": "",
        "number": ""
      },
      "nocturna": {
        "meaning": "El cuchillo",
        "number": 541
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
