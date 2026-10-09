
# Tramo


## Properties

Name | Type
------------ | -------------
`tipo` | string
`lineaId` | string
`origenId` | string
`destinoId` | string
`salida` | Date
`llegada` | Date

## Example

```typescript
import type { Tramo } from ''

// TODO: Update the object below with actual values
const example = {
  "tipo": null,
  "lineaId": METRO-L1,
  "origenId": PAR-001,
  "destinoId": PAR-005,
  "salida": null,
  "llegada": null,
} satisfies Tramo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tramo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


