<!-- https://biomejs.dev/reference/configuration/ -->

{
  "$schema": "https://biomejs.dev/schemas/2.1.2/schema.json",

  // Control de sistema de versiones (Git)
  "vcs": {
    "enabled": true, // Habilita integración con VCS (por ahora solo Git)
    "clientKind": "git", // Usa Git como sistema de control
    "useIgnoreFile": true // Respeta archivos como .gitignore o .biomeignore si existiera
  },

  // Configuración para manejo de archivos
  "files": {
    "ignoreUnknown": false // Permite mostrar advertencias en archivos desconocidos
  },

  // Formateo automático del código
  "formatter": {
    "enabled": true, // Activa el formateador
    "formatWithErrors": false, // No formatea archivos con errores sintácticos
    "indentStyle": "space", // Usa espacios en vez de tabs (convención moderna)
    "indentWidth": 2, // Dos espacios de indentación: más legible, menos ancho
    "lineEnding": "lf", // Line endings estilo UNIX para mayor compatibilidad
    "lineWidth": 80, // Máximo de 80 caracteres por línea (mejora lectura)
    "attributePosition": "auto", // Autoajusta atributos largos en HTML/JSX
    "bracketSameLine": false, // Coloca `>` de cierre en nueva línea en JSX
    "bracketSpacing": true, // Espacios dentro de llaves: `{ foo: bar }`
    "expand": "auto", // Expande grupos de formato según necesidad
    "useEditorconfig": true // Respeta archivo `.editorconfig` si existe
  },

  // Reglas de linting generales
  "linter": {
    "enabled": true,
    "domains": {
      "next": "all", // https://next.biomejs.dev/linter/domains/#next
      "react": "all" // https://next.biomejs.dev/linter/domains/#react
    },
    "rules": {
      "recommended": true // Activa todas las reglas recomendadas por Biome
      // Puedes añadir reglas específicas aquí más adelante si necesitas afinar
    }
  },

  // Configuración específica para JavaScript y TypeScript
  "javascript": {
    "formatter": {
      "jsxQuoteStyle": "double", // Usar comillas dobles en JSX: `<div className="foo">`
      "quoteProperties": "asNeeded", // Solo agregar comillas a propiedades cuando sea necesario
      "trailingCommas": "es5", // Comas finales en arrays/objetos (excepto funciones): mejora diffs
      "semicolons": "always", // Siempre usar punto y coma: previene errores sutiles
      "arrowParentheses": "asNeeded", // Paréntesis solo si son necesarios en funciones flecha
      "bracketSameLine": false, // Mantiene `>` en una nueva línea en JSX
      "quoteStyle": "single", // Comillas simples para JS/TS: más limpio y convencional
      "attributePosition": "auto", // Auto para JSX: balancea legibilidad vs compactación
      "bracketSpacing": true // Espacios dentro de `{ }` en objetos
    }
  },

  // Configuración para HTML
  "html": {
    "formatter": {
      "selfCloseVoidElements": "always" // Siempre autocierra elementos vacíos como `<br />`
    }
  },

  // Asistencias automáticas (refactors)
  "assist": {
    "enabled": true,
    "actions": {
      "source": {
        "organizeImports": "on" // Organiza automáticamente los imports
      }
    }
  }
}
