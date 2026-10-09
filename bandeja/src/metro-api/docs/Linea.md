
# Linea


## Properties

Name | Type
------------ | -------------
`id` | string
`nombre` | string
`modo` | [ModoTransporte](ModoTransporte.md)
`color` | string
`origen` | string
`destino` | string

## Example

```typescript
import type { Linea } from ''

// TODO: Update the object below with actual values
const example = {
  "id": METRO-L1,
  "nombre": Línea 1,
  "modo": null,
  "color": #E53935,
  "origen": Estación Central,
  "destino": Universidad,
} satisfies Linea

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Linea
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


