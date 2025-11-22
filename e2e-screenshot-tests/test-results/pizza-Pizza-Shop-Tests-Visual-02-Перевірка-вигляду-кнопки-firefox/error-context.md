# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "🍕 Best Pizza" [level=1] [ref=e3]
  - generic [ref=e4]:
    - text: "Ваше ім'я:"
    - textbox "Ваше ім'я:" [ref=e5]:
      - /placeholder: Введіть ім'я
    - text: "Оберіть піцу:"
    - combobox "Оберіть піцу:" [ref=e6]:
      - option "Маргарита" [selected]
      - option "Пепероні"
      - option "Гавайська"
    - button "Замовити" [ref=e7] [cursor=pointer]
```