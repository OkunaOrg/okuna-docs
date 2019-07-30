# Okuna Django API Setup

## Project overview

The project is a [Django](https://www.djangoproject.com/start/) application. 

## Requirements

* [Pipenv](https://github.com/pypa/pipenv)

## Contributing

There are many different ways to contribute to the website development, just find the one that best fits with your skills and open an issue/pull request in the repository.

Examples of contributions we love include:

- **Code patches**
- **Bug reports**
- **Patch reviews**
- **Translations**
- **UI enhancements**

#### Code of Conduct

Please read and follow our [Code of Conduct](https://github.com/OkunaOrg/okuna-api/blob/master/CODE_OF_CONDUCT.md).

#### License

Every contribution accepted is licensed under [AGPL v3.0](http://www.gnu.org/licenses/agpl-3.0.html) or any later version. 
You must be careful to not include any code that can not be licensed under this license.

Please read carefully [our license](https://github.com/OkunaOrg/okuna-www-api/blob/master/LICENSE.txt) and ask us if you have any questions.

#### Responsible disclosure

Cyber-hero? Check out our [Vulnerability Disclosure page](https://www.okuna.io/en/vulnerability-report).

#### Other issues

We're available almost 24/7 in the Okuna slack channel. [Join us!](https://join.slack.com/t/okunaorg/shared_invite/enQtNDI2NjI3MDM0MzA2LTYwM2E1Y2NhYWRmNTMzZjFhYWZlYmM2YTQ0MWEwYjYyMzcxMGI0MTFhNTIwYjU2ZDI1YjllYzlhOWZjZDc4ZWY)

#### Git commit message conventions

Help us keep the repository history consistent 🙏!

We use [gitmoji](https://gitmoji.carloscuesta.me/) as our git message convention.

If you're using git in your command line, you can download the handy tool [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli).

## Getting started

#### Clone the repository

```sh
git clone git@github.com:OkunaOrg/okuna-api.git
```

#### Create and configure your .env file

```bash
cp .env.sample .env
nano .env
```

#### Install the dependencies
```bash
pipenv install
```

#### Activate the pipenv environment
```bash
pipenv shell
```

#### Run the database migrations
```bash
python manage.py migrate
```

#### Collect the media fixtures

```bash
python manage.py collectmedia
```

#### Load the fixtures
```bash
python manage.py loaddata circles.json emoji-groups.json emojis.json badges.json categories.json
```

#### Serve with hot reload at http://127.0.0.1:8000
```bash
python manage.py runserver
```

<br>

## Django Custom Commands

### `manage.py create_invite`

Creates a user invite and outputs its token.
Required for creating a new account.

```bash
usage: manage.py create_invite [-h] [--email EMAIL] [--username USERNAME] [--name NAME] [--badge BADGE]
```

## FAQ

### Double logging in console

The local development server runs a separate process for the auto-reloader. You can turn off the auto-reload process by passing the --noreload flag.

````bash
python manage.py runserver --noreload
````

#### Happy coding 🎉!
