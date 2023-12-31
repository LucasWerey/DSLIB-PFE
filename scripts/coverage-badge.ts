const fs = require('fs')
const https = require('https')
const path = require('path')

const coverageSummary = JSON.parse(fs.readFileSync('./coverage/coverage-summary.json', 'utf8'))

const formatPercentage = (value: number) => `${value.toFixed(2)}`

const badgeUrl = `https://img.shields.io/badge/Coverage-${encodeURIComponent(
  formatPercentage(coverageSummary.total.lines.pct)
)}%25-7BC079?style=for-the-badge&logo=vitest`

https.get(badgeUrl, (res: any) => {
  const badgesDir = './badges'
  if (!fs.existsSync(badgesDir)) {
    fs.mkdirSync(badgesDir)
  }
  res.pipe(fs.createWriteStream(path.join(badgesDir, 'coverage.svg')))
})

console.log(
  '\x1b[32m%s\x1b[0m',
  `Updated coverage badge to ${formatPercentage(coverageSummary.total.lines.pct)}%`
)
