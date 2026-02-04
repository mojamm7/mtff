# API Usage Examples

## Quick Start Examples

### 1. Search for Free RDP Methods

```bash
# Search for completely free methods
curl "http://localhost:3000/api/search?q=free"

# Search for GitHub Actions method
curl "http://localhost:3000/api/search?q=github"

# Search for cloud providers
curl "http://localhost:3000/api/search?q=cloud"

# Search for always-on options
curl "http://localhost:3000/api/search?q=always-on"
```

**Response Example:**
```json
{
  "query": "free",
  "count": 6,
  "results": [
    {
      "id": 1,
      "title": "Create Free RDP with GitHub Actions",
      "method": "GitHub Actions",
      "performance": "good",
      "duration": "6 hours",
      "tags": ["free", "github", "windows", "automated"],
      "resources": {
        "cpu": "2 cores",
        "ram": "7 GB",
        "storage": "14 GB SSD"
      }
    }
  ]
}
```

### 2. Get All Guides with Filters

```bash
# Get all guides
curl "http://localhost:3000/api/guides"

# Filter by excellent performance
curl "http://localhost:3000/api/guides?performance=excellent"

# Filter by tag
curl "http://localhost:3000/api/guides?tag=always-free"

# Combine filters
curl "http://localhost:3000/api/guides?performance=excellent&tag=cloud"
```

### 3. Get Specific Guide Details

```bash
# Get GitHub Actions guide
curl "http://localhost:3000/api/guides/1"

# Get Google Cloud guide
curl "http://localhost:3000/api/guides/2"

# Get Oracle Cloud guide
curl "http://localhost:3000/api/guides/5"
```

**Response Example:**
```json
{
  "id": 1,
  "title": "Create Free RDP with GitHub Actions",
  "method": "GitHub Actions",
  "performance": "good",
  "duration": "6 hours",
  "steps": [
    "Fork a repository with Windows runner workflow",
    "Enable GitHub Actions in repository settings",
    "Configure workflow with RDP tools",
    "Trigger workflow manually",
    "Connect using provided credentials"
  ],
  "pros": [
    "Free",
    "No credit card required",
    "Easy setup",
    "Good performance"
  ],
  "cons": [
    "6 hour time limit",
    "Requires workflow re-run",
    "Public repository recommended"
  ],
  "resources": {
    "cpu": "2 cores",
    "ram": "7 GB",
    "storage": "14 GB SSD"
  },
  "tags": ["free", "github", "windows", "automated"]
}
```

### 4. Get Performance Optimization Tips

```bash
curl "http://localhost:3000/api/performance-tips"
```

**Response Example:**
```json
{
  "tips": [
    {
      "category": "Network Optimization",
      "tips": [
        "Use closest datacenter region to reduce latency",
        "Enable RDP compression in client settings",
        "Reduce color depth to 16-bit for faster response"
      ]
    },
    {
      "category": "Resource Management",
      "tips": [
        "Close unnecessary applications and services",
        "Disable Windows visual effects"
      ]
    }
  ]
}
```

### 5. Compare All Methods

```bash
curl "http://localhost:3000/api/compare"
```

**Response Example:**
```json
{
  "comparison": [
    {
      "method": "GitHub Actions",
      "performance": "good",
      "duration": "6 hours",
      "creditCardRequired": false,
      "alwaysFree": true,
      "resources": {
        "cpu": "2 cores",
        "ram": "7 GB",
        "storage": "14 GB SSD"
      },
      "bestFor": "Easiest and truly free"
    },
    {
      "method": "Oracle Cloud",
      "performance": "excellent",
      "duration": "always-free",
      "creditCardRequired": true,
      "alwaysFree": true,
      "resources": {
        "cpu": "1 OCPU (2 vCPUs)",
        "ram": "1 GB",
        "storage": "Up to 200 GB block storage"
      },
      "bestFor": "Best overall"
    }
  ],
  "recommendation": "For truly free without credit card: GitHub Actions. For best performance and always-on: Oracle Cloud or Chrome Remote Desktop with your own PC."
}
```

## JavaScript/Node.js Examples

### Using fetch API

```javascript
// Search for free RDP
async function searchRDP(query) {
  const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
  const data = await response.json();
  console.log(`Found ${data.count} results:`);
  data.results.forEach(result => {
    console.log(`- ${result.title} (${result.performance} performance)`);
  });
}

searchRDP('free');
```

### Using axios

```javascript
const axios = require('axios');

// Get all excellent performance options
axios.get('http://localhost:3000/api/guides', {
  params: {
    performance: 'excellent'
  }
})
.then(response => {
  console.log(`Found ${response.data.count} excellent options:`);
  response.data.guides.forEach(guide => {
    console.log(`${guide.method}: ${guide.duration}`);
  });
})
.catch(error => console.error('Error:', error));
```

### Complete Example Script

```javascript
const express = require('express');
const axios = require('axios');

const API_BASE = 'http://localhost:3000/api';

async function findBestRDP() {
  try {
    // Get comparison
    const comparison = await axios.get(`${API_BASE}/compare`);
    console.log('Recommendation:', comparison.data.recommendation);

    // Search for free options
    const freeOptions = await axios.get(`${API_BASE}/search?q=free`);
    console.log(`\nFound ${freeOptions.data.count} free options\n`);

    // Get detailed guide for GitHub Actions
    const githubGuide = await axios.get(`${API_BASE}/guides/1`);
    console.log('GitHub Actions Setup:');
    githubGuide.data.steps.forEach((step, index) => {
      console.log(`${index + 1}. ${step}`);
    });

    // Get performance tips
    const tips = await axios.get(`${API_BASE}/performance-tips`);
    console.log('\nPerformance Tips:');
    tips.data.tips.forEach(category => {
      console.log(`\n${category.category}:`);
      category.tips.slice(0, 3).forEach(tip => console.log(`  - ${tip}`));
    });

  } catch (error) {
    console.error('Error:', error.message);
  }
}

findBestRDP();
```

## Python Examples

### Using requests library

```python
import requests

# Search for RDP methods
def search_rdp(query):
    response = requests.get(f'http://localhost:3000/api/search', params={'q': query})
    data = response.json()
    print(f"Found {data['count']} results:")
    for result in data['results']:
        print(f"- {result['title']} ({result['performance']} performance)")

search_rdp('cloud')
```

### Get best free option

```python
import requests

def get_best_free_rdp():
    # Get all guides
    response = requests.get('http://localhost:3000/api/guides')
    guides = response.json()['guides']

    # Filter truly free (no credit card)
    free_guides = [g for g in guides if 'credit card' not in ' '.join(g['cons']).lower()]

    print("Truly Free RDP Options (No Credit Card):")
    for guide in free_guides:
        print(f"\n{guide['title']}")
        print(f"  Performance: {guide['performance']}")
        print(f"  Duration: {guide['duration']}")
        print(f"  Resources: {guide['resources']['cpu']}, {guide['resources']['ram']}")

get_best_free_rdp()
```

## cURL Advanced Examples

### Pretty print JSON response (with jq)

```bash
# Search and format output
curl -s "http://localhost:3000/api/search?q=github" | jq '.results[] | {title, performance, resources}'

# Get only method names
curl -s "http://localhost:3000/api/guides" | jq '.guides[] | .method'

# Filter by excellent performance
curl -s "http://localhost:3000/api/guides?performance=excellent" | jq '.guides[] | {method, duration}'
```

### Save response to file

```bash
# Save all guides
curl "http://localhost:3000/api/guides" > rdp_guides.json

# Save comparison
curl "http://localhost:3000/api/compare" > rdp_comparison.json

# Save performance tips
curl "http://localhost:3000/api/performance-tips" > performance_tips.json
```

## Integration Examples

### Web Application Integration

```html
<!DOCTYPE html>
<html>
<head>
    <title>Free RDP Finder</title>
</head>
<body>
    <h1>Find Free RDP Methods</h1>
    <input type="text" id="search" placeholder="Search...">
    <button onclick="search()">Search</button>
    <div id="results"></div>

    <script>
        async function search() {
            const query = document.getElementById('search').value;
            const response = await fetch(`http://localhost:3000/api/search?q=${query}`);
            const data = await response.json();

            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `<h2>Found ${data.count} results:</h2>`;

            data.results.forEach(result => {
                resultsDiv.innerHTML += `
                    <div>
                        <h3>${result.title}</h3>
                        <p>Performance: ${result.performance}</p>
                        <p>Duration: ${result.duration}</p>
                        <p>Resources: ${result.resources.cpu}, ${result.resources.ram}</p>
                    </div>
                `;
            });
        }
    </script>
</body>
</html>
```

### CLI Tool Example

```javascript
#!/usr/bin/env node
const axios = require('axios');

const API_BASE = 'http://localhost:3000/api';

async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    switch(command) {
        case 'search':
            const query = args[1] || 'free';
            const results = await axios.get(`${API_BASE}/search?q=${query}`);
            console.log(`Found ${results.data.count} results:`);
            results.data.results.forEach(r => console.log(`- ${r.title}`));
            break;

        case 'compare':
            const comparison = await axios.get(`${API_BASE}/compare`);
            console.log(comparison.data.recommendation);
            break;

        case 'tips':
            const tips = await axios.get(`${API_BASE}/performance-tips`);
            tips.data.tips.forEach(cat => {
                console.log(`\n${cat.category}:`);
                cat.tips.forEach(tip => console.log(`  - ${tip}`));
            });
            break;

        default:
            console.log('Usage: rdp-cli [search|compare|tips] [query]');
    }
}

main().catch(console.error);
```

Save as `rdp-cli.js` and run:
```bash
chmod +x rdp-cli.js
./rdp-cli.js search github
./rdp-cli.js compare
./rdp-cli.js tips
```

## Testing the API

```bash
# Start the server
npm start

# In another terminal, run tests
curl http://localhost:3000/
curl "http://localhost:3000/api/search?q=free"
curl "http://localhost:3000/api/guides?performance=excellent"
curl http://localhost:3000/api/guides/1
curl http://localhost:3000/api/performance-tips
curl http://localhost:3000/api/compare
```

## Common Use Cases

### 1. Find truly free option (no credit card)
```bash
curl "http://localhost:3000/api/search?q=github"
```

### 2. Find best performance with always-on
```bash
curl "http://localhost:3000/api/guides?performance=excellent&tag=always-free"
```

### 3. Compare all cloud providers
```bash
curl "http://localhost:3000/api/search?q=cloud" | jq '.results[] | {method, performance, duration}'
```

### 4. Get setup instructions for GitHub Actions
```bash
curl "http://localhost:3000/api/guides/1" | jq '.steps[]'
```
