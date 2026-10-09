# RutasApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**calcularRutas**](RutasApi.md#calcularrutas) | **GET** /rutas | Calcular rutas entre dos paradas |



## calcularRutas

> Array&lt;Ruta&gt; calcularRutas(origenId, destinoId, fechaHora, soloAccesibles, maxTransbordos)

Calcular rutas entre dos paradas

Devuelve alternativas ordenadas por duración total. Si no se indica fechaHora, se utiliza el momento de la consulta. Si no hay rutas disponibles, devuelve una lista vacía. 

### Example

```ts
import {
  Configuration,
  RutasApi,
} from '';
import type { CalcularRutasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new RutasApi();

  const body = {
    // string
    origenId: PAR-001,
    // string
    destinoId: PAR-010,
    // Date (optional)
    fechaHora: 2013-10-20T19:20:30+01:00,
    // boolean (optional)
    soloAccesibles: true,
    // number (optional)
    maxTransbordos: 56,
  } satisfies CalcularRutasRequest;

  try {
    const data = await api.calcularRutas(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **origenId** | `string` |  | [Defaults to `undefined`] |
| **destinoId** | `string` |  | [Defaults to `undefined`] |
| **fechaHora** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **soloAccesibles** | `boolean` |  | [Optional] [Defaults to `false`] |
| **maxTransbordos** | `number` |  | [Optional] [Defaults to `2`] |

### Return type

[**Array&lt;Ruta&gt;**](Ruta.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Alternativas de ruta |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |
| **404** | La línea o parada solicitada no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

