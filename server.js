const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory database with RDP creation guides
const rdpGuides = [
  {
    id: 1,
    title: "Create Free RDP with GitHub Actions",
    method: "GitHub Actions",
    performance: "good",
    duration: "6 hours",
    steps: [
      "Fork a repository with Windows runner workflow",
      "Enable GitHub Actions in repository settings",
      "Configure workflow with RDP tools (ngrok, LiteManager, or Chrome Remote Desktop)",
      "Trigger workflow manually via workflow_dispatch",
      "Connect using provided credentials"
    ],
    pros: ["Free", "No credit card required", "Easy setup", "Good performance"],
    cons: ["6 hour time limit", "Requires workflow re-run", "Public repository recommended"],
    resources: {
      cpu: "2 cores",
      ram: "7 GB",
      storage: "14 GB SSD"
    },
    tags: ["free", "github", "windows", "automated"]
  },
  {
    id: 2,
    title: "Google Cloud Platform Free Tier RDP",
    method: "GCP Free Tier",
    performance: "excellent",
    duration: "always-on (with limits)",
    steps: [
      "Sign up for GCP account (requires credit card for verification)",
      "Navigate to Compute Engine",
      "Create new VM instance in eligible free tier zone (us-west1, us-central1, us-east1)",
      "Select e2-micro instance (0.25-2 vCPU, 1 GB memory)",
      "Choose Windows Server 2019/2022 image",
      "Set firewall rules to allow RDP (port 3389)",
      "Create and save Windows password",
      "Connect via Remote Desktop client"
    ],
    pros: ["Always-on availability", "Excellent performance for basic tasks", "$300 free credit for new users", "Reliable infrastructure"],
    cons: ["Requires credit card", "Limited to f1-micro/e2-micro after free tier", "Charged after free credits expire"],
    resources: {
      cpu: "0.25-2 vCPU shared",
      ram: "1 GB",
      storage: "30 GB standard persistent disk"
    },
    tags: ["free-tier", "gcp", "windows", "cloud", "always-on"]
  },
  {
    id: 3,
    title: "AWS EC2 Free Tier RDP",
    method: "AWS Free Tier",
    performance: "excellent",
    duration: "750 hours/month for 12 months",
    steps: [
      "Create AWS account (credit card required)",
      "Go to EC2 Dashboard",
      "Launch Instance with Windows Server 2019/2022 AMI",
      "Select t2.micro instance (free tier eligible)",
      "Configure security group to allow RDP (port 3389)",
      "Create or select key pair",
      "Launch instance and get Windows password",
      "Connect using Remote Desktop"
    ],
    pros: ["Professional cloud infrastructure", "750 hours/month free", "Scalable", "Good performance"],
    cons: ["Requires credit card", "Only free for 12 months", "Complex for beginners", "Charges after free tier"],
    resources: {
      cpu: "1 vCPU",
      ram: "1 GB",
      storage: "30 GB EBS"
    },
    tags: ["free-tier", "aws", "windows", "cloud", "professional"]
  },
  {
    id: 4,
    title: "Azure Free Tier RDP",
    method: "Microsoft Azure",
    performance: "excellent",
    duration: "750 hours/month for 12 months",
    steps: [
      "Sign up for Azure account ($200 credit + 12 months free services)",
      "Navigate to Virtual Machines",
      "Create Windows Server VM (B1s size for free tier)",
      "Configure networking and RDP access",
      "Set admin credentials",
      "Deploy virtual machine",
      "Connect via RDP client"
    ],
    pros: ["$200 free credit", "Native Windows Server", "12 months free", "Enterprise-grade"],
    cons: ["Credit card required", "Limited after free tier", "Can be complex"],
    resources: {
      cpu: "1 vCPU",
      ram: "1 GB",
      storage: "Managed disk"
    },
    tags: ["free-tier", "azure", "windows", "microsoft", "enterprise"]
  },
  {
    id: 5,
    title: "Oracle Cloud Free Tier RDP",
    method: "Oracle Cloud",
    performance: "excellent",
    duration: "always-free",
    steps: [
      "Create Oracle Cloud account",
      "Access Compute Instances",
      "Create Windows VM instance",
      "Select Always Free eligible shape (VM.Standard.E2.1.Micro)",
      "Configure VCN and security lists for RDP",
      "Set Windows password",
      "Connect via RDP"
    ],
    pros: ["Always free (not time-limited)", "Better specs than competitors", "Up to 2 VMs", "No time limit"],
    cons: ["Credit card required for verification", "Account approval can be slow", "Windows license costs may apply"],
    resources: {
      cpu: "1 OCPU (2 vCPUs)",
      ram: "1 GB",
      storage: "Up to 200 GB block storage"
    },
    tags: ["always-free", "oracle", "cloud", "generous"]
  },
  {
    id: 6,
    title: "Chrome Remote Desktop (Use Your Own PC)",
    method: "Chrome Remote Desktop",
    performance: "excellent",
    duration: "unlimited",
    steps: [
      "Install Chrome browser on your PC",
      "Go to remotedesktop.google.com/access",
      "Download and install Chrome Remote Desktop",
      "Set up remote access with PIN",
      "Access from any device via remotedesktop.google.com",
      "Enter your PIN to connect"
    ],
    pros: ["Completely free", "Unlimited usage", "Access your own PC", "Cross-platform", "Best performance"],
    cons: ["Requires your own PC to be running", "Consumes home electricity", "Dependent on home internet"],
    resources: {
      cpu: "Your PC specs",
      ram: "Your PC specs",
      storage: "Your PC specs"
    },
    tags: ["free", "chrome", "remote-access", "personal", "unlimited"]
  }
];

// Performance optimization tips
const performanceTips = [
  {
    category: "Network Optimization",
    tips: [
      "Use closest datacenter region to reduce latency",
      "Enable RDP compression in client settings",
      "Reduce color depth to 16-bit for faster response",
      "Disable wallpaper and animations",
      "Use RemoteFX for better graphics performance"
    ]
  },
  {
    category: "Resource Management",
    tips: [
      "Close unnecessary applications and services",
      "Disable Windows visual effects",
      "Use lightweight browsers (Edge, Chrome)",
      "Limit background processes",
      "Configure pagefile for better memory management"
    ]
  },
  {
    category: "RDP Client Settings",
    tips: [
      "Adjust display settings to match your screen",
      "Disable printer and clipboard redirection if not needed",
      "Use smart sizing for better display adaptation",
      "Enable persistent bitmap caching",
      "Configure bandwidth optimization"
    ]
  },
  {
    category: "Security Best Practices",
    tips: [
      "Always use strong passwords",
      "Enable Network Level Authentication (NLA)",
      "Use VPN when accessing RDP over public networks",
      "Change default RDP port (3389) to custom port",
      "Keep Windows and RDP client updated",
      "Enable firewall with restricted IP access"
    ]
  }
];

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({
    message: "RDP Search API - Free RDP Creation Guide",
    version: "1.0.0",
    endpoints: {
      search: "GET /api/search?q=query",
      guides: "GET /api/guides",
      guide: "GET /api/guides/:id",
      performance: "GET /api/performance-tips",
      compare: "GET /api/compare"
    }
  });
});

// Search endpoint - main feature
app.get('/api/search', (req, res) => {
  const query = req.query.q?.toLowerCase() || '';

  if (!query) {
    return res.status(400).json({
      error: "Query parameter 'q' is required",
      example: "/api/search?q=free rdp"
    });
  }

  // Search through guides
  const results = rdpGuides.filter(guide => {
    const searchText = `${guide.title} ${guide.method} ${guide.performance} ${guide.tags.join(' ')}`.toLowerCase();
    return searchText.includes(query);
  });

  res.json({
    query,
    count: results.length,
    results: results.map(guide => ({
      id: guide.id,
      title: guide.title,
      method: guide.method,
      performance: guide.performance,
      duration: guide.duration,
      tags: guide.tags,
      resources: guide.resources
    }))
  });
});

// Get all guides
app.get('/api/guides', (req, res) => {
  const performance = req.query.performance?.toLowerCase();
  const tag = req.query.tag?.toLowerCase();

  let filtered = rdpGuides;

  if (performance) {
    filtered = filtered.filter(g => g.performance.toLowerCase() === performance);
  }

  if (tag) {
    filtered = filtered.filter(g => g.tags.includes(tag));
  }

  res.json({
    count: filtered.length,
    guides: filtered
  });
});

// Get specific guide
app.get('/api/guides/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const guide = rdpGuides.find(g => g.id === id);

  if (!guide) {
    return res.status(404).json({ error: "Guide not found" });
  }

  res.json(guide);
});

// Get performance tips
app.get('/api/performance-tips', (req, res) => {
  res.json({
    tips: performanceTips
  });
});

// Compare guides
app.get('/api/compare', (req, res) => {
  const comparison = rdpGuides.map(guide => ({
    method: guide.method,
    performance: guide.performance,
    duration: guide.duration,
    creditCardRequired: guide.cons.some(con => con.toLowerCase().includes('credit card')),
    alwaysFree: guide.tags.includes('always-free') || guide.tags.includes('free'),
    resources: guide.resources,
    bestFor: guide.performance === 'excellent' && guide.tags.includes('always-free')
      ? 'Best overall'
      : guide.method === 'GitHub Actions'
      ? 'Easiest and truly free'
      : guide.performance === 'excellent'
      ? 'Best performance'
      : 'Good option'
  }));

  res.json({
    comparison,
    recommendation: "For truly free without credit card: GitHub Actions. For best performance and always-on: Oracle Cloud or Chrome Remote Desktop with your own PC."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ RDP Search API running on http://localhost:${PORT}`);
  console.log(`✓ Search endpoint: http://localhost:${PORT}/api/search?q=free`);
  console.log(`✓ API Documentation: http://localhost:${PORT}/`);
});

module.exports = app;
