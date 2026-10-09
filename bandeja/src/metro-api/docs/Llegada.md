
# Llegada


## Properties

Name | Type
------------ | -------------
`servicioId` | string
`lineaId` | string
`destino` | string
`horaProgramada` | Date
`horaEstimada` | Date
`retrasoMinutos` | number
`tiempoReal` | boolean

## Example

```typescript
import type { Llegada } from ''

// TODO: Update the object below with actual values
const example = {
  "servicioId": SERV-1001,
  "lineaId": METRO-L1,
  "destino": Universidad,
  "horaProgramada": null,
  "horaEstimada": null,
  "retrasoMinutos": 3,
  "tiempoReal": null,
} satisfies Llegada

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Llegada
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


