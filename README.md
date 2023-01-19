### Design

The final version of the application is hosted [here](https://master.d2a6vne2z4dg1a.amplifyapp.com)

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
<<Interface>> Class01
Class09 --> C2 : Where am I?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
class Class10 {
  <<service>>
  int id
  size()
}
```

Application is deployed [here](https://master.d2a6vne2z4dg1a.amplifyapp.com/)

### Todos

- [ ] make a meal object which you can update as a single source of truth for name and recipe
- [ ] make it harder for the meal to be created with no name (use required on the input field?)
- [ ] make the select feature so that not all the foods that are created are selected
