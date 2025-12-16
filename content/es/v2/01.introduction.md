---
title: Introducción
description: Introducción al API v2 Agentcars
navigation:
  icon: i-lucide-album
---

AgentCars Webservice
====================

Este webservice funciona sobre `REST`, entregando todas las respuestas en `JSON` ó `XML`, la autenticacion se controla atravez de un token asociado a un IP, lo que permite la consulta de este.


Información
---------------------
* Full REST.
* Authentication IP + token.
* Version `v2.0`.

Postman
---------------------
* Descargue demo en postman [aqui](https://api.dev.agentcars.com/APIV2.postman_collection.json).



Servicios Habilitados
---------------------

|Servicio         | Descripcion
|-----------------|:-------------
|findOffices      | Servicio que busca todas las oficinas disponibles para una coordenada o un código de ciudad
|rates            | Trae todos los identificadores para tipo de tarifa validos según una fuente y destino
|getMatrix        | Se encarga de regresar todos los tipos de carros, agrupados por categorias, y en orden ascendente segun valor de la tarifa, dentro de cada categoria
|getSelection     | Envía la informacion del auto seleccionado, con las tarifas válidas
|rateInformation  | Trae el detalle de la tarifa seleccionada, este es llamado con la información recogida en getSelection, por lo que es dependiente de este servicio
|confirmation     | Genera la venta, devuelve la confirmación de la rentadora, con la información enviada para la reserva
|myReservation    | Trae toda la informacion de una reserva realizada, como codigo de confirmacion, valores, fechas, auto, etc...
|cancel           | Cancela la Reserva
|release          | Activa la Reserva en estado 'ON HOLD'
|getDailyReport   | Trae el consolidado de reservas diario.
|Suggest          | Trae la lista de aeropuertos y ciudades que coincidan con el texto enviado.


![Flujo AgentCars Webservice](https://cdn.agentcars.com/images/common/flow-agentcars-webservice.png)


Proceso de certificación
------------------------

![Proceso de certificación](https://cdn.agentcars.com/images/common/certification-process.png)  
Mayor información sobre proceso de certificación [aquí](certification-process.md).


Respuestas en XML
---------------------
Cualquier servicio esta en la capacidad de responder en XML, para esto es necesatio agregar la variable _format=xml en el GET:

|VARIABLE         | OBLIGATORIA   |SIGNIFICADO               |
|-----------------|---------------|--------------------------|
| _format         | NO            | Cambio formato respuesta |

URL de la API
---------------------
Actualmente hay dos url's para la api, una es para el entorno de producción y la otra para desarrollo.


|URL                                        | ENTORNO     |
| ----------------------------------------- | ----------- |
| https://api.agentcars.com/v2/sites        | production  |
| https://api.dev.agentcars.com/v2/sites    | development |
