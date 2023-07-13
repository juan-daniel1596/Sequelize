## modelo de datos (MER)

1 project has many tasks  

![Texto alternativo](https://github.com/FaztWeb/nodejs-sequelize-restapi-postgres/blob/master/docs/diagram.png?raw=true)

- crear un controlador que elimine un project y de paso elimine sus tasks [X]
- crear un controlador que postee sus proyectos con tareas CON EL POST, metodo create.  


## PROTOCOLOS HTTP 

#### un protocolo es un conjunto de reglas que se deben seguir para cumplir con un determinado resultado, y con ayuda de esto poder acceder a un determinado recuso o servicio

-HTTP: protocolo de transferencia de hipertexto

#### cuando se hacen peticiones a HTTP se basa sobre dos solicitudes:
- requests (solicitudes)
- response (Respuesta)

## Request
### es una solicitud que se realiza en una comunicación que utiliza el protocolo HHTP, se divide en:
- Metodo: establece el verbo GET, POST,PUT, PATCH y DELETE
- URL: especifica la direccion con la que se desea comunicar
- Header: Son conexiones importantes que indican que se establecio la conexión
- Body: Es un campo opcional;sirve agregar objectos, textos o datos sobre la solicitud.

## Response 

### permiten transportar la informacion necesaria para atender a las solicitudes recibidas.
- status Codes: son codigos que permiten al cliente saber el estatus de su consulta 
  - Codigo de rango 100 
  - Codigo de rango 200
  - Codigo de rango 400
  - Codigo de rango 500
  
- Header: Son conexiones importantes que indican que se establecio la conexión
- Body: es un campo opcional;sirve agregar objectos, textos o datos sobre la solicitud.

## Tipos de metodos
- GET: Para hacer consultas
- POST: Para crear objectos
- PUT: Para actualizar los objectos
- DELETE:  Para eliminar objectos 
- PATH: Modificaciones espeficas sobre un objecto


# CREACION DEL VERBO DELETE ENTRE LAS TABLAS DE PROJECTS Y TASKS
### objectivo
#### crear una peticion request que permita eliminar un proyecto y al mismo tiempo elimine las tareas asignadas a ese proyecto por medio del ProjectId 


# CREACION DEL VERBO POST ENTRE LAS TABLAS DE PROJECTS Y TASK 
