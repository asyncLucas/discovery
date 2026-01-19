# 🌐 Discovery

An interactive knowledge tree visualization built with ECharts that organizes and displays your curated learning resources, development tools, and career links in a beautiful, explorable interface.

## ✨ Features

- **Interactive Tree Visualization** - Navigate through categorized resources with smooth animations and expandable nodes
- **Smart Tooltips** - Hover over any node to see detailed descriptions
- **One-Click Access** - Click any resource to open it in a new tab
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Pan & Zoom** - Explore the tree with mouse controls for easy navigation
- **Visual Indicators** - Clickable links are highlighted with 🔗 icons and distinct colors

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/discovery.git
cd discovery
```

2. Open `index.html` in your browser or serve it with a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
discovery/
├── index.html      # Main HTML file
├── app.js          # Chart initialization and interaction logic
├── data.json       # Knowledge tree data structure
├── LICENSE         # Project license
└── README.md       # This file
```

## 📝 Data Structure

Resources are organized in `data.json` with the following structure:

```json
{
  "name": "Category Name",
  "description": "Optional category description",
  "children": [
    {
      "name": "Subcategory",
      "links": [
        {
          "label": "Resource Name",
          "url": "https://example.com",
          "description": "Brief description of the resource"
        }
      ]
    }
  ]
}
```

## 🎨 Customization

### Colors

Edit the color scheme in `app.js`:

- **Clickable links**: `#38bdf8` (sky blue)
- **Category nodes**: `#94a3b8` (slate gray)
- **Lines**: `#475569` (dark slate)
- **Background**: `#0f172a` (dark blue-gray)

### Tree Orientation

Change the tree direction by modifying the `orient` property:

```javascript
orient: 'LR'; // Left to Right (default)
orient: 'TB'; // Top to Bottom
orient: 'RL'; // Right to Left
orient: 'BT'; // Bottom to Top
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features or improvements
- 📚 Add new resources to the knowledge tree
- 🎨 Improve the UI/UX design
- 📖 Enhance documentation
- 🌍 Add internationalization support

## 📋 Roadmap

- [ ] Search functionality to find resources quickly
- [ ] Filter by categories or tags
- [ ] Export/import functionality for sharing knowledge trees
- [ ] Dark/light theme toggle
- [ ] Save expanded/collapsed state
- [ ] Add resource ratings or favorites
- [ ] Mobile app version

## 🛠️ Built With

- [ECharts](https://echarts.apache.org/) - Interactive charting library
- Vanilla JavaScript - No framework dependencies
- Modern CSS - Clean and responsive styling

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the need to organize and visualize learning resources
- Built with the amazing [ECharts](https://echarts.apache.org/) library
- Special thanks to all contributors and resource curators

## 📧 Contact

Lucas Silva - [@asyncLucas](https://github.com/asyncLucas)

Project Link: [https://github.com/asyncLucas/discovery](https://github.com/asyncLucas/discovery)

---

⭐ **Star this repo** if you find it helpful!
