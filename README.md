# JSON to SQL Converter

A powerful web-based tool for converting JSON data into SQL table creation scripts. This tool supports multiple database types and provides a user-friendly interface with real-time JSON validation and formatting.

## Features

- **Multiple Database Support**
  - MySQL
  - PostgreSQL
  - SQLite
  - More coming soon...

- **JSON Features**
  - Real-time syntax validation
  - JSON formatting
  - Error highlighting
  - Line numbers
  - Expandable/collapsible view

- **User Interface**
  - Modern dark theme
  - Responsive design
  - Multi-language support (English/Chinese)
  - Syntax highlighting
  - Copy to clipboard functionality

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/json2mysql.git
cd json2mysql
```

2. Open `index.html` in your web browser

No server setup required! This is a client-side only application.

## Usage

1. Enter or paste your JSON data in the left editor
2. Select your target SQL database type
3. (Optional) Enter a custom table name
4. Click "Convert" to generate the SQL creation script
5. Copy the generated SQL using the copy button

## Keyboard Shortcuts

- `Ctrl + Space`: Format JSON
- `Ctrl + E`: Expand all
- `Ctrl + C`: Collapse all
- `Ctrl + L`: Clear editor
- `Ctrl + Enter`: Convert to SQL

## Supported Data Types

| JSON Type | MySQL | PostgreSQL | SQLite |
|-----------|--------|------------|---------|
| String | VARCHAR(255) | TEXT | TEXT |
| Number (Integer) | INT | INTEGER | INTEGER |
| Number (Float) | FLOAT | REAL | REAL |
| Boolean | TINYINT(1) | BOOLEAN | INTEGER |
| Array/Object | JSON | JSONB | TEXT |
| Date String | DATETIME | TIMESTAMP | TEXT |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [CodeMirror](https://codemirror.net/) for the code editor
- [Bootstrap](https://getbootstrap.com/) for the UI framework
- [Prism.js](https://prismjs.com/) for syntax highlighting
