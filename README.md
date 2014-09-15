# Ember CLI Addon Template

An [ember-cli](http://ember-cli.com) addon for dates. This addon includes
`time-ago-in-words`, `time-ahead-in-words`, `time-delta-in-words`. It uses
moment.js.

## Installation

First, you need to install moment.js via [bower](http://bower.io):

```
$ bower install --save moment
```

Then, install the addon:

```
npm install --save ember-cli-dates
```

## Usage

Now, in your views/templates/components:

### Time Ago in Words

```hbs
{{time-ago-in-words createdAt}} // => twelve days ago
```

### Time Ahead in Words

```hbs
{{time-ahead-in-words toBePublishedAt}} // => in 4 hours
```

### Time Delta in Words

```hbs
{{time-delta-in-words completedAt}} // => 7 minutes
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
