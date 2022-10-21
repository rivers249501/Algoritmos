
# Algoritmos
# 👾 Arrays

### Ideas/conceptos claves

**Array** es una colección de información

**Arrays estáticos** son aquellos que se quedaran fijos debido a que definimos cuantos espacios tendremos, es decir que le diremos a la maquina cuantos slots deberá usar

**Arrays dinámicos** son aquellos que podemos mutar

### Apuntes

- Los arrays son como una lista con indices numerales consecutivas
- Tambien son conocidas como listas
- Tenemos diferentes métodos construidos por el lenguaje
    - Push ⇒ Agregar un elemento al final del array
    - Pop ⇒ Borra el último elemento
    - Unshift ⇒ Agrega un elemento al inicio del array
    - Shift ⇒ Borra el primer elemento
    - Splice ⇒ Agrega un elemento en una parte del array
- Si nosotros agregamos un elemento al inicio debe haber ciertas operaciones que deben suceder
- Existen dos formas de arrays
    - **Estáticos** ⇒ Definimos cuantos slots exactamente vamos a usar
    - **Dinámicos** ⇒ JS Maneja de forma por defecto
    
    ## Array estático
    - La computadora sabe de dónde a donde esta cada información o en este caso el numero **exactamente**

- La computadora de inicio es darle una cantidad de slots considerable
- Si es que pasara el límite buscara más espacio en memoria del que está pidiendo la lista
    - Para eso copiara la información y la trasladara a donde encuentre conveniente
    - Los espacios anteriores los libera.
    
    
    # 🗒️ Strings

### Ideas/conceptos claves

**String inmutables** se refiere a que una vez definido no lo podemos cambiar

### Apuntes

- De por si no es una estructura de datos, pero la forma en la que se guarda en memoria es como una estructura de datos
- Tenemos un string en una variable

```jsx
const saludo = "Hola";
```
- Cabe recalcar que en muchos lenguajes incluyendo JavaScript, los strings son inmutables
    - para generar un cambio en el string sera necesario:
        1. Tomar todos los datos de los memory slots
        2. Buscar nuevos memory slots
        3. Pegar en los memory slots necesarios con los nuevos elementos
    - Hacer todos estos pasos puede llegar a ser un problema generando un problema de computo
- Cuando generamos strings con JavaScript casi nunca tenemos modificarlos
- Los strings se guardan como un arreglo

- Teniendo acceso a cada letra de la cadena definida.


# 🗂️ Hash Tables

### Ideas/conceptos claves

hash function es poder asegurar generar un hash que se convierte en el address para acceder al valor

### Apuntes

- En JavaScript se pueden conocer como objetos o Maps [Aun les falta unos pasos para concretarlo]
- En otros lenguajes como python son conocidos como Diccionarios [Python], Maps [Java, Go], Hashes [Ruby]

## Hash Tables vs Objetos

- Las hash tables son similares a los objetos porque tienen el concepto de guardar valores key, value
- La diferencia es que tienen un paso extra que se convierte en caja negra la cual es una **hash function**
- Funciona de una manera similar a los arreglos debido a que accedemos a través de un numero

## Métodos

- Insert ⇒ Insertar un elemento en la tabla
- Search ⇒ Buscar un elemento por key
- Delete ⇒ Borrar un elemento

## Colisión de Hash Table

- En ocasiones podemos pasar un key distintito puede generar el mismo hash
- Colisionando con el anterior
- Esto podrá depender de la cantidad de espacio disponible.


# 🦁 Linked List

### Ideas/conceptos claves

**Linked List** son simplemente un conjunto de nodos ordenados que contienen los valores que necesitemos (numbers, strings, boolean, etc). Cada uno tiene un valor y una referencia a un siguiente nodo.

### Apuntes

- Esta es la anatomía de un linked list
- Tenemos el nodo principal o cabeza, luego tenemos diferentes nodos y un nodo final o cola
- Cada flecha es su conexión
- Existen dos tipos de Linked List en este caso usaremos solo la **Singly Linked List**

## Métodos

- Prepend ⇒ Agregar un nodo al inicio
- Append ⇒ Agregar un nodo al final
- Lookup / Search ⇒ Buscar un nodo
- Insert ⇒ insertar un nodo en la lista
- Delete ⇒ Borrar un nodo

## Singly Linked List

- Tenemos un nodo, Se compone de dos factores
    - Valor
    - Valor del Next

- Si deseamos llegar a algún lugar, debemos empezar del Head hasta el lugar especificado
- No podemos regresar una vez hemos avanzado en un lugar, sera necesario volver a hacer otro recorrido
- Lo característico de esta lista es que sus valores están relacionados con su nodo actual y el siguiente.


# ↔️ Doubly Linked List

### Ideas/conceptos claves

una **lista doblemente enlazada** es una estructura de datos que consiste en un conjunto de nodos enlazados secuencialmente. Cada nodo contiene tres campos, dos para los llamados enlaces, que son referencias al nodo siguiente y al anterior en la secuencia de nodos, y otro más para el almacenamiento de la información

### Apuntes

- La singly solo tiene un solo canal
- La doubly se caracteriza por tener dos direcciones

- Tiene tres valores, los que ya conocemos
    - Value
    - Next
- El que caracteriza es el valor **previo**
    - Prev
- Esto nos ayuda si es que deseamos buscar un valor en particular nos evita volver a recorrer la estructura
    - Es decir que para buscar cosas es más rápido
- La forma en la que se guarda en memoria los objetos es similar a singly pero con dos direcciones

- De un slot a otro, pero ahora puedo volver mediante el pointer prev.

# 🧵 Stacks

### Ideas/conceptos claves

Una pila (**stack** en inglés) es una lista ordenada o estructura de datos que permite almacenar y recuperar datos, siendo el modo de acceso a sus elementos de tipo LIFO (del inglés Last In, First Out, «último en entrar, primero en salir»)

### Apuntes

- Un stack o **pila** mayormente tienen una estructura LIFO [Last In, First Out]
- Los primeros datos en entrar son los primeros en salir
- Tenemos diferentes métodos para esta estructura de datos
    - Pop ⇒ Remover el último elemento
    - Push ⇒ Agregar un elemento al final
    - Peek ⇒ Tomar el último elemento de la línea.
    
    # 🚶‍♂️ Queues

### Ideas/conceptos claves

Una **cola** o **queue** es una estructura de datos muy similar a una Pila. Cuando usamos una Pila, ésta opera con una modalidad LIFO (Last In First Out), mientras que con una Cola es **FIFO** (**First In First Out**), es decir, siempre el primer elemento que agreguemos, será el primero que saquemos de ella.

### Apuntes

> Un escenario común es cuando vamos al banco, Llegamos y lo primero que haces es tomar un turno, inmediatamente nos damos cuenta que ya había 10 personas primero que tú por lo que automáticamente deduces que ellos serán atendidos primero que tú. Si nos damos cuenta en este escenario el primer cliente que llego y solicito un turno sera el que sea atendido primero y tú que llegaste al último serás atendido hasta el final.
> 

- Tenemos diferentes métodos para trabajar con el primer elemento, es decir el que entra y sale
    - Enqueue ⇒ Agregar un elemento al final de la línea
    - Dequeue ⇒ Remover el primer elemento de la línea
    - Peek ⇒ Tomar el primer elemento de la línea.
    
    
    # 🌲 Trees

### Ideas/conceptos claves

Un **árbol** es una estructura (posiblemente no lineal) de datos compuesta de **nodos**, **vértices** y **aristas** que es acíclica. Un árbol que no tiene ningún nodo se llama árbol vacío o nulo. Un árbol que no está vacío consta de un nodo raíz y potencialmente muchos niveles de nodos adicionales que forman una jerarquía.

## Anatomia de un tree

- En un tree tenemos un nodo principal de donde se ira ramificando
- tenemos parents ⇒ tienen ramas
- Tenemos hojas o nodos finales

## Binary Tree

- Tiene un nodo principal el cual tendrá N ramas, las siguientes ramas que salen de estas serán el doble o 2N

- Estos árboles se llaman arboles balanceados porque tienen una misma cantidad a la derecha e izquierda
- Existen diferentes clases de arboles

## Binary Search Tree

- Nos ayuda para buscar información
- La forma en la que se acomodan los datos son la siguiente

- Una de las reglas es que los números que van de aumento van en el derecho y decremento en el lado izquierdo
- Nos ayuda a buscar entre grandes cantidades de datos que podemos llegar a tener con la técnica "**divide y vencerás**"

## Binary Search Trees: unbalanced tree

- Existen árboles que no están balanceados, para ello existen ciertos algoritmos que nos ayudan a balancearlos

- Los métodos que contienen esta estructura de datos son los siguientes:
    - Search ⇒ Buscar por un nodo
    - Insert ⇒ Insertar un nodo
    - Delete ⇒ Borrar un nodo
