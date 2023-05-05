const fetch = require('sync-fetch')

type Definition = {
  word: string
  definition: string
  example: string
}

function fetchDefinitions(): Definition[] {
  const response = fetch("https://opensheet.elk.sh/1k83cMwYA5aIOaZ54XxGh2KXbQkgwdCHRnRGjNmwp4ww/boludle+solutions", {})
  .json()
  .map( (row: any): Definition => { 
    return {word: row['word'], 
            definition: row['definition'], 
            example: row['example'] }
  })
  return response 
}

const DEFINITIONS = fetchDefinitions()

let WORDS: string[] = []

DEFINITIONS.forEach(function (item, index) {
  WORDS.push(item.word)
})

export { WORDS, DEFINITIONS }
