
# Incidencia


## Properties

Name | Type
------------ | -------------
`id` | string
`titulo` | string
`descripcion` | string
`estado` | [EstadoIncidencia](EstadoIncidencia.md)
`lineasAfectadas` | Set&lt;string&gt;
`inicio` | Date
`fin` | Date

## Example

```typescript
import type { Incidencia } from ''

// TODO: Update the object below with actual values
const example = {
  "id": INC-100,
  "titulo": Retrasos por avería,
  "descripcion": Retrasos de unos 10 minutos entre Central y Universidad.,
  "estado": null,
  "lineasAfectadas": ["METRO-L1"],
  "inicio": null,
  "fin": null,
} satisfies Incidencia

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Incidencia
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


