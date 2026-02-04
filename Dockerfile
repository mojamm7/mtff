# Dockerfile for RDP Search API
# Optimized for performance and small size

FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json ./
RUN npm install --production && npm cache clean --force

# Copy application files
COPY server.js ./
COPY README.md ./

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the server
CMD ["node", "server.js"]
