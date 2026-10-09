
# Parada


## Properties

Name | Type
------------ | -------------
`id` | string
`nombre` | string
`latitud` | number
`longitud` | number
`accesible` | boolean
`lineas` | Set&lt;string&gt;

## Example

```typescript
import type { Parada } from ''

// TODO: Update the object below with actual values
const example = {
  "id": PAR-001,
  "nombre": Estación Central,
  "latitud": 39.4699,
  "longitud": -0.3763,
  "accesible": true,
  "lineas": ["METRO-L1","BUS-27"],
} satisfies Parada

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Parada
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


