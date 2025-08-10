#!/bin/bash
# Usage: ./submit_sitemap.sh https://www.example.com/sitemap.xml
SITEMAP_URL="$1"

if [ -z "$SITEMAP_URL" ]; then
  echo "Usage: $0 SITEMAP_URL"
  exit 1
fi

echo "Submitting sitemap to Google..."
curl -s "https://www.google.com/ping?sitemap=$SITEMAP_URL"

echo "Submitting sitemap to Bing..."
curl -s "https://www.bing.com/webmaster/ping.aspx?siteMap=$SITEMAP_URL"
