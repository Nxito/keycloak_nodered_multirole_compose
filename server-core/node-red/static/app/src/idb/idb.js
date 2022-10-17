/**Script iDB 
 * Uso: Encapsula algunas funciones de Dexie.js para la creación de bases de datos indexadas del navegador para la modificacion de distintas tablas.
 * Se manejan 3 tablas principales: Question, deviation y images, pero tambien existe la posibilidad de guardar datos en una tabla general
 * al hacer uso de la libreria dexie.js, se requerirá esta en el html
 * Version 1.0 
 */
 class iDBquestion {
    constructor(Code, CodeParent, Description, Input, Link, Observation, Score, Select, Value) {
        this.Code = Code;
        this.CodeParent = CodeParent;
        this.Description = Description;
        this.Input = Input;
        this.Link = Link;
        this.Observation = Observation;
        this.Score = Score;
        this.Select = Select;
        this.Value = Value;
    }

}

class iDBdeviation {
    constructor(Code, CodeParent, Description) {
        this.Code = Code;
        this.CodeParent = CodeParent;
        this.Description = Description;
    }
}

class iDBimages {
    constructor(Code, CodeParent, Description, Value) {
        this.Code = Code;
        this.CodeParent = CodeParent;
        this.Description = Description;
        this.Value = Value;
    }
}


/**
 * @param {Object}   [db]           Variable  opcional que se devuelve al inicializar la instancia
 * @returns {Object} Devuelve un objeto con las funciones disponibles
 */
const iDB = function (db) {
    var settings = {
        tables: {
            "questions": "Code,CodeParent,Description,Input,Link,Observation,Score,Select,Value",
            "deviations": "Code,CodeParent,Description",
            "images": "[Code+CodeParent],CodeParent,Description,image",
            "general": "Code"
        },
        version: 1
    }

    return {
        /**
        * Summary.
            Crea la base de datos de la instancia y la estructura de tablas
        * @param {string}   uuid           Identificador único de auditoria.
        * @return {object} Devuelve un objeto db de dexie.js
        */
        initialize: function (uuid) {
            if (!uuid) {
                console.error("uuid is not specified");
                return
            }
            let db = new Dexie(uuid);
            db.version(settings.version).stores(settings.tables);
            db.open()

            return db
        },

        /**
        * Summary.
            Comprueba si existe la instancia
        * @param {string}  uuid           Identificador único de auditoria.
        * @return {boolean} Devuelve true si existe la base de datos en IndexDB. De lo contrario, devuelve false
        */
        exists: async function (uuid) {
            if (!uuid) {
                console.error("uuid is not specified");
                return
            }
            var exists = await Dexie.exists(uuid)
            return exists
        },

        /**
         * Summary.
         * comprueba la existencia y elimina la instancia
         * @param {string}  uuid           Identificador único de auditoria.
         * @returns {boolean} Devuelve true y elimina la  base de datos si existe la en IndexDB. De lo contrario, devuelve false
         */
        delete: async function (uuid) {
            if (!uuid) {
                console.error("uuid is not specified");
                return
            }
            let exists = await this.exists(uuid)
            if (exists) { Dexie.delete(uuid); }
            return exists
        },
        /**
         * Summary.
         * realiza una peticion de un listado de todas las DB actuales
         * @returns {Array} Devuelve un array con los nombres de las indexedDB
         */
        getAll:async function(){
            return await Dexie.getDatabaseNames()
        },
                /**
         * Summary.
         * realiza una peticion y  recoge el esquema actual para las DB. Si se asigna un objeto compatible, es esquema puede cambiarse
         * @returns {Array} Devuelve un Objeto de esquema 
         */
        getSchema:function(){
            return settings
        },
        /**
         * Summary.
         * Actua sobre una pregunta
         * @param {Object}  question            Objeto con la estructura de una pregunta
         * @returns {Object} Devuelve un objeto con las funciones disponibles
         */
        question: function (question) {
            if (!db) {
                console.error("question function need a initialized instance object")
            }
            return {
                /**
                 * Summary.
                 * Añade la pregunta a la db asignada
                 * @returns {Object} This  Devuelve un objeto con las funciones hermanas
                 */
                add: async function () {
                    let res = await db["questions"].add(question)
                    return res
                },
                /**
                 * Summary.
                 * Obtiene la pregunta de la db asignada. Si no se especifica una pregunta o primarykey, devolverá la tabla completa
                 * @returns {Object} This  Devuelve un objeto con las funciones hermanas
                 */
                get: async function (primaryKey) {
                    if(!question && !primaryKey){
                        return await db["questions"].toArray()
                    }
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = question.Code
                    }

                    let res = await db["questions"].get(item)
                    return res

                },
                /**
                 * Summary.
                 * Actualiza la pregunta de la db asignada
                 * @returns {Object} This  Devuelve un objeto con las funciones hermanas
                 */
                update: async function () {

                    let res = await db["questions"].put(question, question.Code)
                    return res
                },
                /**
                 * Summary.
                 * Borra la pregunta de la db asignada
                 * @returns {Object} This  Devuelve un objeto con las funciones hermanas
                 */
                delete: async function (primaryKey) {
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = question.Code
                    }

                    await db["images"].where("CodeParent").startsWith(item.toString()).delete()
                    await db["deviations"].where("CodeParent").startsWith(item.toString()).delete()
                    await db["questions"].delete(item)

                    if (await db["questions"].get(item)) {
                        return false
                    } else {
                        return true
                    }
                },

            }
        },
        /**
         * Summary.
         * Función que otorga la desviacion a modificar
         * @param {Object}  iDBdeviation           Objeto de clase iDBdeviation.
         * @returns {Object} Devuelve un objeto con las funciones disponibles
         */
        deviation: function (deviation) {
            return {
                /**
                 * Summary.
                 * añade la desviacion de la db asignada
                 * @returns {string} Devuelve un string que indica el código de la desviacion
                 */
                add: async function () {
                    let get = await db["questions"].get(deviation.CodeParent)
                    if (!get) {
                        throw "A deviation have no question parent"
                    }

                    let res = await db["deviations"].add(deviation)
                    return res
                },
                /**
                  * Summary.
                  * Recoge la desviacion de la db asignada
                  * @param {string}  [primaryKey]           string opcional que indica un objeto concreto a recoger.Si no se especifica una pregunta o primarykey, devolverá la tabla completa
                  * @returns {Object} Devuelve el objeto pedido clase iDBdeviation de la DB
                  */
                get: async function (primaryKey) {
                    if(!deviation && !primaryKey){
                        return await db["deviations"].toArray()
                    }
                    let get = await db["questions"].get(deviation.CodeParent)
                    if (!get) {
                        throw "A deviation have no question parent"
                    }
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = deviation.Code
                    }
                    let res = await db["deviations"].get(item)
                    return res

                },
                /**
                  * Summary.
                  * Actualiza la desviacion de la db asignada
                  * @returns {string} Devuelve un string que indica el código de la desviacion
                  */
                update: async function () {
                    let get = await db["questions"].get(deviation.CodeParent)
                    if (!get) {
                        throw "A deviation have no question parent"
                    }
                    let res = db["deviations"].put(deviation, deviation.Code)
                    return res
                },
                /**
                 * Summary.
                 * borra la desviacion de la db asignada
                 * @param {string}  [primaryKey]           string opcional que indica un objeto concreto a borrar
                 * @returns {boolean} Devuelve true si se ha borrado correctamente. De lo contrario, devuelve false
                 */
                delete: async function (primaryKey) {

                    let get = await db["questions"].get(deviation.CodeParent)
                    if (!get) {
                        throw "A deviation have no question parent"
                    }
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = deviation.Code
                    }

                    await db["images"].where("CodeParent").startsWith(item.toString()).delete()
                    await db["deviations"].delete(item)
                    if (await db["deviations"].get(item)) {
                        return false
                    } else {
                        return true
                    }

                }
            }
        },
        /**
         * Summary.
         * Función que otorga la imagen a modificar
         * @param {Object}  iDBimage           Objeto de clase iDBimage.
         * @returns {Object} Devuelve un objeto con las funciones disponibles
         */
        image: function (image) {

            return {
                /**
                 * Summary.
                 * añade la imagen de la db asignada
                 * @returns {string} Devuelve un string que indica el código de la imagen
                 */
                add: async function () {
                    let get = await db["deviations"].get(image.CodeParent)
                    if (!get) {
                        throw "A image have no deviation parent"
                    }

                    let res = await db["images"].add(image)
                    return res
                },
                /**
                 * Summary.
                 * Recoge la imagen de la db asignada
                 * @param {string}  [primaryKey]           string opcional que indica un objeto concreto a recoger.Si no se especifica una pregunta o primarykey, devolverá la tabla completa
                 * @returns {Object} Devuelve el objeto pedido clase iDBimage de la DB
                 */
                get: async function (primaryKey) {
                    if(!image && !primaryKey){
                        return await db["images"].toArray()
                    }
                    let get = await db["deviations"].get(image.CodeParent)
                    if (!get) {
                        throw "A image have no deviation parent"
                    }
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = image.Code
                    }
                    let res = await db["images"].get([image.Code, image.CodeParent])
                    return res

                },
                /**
                 * Summary.
                 * Actualiza la imagen de la db asignada
                 * @returns {string} Devuelve un string que indica el código de la imagen
                 */
                update: async function () {
                    let get = await db["deviations"].get(image.CodeParent)
                    if (!get) {
                        throw "A image have no deviation parent"
                    }
                    let res = await db["images"].put(image, image.Code)
                    return res
                },
                /**
                 * Summary.
                 * borra la imagen de la db asignada
                 * @param {string}  [primaryKey]           string opcional que indica un objeto concreto a borrar
                 * @returns {boolean} Devuelve true si se ha borrado correctamente. De lo contrario, devuelve false
                 */
                delete: async function (primaryKey) {
                    let get = await db["deviations"].get(image.CodeParent)
                    if (!get) {
                        throw "A image have no deviation parent"
                    }
                    let item = primaryKey
                    if (primaryKey == null) {
                        item = image.Code
                    }

                    await db["images"].delete([image.Code, image.CodeParent])
                    if (await db["images"].get([image.Code, image.CodeParent])) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        /**
         * Summary.
         * Funcion que otorga un objeto cualquiera para los parametros generales
         * @param {Object}  obj           Objeto con cualquier estructura. no es obligatorio en el Get,ni delete
         * @returns {Object} Devuelve un objeto con las funciones disponibles
         */
         general: function (obj) {

            return {
                /**
                 * Summary.
                 * aÃ±ade la imagen de la db asignada
                 * @param {string}  primaryKey           string opcional que indica un objeto concreto a añadir
                 * @returns {string} Devuelve un string que indica el cÃ³digo de la imagen
                 */
                add: async function (primaryKey) {
                    let res = await db["general"].add(obj,primaryKey)
                    return res
                },
                /**
                 * Summary.
                 * Recoge la imagen de la db asignada
                 * @param {string}  primaryKey           string opcional que indica un objeto concreto a recoger.Si no se especifica una pregunta o primarykey, devolverá la tabla completa
                 * @returns {Object} Devuelve el objeto pedido clase iDBimage de la DB
                 */
                get: async function (primaryKey) {
                    if(!obj && !primaryKey){
                        return await db["general"].toArray()
                    }
                    let res = await db["general"].get(primaryKey)
                    return res

                },
                /**
                 * Summary.
                 * Actualiza la imagen de la db asignada
                 * @param {string}  primaryKey         string que indica un objeto concreto a actualizar
                 * @returns {string} Devuelve un string que indica el primaryKey 
                 */
                update: async function (primaryKey) {
                    let res = await db["general"].put(obj, primaryKey)
                    return res
                },
                /**
                 * Summary.
                 * borra la imagen de la db asignada
                 * @param {string}  primaryKey         string que indica un objeto concreto a borrar
                 * @returns {boolean} Devuelve true si se ha borrado correctamente. De lo contrario, devuelve false
                 */
                delete: async function (primaryKey) {
                    await db["general"].delete(primaryKey)
                    if (await db["general"].get(primaryKey)) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        }
    }
}