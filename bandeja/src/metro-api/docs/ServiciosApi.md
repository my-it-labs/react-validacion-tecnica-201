# ServiciosApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**consultarLlegadas**](ServiciosApi.md#consultarllegadas) | **GET** /paradas/{paradaId}/llegadas | Consultar los próximos servicios de una parada |



## consultarLlegadas

> Array&lt;Llegada&gt; consultarLlegadas(paradaId, lineaId, limite)

Consultar los próximos servicios de una parada

### Example

```ts
import {
  Configuration,
  ServiciosApi,
} from '';
import type { ConsultarLlegadasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ServiciosApi();

  const body = {
    // string | Identificador de la parada
    paradaId: PAR-001,
    // string | Filtrar las llegadas por línea (optional)
    lineaId: METRO-L1,
    // number (optional)
    limite: 56,
  } satisfies ConsultarLlegadasRequest;

  try {
    const data = await api.consultarLlegadas(body);
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
| **paradaId** | `string` | Identificador de la parada | [Defaults to `undefined`] |
| **lineaId** | `string` | Filtrar las llegadas por línea | [Optional] [Defaults to `undefined`] |
| **limite** | `number` |  | [Optional] [Defaults to `10`] |

### Return type

[**Array&lt;Llegada&gt;**](Llegada.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Próximas llegadas ordenadas por hora estimada |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |
| **404** | La línea o parada solicitada no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

