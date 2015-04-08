
# Web accessibility

Fjórir helstu þættir sem verða að vera í lagi
Hreyfingar á vefnum (t.d carosel)
Þarf að vera takki til þess að geta slökkt á hreyfingu .
Title tög
Þurfa að vera lýsandi fyrir síðuna.
Tabs eru flóknir hlutir á síðunni.
Ef verið að nota span eða div þá þarf að setja tab-index=0 og nota aria-expanded
Video
Þarf að vera spilari sem hægt er að hækka og lækka stoppa með lyklaborðinu. Kveikja og slökkva á captions. Notum alltaf HTML 5 þegar við getum.
Ef hlutir eru blikkandi á síðunni meiga þeir ekki blikka oftar en 3 sinnum á sekúndu.
 

Það sem þarf að vera í default síðu sniðmáti:
Skipt to link  ---   http://terrillthompson.com/blog/161
Takka til þess að stoppa carosellur hreyfingu.http://www.romaingervois.fr/implementations/en/carousel.html
Roles  3 meigin atriði  ( Haus , main og footer)
Aria-label  Merkja svæðin skemmtilegra að heyra rétt nöfn
 

Roles
Skipta efninu niður í þrjú mismunandi svæði. ( Haus-banner , Aðalsvæði-main og Fótur-contentinfo)

role="search"
Á leitarreiti (einn eða fleiri per síðu).
role="navigation"
Utan um notendavalmynd (navigation menu).
role="banner"
Utan um header upplýsingar (eitt per síðu hámark).
role="main"
Utan um aðalefni síðu (t.d. um frétt ef síðan inniheldur eina frétt) aðgerðarlista notanda, eða þá aðgerð/þær aðgerðir sem notandi er líklegastur að framkvæma á síðunni (hámark eitt main per síðu).
role="contentinfo"
page footerinn (copyright, legal, hafið samband) hámark eitt per síðu.
Einnig (þó það sé ekki skilgreint sem landmark) article (role="article") utan um textagreinar á síðu.
Linkar
Helst alltaf að vera með texta inni í linkum
Setja Tilte eigindi á tengla
Annars nota Aria-label
Gott að hafa í huga:
Þegar þú er staddur á ákveðinni síðu og villt gefa notandanum til kynna hvar hann er staddur þá til dæmis í css Active að setja líka role=“presentation“.

Þegar verið að nota <a href> sem takka með t.d onclick eventi þá á að setja role=“button“. Væri gott ef það væri t.d hægt að setja þetta inn í xslt fyrir t.d. valmyndirnar hjá okkur í default xslt-ið

Leit
Þegar leit er með autocomplete getur maður farið á milli valmöguleika með örvunum.

http://www.bu.edu/webteam/clrux/accessibility/autocomplete/autocomplete.html

Iframe fyrir smafélagsmiðla
Setja title tag á iframe-inn skrifa samfélagsmiðlar.

Aria-expanded og fleira
Þegar þú ert með toggle takka þá þarf að uppfæra Aria-expanded=true og false eftir því hvort þú ert með svæðið opið eða lokað.

Merkja hvort valmynd/hlutur sé opinn: aria-expanded="true"
Merkja hvort hlutur sé valinn: aria_selected="true"
Merkja hvort stutt hafi verið á hnapp: aria-pressed="true"
Merkja hvort fylla þurfi út í reit: aria-required="true"
Ef efni er uppfært á síðu (t.d. með ajax kalli) er hægt að nota aria-alert, aria-live eða aria-atomic til að láta notanda vita.

 

Notkun aria-hidden til að fela texta
Hægt er að fela hlut og allt sem inni í honum er fyrir skjálesaratækni með aria-hidden="true".
Notað til að fela carousellur og önnur "animation objects" (ef innihald þeirra er eingöngu til skrauts, betra væri að hafa aðgerð til þess að slökkva á hreyfimynd en að fela hana).
Nota til að fela tvöföldun tengla (ef fyrst er um mynd að ræða sem er tengill á vörulýsingu, en strax fyrir neðan myndina er tengill á vörulýsinguna sjálfa, betra að hafa myndina inni í vörulýsingunni en að hafa tvo tengla sem benda á sama stað, en ef það er ekki hægt, hægt að nota aria-hidden til að fela annan tengilinn, þ.e.a.s myndina)
Búa til eigin svæði
Til að merkja eigin svæði á síðu er hægt að nota tagið aria-label á svæðið og gefa lýsandi nafn.

<div role="region" aria-label="Nafn á svæði">

Hægt að nota í t.d.:

Aðgerðarvalmynd
Borða
Hafa samband
Samfélagsmiðla
Athugasemdir (á bloggsíðum)
Invisible headings
Hægt er að merkja upp texta sem fyrirsögn fyrir skjálesara og stoðtækni með ARIA án þess að útlit textans breytist á nokkurn hátt.
Nytsamlegt til að skipta upp löngum lista af tenglum, eða lista af listum.

Nota role="header" og aria-level ="1" (stig 1 til 6)

T.d. <div role="header" id="hdr1" aria-level="1">Top News Stories</div>

Þegar vefur er tilbúinn:
Keyra test með litasamsetningu á fire-bug fire-eye
Prófa að fara í gegnum síðuna með lyklaborðinu. Lyklaborðsaðgengi
Slökkva á css-inu til þess að átta sig á uppröðuninni.
 

Linkar á tól:
IE
Web Accessibility Toolbar http://www.paciellogroup.com/resources/wat/
Firefox
Firebug - https://addons.mozilla.org/en-US/firefox/addon/firebug/
Fire-eye - http://worldspace.deque.com/FireEyes/user/home
 

Color contrast cheacker til þess að prófa liti :

http://webaim.org/resources/contrastchecker/

Síða um color contrast:

http://contrastrebellion.com/

Góð síða um hvernig á að leysa vandamál með geldingar linka.

http://www.marcozehe.de/2013/04/24/easy-aria-tip-6-making-clickables-accessible/

links/divs/spans eru ekki takkar:

http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/

Neutered links:

http://www.last-child.com/links-without-href-attribute/


Here you can see good practice and guidelines to improve access to websites by people with disabilities.

"When sites are correctly designed, developed and edited, all users have equal access to information and functionality."
http://en.wikipedia.org/wiki/Web_accessibility

Bootstrap class "sr-only" stands for screen reader only and hides the text inside that is only for screen readers.

[WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA) (Web Accessibility Initiative - Accessible Rich Internet Applications)


