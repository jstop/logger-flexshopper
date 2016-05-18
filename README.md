# Logging Configuration

## Installation

```bashp
npm install winston
```
## Using it

```bashp
require('logger-flexshopper');
```

#### Options:
By default human readable console log options are used.
With environment variable `DEIS_LOGGING_ENABLED=true` logs are sent to console in a single line of json that are parsed by ELK
