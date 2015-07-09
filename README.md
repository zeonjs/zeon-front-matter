# zeon-front-matter

[![NPM](https://nodei.co/npm/zeon-front-matter.png)](https://nodei.co/npm/zeon-front-matter/)

Extract front matter from strings.

Install
===
install with [npm](https://www.npmjs.com/)

```bash
npm install zeon-front-matter
```

front-matter
===

**YAML front-matter**
```yaml
---
layout: base
modal: none
---
bar
```

**HTML Comments front-matter**
```html
<!--[conf.yaml]
layout: base
modal: none
[conf.yaml]-->
<!DOCTYPE html>
<html>
<head></head>
<body></body>
</html>
```


Methods
===

```node
var fm = require('zeon-front-matter');
```

## fm(string, options)

## fm.parse(string, options)

## fm.split(string)
