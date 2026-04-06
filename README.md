# EP1 - Tu primer pipeline de despliegue

**Asignatura:** Ingeniería DevOps (DOY0101)
**Institución:** Duoc UC
**Estudiante:** Matias Nazal

## 1. Estrategia de Ramificación a este encargo se ha implementado el modelo de trabajo **GitFlow**

* **Justificación:** Se ha seleccionado GitFlow para garantizar una separación clara entre el código en desarrollo y las versiones estables de producción. El uso de ramas específicas para nuevas funcionalidades (`feature/`) y correcciones urgentes (`hotfix/`) permite mantener un entorno colaborativo organizado, asegurando la trazabilidad total de cada cambio realizado en la nube

## 2. Convenciones y Buenas Prácticas 
Se definen las siguientes normas técnicas para facilitar la colaboración y la calidad del código
### Naming de Ramas
* **Rama Principal:** `main` (Código productivo estable).
* **Rama de Integración:** `develop` (Base para el desarrollo diario).
* **Funcionalidades:** `feature/<nombre-de-la-tarea>`.
* **Correcciones Críticas:** `hotfix/<descripcion-del-error>`.

### Mensajes de Commit 
Se utilizarán mensajes descriptivos siguiendo el estándar de *Conventional Commits*
* `feat:` para la implementación de nuevas características.
* `fix:` para la resolución de errores o bugs.
* `docs:` para modificaciones exclusivamente en la documentación.

### Flujos de Merge y Estrategias de Revisión 
* Toda integración de código hacia las ramas `develop` o `main` debe realizarse obligatoriamente mediante un **Pull Request (PR)**.
* Se requiere que las acciones de automatización terminen con éxito antes de permitir el merge de cualquier cambio.

## 3. Automatización (GitHub Actions)
Se ha configurado un pipeline básico de CI/CD para automatizar la integración de cambios desde el repositorio hacia un entorno cloud simulado:

* **Ejecución en Develop:** El flujo de trabajo se dispara automáticamente con cada `push` realizado a la rama `develop`
* **Ejecución en Main:** El pipeline se activa con cada `pull request` dirigido a la rama `main`
* **Objetivo:** Asegurar que las dependencias se instalen correctamente y que el microservicio mantenga su integridad operativa antes de ser integrado.