# ember-cli-dates [![Build](https://travis-ci.org/johnotander/ember-cli-dates.svg?branch=master)](https://travis-ci.org/johnotander/ember-cli-dates) [![Ember Observer Score](http://emberobserver.com/badges/ember-cli-dates.svg)](http://emberobserver.com/addons/ember-cli-dates)

Ember date helpers with locale support.

This addon includes `time-ago-in-words`, `time-ahead-in-words`, `time-delta-in-words`,
`time-format`, `day-of-the-week`, `date-and-time`, `month-and-day`, `month-and-year`.
It uses moment.js.

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

#### Month and Day

```hbs
{{month-and-day completedAt}} {{! => Jan 1st}}
{{month-and-day completedAt}} {{! => jan 1º}}
```

#### Month and Year

```hbs
{{month-and-year completedAt 'pt-br'}} {{! => Jan 2015}}
```

#### Date and Time

```hbs
{{date-and-time publishedAt}} {{! January 1, 2014 12:00 AM}}
{{date-and-time publishedAt 'pt-br'}} {{! 1 de janeiro de 2014 às 00:00}}
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

## Contributing

1. Fork it
2. npm install
3. bower install
4. Create your feature branch (`git checkout -b my-new-feature`)
5. Commit your changes (`git commit -am 'Add some feature'`)
6. Push to the branch (`git push origin my-new-feature`)
7. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com)([@4lpine](https://twitter.com/4lpine)).
