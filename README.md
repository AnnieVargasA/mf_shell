# 🧨 Rick & Morty Microfrontend Shell — *Manual no oficial del Espectro-Holo-Indexador de Entidades Narrativas para el multiverso frontendiano*

**¡ALERTA, MORTY!** Este no es un proyecto cualquiera, es el **mf_shell**, el epicentro de esta sopa de microfrontends que apenas se mantiene junta con cinta adhesiva de JavaScript. Si esperas orden, elegancia o sentido común... *vete ahora*. Aquí usamos **React 18**, **Webpack 5 con Module Federation**, y un poquito de estilo (con `styled-components`, por supuesto).

---

## ☢️ ¿Qué carajos hace esto?

- Orquesta microfrontends como si estuviera dirigiendo una banda de versiones alternativas de ti mismo... y cada uno desafina a su manera.
- Usa `react-router-dom` para moverte entre rutas porque usar `window.location` es de primates.
- Aplica `styled-components` porque CSS global es como mear en la piscina: todos lo notan, nadie lo admite.
- Comparte componentes entre microapps como buenos parásitos interdimensionales.
- Viene con tests porque, sorpresa, nada de esto va a funcionar la primera vez. Ni la segunda.

---

## 🧬 Disección del bicho

```
mf_shell/
├── public/             # La fachada. Literal.
├── src/
│   ├── assets/         # Logos, imágenes... píxeles inútiles
│   ├── components/     # Botones, cards, tus migajas de UI
│   ├── constants/      # Temas, idiomas y otros fetiches
│   ├── App.jsx         # Punto de entrada a este laberinto
│   ├── AppStyles.js    # Lo que evita que sangren tus ojos
│   ├── bootstrap.js    # React 18 con esteroides
│   ├── index.js        # ¡Boom! Todo empieza aquí
│   └── setupTests.js   # Porque confiamos en nadie
├── webpack.config.js   # Donde ocurre la brujería
├── Dockerfile          # Dockerizando cosas
├── .gitignore          # ¿Alguien lee los instructivos?
├── .babelrc            # Transformando cosas babelosas
└── README.md           # Este bello desastre
```

---

## 🧪 Cómo revivir al monstruo

1. Clona esto como si supieras usar Git:

```bash
git clone https://github.com/AnnieVargasA/mf_shell.git
cd mf_shell
```

2. Instala las piezas del rompecabezas roto:

```bash
npm install
```

3. ¡Arráncalo y reza!

```bash
npm start
```

> Si todo sale bien (ja), abre [http://localhost:3000](http://localhost:3000) y mira cómo tu RAM empieza a derretirse.

4. ¿Producción? ¿Tú? No me hagas reír...

```bash
npm run build
```

---

## 🧠 Conectando cerebros (a la fuerza)

```js
remotes: {
  mf_characters: "mf_characters@http://localhost:3001/remoteEntry.js",
  mf_character_detail: "mf_character_detail@http://localhost:3002/remoteEntry.js",
},
exposes: {
  "./rickandmorty": "./src/assets/rickandmorty.png",
  "./Card": "./src/components/Card/Card.jsx",
}
```

- `mf_characters`: Un catálogo de mutantes.
- `mf_character_detail`: Una lupa sobre cada error genético.

**Protip Rickiano™:** Si estos remotos no están activos, este shell se cae más rápido que un pasante en lunes.

---

## 🧪 Rompe primero, pregunta después (TESTING)

```bash
npm test
```

Pruebas, porque a veces hasta tú quieres saber si algo sigue funcionando después de cambiar 42 líneas de código a ciegas.

---

## 🎨 Estilos con actitud

No usamos Bootstrap porque no somos cobardes. Aquí todo es `styled-components`, y sí, hay temas e idiomas para cuando quieras tu app en español, klingon o marciano.

---

## 🚪 Rutas: tus portales de vergüenza

- `/` → Página de personajes (sí, otra vez Rick y Morty)
- `/character/:id` → Detalles que no necesitabas saber

---

## 🧰 Scripts (porque claro que los necesitas)

| Comando         | Traducción Sarcástica              |
| --------------- | ---------------------------------- |
| `npm start`     | A ver si arranca...                |
| `npm run build` | Porque el caos también se empaqueta |
| `npm test`      | ¿Rompiste algo? Seguro que sí      |

---

## 🧪 Dependencias tóxicas

- React 18 (porque no somos cavernícolas)
- react-router-dom 6 (rutas sin dolor... más o menos)
- styled-components (estilos con cerebro)
- Webpack 5 + Module Federation (esto es lo que lo mantiene unido)
- Jest + React Testing Library (detecta tus errores antes que el cliente)

---

## 📜 Notas de un genio interdimensional

- Nada funciona si los otros microfrontends no están vivos. ¿No están corriendo? Mala suerte.
- Puedes cambiar lo que quieras. Solo no vengas llorando cuando tu app muestre el logo al revés en japonés.

---

## ⚖️ Licencia

MIT. Puedes copiar esto, modificarlo, prenderle fuego o tatuártelo. Pero si esto explota... no me agregues al repo

---

**BURP... ahora vete de aquí, humano. Tengo cosas más importantes que hacer.**

**— Rick, desde la dimensión DEV-1337** 🧪