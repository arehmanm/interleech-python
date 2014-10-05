from org.mustadroid.python.interleech.item import Item
from apiclient.discovery import build

def translateText(text):
    # Build a service object for interacting with the API. Visit
    # the Google APIs Console <http://code.google.com/apis/console>
    # to get an API key for your own application.
    service = build('translate', 'v2',
              developerKey='AIzaSyBOK7Qc9MVwdZ8VHMZNlpQX2hI35q3ZYYg')
    return service.translations().list(
        source='sv',
        target='en',
        q=text
      ).execute()['translations'][0]['translatedText']

if __name__ == "__main__":
    url = "https://translate.google.com/" #Hyr%20l%C3%A4genhet%20tryggt!%20N%C3%A4r%20du%20ska%20hyra%20l%C3%A4genhet%20i%20andra%20hand%20%C3%A4r%20det%20viktigt%20att%20du%20f%C3%B6ljer%20Blockets%20r%C3%A5d%20och%20tips.%20Bostadsmarknaden%20%C3%A4r%20i%20m%C3%A5nga%20fall%20%C3%B6verhettad%20och%20kan%20d%C3%A4rf%C3%B6r%20dra%20till%20sig%20oseri%C3%B6sa%20akt%C3%B6rer.%20Var%20d%C3%A4rf%C3%B6r%20observant%20och%20f%C3%B6rsiktig.%20Detta%20g%C3%A4ller%20s%C3%A4rskilt%20i%20samband%20med%20terminsstart%20p%C3%A5%20h%C3%B6gskolor%20och%20universitet.Uthyrare%20som%20annonserar%20l%C3%A4genheter%20p%C3%A5%20Blocket%20har%20vid%20annonseringen%20lovat%20att%20inte%20ta%20ut%20n%C3%A5gon%20f%C3%B6rskottshyra%20eller%20deposition%20av%20hyresg%C3%A4sten%20innan%20l%C3%A4genheten%20%C3%A4r%20visad%20och%20kontrakt%20%C3%A4r%20skrivet.%20Om%20en%20uthyrare%20inte%20f%C3%B6ljer%20detta%20villkor%20b%C3%B6r%20du%20avbryta%20aff%C3%A4ren%20och%20anm%C3%A4la%20annonsen%20till%20Blocket.%20Om%20uthyraren%20s%C3%A4ger%20sig%20bo%20i%20utlandet%2C%20och%20bara%20talar%20engelska%20eller%20vill%20anv%C3%A4nda%20anonyma%20betaltj%C3%A4nster%20som%20t.ex.%20Western%20Union%20uppmanar%20vi%20dig%20till%20att%20avbryta%20aff%C3%A4ren%20och%20anm%C3%A4la%20annonsen.Fr%C3%A5ga%20dig%20sj%C3%A4lv%3A%20%22Skulle%20jag%20hyra%20ut%20min%20bostad%20till%20n%C3%A5gon%20som%20jag%20aldrig%20tr%C3%A4ffat%3F%22Ingen%20seri%C3%B6s%20uthyrare%20vill%20ha%20deposition%20eller%20f%C3%B6rskottshyra%20innan%20l%C3%A4genheten%20%C3%A4r%20visad%20och%20kontrakt%20%C3%A4r%20skrivetOBS!%20Det%20h%C3%A4r%20%C3%A4r%20en%20informationsannons%20fr%C3%A5n%20Blockets%20kunds%C3%A4kerhetscenter.%20och%20l%C3%A4genheten%20finns%20inte%20till%20uthyrning."
    item = Item()
    print translateText("Hej hej")