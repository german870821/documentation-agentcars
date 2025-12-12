---
title: Introduction
description: Introduction to API v2 Agentcars
navigation:
  icon: i-lucide-album
---

AgentCars Webservice 2.0
========================

This web service works on `REST`, delivering all the answers on a `JSON` or `XML`, the authentication is controlled with an authorization token associated with your public IP, allowing the consultation of this.

Information
-----------
* Full REST + JSON.
* Authentication IP + token.
* Version `v2.0`.

Postman
---------------------
* Download postman demo [here](https://api.dev.agentcars.com/APIV2.postman_collection.json).

Available services
------------------

|Service          | Description
|-----------------|:-------------
|findOffices      | Service that searches all available offices for a coordinate or a city code.
|rates            | Get all availables rates to specific source - destination.
|getMatrix        | It is responsible for returning all types of cars, grouped by categories, in ascending order according to rate value, within each category.
|getSelection     | Send the information of the selected car, with the valid rates.
|rateInformation  | Bring the details of the selected rate, this is called with the information contained in getSelection, which is dependent on this service.
|confirmation     | Generates sales, returns the confirmation number of the rental company, with the reservation information.
|myReservation    | Get all the information of a reservation made as confirmation code, values, dates, auto, etc ...
|cancel           | Cancel Reservation.
|release          | Activate Reservation 'ON HOLD'.
|getDailyReport   | Get daily consolidate from reservations.
|Suggest          | Get list of airport and cities according text sent.

![Flow AgentCars Webservice](https://cdn.agentcars.com/images/common/flow-agentcars-webservice-en.png)


Certification process
------------------------

![Certification process](https://cdn.agentcars.com/images/common/certification-process-en.png)  
More information about certification process [here](certification-process.md).


XML Response
---------------------
Any service is able to respond in XML, for this it is necessary to add the variable _format=xml in the GET:

|VARIABLE         | MANDATORY   |MEANING
|-----------------|:-----------:|--------------------------
|_format          | NO          |Change response format

API URL
-------

Currently there are two url's for the api, one is for the production environment and the other for development

| URL                                       | ENVIRONMENT |
| ----------------------------------------- | ----------- |
| https://api.agentcars.com/v2/sites        | production  |
| https://api.dev.agentcars.com/v2/sites    | development |
