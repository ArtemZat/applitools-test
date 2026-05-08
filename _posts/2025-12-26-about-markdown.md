---
layout: post
title: "Markdown - lenguaje de marcado ligero"
date: 2025-12-26 23:11:00 0100
categories: lenguaje
tags: markdown lenguaje html
image:
  path: /assets/posts/2025-12-26-about-markdown/header.webp
  lqip: data:image/webp;base64,UklGRggCAABXRUJQVlA4IPwBAACQFQCdASq0AF4AP12ctViyrCSju5JZmlAriWkAFevvtHZV3QMVO9YxPk+WsoQeBjmJ7fLuX0wvK95EquBNK4+A+F+y+Vuduo90M6Ubu1PpfpYvBXsI2utJ/tbN7zJ5PuV7pbYpARZq0GjVrwWt7AVSwk8KVFC2Ym1HsI7kJiyMeBIURuxacm5NrO/dwyZFIWEKp0ext1QV3SF0CKImlU49+m6Qb/lmLYINg6EuHH/tPULCtuWAAP6tL7InS4HOk+CX3eZsG9TtkxM4eBvfLtlrfFRVjkrCo1MAcYBjUeYIEEvWj9ufqPuiY34al3C4zjUGH+m2BHlohHnv9aMTQXEE9qkoQQcr0eupqOSha9jJoz3mUoVvF8Rpo9PlkYBcvETh2wV8De78bWwTztbYOKT2YZyPRrsV0FD0qK4FDJCSnTp9dT6oYUtfkzgxs0womnnViISA3MnkbL1vtPrOLQLG8qv/egG1W269ra4Uu7QetEFbLRu0BJNUpTAuU87eTizgeNH4OhrC/VzeZJWbSbrBE4TaCLht6Wap+4Cg+f6eXg0rRS7TsAWbOyTfwf7EbnSoA/uANhV/VHOeMUjh0ZTytRu46K71QCeWrAiWsAb7/qfeNChtlFQVCEPO/OkIBXKGXzYIUEDUOSwB8X/1/MqNzEa7RVCC/XKkAAAA
---

## 1. ¿Qué es Markdown y para que sirve?

**Markdown** es un lenguaje de marcado ligero creado para permitir la escritura y formato de 
texto sencillo y fácil de leer en la web.

> Una de las ventajas de Markdown es que soporta todo que tiene HTML. En Markdown puedo escribir a la vez con sintaxis Markdown y HTML.
>
> Texto escribe sin etiquetas y mas facil aprender que en HTML.
{: .prompt-info }


## 2. Syntaxis basico del Markdown

### 2.1. Uso de texto en negrita y cursivo

Para indicar a Markdown que quiero que texto sea en negrita o cursivo hay que usar simbolo estrella «*».

> Hay dos opciones para indicar o usando simbolo «*» o simbolo «_». Es posible usar a la vez dos simbolos. Mas comodo usar estrella para distingir mas fácil cantidad de simbolos. Adelante explicaré sobre eso mas detallado.
{: .prompt-tip }

Hay tres tipos:

* *Cursiva*

* **Negrita**

* ***Negrita y cursiva***

|       Tipo        |   Sintaxis    |
| :---------------: | :-----------: |
|      Cursiva      |   `*texto*`   |
|      Negrita      |  `**texto**`  |
| Negrita y cursiva | `***texto***` |



### 2.2. Parrafos

Los parrafos se ponen con simbolo «#», dependiendo de cantidad de simbolos, parrafo va a estar diferentes tamaños.

![Example Headers](/assets/posts/2025-12-26-about-markdown/example_headers.webp){: lqip="data:image/webp;base64,UklGRngJAABXRUJQVlA4IGwJAACwaQCdASoaAxwBP3G41WS0rqonIPPYmpAuCWlu/HyZjusi8tvnzx2kd99ehXJ35ywGFWmbah/fEHrwgc//Q1TqvopjgXGI194itXe2Z6VDBSDdFfB9CMiy6f5enqlfALcrBGXTzeVgjLp5vKwRl083S0jM+PaTLOJEh7ZAGWnW0eTmynpSXuzhG85ZZEnOSWHqJnFc4B9VAQiy+FN6mYUPrNg2xfph7LD2VHjoG2L9MPZYeyo8eUV+VYFLqeyo8dA2xfph7LD2VHjoG2L9MPZZpgFuVgcYlV7Kjx0DbF+mHssPZUeOgbYv0xFmwgBbkpy+mOgbYv0w9lh7Kjx0DbF+mHssPY1ETWQ4FKKG8lUVlG/W9BVruMfgMRFge8OHMnkmY4HtBCZnz6G56UKhjHa+uiW5xbuo8dA2xfph7LD2VHjoG2L9MPZYeyk4uoHOWyK6X6mmZ4n/n2S9XuuDoS6UE7gis8P6j8K9nU24R0mTkN9MX6Yeyw9lR46Bti/TD2WHsqPHRUCGfqAj+WHsqPHQNsX6Yeyw9lR46Bti/TD4CCgyFgBXXzmGmL9MPZYeyo8dA2xfph7LD2VHjoENdHSUCqXZOfhFCx8gy/llasZdxBDLoqmx5KJN36R7zDa3GF/d4h8gX3QFl2SiB14vhjiX6Yeyw9lR46Bti/TD2WHsqPHQNsYBnwyCNou8ILYJmxi2CZsYtgmbGLYJmxi2CZsYsRnLMphcKkRkoPFiI0UIDBIcKkBgmOFiI0UIDBIcKkBgmOFiI0UIDBIcK1x2IDb7o0FMO5p6v7A0+yc37iXUejq6hti/TD2WHsqPHQNsX6Yeyw9lJyNe7oBMRGBEVmWpQKftHZ0CA+uPklBJvnXm0cjcTyPHQNsX6Yeyw9lR46Bti/TD2WHsqQ/D5iShUGV9zJ+WHsqPHQNsX6Yeyw9lR46Bti/TD2Vs7sUE2ytj3ycblFyE8/d9op9pdByUIdDKooZoZoxjJ5unWX2j2VHjoG2L9MPZYeyo9HV1DbG2X6YexabLhMraPN7QEoXlwNpb7ZUeOgbYv0w9lh7Kjx0gsNsX6Yeyw9ivcmEBdgMOlBnQGAuI9piWDdsRSW/VLUphpi/TD2WHsqPHQNsX6Yeyw9lR46BoAAD+/pisSPtgfBjM7tHmsepHtphveYYYF/j+78HxmAHhLXQ+j+ZIgJJsLTqmys1XerswBWC1o7CprBY9J3leQtvnc3QQtqlVEyBv+tbm9UMObiWGucb0/fHWZZNsrRMppN5M6DmCvBfVGib5ZENq+cGQtjfk5fNggads8Oqw321dgFJJvxr6R3rFlcbZkH6nV1DpSgyTB1UCKe5RDim46OnZdmCsHZ7khUjNzg5VywuE4t9Ue3yujb1muM/mKGJLXC831y1dt6owPwzlm0zNDpqo+jOo67pyWCpSNIUavTxJGzc+kx9N6OOT7DlJE9Q5FM3F4stLbKsLgw1RvigZVp4Vost/HaJDHGpCl2gWq7ZArlkXXJIjZPTodbyUwBMAAAgBQBxCgACjUqlUqlUqlUqlcp/3zVfD+KaxdJFHxa9wZySMiNrYRaZ8Bg9tzU7edBUyi596Te35Db5QOK7qkQQhjXhx8wn7XaBxnklscYWmTKvh+3WDxpQUoUiLdViKj8xtkshNIgxeN/cqfhhm29MB2vsV+TcFLHtorkZnzsq91n+5QMq1e3Um/BQHbxEzY3S6rwQa51B+wUoybWzme99AfY2Djbtg/0qKu6lOb/gYvdUA1VdR7hkmgFqUm/BQG/EcBOk5TTcA4R8XUChm9USlBnr14EBhSN4RlWWT/TkLn/tPRpva9XPeeMqkbQWDk4z1zFDSc6Z0a4ZhEdC5Im2GAi4z+bJ3JKAs7LJr6mojzPiDZvddTRlr17SafdBKa9aQvX23DuaNW+oPwAAAAK22UwLILXueHgSdUhEkKR8c8Z3eA05KQDGarf6nhn+p4Z/qeGf6nx1u9UGA39MoGGCXrQHYXj52g4uYmvE2He94h9eH3iyl5f08dDKl59oPCjh3oJ6ZCbkDEvqv6cAYi/nfLvez/AA1hTQiAu7XzqrDt1vEC/EcniqFsuzTsN24I1ki9mqzqDp+f5B+hJ89Rrftf7HfwxenBIShpY0/RT/kzXfjSxT1TlFzxQr4E0twIn6Hh9hdvak/1ZTAvndxMB0EFhpM2Z1KKFilgSUKpuP2x5cxbKccuE3sE3uSG3HlAzZJBYdPEtqyMC7NaXzKTfkeahrKunNPS+KGP/VyknwJJuIFd6VxWyQ29ZjjUgiCJh6nL5oYr1QPMRv1cn3hjFshQo5x2AQH6CZjxNCSBjL91Mz6z+z1baQi0YMSHpRSDLM5/MWGFE1T4ccKSacaWn+PbJ/uifG12crXSo22z7ZnSfV72NiDuuXDBQ5qv4xzXzPOwlgTAdHNevlg/e9wh0n/5mdy1NjCv2Uns5ZJ2W9x2+p8iBMCvbawYuHrbEqPG2Izh1FZZH1088NPQEUwpsdA226J+LISMM0DBoN9gQmHTvRmixQJWpLyab+LhBDPXorwJnKQxjo0vtWiyyWJNllN4fcNRH+GVC4f/PXBQAjw5RhYz89kzcaRrYqpxz4pyl9V/spSHEkQXGQIXmt3gtvLzUYEA4cHxlCPU7CDfhx8K5WTQ06PWZZPg+MoR52K0CaOB9ahndBZJz86M4P7QQnlGDhxLOTLMv1COiudtQYKjQW6Cpmob612O42QPRAEGOue3CcOHmwDf8otOZwmTJ6O8jC7lTBF1MuFdORn/DPWJXKwd827bK2BtV1FELy5YJMrGVxJKpyq3pwefPB8Uzrmk63BnV3bFjm7xxi+WyE9H0zuhrKrptb/Lm3T16xoO2Hqi2a1PhMfYuGqVSJcWLddL5kUj03lRjddzBd9sRC8Zpin+mEN0DTdPTEdsvNwsyNcZIvs4CWTFioAikAmVK1hRz3gaNpkPWVL19qH1fraJCj3eQxh4pH2HseQkx7uM3QTpvNg3ddP0rw3k4j3wYtdSGC8IR4P0im0KLAXSUcn61feLcRIhLJVVhbWM0CQ4wCSXuPrOBGi30LUGKhZkYqIYJfm1M0mZkc+NTkLjRaEgfs1SQh7QfU2HQ52JlpRhtBYmiRway18398rxEYlmkXc/ft8kKWnWcaJGaME069LfKSIx7x/uaRbSzY02H3ZmOCPTz0zXRajAvRp3tJcn27bAZsCAAA="}

***Asi se ve en código:***

```markdown
# 1 simbol

## 2 simbolos

### 3 simbolos

#### 4 simbolos

##### 5 simbolos

###### 6 simbolos	
```

### 2.3. Enlaces

#### 2.3.1. Enlaces básicos

Sintaxis es simple, enlace entre simbolo menor y mayor:

```markdown
<httsp://arteza.es>
```
<https://arteza.es>

#### 2.3.2. Enlaces en texto

Aqui puede ver sintaxis:

```markdown
[Texto para convertirlo en enlace](Enlace al página web)
```

[¡Visita mejor página del mundo!](https://arteza.es)

#### 2.3.3. Enlaces de referencia

En esos enlaces usamos unos ***variables*** para indicar enlace al página web y hay que usar sintaxis un poco diferente.

Los enlaces básicos usan esto `[Texto](Enlace)` y enlaces de referencia usan esto `[Texto][Variable]`. Se cambia los paréntesis a corchetes.

> **Una variable** es una palabra o conjunto de letras que representa un dato específico.
> En lugar de escribir ese dato cada vez que se necesita, basta con usar el **nombre de la variable**.
> Además, si se cambia el valor de la variable, ese cambio se aplica **automáticamente** en todos los lugares donde se utiliza.
{: .prompt-info }

[Aqui gasto mucho tiempo cada dia.][Enlace al youtube]

[Una buena página para practicarse en **Markdown**.][buena-practica]

[Enlace al youtube]: https://www.youtube.com
[buena-practica]: https://www.markdowntutorial.com

**Aqui como está en código:**

```markdown
[Aqui gasto mucho tiempo cada dia.][Enlace al youtube]

[Una buena página para practicarse en **Markdown**.][buena-practica]

[Enlace al youtube]: https://www.youtube.com
[buena-practica]: https://www.markdowntutorial.com
```

> Una mala cosa que **Markdown** básico **no soporta** enlaces que abren nueva pestaña. Y por eso hay que usar un html, o hay que usar una versión amplia como **Kramdown**
{: .prompt-warning }

Asi como hacer un enlace que abrirá en pestaña nueva:

```html
<a href="https://google.com" target="_blank">Google</a>
```

#### 2.3.4. Títulos

A los enlaces puedo añadir un título. Es decir cuando ratón esta sobre enlace aparezca una placa con título escrito.

En sintaxis básico hay que añadir comillas dobles despues de enlase:

```markdown
[texto](Enlace "Título")
```

Ejempo:

```markdown
[YouTube](https://www.youtube.com "Mejor plataforma para video")
```

[YouTube](https://www.youtube.com "Mejor plataforma para video")

### 2.4. Imágenes

#### 2.4.1. Imágen básico

Síntaxix casi mismo que con enlaces, diferencia solo en un símbolo «!».

Aqui puede ver sintaxis:

```markdown
![Texto que aparece en caso de fallo al cargar imágen](Enlace al página web o una ruta local)
_Texto opcional abajo del imágen_
```

Ejemplo:

```markdown
![Orbea Onna](https://arteza.es/assets/tabs_about/onna.webp)
_Orbea Onna_
```

![Orbea Onna](/assets/tabs_about/onna.webp){: lqip="data:image/webp;base64,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" }
_Orbea Onna 2023_

> Tambien es posible usar variables. Mismo como con enlaces pero con simbolo «!» al principio para indicar que es una imágen.
{: .prompt-info }

#### 2.4.2. Imágen como enlace

Sintaxis es siguiente:

```markdown
[![Texto que aparezca si hay error al cargar imágen](imágen)](Enlace)
```

Aquí hay parte interna, es imagen, y arriba de imagen hay parte de enlace.

Ejemplo:

[![Orbea Orca](/assets/tabs_about/orca.webp)](https://www.cyclesolutions.co.uk/bikes/road-bikes/orbea-orca-m20-2018-road-bike--whiteblackred__2483)


### 2.5. Citas

Citas permiten hacer una llamada de atención.

Sintáxis en muy basico solo un símbolo mayor «>» al principio del texto.

> Un texto muy importante a cual hay que dar una atención.

Y tambian es posible escribir con varias filas.

> Al final Artem ha entrado en casa. Y pregunta al Pedro:
>
> —¿Qué estas haciendo? — preguntó Artem.

```markdown
> Al final Artem ha entrado en casa. Y pregunta al Pedro:
>
> —¿Qué estas haciendo? — preguntó Artem.
```

Y tambien es posible hacer sub-citas:

> Al final Artem ha entrado en casa. Y preguntó al Pedro:
>
>> Intentando distinguir Pedro en salón oscuro.
>
> —¿Qué estas haciendo? — preguntó Artem.

```markdown
> Al final Artem ha entrado en casa. Y preguntó al Pedro:
>
>> Intentando distinguir Pedro en salón oscuro.
>
> —¿Qué estas haciendo? — preguntó Artem.
```

### 2.6. Listas

Hay dos tipos de listas:

* Numeradas 
* Desordenadas

#### 2.6.1. Numerada

Para hacer una lista numerada hay que escribir un número al principio del fila y poner un punto despues de este número. 

> Orden puede ser cualquier: desordenado, ordenado, mismo número. Importante que empieza por un número.
{: .prompt-info }

1. Primer objeto
1. Segundo objeto
1. Tercero objeto
1. Cuatro objeto

Aqui tengo lista. Y para obtenerla puedo escribir de tres formas diferentes.

```markdown
1. Primer objeto
2. Segundo objeto
3. Tercero objeto
4. Cuatro objeto
```

```markdown
1. Primer objeto
1. Segundo objeto
1. Tercero objeto
1. Cuatro objeto
```

```markdown
1. Primer objeto
8. Segundo objeto
3. Tercero objeto
5. Cuatro objeto
```

Tambien hay posibilidad hacer lista "interna" usando tabulador.

1. Primer objeto
1. Segundo objeto
1. Tercero objeto
	1. Tercero sub-objeto
	1. Tercero sub-objeto
1. Cuatro objeto

```markdown
1. Primer objeto
1. Segundo objeto
1. Tercero objeto
        1. Tercero sub-objeto
        1. Tercero sub-objeto
1. Cuatro objeto
```

#### 2.6.2. Desordenada

Para hacer una lista desordenada hay que escribir símbolo al principio del fila.

Aqui están los símbolos:

| Simbolo |  Nombre  |
| :-----: | :------: |
|   \*    | estrella |
|   \+    |   mas    |
|   \-    |  menos   |

> No se recomienda utilizar varios simbolos en misma lista.
{: .prompt-warning }

- Primer objeto
- Segundo objeto
- Tercero objeto
- Cuatro objeto

```markdown
- Primer objeto
- Segundo objeto
- Tercero objeto
- Cuatro objeto
```

Tambien hay posibilidad hacer lista "interna" usando tabulador.

- Primer objeto
- Segundo objeto
- Tercero objeto
	- Tercero sub-objeto
	- Tercero sub-objeto
- Cuatro objeto

```markdown
- Primer objeto
- Segundo objeto
- Tercero objeto
        - Tercero sub-objeto
        - Tercero sub-objeto
- Cuatro objeto
```

#### 2.6.3. Lista ordenada y desordenada a la vez

Desordenada como principal y ordenada como secundaria.

- Primer objeto
- Segundo objeto
- Tercero objeto
	1. Tercero sub-objeto
	1. Tercero sub-objeto
- Cuatro objeto

```markdown
- Primer objeto
- Segundo objeto
- Tercero objeto
        1. Tercero sub-objeto
        1. Tercero sub-objeto
- Cuatro objeto
```

Ordenada como principal y desordenada como secundaria.

1. Primer objeto
1. Segundo objeto
1. Tercero objeto
	- Tercero sub-objeto
	- Tercero sub-objeto
1. Cuatro objeto

```markdown
1. Primer objeto
1. Segundo objeto
1. Tercero objeto
        - Tercero sub-objeto
        - Tercero sub-objeto
1. Cuatro objeto
```

### 2.7. Saltos duros y suaves. (Hard and soft)

Hay saltos de dos tipos:

| Tipo  |                     Descripción                     |
| :---: | :-------------------------------------------------: |
| Hard  | Es salto grande que desconecta párrafos visualmente |
| Soft  |  Es salto pequeño que guarda continuidad del texto  |

#### 2.7.1. Salto duro

Para hacer un salto duro hay que hacer dos saltos de línea en código.

---

Hola es un texto.

Que ayuda a entender 

diferencia.

---

```markdown
Hola es un texto.

Que ayuda a entender

diferencia.
```


#### 2.7.2. Salto suave

Para hacer un salto suave hay que hacer dos espacios despues del texto.

---

Hola es un texto.  
Que ayuda a entender  
diferencia.

---

> He cambiado espacios a puntos « · » para dar posibilidad ver estos espacios.
{: .prompt-warning }

```markdown
Hola es un texto.··
Que ayuda a entender··
diferencia.
```

#### 2.7.3. Comparación de los saltos

Primeros saltos son duros y segundos son suaves

---

Hola es un texto.

Que ayuda a entender

diferencia.

---

Hola es un texto.  
Que ayuda a entender  
diferencia.

---

### 2.8. Código

#### 2.8.1. Trozo de código

Sirve para marcar un trozo de código, para que lo no ejecutará.

Sintaxis es este:

```markdown
`Código`
```


#### 2.8.2. Bloques de código

Markdown permite escribir trozos de código sin uso de este código. Es decir que va a mostrar como texto plano, sin pasarlo como un código.

Sintaxias es siguiente:

>\```
>
>Código
>
>\```

En esta página uso Kramdown.

> Kramdown es Markdown pero con funciones añadidas.
{: .prompt-info }

Y Kramdown mustra este trozo así:

```markdown
Código
```

Hay una función buena que permite marcar sintaxis del idioma seleccionada.

>\```Lenguaje-necesaria 
>
>Código  
>
>\```

[Todos lenguajes permitidos en Markdown.](https://github.com/jincheng9/markdown_supported_languages){: target="_blank" rel="noopener noreferrer"}

Y Kramdown mustra este trozo en lenguaje «CSS» así:

```css 
.principal {
	font-size: 20px;
}

#link-playa {
	text-decoration: none;
	color: red;
}

p {
	color: white ;
}

```

### 2.9. Linea Horizontal

Para crear una linea horizontal hay que escribir tres veces cualquier de estos símbolos.

| Simbolo |   Nombre   |
| :-----: | :--------: |
|   \*    |  estrella  |
|   \-    |   menos    |
|   \_    | guion bajo |

Exemplo:

```markdown
***
```

***

### 2.10. Caracter de escape

Para proteger un símbolo que se utiliza habitualmente para diferentes formatos, es necesario colocar una barra invertida «\» delante del símbolo para que se muestre como texto plano y no cambie nada.

Ejemplo:

* - es una estrella

\* - es una estrella

Primera fila sin barra invertida y segunda si.

```markdown
* - es una estrella

\* - es una estrella
```

## 3. Syntaxis extendido del Markdown.

### 3.1. Tablas

Sintaxis es siguiente:

```markdown
| Titulo1 | Titulo2 |
| ------- | ------- |-> esta fila sirve para alinear texto a la izquierda, centro, derecha
|Datos1|Datos2|
|Datos1.1|Datos2.1|
```

Y tambian puede ser así:

```markdown
| Titulo1  | Titulo2  |
| -------- | -------- |
| Datos1   | Datos2   |
| Datos1.1 | Datos2.1 |
```

Ejemplo:

| Redes Sociales | Popularidad |
| -------------- | ----------- |
| Instagram      | 5/5⭐        |
| Facebook       | 3/5⭐        |
| Twitter        | 4/5⭐        |

```markdown
| Redes Sociales | Popularidad |
| -------------- | ----------- |
| Instagram      | 5/5⭐        |
| Facebook       | 3/5⭐        |
| Twitter        | 4/5⭐        |
```

Para cambiar alineación hay que poner dos puntos «:» al principio o al final o en ambos lados del guion en segunda fila de la tabla, justo despues del títulos.

|   Tipo    | Sintaxis |
| :-------: | :------: |
| Izquierda |    :-    |
|  Derecha  |    -:    |
|  Centro   |   :-:    |

```markdown
| Titulo1 | Titulo2 |
| ------- | ------- |  |> esta fila sirve para alinear texto a la izquierda, centro, derecha
|Datos1|Datos2|
|Datos1.1|Datos2.1|
```

Ejemplo:

| A la Izquierda | Centrado | A la derecha |
| :------------- | :------: | -----------: |
| Datos1         |  Datos2  |       Datos3 |
| Datos1.1       | Datos2.1 |     Datos3.1 |

```markdown
| A la Izquierda | Centrado | A la derecha |
| :------------- | :------: | -----------: |
| Datos1         |  Datos2  |       Datos3 |
| Datos1.1       | Datos2.1 |     Datos3.1 |
```

### 3.2. Lista de tareas

Sirve para crear una lista con casillas antes del una tarea.

Sintaxis es simple, porque es visualmente entendible.

```markdown

- [ ] Tarea sin casilla marcada

- [x] Tarea con casilla marcada

```

Ejemplo:

- [x] Hay que terminar explicación sobre Markdown.
- [ ] Crear un post sobre Kramdown.
- [ ] Instalar docker Diun.

```markdown
- [x] Hay que terminar explicación sobre Markdown.
- [ ] Crear un post sobre Kramdown.
- [ ] Instalar docker Diun.
```

### 3.3. Emoji

Hay dos posibilidades como añadir emoji al markdown:

1. Copiar y pegar emoji desde una página web al markdown
2. Usar shortcodes

[Lista de shortcodes](https://gist.github.com/rxaviers/7360908){: target="_blank" rel="noopener noreferrer"}

Para usar emoji de tipo shortcode solo hay que escribir un nombre corto entre dos puntos:

Ejemplo:

😄

```markdown
:smile:
```

### 3.4. Texto tachado

Para hacer un texto tachado hay que escribir doble tilde «~» al principio y final del texto.

Sintaxis es siguiente:

```markdown
~~Texto tachado~~
```

Ejemplo:

YouTube ~~no~~ es mejor plataforma.

```markdown
YouTube ~~no~~ es mejor plataforma.
```

### 3.5. Texto marcado

Para marcar texto hay que escribir doble simbolo igual «=» al principio y final del texto.

Sintaxis es siguiente:

```markdown
==Texto marcado==
```

Ejemplo:

Kramdown es lenguaje mejorado de Markdown. <mark>No estoy seguro de esto.</mark>

```markdown
Kramdown es lenguaje mejorado de Markdown. ==No estoy seguro de esto.==
```

### 3.6. Subíndice

Para hacer subíndice hay que usar tilde simple «~» al principio y final del texto.

Sintaxis es siguiente:

```markdown
H~2~O
```

H<sub>2</sub>O

### 3.7. Superíndice

Para hacer superíndice hay que usar acento circunflejo simple «^» al principio y final del texto.

Sintaxis es siguiente:

```markdown
X^2^
```

X<sup>2</sup>

## 4. fichero de esta página

Si quiere ver como está escrita esta página web puede descargarla [aqui](/assets/posts/2025-12-26-about-markdown/2025-12-26-about-markdown.zip){: download }.

En este fichero hay partes de código que no estaba explicado aqui mismo. Y en esta página uso Kramdown por eso el código puede tener diferencias por falta de soporte de algunos funciónes cuales hay en Markdown. De ellos son:

- Texto tachado
- Texto marcado
- Subíndice
- Superíndice
- etc

## 5. Enlaces que pueden ayudar a aprender Markdown

- [Página web donde estudias y practicas al mismo tiempo.](https://www.markdowntutorial.com/es) Hay en diferentes idiomas, en español tambien.
- [Página web con documentación mas amplia.](https://www.markdownguide.org) Hay solo en inglés.
- [Página web donde puedes prácticarse en tiempor real y ver código HTML.](https://spec.commonmark.org/dingus)
- [Wikipedia](https://en.wikipedia.org/wiki/Markdown)
- [Documentación GitLab sobre Markdown](https://en.wikipedia.org/wiki/Markdown)
- [Documentacion Github sobre Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

## 6. Bibliografía 

- [www.markdowntutorial.com](https://www.markdowntutorial.com/es)
- [www.markdownguide.org](https://www.markdownguide.org)
