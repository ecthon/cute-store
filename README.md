# Cute Store - House Rental Platform

Uma plataforma moderna de aluguel de casas construída com Next.js 15, TypeScript e Tailwind CSS.

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes base reutilizáveis
│   │   ├── Icon.tsx      # Wrapper para ícones
│   │   ├── Container.tsx # Container responsivo
│   │   └── index.ts      # Exportações
│   ├── house/            # Componentes específicos do domínio
│   │   ├── HouseCard.tsx # Card de casa individual
│   │   ├── HouseGrid.tsx # Grade de casas
│   │   ├── HouseSearch.tsx # Busca de casas
│   │   ├── HouseStore.tsx # Componente principal
│   │   └── index.ts      # Exportações
│   └── layout/           # Componentes de layout
│       └── Header.tsx    # Cabeçalho da aplicação
├── types/                # Definições de tipos TypeScript
│   └── house.ts         # Tipos relacionados a casas
├── data/                 # Dados mockados
│   └── houses.ts        # Dados das casas
├── hooks/               # Hooks customizados
│   └── useHouseSearch.ts # Hook para busca de casas
└── utils/               # Utilitários
    └── formatters.ts    # Funções de formatação
```

## ✨ Funcionalidades

- **Design Responsivo**: Interface adaptável para mobile, tablet e desktop
- **Busca em Tempo Real**: Filtro de casas por título ou preço
- **Componentes Modulares**: Arquitetura escalável e reutilizável
- **TypeScript**: Tipagem forte para melhor desenvolvimento
- **Performance Otimizada**: Imagens otimizadas e lazy loading

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Hugeicons** - Biblioteca de ícones

## 🛠️ Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação:**
   ```
   http://localhost:3000
   ```

## 📋 Melhorias Implementadas

### ✅ **Antes:**
- Componentes monolíticos
- Dados hardcoded nos componentes
- Falta de reutilização
- Estrutura de pastas simples

### ✅ **Depois:**
- **Separação de Responsabilidades**: Dados, lógica e apresentação separados
- **Componentes Reutilizáveis**: UI base (Icon, Container)
- **Hooks Customizados**: Lógica de busca isolada
- **Tipagem Centralizada**: Interfaces compartilhadas
- **Estrutura Organizada**: Pastas por domínio/funcionalidade
- **Formatação Consistente**: Utilitários para formatação

## 🎯 Próximos Passos Sugeridos

1. **Implementar API**: Substituir dados mockados por API real
2. **Adicionar Filtros**: Filtros por preço, localização, etc.
3. **Páginas de Detalhes**: Página individual para cada casa
4. **Estado Global**: Context API ou Zustand para estado
5. **Testes**: Unit tests para componentes e hooks
6. **PWA**: Transformar em Progressive Web App

## 📝 Convenções

- **Componentes**: PascalCase (ex: `HouseCard`)
- **Hooks**: camelCase com prefixo `use` (ex: `useHouseSearch`)
- **Tipos**: PascalCase (ex: `HouseCardProps`)
- **Arquivos**: kebab-case (ex: `house-card.tsx`)
- **Pastas**: kebab-case (ex: `house/`)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request
