---
layout: post
title: "Transferir gestión de dominio a Cloudflare"
date: 2026-01-03 20:00:00 0100
categories: DNS
tags: dominio cloudflare
image:
  path: /assets/posts/2026-01-03-transfer-domain-to-cloudflare/header.webp
  lqip: data:image/webp;base64,UklGRkYFAABXRUJQVlA4IDoFAABwIQCdASq0AF4AP3Ggx1s0qrGwrVd8kpAuCWwGepy8xRVN83LadL0znYjQWGd2M1BPwDqcPi6eVc42kf6Bx4CaDvIrxM59DogVMFLf+WiiAxWnGq6uGYvj9CIzPWkiidzi8LM6dWmgf3SMy0/iavUuRadWi6Z8NVMCMMPeoUenvwP2NAOvpWpgR7AEzfO7WWIyz96Jva0oLG93e3BQA3tvmyZ0AVJXC35ViGdl2tFK5uye3YVbmLGtg5cQZW2EadsoMCk7v/zARL7hKeJ3dGzNjTkwx6FpMy1343kF4xF4JqcG/qZ1w0bZT+FO08oaZ1qLh6mqPKbruR7yr5f1FPoc7eou4pUxIyHQdz9pcFmohIF6McAA/pJLpHb2HxbX/V3Kzk6AtqiTz0L3P2VyJkImwuTbNU7YsloLouPUWHzc5+RQWW1DDPwCiGKA4syJ7lq+4EYEHLglqHHu9ZJ+7TEWw0sugAAY0xdiFDJEKFr7f3+bcA49xrp8A8VPJ++ebF13E4wHY5DOgsevgT8XWfH8ywoyYa/tWGeHRGFPFWXsRdH068oP0NvxDwM0ZqwRmmi+lTJbYcuUEesLIiFhIF5Ka03lEil/cnEjAI4NmdTRQRLAZW9O2AM1N3bPtHGMwZWw4kvJtip9up+jdUjxObYfR4gW1AkKd18nSECDje8fiOx0bT4VhAbnfexdrt71PKFi9W92/uAbj5fSiRcd2Tllic8S/L7i+jD41KOpPFAJmlNVzKTdl6jz5/9q1TU60Vout9S4zS0M35huEoKDPUXwjkvknhW9SDFGH2hDFOLoY1E+954g247q2rIFAiqTueAOnrHALM6KZhA4D/2QzqdY5RwM+4UdhZtuKZoulGFlg4yWHhYnMQMPAw+h2i9Pl8v02gXUm56g9ptmP5VjR3wyMHLOFujH0ozE97jxyDXodFkbchfN9TTK7cH+329EvP2ViAm5RVq9nvJZ7/Z2Hza7a3n2Fp++zEMkkU1tGDzk1gyFHiS0u+sthxjwVgRrrLVYCOuo43RtKzCxZLBR/SVaQGuVdHc6OzWLKV6+jCC4o9dtnWAmyYLnfM+MxBXOKvJyAERrdA46RjO8IUSDT4V1/AVGILiO9vCVNNs1r63880GW+W+e4J5Q3aToGHcH58boBOKw/fY6xqYlWYnJ4zNJ2e3NUiSLf6AKx6817Y1Sr5SJs+DtnIXz3h39y5OQTB3gf7Z0uMLE47u+JFmI8Opu8sf61BbGrFlPLgaBXF4alzY2w1DwBk7Ag0fLlYBbUA8RbbTH0k2zKQoB6tRtieFrC9CxCSj/kTIOT4Qj5MfYgcu9RrAspvaXUhJQqRGhqF3TEO3xjA9FjZWztNe8q6M8zaQzUq3HtnAE8vc2g+AeqHYujDb2c8bjDx+lmAZ+cUM8o8zTZLj3YtfJ/I8mcGCCv16dsNMTjxZVvyFrq3ChPsbGHfa0nO1RJ4QnIoj7aWbw80OV2oNHuNFe0f8skhrOSVLpY/7tI2l42bbFUS3xRKsbgk1LRxDpwi2NRQ5/QYxoYUpq33F+vQGXPo/3Ecas4WOe2qs7WLS0x3AaNIJmtm6hJHN54c6x6Wve5RSCV7/aonnHAS1jTNwxeblsElfPKExVn0V8PmNVVloeISxI9AXbkV8yuLdzGxJsffCCGIW15/O10m6GInm3/ChBlhOFkamx+XWAxQdl2WVD5GJUERgLbYNuya6dBOJwnNM1fUEa9C8JEs870diwF6x8bWzG7HZ4XiIVuQw88Ir87k3xJhRYNhpADdJOAAA=
---

## 1. ¿Que es Cloudflare?

Cloudflare es una empresa líder en servicios de seguridad, rendimiento y confiabilidad en Internet. Ayuda a proteger y acelerar sitios web, aplicaciones y redes mediante una plataforma global que mejora la velocidad, la disponibilidad y la seguridad frente a amenazas digitales.

Cloudflare ofrece muchos servicios, de ellos son:
- Seguridad avanzada contra ataques DDoS y amenazas web
- Firewall de aplicaciones web (WAF)
- Red global CDN para acelerar contenidos
- Gestión rápida y segura de DNS
- Soluciones Zero Trust y acceso seguro
- Protección y optimización de APIs
- Mejora del rendimiento y la disponibilidad de sitios web

## 2. ¿Como transferir gestión de dominio?

Hay que solo cambiar servidores NS de su proveedor a proveedor de cloudflare y ya está.

> Un servidor NS (Name Server) es un servidor que indica dónde y cómo se gestionan los registros DNS de un dominio.
> 
> En otras palabras, los servidores NS dicen a Internet qué proveedor es responsable de traducir el nombre del dominio en una dirección IP y otros datos necesarios para que un sitio web funcione.
{: .prompt-info }

## 3. Transferir gestión de Ionos al Cloudflare

### 3.1. Paso del Cloudflare

#### 3.1.1. Regisración en Cloudflare

Primero hay que [registrarse](https://dash.cloudflare.com/sign-up){: target="_blank" rel="noopener noreferrer"} en Cloudflare.

#### 3.1.2. Asignar dominio al Cloudflare

Despues hay que decir a cloudflare que tenemos nuesto dominio y que nos da unos datos importantes.  

![Foto configurar dominio en Cloudflare №1](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/cloudflare_setup_domain_1.webp){: lqip="data:image/webp;base64,UklGRhABAABXRUJQVlA4IAQBAADwCgCdASq0ADcAP3GyzGE0raglpXQMApAuCWkALv/fTgIad63dQdESlLYK0hptuOnmcUBOC7IPAYDRF4AVqZjReOf6wIV5BeaJFJkNBl+Bp6CUATltqp8n42nEFyMeWAAA/u1y6C5dZKkPnnLYPjApC1btcoejWsXDbdRUlFnJSpJbOW0o2Zu+XbxCWYqcpK4eHZgJ2Yr+g6D/uW6m4CeS97fvlfCgAPgLNQnvzqUG91AtucwT2VF9cgJMg+lr6l3+Bh4y2IUSvX2HXnJHaqHoWa3aI71uOUQtIgdXaI5e65LFOTu7VH3G/n2uU2huInxT6Uz+jOy2IY+K1rcTagK2EAAAAA==" }

![Foto configurar dominio en Cloudflare №2](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/cloudflare_setup_domain_2.webp){: lqip="data:image/webp;base64,UklGRmYBAABXRUJQVlA4IFoBAACQDgCdASq0AFAAP3G0zmA0rqklpfdK8pAuCWcAD//xTOWr4PxQagT3irLTCL+a6x2gGsGZ86yhFNfksrW4TCIoznT7ZSMzhI8EYEmKtUzhXQ73Q2giqPEWyx5YE+dRiX6rQg7eM2YKXB9Nv7/Cpgdr+SMpzcC1I2KsjxNTAAD+7XLoLlw5gbDX0lyhF7QIUfcfIhlUibYaI+MZ04QZ0AeiAN5zBxlN0hLBRdkmsga/UicwW5bqUY2VhAm1t6IyxcApFaFG7qOZbc8cJACAEINZrWSUAWOT3PfMo4SoyuRYYs8X5caFbmaUFZ5onPqlAr1QpCSBfa7KFUHjWbuA/Uu3wAAV+CxIWTJVsSFXvwSOFM5oExW83rP374IqJfkhNytqGicgFKHHJ5aBW9gv2OStMRUHpCCGybUF/Orb4//ORGGH/3pV2NcgTWXRhvE9GI/fRdYAOZ9zgAAA" }
> Aqui voy a usar dominio de **duckdns.org** para ejemplo. Duckdns no permite modificar registros.
{: .prompt-danger }

#### 3.1.3. Seleccionar plan

Voy a usar plan gratuito, este plan es bueno para uso simple.

![Foto configurar dominio en Cloudflare №3](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/cloudflare_setup_domain_3.webp){: lqip="data:image/webp;base64,UklGRm4CAABXRUJQVlA4IGICAADwFQCdASq0AFwAP3GuyVy0rikkqVYcspAuCWduBbEt9NAwMEvGFOjz+ldxwdv3ru8HHgbGWAo06YYoY3qub047XBUIx7bIu31EYPkbNZPZ1o42rk3VUQ4vgRyhhLAS8GfLoJrR3LZPab0fR58GolJQcQegSVEc+ydlA9Q5S0+PnsfSbYs8aHuUp+lsKrJJuzGlW8YjIhAbtuHDpy2J4umNTxKIeDnf135fBZaTPqIOfwGyd58YaMAAAP7teB6lM+X4yL39eoYjV/VIcz6sYwPGEM+OdJ8tq6xy2cJ2Qao5tH54kGvr9PJHYIqDqZVuNlIAuUbkP0WefHheLv2hqPrqkyB896OTmm9FqnUZa5kF5kN5GP3TGHRsuySNBP6v5sqhqs8+Xjfu+Zb17uOluQmHNLjrlVwPCA+3mKtBrl4/ojMJWgaI1xraGP7dy/M2freUKxAmMFBxvZ37SqVfHQ26vvd8FQqinrjYBfjLM+QMM4P9XFamUf6Sn7mHorxLa6MDsNC4buHrJ/QIRxD5OwDHZeg2139CYNviQ1pEqJb69GgL3vbOpdjSxleZ0qzj8mOVQrmKCbPGZhYImgmnbfoqrZgpP9zn371ePEC6K8G5QF0bO9t6jnANj+8RtTrDg4mnkFzenyQoaWMJFrfSINHaoYetCDUs/yvRm9pXM2Sq9bk1TO/v91ENtfz1D0Gp+3w7elO+IehNlU5EhmdXbPnepln4xr25WNzK3iphGkfVvPzJ92svrg6i8QoTWVAF/ZSh78eEs+ytqG/SNUkDrr9kH9tknJ4sJkPySLpKJnAAAAAA" }

#### 3.1.4. Comprobar datos y continuar con configuración

![Foto configurar dominio en Cloudflare №4](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/cloudflare_setup_domain_4.webp){: lqip="data:image/webp;base64,UklGRgACAABXRUJQVlA4IPQBAAAQFACdASq0AF0AP3GwzV+0rb+lpdJ8M/AuCWcIcrGZq5/vpGLh2T+NnuDMOy7eglC+G/PW31QzR4pBnlG9pTdwIPGSu3UkMDExTFFX+O45bM5kXPU3pk0m48QTJUVUdpZc+BZ06vSgEI4VUDjKfs62UNYVH0q01r452Rwsl4gUuSlvM7I0yI/kXQ91fLTrKnYWpa9hp8MiZKkiCmcTQqvFYLa5xGw2FL+AAP7yUnc7dJBacO25ZlRVFIwv7EjmOdEkhLAAa9qe2/XmM85do3IDrF0hLifPrhXgO/Sh9i6n22Q1lp4kp2yc2GiMIM+nhX4IC7dCgkLx+rqdIWRQz6mca2KrSzM1BQ6kYCY/O1lQhk009hfO/mkknaua6sfBMt9yV3aLMeAPDSJNGxSZoGfgkdIigvwydxw8cP1WXNk+XHehZA188E/cH10m+MwjSUK9HyMr8pwtIo6JFQ1OxGx2OUuzv9POetyLGu/C6Vu9Izb5w1kJ57DIUAeMVhL6ebF5e4cXVi0XH6zWuFGdUmdfESXu1lIM387uKbvXX7+xKUskL9wOSvAO6g2T2RnSF1uWn2LHVVoag7gmmXM+bE+SzzUOoH40kymixGgiuLGKE2gSKHETm+ETY2M2n7l+lvQC456fYhcMm61IBHoX3SHelcAAAA==" }

#### 3.1.5. Copiar servidores NS

Aqui hay instrucciónes necesarias.

![Foto configurar dominio en Cloudflare №5](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/cloudflare_setup_domain_5.webp){: lqip="data:image/webp;base64,UklGRuQBAABXRUJQVlA4INgBAAAwEgCdASq0AFwAP3GszF+0rKilp5PLypAuCWc7Qvz51qCci6ZVCqDy/tEOIeDORevNPLZQ3/86lvrbdH+keQQc97VFXO2tBngv5xzMdObdyALCEa8RTv+p3C/hNkLnoOuPB4J5MvLu8KbLXuYZPbhX34Jhs7AgQB68fHW1Wc2RRN718QzFOMj9ka3Bx1kjQsnVYgKhaWXeuzoAAP7suoni4h2hleuVz/EAoxcXxXuZVWR3ti9agG5uQyz9wOwggiOEmL2kaXFoSACCKX9mpOZILgg0dW+h5WY8mhL1JsDw0/pc9W8IsLsqNoEOSgGWkfpnrfTyPSr3jqqWxe9EptZt7TiogvINAlA1hEkwaG+U3aGIPmbwJI08JnM5kBEOyyoZNGOzVyRhHcB0G7lZsDRqABvV7o9BcyNwA0g1z+bVyhhCWn9dkEM7dJwg6t/Y5iSpxYGxTXXikGEibsdPrLY3M9JsKk0KsLIlCQqHZWABfPqS3HuJHQgqJKTE4p6yMLJDIguq4BQvWwZyDzJR3ZTgrfqgkAjIv0o/L4YUtFv0rWk6mScgtZG19J/ZuHW09an7BX1wGvOvuHzGwNm2jHubKZY261+SWUXTwFVviolAroOMHyxwZgAA" }   
> Los servidores NS son diferentes en cada configuración.
{: .prompt-warning }

### 3.2. Paso del Ionos

Ahora hay que cambiar servidores NS por defecto al servidores NS de cloudflare.

#### 3.2.1. Entrar en pestaña del dominios

![Foto configurar servidores ns de ionos №1](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/ionos_setup_ns_server_1.webp){: lqip="data:image/webp;base64,UklGRtoBAABXRUJQVlA4IM4BAABQEQCdASq0AEgAP3GwzF20rikkqrTaapAuCWcA1MLAkjC/oUsWvf9+P7jKsts9GjiixCdp8uArCQSMzgMk0jIIZ93/A/c1jiMQQ5vPgTrgF+S4On7MTdjT8/0RovCiPjnLWgR+M07/TX+bI0BwSwgJLMe786cWKQgT3JjLmMvSR9wOfbF4khZ8z7i5CMdzKtkkUwAA/ubbjHmtiGHEm4eb4IuPdlIIafQrR7M033gbMlOzhH4wwAp7CE6p6oXEDZDmbDLCT6WdE89Co1qGycB604geReQamrNa80QisXTXM5SJi1WH376EXSXQD9hw+6zPfluO8QxvUHQW82GsdBpJ/kWSOgLP+PzAQokrihiWM/TMeDyR/jtGKCLfUxRyp4r6X5TWhM2ovdmVYfzSXtHsYsHSe1m1PKW0own8M+n1niMJmfdwtGMEHKhfI/7fs5fv+uluI8EtJ1GJmham/S5qILoyAm8toJ3vxEFw377Kz1tbZyVDmXjmPqoe5EfOUBICroOB5uUGYZK0qCPJioZVUXobM6VAyAYZaBMhDY+EgvJKm4kVHVftUDvsVOp0wEupF9IZxD+YenmErsPrmYHB5Wl/kBQl/1Wzf5IAAAA=" }

#### 3.2.2. Entrar en configuración del servidores NS

![Foto configurar servidores ns de ionos №2](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/ionos_setup_ns_server_2.webp){: lqip="data:image/webp;base64,UklGRsABAABXRUJQVlA4ILQBAADQEgCdASq0AFIAP3Gwy100rr0kqrYK06AuCWcA1e7vP+wE6lMDPoDWQByo25rq4KofjGjxxGR4UKxzqW7EP8Vh5Y+60slAawReyzJkQDoSc6/2kTIhAoXBmP4eIPaES2A/xRTDJAZNTvsLEGgAwEJnFZ6LRHF5F1mXLpOtZz+rJnkpgeNkWU/GNNyos2ojfKktvCakU8snZMaQUsYvAoAA/uvcM7CIpmFhLOyPSboLpYVhkVtRSp46NynvUTPsMXo54nfR/tluVIZdFnfOq+0wNZW9SGjcUmFmMPkZ6i0sUbm/HoioGxWkaq3thW0etJQDZE8CsvEJKnThcTuBo4Y9E+iDIJmwybiHPqgYHrVPEBN/uhf9WpvCeB/hla788nC/o5ShLQKQtUbyL4TrqccicSDeTBrAhTcf/91dA6lbDliJrIn8UzyBf/LQt4ZHbfXjh5CGs6uERbPoXTsPiQkqUiA9kW33x0J25wXJV6YOicdJHSGCIaCn+PuRxBAaDBypZbZSVlB6n9aduF1JZ8S5uc4sfrEnavkPeSV5N5owJ3jQoPkjSNSBSCgd+5Tf/TybgAAA" }

![Foto configurar servidores ns de ionos №3](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/ionos_setup_ns_server_3.webp){: lqip="data:image/webp;base64,UklGRigBAABXRUJQVlA4IBwBAABQDACdASq0ADkAP3Gwy2C0rTMnqLFKgpAuCWcA1NCp2QuDqbjdKjVEbvMrUEkZGcj6ILzXsLuuF3f94IOrEDnZzzIxut/Llv2mhRo60X8IGu5SeqNxmM6QijxwprWRrKYcdUtk5OXTTAJ5UAD+6gSnUNB/HiX9tppShb3fdb95KxwTKCIg1okjUAgrz8GlLHMdOfSYVHSFR1oxsUEvFB6AXjsyTeUM/3oad2x2GZonYBZouRQ+668ZyzzfPjFhBYNodJGDNnidbOAO+0RhD+xP4reO7+wIAvf1MV4ojwkkJYwZPvaV+gbSHeTIb3IxlQ01briUyK/POqAwZvvz7A6T4VzaDki0KYaHuasVGOWBdT38jfdg6CEFygAAAA==" }

#### 3.2.3. Asignar servidores NS

![Foto configurar servidores ns de ionos №4](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/ionos_setup_ns_server_4.webp){: lqip="data:image/webp;base64,UklGRhQBAABXRUJQVlA4IAgBAACQCgCdASq0ADcAP3Gy0WC0raonp1RpupAuCWcA1BytMMRKjIUkccYQrm3Zl4phfEJ2P8C+5IZsfjnGL34Xkh3a4fWcDYJp6c4jHfRQVx8003IdCKD1+VxVaFW7hQAA/vZdRQnK3YdUWKWQZPLcC75CXwoShrOKZzP1rMNoAMgg8bP5S20vRmxXPxieyyJJwifcvjnEhwObRQecBdycvyu04vkrAziIgWEgYL9gZKbGAgH7JisYEh+bVcD1UvYfo2LGlCK37QJeONxMdagADibDBEC+KaIIFnYUH6mxtxBxzoc1ul0zsHaju4LtHP5/dG0iRKKS0tIjQn/rbRT2E0ssAItecgyAAAA=" }

![Foto configurar servidores ns de ionos №5](/assets/posts/2026-01-03-transfer-domain-to-cloudflare/ionos_setup_ns_server_5.webp){: lqip="data:image/webp;base64,UklGRhQBAABXRUJQVlA4IAgBAAAQCgCdASq0ADAAP3Gszl80rKknKPTacpAuCWcvlt9odv2OYN4fu842UT7wolNx1b4lINbzm3HQblnUTIhIaGbto4v8jKojGpsqWKrfcbkJVwXV+9K7o2+NkAD+1ePmMYQqp1cIjgDIr8SFKHxIAPsJQA27HfGHZUK9bMgekhsauvh8mdLAOtIKwlguPzX/UVtws9krhPDIFRHhNEnYcDm4wu+YW29PD8MXrvyURUsGZgKnRjjYwjTAAOpKEYaNFqsAW2ydoSEDkiAkMzSF8r5cy5gB8N4L5RKzBRjlgDE8b/dGNslrAtDdS8T5rdZWRAmiuWmaCcxMzrnnImpFcmU3K4ql3ggAAAA=" }

> Tiempo de asignación de los servidores NS puede tardar hasta 48 horas.
>
> En mi caso ha tardado menos de 3 horas.
{: .prompt-info }