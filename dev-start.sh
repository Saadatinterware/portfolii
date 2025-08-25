#!/bin/bash

# Modern Portfolio Website Development Script
# This script provides multiple ways to run the development server

echo "🚀 Modern Portfolio Website Development Script"
echo "=============================================="

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
REQUIRED_VERSION="20.19.0"

echo "Current Node.js version: v$NODE_VERSION"
echo "Required Node.js version: v$REQUIRED_VERSION or higher"

# Function to compare versions
version_compare() {
    if [[ $1 == $2 ]]; then
        return 0
    fi
    local IFS=.
    local i ver1=($1) ver2=($2)
    for ((i=${#ver1[@]}; i<${#ver2[@]}; i++)); do
        ver1[i]=0
    done
    for ((i=0; i<${#ver1[@]}; i++)); do
        if [[ -z ${ver2[i]} ]]; then
            ver2[i]=0
        fi
        if ((10#${ver1[i]} > 10#${ver2[i]})); then
            return 1
        fi
        if ((10#${ver1[i]} < 10#${ver2[i]})); then
            return 2
        fi
    done
    return 0
}

# Check if current version meets requirements
version_compare $NODE_VERSION $REQUIRED_VERSION
result=$?

if [[ $result -eq 1 ]] || [[ $result -eq 0 ]]; then
    echo "✅ Node.js version is compatible!"
    echo "Starting development server..."
    npm run dev
else
    echo "⚠️  Node.js version is too old for Vite"
    echo ""
    echo "Here are your options:"
    echo ""
    echo "1. 🔄 Update Node.js (Recommended)"
    echo "   - Visit: https://nodejs.org/"
    echo "   - Download and install the latest LTS version"
    echo ""
    echo "2. 📦 Use Node Version Manager (nvm)"
    echo "   - Install nvm: https://github.com/nvm-sh/nvm"
    echo "   - Run: nvm install 20 && nvm use 20"
    echo ""
    echo "3. 🐳 Use Docker (Alternative)"
    echo "   - Create a Dockerfile with Node 20+"
    echo "   - Run the project in a container"
    echo ""
    echo "4. 🌐 Use Online Development Environment"
    echo "   - CodeSandbox: https://codesandbox.io/"
    echo "   - StackBlitz: https://stackblitz.com/"
    echo "   - Replit: https://replit.com/"
    echo ""
    echo "5. 📁 Open files directly"
    echo "   - Open index.html in the browser"
    echo "   - Use Live Server extension in VS Code"
    echo ""
    
    read -p "Would you like to try opening the project files? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if command -v code &> /dev/null; then
            echo "Opening project in VS Code..."
            code .
        else
            echo "Opening project folder..."
            if [[ "$OSTYPE" == "linux-gnu"* ]]; then
                xdg-open .
            elif [[ "$OSTYPE" == "darwin"* ]]; then
                open .
            elif [[ "$OSTYPE" == "msys" ]]; then
                explorer .
            fi
        fi
    fi
fi

echo ""
echo "📚 For more information, check:"
echo "   - README.md - Project overview and setup"
echo "   - DEVELOPMENT.md - Detailed development guide"
echo ""
echo "🎯 Quick customization tips:"
echo "   - Update personal info in src/components/Hero.jsx"
echo "   - Modify colors in src/index.css (CSS variables)"
echo "   - Add your projects in src/components/Projects.jsx"
echo "   - Replace placeholder images in src/assets/"
echo ""
echo "Happy coding! 🚀✨"
