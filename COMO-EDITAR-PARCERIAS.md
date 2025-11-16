# Como Editar Parceiros e Colaboradores

## 📍 Arquivo: `data/partners.json`

Este arquivo contém todos os parceiros e colaboradores do site.

---

## 🎯 Como Editar

### Para Editar um Parceiro Principal:

Encontre o parceiro em `mainPartners` e edite:

\`\`\`json
{
  "name": "Nome da Instituição",
  "type": "Tipo (Universidade, Órgão Público, etc)",
  "description": "Descrição da parceria",
  "icon": "GraduationCap"
}
\`\`\`

**Ícones disponíveis:**
- `GraduationCap` - Para universidades/educação
- `Building2` - Para órgãos públicos/empresas
- `School` - Para escolas

### Para Adicionar um Novo Parceiro:

Copie um bloco completo e cole antes do `]`, não esqueça da vírgula:

\`\`\`json
{
  "mainPartners": [
    {
      "name": "Parceiro Existente",
      "type": "Universidade",
      "description": "Descrição...",
      "icon": "GraduationCap"
    },
    {
      "name": "NOVO PARCEIRO AQUI",
      "type": "Laboratório",
      "description": "Nova descrição...",
      "icon": "Building2"
    }
  ]
}
\`\`\`

### Para Editar Colaboradores:

Simplesmente edite o texto na lista `collaborators`:

\`\`\`json
"collaborators": [
  "Nome do Colaborador 1",
  "Nome do Colaborador 2",
  "Nome do Colaborador 3"
]
\`\`\`

### Para Adicionar um Novo Colaborador:

Adicione uma nova linha na lista com vírgula:

\`\`\`json
"collaborators": [
  "Colaborador Existente",
  "NOVO COLABORADOR AQUI"
]
\`\`\`

### Para Remover:

Delete o bloco completo (incluindo as vírgulas entre os itens).

---

## ⚠️ Importante:

- Sempre use aspas duplas `"` para texto
- Não esqueça das vírgulas entre os itens
- O último item de cada lista NÃO tem vírgula depois
- Mantenha a estrutura do JSON intacta
