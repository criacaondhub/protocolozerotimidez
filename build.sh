#!/bin/bash

# Build script for Docker image
# Usage: ./build.sh

IMAGE_NAME="protocolozerotimidez"
TAG="latest"

echo "🚀 Building Docker image: $IMAGE_NAME:$TAG"

docker build -t $IMAGE_NAME:$TAG .

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📦 Image: $IMAGE_NAME:$TAG"
else
    echo "❌ Build failed!"
    exit 1
fi
