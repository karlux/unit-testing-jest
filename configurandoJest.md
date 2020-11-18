## Configuración para usar Jest

### instalar jest y dependencias de babel para poder usar EcmaScript 6
```sh
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
```
### Crear en la raiz del proyecto .babelrc y agregar
```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

