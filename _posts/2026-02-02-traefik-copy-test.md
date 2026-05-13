---
layout: post
title: "Applitools"
date: 2026-01-03 20:00:01 0100
categories: homelab
tags: applitools-test 
image:
  path: /assets/posts/2026-01-01-traefik/header.webp
  lqip: data:image/webp;base64,UklGRiQDAABXRUJQVlA4IBgDAACwFwCdASq0AF4AP3GqzF60rCmmqHNr6pAuCWMA1VH/76fZwxpF56EYvSZK6zUjq0CiN9Ju8ns9DJ4VyUaHyn+kEfMXWi+cw9F2Ve1bfswwUyLOkCMepOmJZXNrw+uwCuWJ+vY36zWlLdy3UtVShjZtoeQvCvZTgb6V8qkPmBSNob5SttNCajrhc0XnFAoBzt1GxtyKsT3qBtw9lgJ9OAh3XpaJUxnGnUkTosA0d+HQ5rMeE4IKo3reIpAPdddGYSxrDe/v8IAA/u84khZGtq7nTUr/qttFbMjz2RW0o2oR0xNA+VSDYIDwaO9FeYHuSe3zc6feJuLJUU6ldJ3tYUxH0UjTwNjhCv11vyqq6IlC3UEgZmJ+X0/QmLhVoB609gKH9r8jfZXRSBW6aUQb+3YPWXcJtTwq0+v9jSwMcomLYLkDvjKLPsmZ9yEsZRCqJWQy6T6fT1A9UKi0g7jzPIyqKEwwNUHwRQDMkf7tF/nal9RQEWp1gt1/dpGt+nKDdEseTVf+Esd1XrJWwPdn3S7l7q0V30iCz2RDKbHGxJGsxAJUO62DYX/9JxDpR+AysEeqs3ypLj+Sq3qV/GdXb7T6peuG4ivekrO8rON0hiIKwBgV+nDtGi+7X1eUP98f05IZORh+mPdI4SQTVTsjz0ueoPvlfFeyYhGZluYvp/acevymLhgmwGWaGdi2hT4FCTIS7k19xUqPfZO4I9tnt66lx183TJnuD6IcwepL5tG/97HXkHv0+icYsIbrXyl6cVrkwaPIvGs7Yiex9vlC3+ouSKddWTehnOPFVFcO33iMVZ17nlcibYaKcROvXm2OLDpXU1wEla3Cc2xG1tJJwRtEkqShPhEUMzAZ67GqVIUtmCsvQM3bpTqsPbEquihPUXnHJB73RnBTf50v4obFd+68onoNmbBaPzvOvR/wVPnPmY0W3FyluQ3ydvwdu9ZQ1xgOHpVn45JHqpQdCPHFOadb08TvWRJ6p/fZ3ydkwwFbAOyrDlXnk4kMUdV6Xnjlipj821mBCRgUQcgkhp9ZC1egx6h84aAAAAA=
---

## 1. ¿Que es un proxy inverso?

Proxy inverso es un servidor intermediario que se sitúa delante de uno o varios servidores web y recibe las peticiones de los clientes

En lugar de que el cliente se comunique directamente con el servidor real, habla con el proxy inverso, y este se encarga de reenviar la solicitud al servidor adecuado y devolver la respuesta.

## 2. ¿Que es Traefik y para que sirve?

Traefik es un potente proxy reverso con muchas funciones, de ellos son:

- **Configuración dinámica** - Treaefik automaticamente encuentra los contenedores y configura las rutas. No hay que reiniciar Traefik configurando las rutas.
- **Integración con Let’s Encrypt** - esta integración permite crear y asignar automáticamenete los certificados TLS.
	- Soporta mas de 50 proveedores diferentes.
	- Soporta creación de certificados de varias maneras:
		- dnsChallenge
		- tlsChallenge
		- httpChallenge
- **Panel de control** informativa.

![Panel de control](/assets/posts/2026-01-01-traefik/traefik-dashboard.webp){: lqip="data:image/webp;base64,UklGRtgCAABXRUJQVlA4IMwCAABwFwCdASq0AF0AP3Gwyl00rrKkqjTrQpAuCUAadrTZbJd0IbdsvrStfXQUizM1A8rf6tXHm8D9j9k/OlfHtCjrP9eMc33Oj3L0XMRIc9iqygUiJ8MCTqjqNZAWMUhy0LNWHgmCGVyMycwgPqkIqEsyuWDF9d0dlKQUbeIjiGkS6w7Dw4oXTtQF5cdZHcAth3NEFHtJrb+BrLhPtWxXKvkjCs3QfGZZIpvSj7DXAiASAfA52PRedHHknccxkiQDiFZC/LAAAP7Y32ctxyv3usVsIqoP/jVtWH0mezEjMHUEsWVJIFnS9VCzKydHq3V7QMZ4P2et31hYRDYCiWHk95hKR5aV631/uYdSVnpW/mLcsrm8/ysT00H2HsXpwEOm9pzvu+d6mUurb1KdAeLbAwfz3hFOHz2MfTrAaWyyW6AggZFXpCYO2GENWm/YkSxw0MybYn+c82qDApK2rGZxx5XZARVH7GD1IyKztYiW03rXTuO2X6XlHx5KQEup/06GPkVsvrFXqPUr5XgtKY2hyhpKd9f9kUSbMq5gMUgUfcIVuKAEcW8qWAQDJAtsxa//2oxzLXVSLcFM819LJkMKBX6icC/MFwLFdwL7P2gZLYLHKEhoWU+FrnAKlDA0BEc2QwvjSXc2OSpDQhuOhaLfH49Zplibu6ihqlrG7+tnke1fAS7Eqlr5cDjfaZUvSolWkRsUQlKZ9hCCKmvFxu7qsc0n0So/rnatp4LOy5D+ak8SAEVpW0UlwyMSPxC8jJOQB354uQpdp0gwMKGUaCDVcrkawxxrJLr+gnw7q2BU0xSDRD6wb8ulsRbPCS5UBSC1fihlQIY/Ixufvs6Mvln+USaYIKslv9AmCOg0JY5Uw+LH2ZjyAPHqo+WqhTrZ7BKx+Xoisa3CtlfNIaMrDKBuMZoG5YLlNGOL1qO/YYt5iDhveg/ynYMIrGAAAAAAAA==" }
_Panel de control de Traefil_

- Soporta muchos [**proveedores**](https://doc.traefik.io/traefik/reference/install-configuration/providers/overview/#supported-providers){: target="_blank" rel="noopener noreferrer"}.
- Configuración flexible.

## 3. Conceptos principales

Los conceptos principales ayudan a comprender cómo fluyen las solicitudes hacia los servicios:

- Los **Entrypoints** son los puntos de entrada de red a Traefik. Definen el puerto que recibirá los paquetes y si se escuchará TCP o UDP.
- Los **Routers** son enrutadores que se encargan de conectar las solicitudes entrantes a los servicios que pueden gestionarlas. En el proceso, los enrutadores pueden utilizar piezas de middleware para actualizar la solicitud o actuar antes de reenviarla al servicio.
- Los **Middlewares** son componentes que permiten modificar, transformar o controlar las solicitudes y respuestas en el camino entre los routers y los servicios. Se utilizan para tareas como autenticación, redirecciones, limitación de velocidad, manipulación de cabeceras, etc.
- Los **Services** son responsables de configurar cómo llegar a los servicios reales que finalmente gestionarán las solicitudes entrantes.
- Los **Providers** son proveedores de componentes de infraestructura, ya sean orquestadores, motores de contenedores, proveedores de nube o almacenes de clave-valor. La idea es que Traefik consulte las API de los proveedores para encontrar información relevante sobre el enrutamiento y, cuando Traefik detecta un cambio, actualiza dinámicamente las rutas.

Estos conceptos funcionan conjuntamente para gestionar el tráfico desde el momento en que llega una solicitud hasta que llega a la aplicación.

## 4. Tipos de configuración

Traefik divide su configuración en dos grandes tipos: configuración estática y configuración dinámica. Esta separación es uno de los conceptos fundamentales para entender cómo funciona Traefik.

![Photo tipos de configuraciónes](/assets/posts/2026-01-01-traefik/static-dynamic-configuration.webp){: lqip="data:image/webp;base64,UklGRtoDAABXRUJQVlA4IM4DAACwHACdASq0AHMAP3GqzWA0q6ilpxMb0pAuCWUA1dnU/h22A+iWYv63vJbXK7m59zoh6Ptky426K92kgC70WYx21kwLmFPPMMC6G3HabD+wOKqnngGw5DUp0nqmzNPg03/xrXrHJr8UFG4KBWKpkTRHTAZEt8rVFIPGKbPK8bMXJgcATyXXsXjHekJfii6SCDUGe8hikwnwCwscb/kCPk6pXpW93oef/1jwFsJB+0y70cPHqhIKlEOx4mobftSdXaC1zOJFwUtEIpowL6rxKoZgOX3hrWfa8vrQXIFZobQ0Uq4HqleCNkhOLdAf5OAAAP7vEAABCeomOQTbesfJPW/B0yjVFE6/47uyCpUMAZV/1+dq8wjIUeGarl3b5D5iJbglLYpvWoqYGhE8ChBXBfElVxVtyfw/N73/ZhxnFwYvTocbCUNeaENk9NiSAvSxL7GgziNlBFObw0ZMftVPl2TC6SCfQ8uZoq02YEC30vfjBiKjNQvSoLD3lZ067W892cDhE52XeUr958zcqzNLAp4Tdk7+rqdpgJ0MMOvdKWwoNdgEWjTHJZTKzkUbqNtWDv2dmxEETvPg8oYMjp6NAI7nmfrehrHnrhj0zyC5FyTCi9vN35VWxW9YmJnkbErpoH6rhhoF7GysaWhSLzXNgOJa6c4sPSJ5bBHPDtWevnSf6n2vM8Zsyb3xO8HjF4gMwt4yIE4V8eLbZ4GUydY6j30gwQ46qmr/9fC2LB+EfExrddKRz088eXcbohKpM8/I9GaOd/v73NfIFuKVrxIZRMO6cxyu2O1I6MLdT+DNVD6Y8QnolFJ2H26YrXfDQu93COifFvrgWVKDsKHT0UEvbqJdS7kc18TwLjRJ/6zTwJvBYinw5ZM7x4oYPAIFBi8ZFl7JjndojqAh5M77aiyqhOVwfQeBubGcIPgO6bn9kjsreKBPxKOrLjcP4wzkEQwAUe8D9CEDk8E+Q2HMnkVgYrQVjZHQg/dKMVla8eWtgenkJ1IR4tpXVZdUMYHNGbbK5OoYA9u6wodTYBCKyf8YtVVPmvYmr+EpJWS5azpzs27HvS38xfJ22+t+uudrthdgWR9Stt72YYxHLdpqXDxF9Dx+G+cPD65jQoZm8e+Eq8SIxnJhDWJyp/0QrhKmZpUxw57i8Hpf71PyoVVNlBICRoD5qTX7M0Icvj51BHl01EZXBKBHCDoFzy2d5p6D/2sHha/lLMCD45gtQkccvo4j+k1YY0DqgedTCAd1ivJFUMZOEehoc/bJds2bhCZwlBEsZYzg1mXeyIwMywAAAAAAAA==" }
_Tipos de configuraciónes_

### 4.1. Configuración estática

La configuración estática define el comportamiento básico de Traefik y solo se carga al iniciar el servicio.  
Cualquier cambio en esta configuración requiere reiniciar Traefik.

En la configuración estática se definen, entre otros:
- Entrypoints (puertos y protocolos que Traefik escuchará)
- Providers (Docker, Kubernetes, File, etc.)
- Configuración de TLS / ACME (Let’s Encrypt)
- Logs y nivel de depuración
- Dashboard y API de Traefik

Hay tres formas diferentes y mutuamente excluyentes (es decir, solo se puede usar una al mismo tiempo) de definir las opciones de configuración de instalación en Traefik:

Esta configuración puede definirse de varias formas:

1. Fichero de configuración .yml .yaml o .yoml (recomiendo)
1. [Argumentos](https://doc.traefik.io/traefik/reference/install-configuration/configuration-options/){: target="_blank" rel="noopener noreferrer"}
1. [Variables](https://doc.traefik.io/traefik/reference/install-configuration/configuration-options/){: target="_blank" rel="noopener noreferrer"}

> - Solo se puede usar una al mismo tiempo
> - En los enlaces puede ver listado de argumentos y variables.
{: .prompt-tip }

### 4.2. Configuración dinámica

La configuración dinámica define cómo se enruta el tráfico una vez que Traefik está en funcionamiento.  
A diferencia de la configuración estática, no requiere reiniciar Traefik cuando cambia.

En la configuración dinámica se definen:
- Routers
- Middlewares
  - Autenticación (BasicAuth)
  - Redirecciones HTTP → HTTPS
  - Limitación de velocidad (Rate Limit)
  - Manipulación de cabeceras (Headers)
  - Compresión (Compress)
  - etc.
- Services
- Reglas de enrutamiento (Host, Path, Headers, etc.)

Esta configuración suele obtenerse automáticamente desde los providers, por ejemplo:
- Labels de Docker
- Archivos dinámicos (file provider)
- Kubernetes (Ingress / CRD)
- Consul, Etcd, etc.

[Aqui puede ver documentación y todos parámetros](https://doc.traefik.io/traefik/reference/routing-configuration/dynamic-configuration-methods/){: target="_blank" rel="noopener noreferrer"}

## 5. Configuración de certificados TLS

Traefik soporta diferentes [proveedores](https://go-acme.github.io/lego/dns/){: target="_blank" rel="noopener noreferrer"} para usar ACME.

> ACME (Entorno de Gestión de Certificados Automatizado) es un protocolo que automatiza la obtención, instalación y renovación de certificados SSL/TLS.
{: .prompt-tip }

Si no hay su proveedor en lista, se puede cambiar permiso de gestión a "Cloudflare" sin necediad de transferir dominio. [Aqui puede encontrar información como hacerlo](/posts/transfer-domain-to-cloudflare/){: target="_blank" rel="noopener noreferrer"}

