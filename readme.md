## Pasos para clonar el repositorio y generar apk
# Clonar el repositorio
- git clone https://github.com/andfelsil98/coink-test.git
- cd coink-test
- npm install

# Generar apk usando Capacitor
- npx cap add android
-npx cap add ios
- npx cap sync
- npm run build
- npx cap open android
- npx cap open ios

## Cosas que faltaron.

- Consumir servicio que listaba los generos.
- Agregar validaciones extra para el formulario.
- Ajustar algunos estilos para que quedaran iguales al del mockup.

## Ideas incompletas
- Agregar spinner el codigo esta presente pero no esta completo la idea era que por medio de un interceptor interceptara las peticiones http y por cada peticion mostrar el spinner.
