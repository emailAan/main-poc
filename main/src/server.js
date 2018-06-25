const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 8080

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/', function (req, res) {
  res.status(200).send('Main API')
})

app.get('/api/navigation', function (req, res) {
  let nav = [
    {
      label: 'Dossier',
      children: [
        {
          label: 'Agenda',
          module: 'agenda'
        },
        {
          label: 'Afspraken vandaag',
          module: 'agenda',
          subModule: 'afsprakenVandaag'
        },
        {
          label: 'Zorplan',
          module: 'zorgplan'
        }
      ]
    },
    {
      label: 'Facturatie',
      module: 'facturatie'
    },
    {
      label: 'NOS',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://www.nos.nl'
      }
    },
    {
      label: 'BSN opvragen verifieren',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=78'
      }
    }, {
      label: 'BSN opvragen persoonsgegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=79'
      }
    }, {
      label: 'Arbeidsverleden',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=2'
      }
    }, {
      label: 'Schulden',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=4'
      }
    }, {
      label: 'Correspondentie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=18'
      }
    }, {
      label: 'Zorgplan',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=19'
      }
    }, {
      label: 'Document',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=20'
      }
    }, {
      label: 'Evaluatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=22'
      }
    }, {
      label: 'Behandeling',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=23'
      }
    }, {
      label: 'Contactpersoon',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=25'
      }
    }, {
      label: 'Relatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=27'
      }
    }, {
      label: 'Waarschuwing/melding',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=28'
      }
    }, {
      label: 'Diagnose',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=32'
      }
    }, {
      label: 'Cliëntgegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=33'
      }
    }, {
      label: 'Juridische gegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=34'
      }
    }, {
      label: 'Verslavingsgegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=35'
      }
    }, {
      label: 'Middelen of maatregelen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=38'
      }
    }, {
      label: 'Inschrijving',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=47'
      }
    }, {
      label: 'Financiële gegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=51'
      }
    }, {
      label: 'Traject',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=56'
      }
    }, {
      label: 'Voortgang/contact',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=57'
      }
    }, {
      label: 'Clientafspraak',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=58'
      }
    }, {
      label: 'Agenda',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=59'
      }
    }, {
      label: 'Personalia',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=60'
      }
    }, {
      label: 'Instantie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=63'
      }
    }, {
      label: 'Verwijsbrief',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=70'
      }
    }, {
      label: 'Planner',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=101'
      }
    }, {
      label: 'Ongewenste middelen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=98'
      }
    }, {
      label: 'Bepaling',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=87'
      }
    }, {
      label: 'Medicatie overzicht',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=95'
      }
    }, {
      label: 'Werkpunt',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=96'
      }
    }, {
      label: 'Meting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=107'
      }
    }, {
      label: 'Orders',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=26'
      }
    }, {
      label: 'Vragenlijst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=30'
      }
    }, {
      label: 'Bellijst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=43'
      }
    }, {
      label: 'Deelplan',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=44'
      }
    }, {
      label: 'BIReport',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=45'
      }
    }, {
      label: 'Soort Instantie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=46'
      }
    }, {
      label: 'Adrestype',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=64'
      }
    }, {
      label: 'Belgegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=65'
      }
    }, {
      label: 'Onderhoud ADF module-rapport-gebruik',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=201'
      }
    }, {
      label: 'Dagrapportage',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=93'
      }
    }, {
      label: 'Cliënt details',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=94'
      }
    }, {
      label: 'Agenda overzicht widget',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=118'
      }
    }, {
      label: 'Overview',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=119'
      }
    }, {
      label: 'Instantie details',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=121'
      }
    }, {
      label: 'Ordertraject',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=122'
      }
    }, {
      label: 'Prikbord',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=123'
      }
    }, {
      label: 'Invoeren medicijnen in GStandaard',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=120'
      }
    }, {
      label: 'Medicatie Recept',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=16'
      }
    }, {
      label: 'BI report',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=125'
      }
    }, {
      label: 'Rapporteren op behandeldoelen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=21'
      }
    }, {
      label: 'MedicatieHerhaal',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=127'
      }
    }, {
      label: 'Activiteit',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=129'
      }
    }, {
      label: 'Huisarts / Apotheek',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=135'
      }
    }, {
      label: 'Artikel Subgroepen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=128'
      }
    }, {
      label: 'Verblijfsadres',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=133'
      }
    }, {
      label: 'Soort Adrestype',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=136'
      }
    }, {
      label: 'Grootboek',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=137'
      }
    }, {
      label: 'Kosten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=138'
      }
    }, {
      label: 'Zorgverzekeraar',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=139'
      }
    }, {
      label: 'Project',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=142'
      }
    }, {
      label: 'Call external application',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=148'
      }
    }, {
      label: 'NAW gegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=140'
      }
    }, {
      label: 'Inrichting klinische afdeling/groep en uitgiftepost',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=293'
      }
    }, {
      label: 'DBC wijzigen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=144'
      }
    }, {
      label: 'Berichten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=141'
      }
    }, {
      label: 'Artikelen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=124'
      }
    }, {
      label: 'Artikel Subgroepen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=132'
      }
    }, {
      label: 'Valuta',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=134'
      }
    }, {
      label: 'Medewerker',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=147'
      }
    }, {
      label: 'Postcode toevoegen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=149'
      }
    }, {
      label: 'Applicatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=150'
      }
    }, {
      label: 'StatusJm maintenance',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=151'
      }
    }, {
      label: 'Belangrijkste Bezigheid',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=152'
      }
    }, {
      label: 'SchuldStatus maintenance',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=153'
      }
    }, {
      label: 'Burgerlijke Staat',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=154'
      }
    }, {
      label: 'StatusTaak maintenance',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=155'
      }
    }, {
      label: 'Contactstatus',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=156'
      }
    }, {
      label: 'StatusVerlof maintenance',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=157'
      }
    }, {
      label: 'Culturele Herkomst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=158'
      }
    }, {
      label: 'Financier',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=160'
      }
    }, {
      label: 'ApplicatieSoort maintenance',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=159'
      }
    }, {
      label: 'Geslacht',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=161'
      }
    }, {
      label: 'Trajecttype',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=223'
      }
    }, {
      label: 'Leefsituatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=163'
      }
    }, {
      label: 'Nationaliteit',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=164'
      }
    }, {
      label: 'Opleidingsniveau Afgerond',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=165'
      }
    }, {
      label: 'Reden Van Afmelding',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=167'
      }
    }, {
      label: 'Reden Van Uitschrijving',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=168'
      }
    }, {
      label: 'Werkervaring',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=169'
      }
    }, {
      label: 'Woonsituatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=170'
      }
    }, {
      label: 'Opleidingsniveau Niet Afgerond',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=166'
      }
    }, {
      label: 'Basis GGZ',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=171'
      }
    }, {
      label: 'Call Categorie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=172'
      }
    }, {
      label: 'Kenmerk',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=197'
      }
    }, {
      label: 'Soort Contract',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=174'
      }
    }, {
      label: 'Soort Omgeving',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=175'
      }
    }, {
      label: 'Onderhouden labels',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=176'
      }
    }, {
      label: 'Soort Component',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=177'
      }
    }, {
      label: 'Besturingssysteem',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=178'
      }
    }, {
      label: 'Modules',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=179'
      }
    }, {
      label: 'Release',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=180'
      }
    }, {
      label: 'Server',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=181'
      }
    }, {
      label: 'CallAanpassing',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=182'
      }
    }, {
      label: 'Environment',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=183'
      }
    }, {
      label: 'Label Config',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=184'
      }
    }, {
      label: 'Toegestane Prioriteiten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=185'
      }
    }, {
      label: 'Contract',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=186'
      }
    }, {
      label: 'Soort Call',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=187'
      }
    }, {
      label: 'Call Certificaat',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=188'
      }
    }, {
      label: 'USER Docs configuratie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=196'
      }
    }, {
      label: 'CallTeamLeader',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=198'
      }
    }, {
      label: 'Calls',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=199'
      }
    }, {
      label: 'Formulieren SSO',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=215'
      }
    }, {
      label: 'BSN controle',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=300'
      }
    }, {
      label: 'ADF Workflow Inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=326'
      }
    }, {
      label: 'LGGZ',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=237'
      }
    }, {
      label: 'Opdrachten inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=305'
      }
    }, {
      label: 'Cliëntportaal toegang',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=307'
      }
    }, {
      label: 'Combinatie problematiek/afhankelijk/misbruik (MATE)',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=319'
      }
    }, {
      label: 'Afdeling/groep',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=328'
      }
    }, {
      label: 'Default waarden',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=329'
      }
    }, {
      label: 'BI Rapport Instellingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=331'
      }
    }, {
      label: 'Default waarden BI',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=333'
      }
    }, {
      label: 'Verdeling',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=334'
      }
    }, {
      label: 'Istandaard Functie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=338'
      }
    }, {
      label: 'Categorie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=342'
      }
    }, {
      label: 'Referentiecurves',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=350'
      }
    }, {
      label: 'Testomgeving Instellingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=358'
      }
    }, {
      label: 'SSO instellingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=359'
      }
    }, {
      label: 'Agenda toegang',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=362'
      }
    }, {
      label: 'Categorieën signaleringen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=363'
      }
    }, {
      label: 'Reistijden',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=364'
      }
    }, {
      label: 'Medewerker tarief',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=365'
      }
    }, {
      label: 'Registratie laboratoriumonderzoeken',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=366'
      }
    }, {
      label: 'Dashboard Inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=368'
      }
    }, {
      label: 'Onderhoud preventieaanbod',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=372'
      }
    }, {
      label: 'Groepscontact rooster',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=373'
      }
    }, {
      label: 'Informatievragen vraag',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=377'
      }
    }, {
      label: 'Sociogram',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=221'
      }
    }, {
      label: 'Prioriteit',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=191'
      }
    }, {
      label: 'Alternatief',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=222'
      }
    }, {
      label: 'Workflow toegang onderhoud',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=226'
      }
    }, {
      label: 'Dossier Autorisatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=288'
      }
    }, {
      label: 'Zorgproces inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=213'
      }
    }, {
      label: 'Basis codeschermen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=146'
      }
    }, {
      label: 'Behandelmodule inhoud',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=234'
      }
    }, {
      label: 'Medicatie uitgiftelijst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=295'
      }
    }, {
      label: 'Factuur',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=296'
      }
    }, {
      label: 'Uitschrijven',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=302'
      }
    }, {
      label: 'Forensische ZZP en EMZ',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=236'
      }
    }, {
      label: 'Inrichting medicatie algemeen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=238'
      }
    }, {
      label: 'Factuur Flow',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=239'
      }
    }, {
      label: 'Diagnose uitsluiten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=243'
      }
    }, {
      label: 'Traject overzicht',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=244'
      }
    }, {
      label: 'Bijlage',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=311'
      }
    }, {
      label: 'Instantie cluster',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=317'
      }
    }, {
      label: 'PsychiatrischeDiagnose',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=320'
      }
    }, {
      label: 'Metingen inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=323'
      }
    }, {
      label: 'Parallelle trajecten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=325'
      }
    }, {
      label: 'InfoTekst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=336'
      }
    }, {
      label: 'Bepaling',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=337'
      }
    }, {
      label: 'Inlezen externe productie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=343'
      }
    }, {
      label: 'Budgetplafond',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=348'
      }
    }, {
      label: 'Wachtwoordbeleid',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=352'
      }
    }, {
      label: 'Extra velden Personalia',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=355'
      }
    }, {
      label: 'Databasejobs',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=356'
      }
    }, {
      label: 'Formulier hoofdstuk',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=360'
      }
    }, {
      label: 'Groepscontacten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=375'
      }
    }, {
      label: 'Nieuwe cliënt',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=74'
      }
    }, {
      label: 'Financiering',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=232'
      }
    }, {
      label: 'Inrichting Formulieren',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=233'
      }
    }, {
      label: 'Opleidingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=291'
      }
    }, {
      label: 'Ehealthlink',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=292'
      }
    }, {
      label: 'Inkomende verwijzingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=224'
      }
    }, {
      label: 'Zorgpad inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=162'
      }
    }, {
      label: 'Afspraak reeks',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=299'
      }
    }, {
      label: 'Beloning behandeling',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=301'
      }
    }, {
      label: 'Vecozo Declaratie Retour',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=240'
      }
    }, {
      label: 'Ei-Berichtenviewer for ADF',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=241'
      }
    }, {
      label: 'Opdrachten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=308'
      }
    }, {
      label: 'DBC Log',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=242'
      }
    }, {
      label: 'Postcodebestand',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=313'
      }
    }, {
      label: 'Personen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=314'
      }
    }, {
      label: 'Servers',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=321'
      }
    }, {
      label: 'Soort cliënt-verslaving gegevens',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=324'
      }
    }, {
      label: 'Kruistabel',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=344'
      }
    }, {
      label: 'Rubriek/Rubriek toegang inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=332'
      }
    }, {
      label: 'Activiteiten Filter Voor Clientportaal',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=340'
      }
    }, {
      label: 'Default agenda instellingen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=345'
      }
    }, {
      label: 'Zorggebied Inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=346'
      }
    }, {
      label: 'Afspraakpercentage',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=354'
      }
    }, {
      label: 'Default waarde agenda type',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=357'
      }
    }, {
      label: 'Soort dienst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=361'
      }
    }, {
      label: 'Fysiek dossier',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=367'
      }
    }, {
      label: 'Testomgeving scripts',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=370'
      }
    }, {
      label: 'Behandeling overzicht',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=371'
      }
    }, {
      label: 'Exporteren productie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=374'
      }
    }, {
      label: 'Organisatie hiërarchie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=376'
      }
    }, {
      label: 'Externe productie basis',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=245'
      }
    }, {
      label: 'Call Registrations',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=192'
      }
    }, {
      label: 'Locatie hiërarchie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=193'
      }
    }, {
      label: 'Call Status',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=194'
      }
    }, {
      label: 'Lease Bestuurder',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=202'
      }
    }, {
      label: 'Lease Auto',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=203'
      }
    }, {
      label: 'Lease Contract',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=204'
      }
    }, {
      label: 'Meetinstrument',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=173'
      }
    }, {
      label: 'Import/Export formulier',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=189'
      }
    }, {
      label: 'Juridische/vrijwillige status',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=205'
      }
    }, {
      label: 'Woonplaatsbeginsel',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=206'
      }
    }, {
      label: 'Behandelingen lijst',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=235'
      }
    }, {
      label: 'Cliëntsysteem',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=208'
      }
    }, {
      label: 'Betrokken Instantie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=209'
      }
    }, {
      label: 'Voortgang Contact',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=210'
      }
    }, {
      label: 'Verwijzing',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=211'
      }
    }, {
      label: 'FormsViewer module',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=190'
      }
    }, {
      label: 'Rapport Inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=297'
      }
    }, {
      label: 'Call Widget',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=212'
      }
    }, {
      label: 'PwdProfile',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=214'
      }
    }, {
      label: 'Systeemcontact snel planner task flow.',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=304'
      }
    }, {
      label: 'Client Contra-Indicatieaard',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=200'
      }
    }, {
      label: 'Onderhoud medicatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=216'
      }
    }, {
      label: 'Zorgviewer',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=195'
      }
    }, {
      label: 'Brief verwerken',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=218'
      }
    }, {
      label: 'Import / Export dashboard',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=220'
      }
    }, {
      label: 'DBBC wijzigen',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=227'
      }
    }, {
      label: 'Import / Export brief',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=228'
      }
    }, {
      label: 'Bericht configuratie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=229'
      }
    }, {
      label: 'Traject wizard',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=230'
      }
    }, {
      label: 'Beschikking',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=231'
      }
    }, {
      label: 'Controletermijn medicatieopdracht',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=294'
      }
    }, {
      label: 'Rooster',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=298'
      }
    }, {
      label: 'Medicatievoorraad',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=306'
      }
    }, {
      label: 'MedewerkerVerlof',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=309'
      }
    }, {
      label: 'BPI scan',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=310'
      }
    }, {
      label: 'Bulk COV controle',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=312'
      }
    }, {
      label: 'Aanlevering',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=303'
      }
    }, {
      label: 'Locatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=315'
      }
    }, {
      label: 'Organisatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=316'
      }
    }, {
      label: 'Profielen/rollen inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=318'
      }
    }, {
      label: 'Hoofdproblematiek',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=322'
      }
    }, {
      label: 'Projecten',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=330'
      }
    }, {
      label: 'Applicatie/soort applicatie',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=347'
      }
    }, {
      label: 'Zorgdomein Entiteit',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=327'
      }
    }, {
      label: 'Zorgdomein filter',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=335'
      }
    }, {
      label: 'Zorgplan Inrichting',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=339'
      }
    }, {
      label: 'Terms & conditions for cliëntportaal',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=341'
      }
    }, {
      label: 'Inlezen trajecten zorgclustertool',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=349'
      }
    }, {
      label: 'Meeteenheid',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=351'
      }
    }, {
      label: 'Inrichting workflows',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=353'
      }
    }, {
      label: 'Inrichtingsscherm stuurinformatie dashboard (BI)',
      module: 'url-loader',
      stateless: true,
      params: {
        url: 'http://main.localhost/module/adf-sso/sso?client=4&volgnummer=1&module=369'
      }
    }
  ]
  res.status(200).send(nav)
})

app.listen(PORT, () => console.log(`Main app listening on port ${PORT}!`))
