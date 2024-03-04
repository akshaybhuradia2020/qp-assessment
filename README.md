# qp_assement

Base URLs:
http://127.0.0.1:3000

# Authentication
JWT

## POST update_order

POST /order/update_order/af8bef6b-f96d-4a08-b021-a99c1d82c27f

> Body Parameters

```json
{
  "order_delivered_date": "string",
  "order_delivered_to_customer": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» order_delivered_date|body|string| yes |none|
|» order_delivered_to_customer|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{
	"generatedMaps": [],
	"raw": [],
	"affected": 1
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|


## GET get_all_order

GET /order/get_all_order/93270131-9c92-4a8b-97c5-d99be0129837

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
[
	{
		"id": "39078386-ee54-4f0c-9b75-79a10da92b39",
		"order_pickup": "Delhi",
		"order_destination": "Noida",
		"order_shipper": "DLX",
		"order_delivered_to_customer": false,
		"user_id": "1089703d-62ad-4abe-b721-05dc8072d3ac",
		"order_date": "2024-03-03T11:01:06.000Z",
		"order_delivered_date": null,
		"order_contact": "789456123",
		"groceries": [
			{
				"id": "82d1e5a6-a289-4da8-8cba-85ec72f09ee8",
				"grocery_id": "123216dc-fc16-46b4-b16d-7aeef58c9586",
				"ordered_quantity": 45,
				"ordered_price": 10
			}
		]
	}
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## POST order_grocery

POST /order/create_order

> Body Parameters

```json
{
	"order_pickup": "Delhi",
	"order_destination": "Noida",
	"order_shipper": "DLX",
	"order_delivered_to_customer":false,
	"user_id":"1089703d-62ad-4abe-b721-05dc8072d3ac",
	"order_date": "2024-03-03T11:01:06.277Z",
	"order_delivered_date": null,
	"order_contact":"789456123",
	"groceries":[{
		"grocery_id": "123216dc-fc16-46b4-b16d-7aeef58c9586",
		"ordered_price": 10,
		"ordered_quantity": 45
	}]
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» order_pickup|body|string| yes |none|
|» order_destination|body|string| yes |none|
|» order_shipper|body|string| yes |none|
|» order_delivered_to_customer|body|boolean| yes |none|
|» user_id|body|string| yes |none|
|» order_date|body|string| yes |none|
|» order_delivered_date|body|null| yes |none|
|» order_contact|body|string| yes |none|
|» groceries|body|[object]| yes |none|
|»» grocery_id|body|string| no |none|
|»» ordered_price|body|integer| no |none|
|»» ordered_quantity|body|integer| no |none|

> Response Examples

> 200 Response

```json
{
	"order_pickup": "Delhi",
	"order_destination": "Noida",
	"order_shipper": "DLX",
	"order_delivered_to_customer": false,
	"user_id": "1089703d-62ad-4abe-b721-05dc8072d3ac",
	"order_date": "2024-03-03T11:01:06.277Z",
	"order_delivered_date": null,
	"order_contact": "789456123",
	"groceries": [
		{
			"grocery_id": "123216dc-fc16-46b4-b16d-7aeef58c9586",
			"ordered_price": 10,
			"ordered_quantity": 45,
			"id": "82d1e5a6-a289-4da8-8cba-85ec72f09ee8"
		}
	],
	"id": "39078386-ee54-4f0c-9b75-79a10da92b39"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## GET singin

GET /auth/signin

> Body Parameters

```json
{}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|username|query|string| yes |none|
|passwd|query|string| yes |none|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDg5NzAzZC02MmFkLTRhYmUtYjcyMS0wNWRjODA3MmQzYWMiLCJpc2FkbWluIjp0cnVlLCJpYXQiOjE3MDk1MjkyNDksImV4cCI6MTcwOTUzNTI0OX0.c6n5JvTbEjcWgUXdbXgwVhPnx_f0xc4hdIafpVBlNT4",
	"is_admin": true,
	"user_id": "1089703d-62ad-4abe-b721-05dc8072d3ac"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|


## GET get_all_user

GET /user-op/get_all_user

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
[
	{
		"id": "1089703d-62ad-4abe-b721-05dc8072d3ac",
		"username": "akshay",
		"passwd": "123456",
		"email_id": "akshay@xyz",
		"phone_no": "1478523690",
		"address": "212",
		"is_admin": true
	}
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|


## GET get_user_by_id

GET /user-op/get_user_by_id/1089703d-62ad-4abe-b721-05dc8072d3ac

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"id": "1089703d-62ad-4abe-b721-05dc8072d3ac",
	"username": "akshay",
	"passwd": "123456",
	"email_id": "akshay@xyz",
	"phone_no": "1478523690",
	"address": "212",
	"is_admin": true
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## POST add_user

POST /user-op/signup

> Body Parameters

```json
{
  "username": "string",
  "passwd": "string",
  "address": "string",
  "email_id": "string",
  "phone_no": "string",
  "is_admin": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| no |none|
|body|body|object| no |none|
|» username|body|string| yes |none|
|» passwd|body|string| yes |none|
|» address|body|string| yes |none|
|» email_id|body|string| yes |none|
|» phone_no|body|string| yes |none|
|» is_admin|body|boolean| yes |none|

> Response Examples

> 201 Response

```json
{
	"username": "akshay",
	"passwd": "123456",
	"address": "212",
	"email_id": "akshay@xyz",
	"phone_no": "1478523690",
	"is_admin": true,
	"id": "1089703d-62ad-4abe-b721-05dc8072d3ac"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## POST update_grocery

POST /grocery/update_gros/f6aa892c-26e2-4c56-93da-175926f24fb7

> Body Parameters

```json
{
  "price": 10,
  "quantity": 10
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» price|body|integer| yes |none|
|» quantity|body|integer| yes |none|

> Response Examples

> 200 Response

```json
{
	"generatedMaps": [],
	"raw": [],
	"affected": 1
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## DELETE delete_grocery

DELETE /grocery/delete_grocery/5a194a74-3b6c-4591-8b61-cce7f91553db

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization |header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"raw": [],
	"affected": 1
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## GET get_all_grocery

GET /grocery/get_all_gros

> Body Parameters

```json
[
	{
		"id": "123216dc-fc16-46b4-b16d-7aeef58c9586",
		"name": "31d223",
		"price": 1030,
		"quantity": 1300
	}
]
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|

> Response Examples

> 200 Response

```json

```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## GET get_one_grocery

GET /grocery/get_specific_gros/f6aa892c-26e2-4c56-93da-175926f24fb7

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|

> Response Examples

> 200 Response

```json
{
	"id": "123216dc-fc16-46b4-b16d-7aeef58c9586",
	"name": "31d223",
	"price": 1030,
	"quantity": 1300
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

## POST add_grocery

POST /grocery/create_gros

> Body Parameters

```json
{
  "name": "string",
  "price": 0,
  "quantity": 0
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string| yes |none|
|User-Agent|header|string| yes |none|
|Authorization|header|string| yes |none|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» price|body|integer| yes |none|
|» quantity|body|integer| yes |none|

> Response Examples

> 201 Response

```json
{
	"name": "31d223",
	"price": 1030,
	"quantity": 1300,
	"id": "123216dc-fc16-46b4-b16d-7aeef58c9586"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|Inline|

