#!/bin/bash
DATE=$(date +"%Y%m%d-%H%M")
lighthouse http://localhost:3000 \
  --output-path=./lighthouse-reports/report-$DATE.html \
  --output=html \
  --output=json \
  --chrome-flags="--headless" \
  --preset=desktop
