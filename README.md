# Ember Dates

[![Build](https://travis-ci.org/johnotander/ember-cli-dates.svg?branch=master)](https://travis-ci.org/johnotander/ember-cli-dates)

Date helpers for your Ember app, integrates with the [ember-cli](http://ember-cli.com).

This addon includes `time-ago-in-words`, `time-ahead-in-words`, `time-delta-in-words`,
`time-format`, `day-of-the-week`. It uses moment.js.

## Installation

```
ember install:addon ember-cli-dates
```

## Usage

Now, in your views/templates/components:

### Time Deltas

#### Time Ago in Words

```hbs
{{time-ago-in-words createdAt}} {{! => twelve days ago}}
```

#### Time Ahead in Words

```hbs
{{time-ahead-in-words toBePublishedAt}} {{! => in 4 hours}}
```

#### Time Delta in Words

```hbs
{{time-delta-in-words completedAt}} {{! => 7 minutes ago}}
```

### Custom Format

```hbs
{{time-format updatedAt 'l'}} {{! => 10/9/2014}}
```

### Day of the Week

```hbs
{{day-of-the-week someDate}} {{! => Friday}}
```

## Locale Support

In order to add locale support, you need to import the locale file in your app's `Brocfile.js`:

```js
app.import(app.bowerDirectory + '/moment/locale/pt-br.js');
```

You then have the ability to specify any imported locale with:

```hbs
{{time-format createdAt 'LLLL' 'pt-br'}}
{{time-ahead-in-words nextHour 'pt-br'}}
```

## License

MIT

## Acknowledgements

This addon has stayed up to date with the Ember CLI by following one of Stefan Penner's repos:
<https://github.com/stefanpenner/ember-moment>

Thanks to the [contributors](https://github.com/johnotander/ember-cli-dates/graphs/contributors).

## Contributing

1. Fork it
2. npm install
3. bower install
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am 'Add some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
