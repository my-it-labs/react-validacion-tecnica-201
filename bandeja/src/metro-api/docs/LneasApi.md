# LneasApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listarLineas**](LneasApi.md#listarlineas) | **GET** /lineas | Consultar las líneas de transporte |
| [**listarParadasLinea**](LneasApi.md#listarparadaslinea) | **GET** /lineas/{lineaId}/paradas | Consultar las paradas de una línea en orden de recorrido |
| [**obtenerLinea**](LneasApi.md#obtenerlinea) | **GET** /lineas/{lineaId} | Consultar el detalle de una línea |



## listarLineas

> Array&lt;Linea&gt; listarLineas(modo)

Consultar las líneas de transporte

### Example

```ts
import {
  Configuration,
  LneasApi,
} from '';
import type { ListarLineasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LneasApi();

  const body = {
    // ModoTransporte | Filtrar por medio de transporte (optional)
    modo: ...,
  } satisfies ListarLineasRequest;

  try {
    const data = await api.listarLineas(body);
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
| **modo** | `ModoTransporte` | Filtrar por medio de transporte | [Optional] [Defaults to `undefined`] [Enum: METRO, AUTOBUS, TRANVIA] |

### Return type

[**Array&lt;Linea&gt;**](Linea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Listado de líneas |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listarParadasLinea

> Array&lt;ParadaEnLinea&gt; listarParadasLinea(lineaId, sentido)

Consultar las paradas de una línea en orden de recorrido

### Example

```ts
import {
  Configuration,
  LneasApi,
} from '';
import type { ListarParadasLineaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LneasApi();

  const body = {
    // string | Identificador de la línea
    lineaId: METRO-L1,
    // Sentido
    sentido: ...,
  } satisfies ListarParadasLineaRequest;

  try {
    const data = await api.listarParadasLinea(body);
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
| **lineaId** | `string` | Identificador de la línea | [Defaults to `undefined`] |
| **sentido** | `Sentido` |  | [Defaults to `undefined`] [Enum: IDA, VUELTA] |

### Return type

[**Array&lt;ParadaEnLinea&gt;**](ParadaEnLinea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paradas ordenadas según el sentido solicitado |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |
| **404** | La línea o parada solicitada no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## obtenerLinea

> Linea obtenerLinea(lineaId)

Consultar el detalle de una línea

### Example

```ts
import {
  Configuration,
  LneasApi,
} from '';
import type { ObtenerLineaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new LneasApi();

  const body = {
    // string | Identificador de la línea
    lineaId: METRO-L1,
  } satisfies ObtenerLineaRequest;

  try {
    const data = await api.obtenerLinea(body);
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
| **lineaId** | `string` | Identificador de la línea | [Defaults to `undefined`] |

### Return type

[**Linea**](Linea.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalle de la línea |  -  |
| **404** | La línea o parada solicitada no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

