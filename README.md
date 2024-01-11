# M2Map

O M2Map é desenvolvido pelo [Movimento Mira-Minde](https://mira-minde.pt/) com o intuito de promover o Polje de Mira-Minde. Esta aplicação apresenta aos visitantes os antigos caminhos, que tem sido recuperados pelos membros do Movimento Mira-Minde. Assim como apresentar os pontos de interesse existentes no Polje Mira-Minde dando o mote para se descobrir as suas ancestrais histórias e curiosidades assim como as duas localidades Mira de Aire e Minde. 



## Características da Aplicação

- Suporte de multiplos caminhos
- possibilidade de utilizar elementos multimedia na descrição dos Pontos de Interesse
- Utilização do GPS do dispositivo



## Atualização dos dados

Esta aplicação é composta pelos seguintes tipos de dados:

- **Caminhos** - Ficheiros GPX que descrevem um percurso.
- **Pontos de interesse** - Ficheiros GPX que descrevem um determinado tipo de pontos de interesse. Atualmente são suportados arvores, lagoas, nascentes e outros
- **Informação do caminho** - Ficheiros JSON que conteeem a informação referente a um determinado percurso.



Os ficheiros encontram-se distribuidos por diferentes pastas que estão estruturadas da seguinte forma:

```
/...
 gpx|
    |contents - lista de ficheiros .json com as informações de um caminho  
    |markers - lista de ficheiros .gpx com os pontos de interesse 
    |tracks - lista de ficheiros .gpx com os caminhos existentes
```



**Regras para os nomes dos ficheiros:**

- Utilizar sempre minusculas
- Não utilizar acentos nem caracteres especiais, como por exemplo: ç, ã, $, etc.
- Não utilizar sinais de pontuação, excepto o "." para separação do nome e da extenção do ficheiro
- Utilizar *underscore* "_" invéz do **espaço** " "



### Gestão dos caminhos

Os ficheiros para os caminhos devem ser gerados em uma ferramenta que permita a criação de ficheiros GPX. O nome dos ficheiros devem obedecer as regras estabelecidas. Devem ser colocados na pasta respetiva *tracks*

### Gestão dos Pontos de Interesse

Os ficheiros de Ponto de Interesse devem ser gerados utilizando uma ferramenta que permita a criação de ficheiros GPX. A descrição do Ponto de Interesse pode conter estruturas HTML desde que seja *"codificado"*. Pode ser utilizada a ferramenta https://emn178.github.io/online-tools/html_encode.html.

O nome do ficheiro deve obedecer as regras defenidas.



### Gestão do conteúdo dos caminhos

Os ficheiros JSON devem ser criados em qualquer editor de text desde que sejam gravados no formato UTF-8 (aconselha-se a utilização do [Notepad ++](https://notepad-plus-plus.org/) ou do [VSCode](https://code.visualstudio.com/) ), ter principal atenção a este detalhe se utilizar o sistema operativo **Windows**. 

A estrutura dos ficheiros é a seguinte:

```json
{
  "id": "track_1",
  "title": "Fabrica Cisterna Grande",
  "image": "",
  "gpx": "minde_abrica_cisterna_grande_algueiroes_4_8_km.gpx",
  "description": "é um caminho grande",
  "warning": "Exemplo de de um aviso, tem que levar umas sandochas.",
  "properties": {
    "length": "4.8 Km",
    "duration": "1h28m",
    "type": "Alagado",
    "difficulty": "Difícil"
  },
  "characteristics": [
    {
      "title": "isto é uma caracteristica tipica deste percurso",
      "icon": ""
    }
  ],
  "indications": [
    {
      "title": "e estas são as indicações",
      "icon": ""
    }
  ]
}
```

Descrição dos campos mais importantes:

- id - Este campo define o identificador do caminho e deve ser único, isto é, não deve haver dois ou mais ficheiros de caminho com o mesmo valor no campo *id*.

- gpx - Identifica o ficheiro com a informação geoespacial do caimnho.

- *characteristics* e *indications* - São listagens de caracteristicas e recomendações para um determinado caminho. podem ser uma ou mais elementos. Exemplo com multiplos elementos:

  ```json
  ...
  "characteristics": [
      {
        "title": "isto é uma caracteristica tipica deste percurso",
        "icon": ""
      },
      {
        "title": "outra caracteristica",
        "icon": ""
      }
    ],
    "indications": [
      {
        "title": "e estas são as indicações",
        "icon": ""
      },
      {
        "title": "outras indicações",
        "icon": ""
      }
    ]
  ...
  ```

  

O nome do ficheiro deve obedecer as regras defenidas.



