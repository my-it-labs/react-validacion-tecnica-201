# ParadasApi

All URIs are relative to *https://api.example.com/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**buscarParadas**](ParadasApi.md#buscarparadas) | **GET** /paradas | Buscar paradas por nombre |
| [**listarParadasLinea**](ParadasApi.md#listarparadaslinea) | **GET** /lineas/{lineaId}/paradas | Consultar las paradas de una línea en orden de recorrido |
| [**obtenerParada**](ParadasApi.md#obtenerparada) | **GET** /paradas/{paradaId} | Consultar una parada |



## buscarParadas

> Array&lt;Parada&gt; buscarParadas(nombre, accesible)

Buscar paradas por nombre

### Example

```ts
import {
  Configuration,
  ParadasApi,
} from '';
import type { BuscarParadasRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ParadasApi();

  const body = {
    // string | Texto contenido en el nombre de la parada (optional)
    nombre: Central,
    // boolean | Filtrar por accesibilidad (optional)
    accesible: true,
  } satisfies BuscarParadasRequest;

  try {
    const data = await api.buscarParadas(body);
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
| **nombre** | `string` | Texto contenido en el nombre de la parada | [Optional] [Defaults to `undefined`] |
| **accesible** | `boolean` | Filtrar por accesibilidad | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;Parada&gt;**](Parada.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paradas que coinciden con los filtros |  -  |
| **400** | Parámetros ausentes, incorrectos o incompatibles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listarParadasLinea

> Array&lt;ParadaEnLinea&gt; listarParadasLinea(lineaId, sentido)

Consultar las paradas de una línea en orden de recorrido

### Example

```ts
import {
  Configuration,
  ParadasApi,
} from '';
import type { ListarParadasLineaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ParadasApi();

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


## obtenerParada

> Parada obtenerParada(paradaId)

Consultar una parada

### Example

```ts
import {
  Configuration,
  ParadasApi,
} from '';
import type { ObtenerParadaRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ParadasApi();

  const body = {
    // string | Identificador de la parada
    paradaId: PAR-001,
  } satisfies ObtenerParadaRequest;

  try {
    const data = await api.obtenerParada(body);
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

### Return type

[**Parada**](Parada.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Detalle de la parada |  -  |
| **404** | La línea o parada solicitada no existe |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

