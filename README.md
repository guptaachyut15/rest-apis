# rest-apis
Implemented GET, POST, PATCH, and DELETE APIs which perform the operations on a MongoDB collection USERS

## Setup

```bash
npm install
```
make .env file and store:

### PORT = "..."

### CONNECTION_STRING = "..."

### LOGGER_PATH = "..."

## Usage
```bash
node run index.js
```
### POST request to upload a user:

![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/b181ddd8-2847-4a0f-9365-2382fc55a662)
![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/00ca5e22-ce6e-4cf1-a8bf-ca033f8bd54b)

### MongoDB:

![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/38a291f9-ef61-409e-820d-422dcf4725e8)


### GET requests:

#### /api/users
![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/d29e9082-e095-47f7-91ba-562bc5e3484a)
#### /users
![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/d4b8a8c5-41b0-40eb-9199-0c792375df41)


### PATCH request:

![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/1a3333ce-7f8f-4e51-a36c-dddea706708d)

### MongoDB:

Notice change in jobTitle to "Avenger!"
![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/a1f2667c-ed4a-4a08-87ad-dcc97e75d22f)

### DELETE request:

![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/e00dce00-84a2-44a2-9770-37b5975a379e)

### MongoDb:

John Doe is gone
![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/7832fc52-95b4-4f58-b90e-e7f1445c1bd4)

### logs stored(functionality of a coded middleware) :

![image](https://github.com/guptaachyut15/rest-apis/assets/108484224/bc569ab1-f2d4-48d6-b113-d2a239857cd6)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
