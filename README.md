# Сайт креативной студии Latte-Mattina

## Чтобы запустить проект локально

1. Клонировать репозиторий

```bash
     git clone https://github.com/KitaBiserov/latte-mattina.git
```

2. Установить зависимости:
   - Скачать Node 14+ (https://nodejs.org/en),
   - Установить пакетный менеджер pnpm:

```PowerShell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

3. Перейти в директорию проекта

```PowerShell
cd /path/to/project
```

4.  Установить зависимости внутри проекта

```PowerShell
pnpm install
```
5. Распаковать архивы с статическими файлами 
   ```PowerShell
      Expand-Archive -Path ./shared.assets.zip -DestinationPath ./src/shared 
   ```
   ```PowerShell
      Expand-Archive -Path ./public.zip -DestinationPath .
   ```
5. Запустить режим разработчика

```PowerShell
pnpm dev
```

6. После изменений собрать проект

```Powershell
pnpm build
```

7. Обновить или создать архив с сайтом

```PowerShell
	Compress-Archive -Path ./dist/* -DestinationPath latte-mattina-website.zip -Update
```

## Чтобы добавить продукт

1. Добавить название, размер, путь к изображению в файл `./src/shared/patches.json`

````JSON {
    id: 999,
    title: "Example",
    size: "9x9",
    image: "/products/example"
    category: 0, // 0, 1, 2, 3
}```

3. Добавить изображение в формате `.webp` или `.png` в папку `./public/products/` (Пример: `./public/products/example`)

4. Собрать проект `pnpm build`

