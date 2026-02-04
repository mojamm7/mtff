# Free RDP Creation Guide with Search API

A comprehensive REST API for searching and finding the best free RDP (Remote Desktop Protocol) creation methods with performance optimization tips.

## Features

- **Search API**: Search through multiple free RDP creation methods
- **Performance Guides**: Tips for optimizing RDP performance
- **Comparison Tool**: Compare different RDP providers
- **Detailed Documentation**: Step-by-step guides for each method

## Quick Start

### Installation

```bash
npm install
npm start
```

The API will be available at `http://localhost:3000`

### API Endpoints

#### 1. Search for RDP Guides
```bash
GET /api/search?q=free
```

**Example:**
```bash
curl "http://localhost:3000/api/search?q=free"
```

**Response:**
```json
{
  "query": "free",
  "count": 6,
  "results": [...]
}
```

#### 2. Get All Guides
```bash
GET /api/guides
```

**Optional filters:**
- `?performance=excellent` - Filter by performance level
- `?tag=free` - Filter by tag

**Example:**
```bash
curl "http://localhost:3000/api/guides?performance=excellent&tag=always-free"
```

#### 3. Get Specific Guide
```bash
GET /api/guides/:id
```

**Example:**
```bash
curl "http://localhost:3000/api/guides/1"
```

#### 4. Get Performance Tips
```bash
GET /api/performance-tips
```

**Example:**
```bash
curl "http://localhost:3000/api/performance-tips"
```

#### 5. Compare All Methods
```bash
GET /api/compare
```

**Example:**
```bash
curl "http://localhost:3000/api/compare"
```

## Free RDP Creation Methods

### 1. GitHub Actions (Easiest & Truly Free)
- **Performance**: Good
- **Duration**: 6 hours per run
- **Cost**: Completely free, no credit card
- **Resources**: 2 cores, 7 GB RAM, 14 GB SSD

**Best for**: Quick testing, temporary work, no credit card available

### 2. Google Cloud Platform Free Tier
- **Performance**: Excellent
- **Duration**: Always-on (with limits)
- **Cost**: $300 free credit + free tier
- **Resources**: 0.25-2 vCPU, 1 GB RAM, 30 GB storage

**Best for**: Long-term use, reliable performance

### 3. AWS EC2 Free Tier
- **Performance**: Excellent
- **Duration**: 750 hours/month for 12 months
- **Cost**: Free for 12 months (credit card required)
- **Resources**: 1 vCPU, 1 GB RAM, 30 GB EBS

**Best for**: Professional projects, enterprise needs

### 4. Azure Free Tier
- **Performance**: Excellent
- **Duration**: 750 hours/month for 12 months
- **Cost**: $200 credit + 12 months free
- **Resources**: 1 vCPU, 1 GB RAM

**Best for**: Windows-focused development, Microsoft ecosystem

### 5. Oracle Cloud (Always Free)
- **Performance**: Excellent
- **Duration**: Always free (no time limit!)
- **Cost**: Free forever
- **Resources**: 1 OCPU (2 vCPUs), 1 GB RAM, 200 GB storage

**Best for**: Best specs in always-free category

### 6. Chrome Remote Desktop
- **Performance**: Excellent
- **Duration**: Unlimited
- **Cost**: Free
- **Resources**: Your own PC specs

**Best for**: Accessing your personal computer remotely

## Performance Optimization Tips

### Network Optimization
- Use closest datacenter region to reduce latency
- Enable RDP compression in client settings
- Reduce color depth to 16-bit for faster response
- Disable wallpaper and animations

### Resource Management
- Close unnecessary applications and services
- Disable Windows visual effects
- Use lightweight browsers
- Limit background processes

### RDP Client Settings
- Adjust display settings to match your screen
- Disable printer and clipboard redirection if not needed
- Enable persistent bitmap caching
- Configure bandwidth optimization

### Security Best Practices
- Always use strong passwords
- Enable Network Level Authentication (NLA)
- Use VPN when accessing RDP over public networks
- Change default RDP port (3389) to custom port
- Keep Windows and RDP client updated

## Recommended Choice

**For truly free (no credit card)**: GitHub Actions
- No credit card required
- Easy setup
- Good performance
- 6 hours per session

**For best performance with always-on access**: Oracle Cloud or Chrome Remote Desktop
- Oracle Cloud: Best free tier specs, always free
- Chrome Remote Desktop: Use your own PC, unlimited

## GitHub Actions RDP Setup (Quickest Method)

This repository includes a GitHub Actions workflow for creating a free Windows RDP environment.

### Features:
- Windows Server environment
- 6-hour session duration
- Free with GitHub Actions
- LiteManager remote access

### Usage:
1. Enable GitHub Actions in your repository
2. Go to "Actions" tab
3. Select "Windows - LiteManager" workflow
4. Click "Run workflow"
5. Wait for the setup to complete
6. Connect using the credentials provided in the workflow logs

### Workflow Performance Optimizations:
- Uses efficient Windows runners
- Pre-configured remote access tools
- Automatic timeout management (9999 minutes max)

## Example API Usage

### Search for free RDP methods
```javascript
fetch('http://localhost:3000/api/search?q=free')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Get best performing options
```javascript
fetch('http://localhost:3000/api/guides?performance=excellent')
  .then(res => res.json())
  .then(data => console.log(data));
```

### Compare all methods
```javascript
fetch('http://localhost:3000/api/compare')
  .then(res => res.json())
  .then(data => console.log(data));
```

## Contributing

Feel free to add more RDP creation methods or improve existing guides by editing `server.js`.

## License

MIT

## Disclaimer

This guide is for educational purposes. Always follow the terms of service of cloud providers and ensure you understand their free tier limitations and potential charges after the free period expires.
