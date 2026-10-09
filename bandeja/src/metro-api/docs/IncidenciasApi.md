# IncidenciasApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listarIncidencias**](IncidenciasApi.md#listarincidencias) | **GET** /incidencias | Consultar incidencias de la red |



## listarIncidencias

> Array&lt;Incidencia&gt; listarIncidencias(lineaId, estado)

Consultar incidencias de la red

### Example

```ts
import {
  Configuration,
  IncidenciasApi,
} from '';
import type { ListarIncidenciasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new IncidenciasApi();

  const body = {
    // string (optional)
    lineaId: METRO-L1,
    // EstadoIncidencia (optional)
    estado: ...,
  } satisfies ListarIncidenciasRequest;

  try {
    const data = await api.listarIncidencias(body);
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
| **lineaId** | `string` |  | [Optional] [Defaults to `undefined`] |
| **estado** | `EstadoIncidencia` |  | [Optional] [Defaults to `undefined`] [Enum: ACTIVA, RESUELTA] |

### Return type

[**Array&lt;Incidencia&gt;**](Incidencia.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Listado de incidencias |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

