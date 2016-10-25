# freebook [![npm version][npm-image]][npm-url] [![npm downloads total][dt-image]][dt-url]
Packpub free learning cli tool

## install
```bash 
$ [sudo] npm install -g freebook
```

## update
```bash 
$ [sudo] npm update -g freebook
```

## use
```bash 
$ freebook
```
[![asciicast](https://asciinema.org/a/90491.png)](https://asciinema.org/a/90491)

## get daily mail with your server's cron
```crontab
0 7 * * * freebook | mail -s "Today's free book" mail@example.com >/dev/null 2>&1
```

[npm-image]: https://img.shields.io/npm/v/freebook.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/freebook

[dt-image]: https://img.shields.io/npm/dt/freebook.svg?style=flat-square
[dt-url]: https://www.npmjs.com/package/freebook
