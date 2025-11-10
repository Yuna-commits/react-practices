# APIs

### GET /api/card

#### Parameters

none

#### Response

code: 200

content-type: application/json

example value

```json
{
    "result": "success",
    "message": null,
    "data": [
        {
            "no": 1,
            "title": "...",
            "description": "...",
            "status": "ToDo"
        },
        {
            "no": 2,
            "title": "...",
            "description": "...",
            "status": "Done"
        }
    ]
}
```

---

### GET /api/task

#### Parameters

cardNo : Long(query)

#### Response

code: 200

content-type: application/json

example value

```json
{
    "result": "success",
    "message": null,
    "data": [
        {
            "no": 1,
            "name": "...",
            "done": "Y",
            "cardNo": "10"
        },
        {
            "no": 2,
            "name": "...",
            "done": "N",
            "cardNo": "10"
        }
    ]
}
```

---

### POST /api/task

#### Parameters

none

#### Request body

content-type: application/json

example value

```json
{
    "no": null,
    "name": "...",
    "done": "N",
    "cardNo": "10"
}
```

#### Response

code: 200

content-type: application/json

example value

```json
{
    "no": 5,
    "name": "...",
    "done": "N",
    "cardNo": "10"
}
```

---

### PUT /api/task/{no}

#### Parameters

no : Long(PATH)

done: String(query)

#### Response

code: 200

content-type: application/json

example value

```json
{
  "result": "success",
  "message": null,
  "data": true | false
}
```

---

### DELETE /api/task/{no}

#### Parameters

no : Long(PATH)

#### Response

code: 200

content-type: application/json

example value

```json
{
  "result": "success",
  "message": null,
  "data": true | false
}
```
