
# Ruta


## Properties

Name | Type
------------ | -------------
`salida` | Date
`llegada` | Date
`duracionMinutos` | number
`transbordos` | number
`tramos` | [Array&lt;Tramo&gt;](Tramo.md)

## Example

```typescript
import type { Ruta } from ''

// TODO: Update the object below with actual values
const example = {
  "salida": null,
  "llegada": null,
  "duracionMinutos": 28,
  "transbordos": 1,
  "tramos": null,
} satisfies Ruta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ruta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


