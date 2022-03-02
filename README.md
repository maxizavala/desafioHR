Create a basic autocorrection application per the requeriments below. The finished application must pass all of the unit tests.

Complete the implementation of src/components/AutocorrectTextArea.js according to the following requirements:

- AutocorrectTextArea is a component that takes corrections Object that maps strings to their corrections. For example, the pbject below denotes that 'really' is a correction for 'realy', and 'weird' is a correction of 'wierd':


```
const corrections = {
    'realy' : 'really',
    'wierd' : 'weird',
};
```

- Assume that no value of the corrections object appears as the property in the corrections object.

- AutocorrectTextArea renders a textarea element and lets users write text in it.

- Assume that the next consists only of words separated by a single space character.

- Once a space character is typed, the word preceding it is considered to be complete and must be autocorrected according to the corrections object if a corrections exists.


Initially, the file id filled with boilerplate code.

Notes the following: 

- The textarea element must have data-testid='textarea'.


Please note that the component has these data-testid attributes for test cases, and certain classes and ids for rendering purposes. You should not change them.

************************************************************************************************************************************
************************************************************************************************************************************


Cree una aplicación de autocorrección básica según los requisitos a continuación. La aplicación terminada debe pasar todas las pruebas unitarias.

Complete la implementación de src/components/AutocorrectTextArea.js de acuerdo con los siguientes requisitos:

- AutocorrectTextArea es un componente que toma correcciones tipo Objeto que asigna cadenas a sus correcciones. Por ejemplo, el siguiente objeto indica que 'realmente' es una corrección de 'reamente', y 'raro' es una corrección de 'rari':

```
const corrections = {
    'reamente' : 'realmente',
    'rari' : 'raro',
};
```

- Asuma que la ausencia de valor en el objecto de correcciones aparece como propiedad en el objeto de correcciones.

- AutocorrectTextArea representa un elemento de área de texto y permite a los usuarios escribir texto en él.

- Las palabras están separadas solo por un carácter de espacio.

- Una vez que se escriba un carácter de espacio, la palabra que lo precede se considera completa y debe autocorregirse de acuerdo con el objeto de correcciones si existe una corrección.


Considere lo siguiente:

- El elemento textarea debe tener data-testid='textarea'.


Tenga en cuenta que el componente tiene estos atributos data-testid para casos de prueba y ciertas clases e ID para fines de renderizado. No debes cambiarlos.
