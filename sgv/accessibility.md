
# Aðgengismál

<h3>Fjórir helstu þættir sem verða að vera í lagi</h3>
<ol>
    <li>
    Hreyfingar á vefnum (t.d carosel)
    <ol style="list-style-type: lower-alpha;">
        <li>Þarf að vera takki til þess að geta slökkt á hreyfingu .</li>
    </ol>
    </li>
    <li>
    Title tög
    <ol style="list-style-type: lower-alpha;">
        <li>Þurfa að vera lýsandi fyrir síðuna.</li>
    </ol>
    </li>
    <li>
    Tabs eru flóknir hlutir á síðunni.
    <ol style="list-style-type: lower-alpha;">
        <li>Ef verið að nota span eða div þá þarf að setja tab-index=0 og nota aria-expanded</li>
    </ol>
    </li>
    <li>
    Video
    <ol style="list-style-type: lower-alpha;">
        <li>Þarf að vera spilari sem hægt er að hækka og lækka stoppa með lyklaborðinu. Kveikja og slökkva á captions. Notum alltaf HTML 5 þegar við getum.</li>
    </ol>
    </li>
    <li>Ef hlutir eru blikkandi á síðunni meiga þeir ekki blikka oftar en 3 sinnum á sekúndu. </li>
</ol>
<p>&nbsp;</p>
<h3>Það sem þarf að vera í default síðu sniðmáti: </h3>
<ul style="list-style-type: disc;">
    <li>Skipt to link&nbsp; ---&nbsp;&nbsp; <a href="http://terrillthompson.com/blog/161" target="_blank">http://terrillthompson.com/blog/161</a></li>
    <li>Takka til þess að stoppa carosellur hreyfingu.<a href="http://www.romaingervois.fr/implementations/en/carousel.html" target="_blank">http://www.romaingervois.fr/implementations/en/carousel.html</a></li>
    <li>Roles&nbsp; 3 meigin atriði&nbsp; ( Haus , main og footer) </li>
    <li>Aria-label&nbsp; Merkja svæðin skemmtilegra að heyra rétt nöfn</li>
</ul>
<p>&nbsp;</p>
<h3>Roles</h3>
<p>Skipta efninu niður í þrjú mismunandi svæði. ( Haus-banner , Aðalsvæði-main og Fótur-contentinfo)</p>
<ul style="list-style-type: disc;">
    <li>
    role="search"
    <ul style="list-style-type: circle;">
        <li>Á leitarreiti (einn eða fleiri per síðu).</li>
    </ul>
    </li>
    <li>
    role="navigation"
    <ul style="list-style-type: circle;">
        <li>Utan um notendavalmynd (navigation menu).</li>
    </ul>
    </li>
    <li>
    role="banner"
    <ul style="list-style-type: circle;">
        <li>Utan um header upplýsingar (eitt per síðu hámark).</li>
    </ul>
    </li>
    <li>
    role="main"
    <ul style="list-style-type: circle;">
        <li>Utan um aðalefni síðu (t.d. um frétt ef síðan inniheldur eina frétt) aðgerðarlista notanda, eða þá aðgerð/þær aðgerðir sem notandi er líklegastur að framkvæma á síðunni (hámark eitt main per síðu).</li>
    </ul>
    </li>
    <li>
    role="contentinfo"
    <ul style="list-style-type: circle;">
        <li>page footerinn (copyright, legal, hafið samband) hámark eitt per síðu.</li>
    </ul>
    </li>
</ul>
<ul style="list-style-type: disc;">
    <li>
    Einnig (þó það sé ekki skilgreint sem landmark) article (role="article") utan um textagreinar á síðu.
    </li>
</ul>
<h3>Linkar</h3>
<ul>
    <li>Helst alltaf að vera með texta inni í linkum</li>
    <li>Setja Tilte eigindi á tengla </li>
    <li>Annars nota Aria-label</li>
</ul>
<h3>Gott að hafa í huga:</h3>
<p>Þegar þú er staddur á ákveðinni síðu og villt gefa notandanum til kynna hvar hann er staddur þá til dæmis í css Active að setja líka role=“presentation“. </p>
<p>Þegar verið að nota &lt;a href&gt; sem takka með t.d onclick eventi þá á að setja role=“button“. Væri gott ef það væri t.d hægt að setja þetta inn í xslt fyrir t.d. valmyndirnar hjá okkur í default xslt-ið</p>
<h3>Leit</h3>
<p>Þegar leit er með autocomplete getur maður farið á milli valmöguleika með örvunum.</p>
<p><a href="http://www.bu.edu/webteam/clrux/accessibility/autocomplete/autocomplete.html">http://www.bu.edu/webteam/clrux/accessibility/autocomplete/autocomplete.html</a></p>
<h3>Iframe fyrir smafélagsmiðla</h3>
<p>Setja title tag á iframe-inn skrifa samfélagsmiðlar.</p>
<h3>Aria-expanded og fleira</h3>
<p>Þegar þú ert með toggle takka þá þarf að uppfæra Aria-expanded=true og false eftir því hvort þú ert með svæðið opið eða lokað.</p>
<ul style="list-style-type: disc;">
    <li>Merkja hvort valmynd/hlutur sé opinn: <em>aria-expanded="true"</em></li>
    <li>Merkja hvort hlutur sé valinn:<em> aria_selected="true"</em></li>
    <li>Merkja hvort stutt hafi verið á hnapp: <em>aria-pressed="true"</em></li>
    <li>Merkja hvort fylla þurfi út í reit: <em>aria-required="true"</em></li>
</ul>
<p>Ef efni er uppfært á síðu (t.d. með ajax kalli) er hægt að nota aria-alert, aria-live eða aria-atomic til að láta notanda vita.</p>
<p>&nbsp;</p>
<h3>Notkun aria-hidden til að fela texta</h3>
<ul>
    <li>Hægt er að fela hlut og allt sem inni í honum er
    fyrir skjálesaratækni með aria-hidden="true".</li>
    <li>Notað til að fela carousellur og önnur
    "animation objects" (ef innihald þeirra er eingöngu til skrauts,
    betra væri að hafa aðgerð til þess að slökkva á hreyfimynd en að fela hana).</li>
    <li>Nota til að fela tvöföldun tengla (ef fyrst er
    um mynd að ræða sem er tengill á vörulýsingu, en strax fyrir neðan myndina er
    tengill á vörulýsinguna sjálfa, betra að hafa myndina inni í vörulýsingunni en
    að hafa tvo tengla sem benda á sama stað, en ef það er ekki hægt, hægt að nota
    aria-hidden til að fela annan tengilinn, þ.e.a.s myndina)</li>
</ul>
<h3>Búa til eigin svæði</h3>
<p>Til að merkja eigin svæði á síðu er hægt að nota tagið aria-label á svæðið og gefa lýsandi nafn.</p>
<p><span>&lt;div role="region" aria-label="Nafn á svæði"&gt;</span></p>
<p>Hægt að nota í t.d.:</p>
<ul style="list-style-type: disc;">
    <li>Aðgerðarvalmynd</li>
    <li>Borða</li>
    <li>Hafa samband</li>
    <li>Samfélagsmiðla</li>
    <li>Athugasemdir (á bloggsíðum)</li>
</ul>
<h3>Invisible headings</h3>
<p>Hægt er að merkja upp texta sem fyrirsögn fyrir skjálesara og stoðtækni með ARIA án þess að útlit textans breytist á nokkurn hátt.<br />
Nytsamlegt til að skipta upp löngum lista af tenglum, eða lista af listum.</p>
<p>Nota role="header" og aria-level ="1" (stig 1 til 6)</p>
<p>T.d. &lt;div role="header" id="hdr1" aria-level="1"&gt;Top News Stories&lt;/div&gt;</p>
<h3>Þegar vefur er tilbúinn: </h3>
<ul>
    <li>Keyra test með litasamsetningu á fire-bug fire-eye</li>
    <li>Prófa að fara í gegnum síðuna með lyklaborðinu. Lyklaborðsaðgengi </li>
    <li>Slökkva á css-inu til þess að átta sig á uppröðuninni.</li>
</ul>
<p>&nbsp;</p>
<h3>Linkar á tól:</h3>
<ul>
    <li>
    IE
    <ul style="list-style-type: circle;">
        <li>Web Accessibility Toolbar <a href="http://www.paciellogroup.com/resources/wat/" target="_blank">http://www.paciellogroup.com/resources/wat/</a></li>
    </ul>
    </li>
    <li>
    Firefox
    <ul style="list-style-type: circle;">
        <li>Firebug - <a href="https://addons.mozilla.org/en-US/firefox/addon/firebug/" target="_blank">https://addons.mozilla.org/en-US/firefox/addon/firebug/</a></li>
        <li>Fire-eye - <a href="http://worldspace.deque.com/FireEyes/user/home" target="_blank">http://worldspace.deque.com/FireEyes/user/home</a></li>
    </ul>
    </li>
</ul>
<p>&nbsp;</p>
<h4>Color contrast cheacker til þess að prófa liti : </h4>
<p><a href="http://webaim.org/resources/contrastchecker/" target="_blank">http://webaim.org/resources/contrastchecker/</a></p>
<h4>Síða um color contrast: </h4>
<p><a href="http://contrastrebellion.com/" target="_blank">http://contrastrebellion.com/</a></p>
<h4>Góð síða um hvernig á að leysa vandamál með geldingar linka.</h4>
<p><a href="http://www.marcozehe.de/2013/04/24/easy-aria-tip-6-making-clickables-accessible/" target="_blank">http://www.marcozehe.de/2013/04/24/easy-aria-tip-6-making-clickables-accessible/</a></p>
<h4>links/divs/spans eru ekki takkar:</h4>
<p><a href="http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/" target="_blank">http://www.karlgroves.com/2013/05/14/links-are-not-buttons-neither-are-divs-and-spans/</a></p>
<h4>Neutered links:</h4>
<p><a href="http://www.last-child.com/links-without-href-attribute/" target="_blank">http://www.last-child.com/links-without-href-attribute/</a></p>


Here you can see good practice and guidelines to improve access to websites by people with disabilities.

"When sites are correctly designed, developed and edited, all users have equal access to information and functionality."
http://en.wikipedia.org/wiki/Web_accessibility

Bootstrap class "sr-only" stands for screen reader only and hides the text inside that is only for screen readers.

[WAI-ARIA](http://en.wikipedia.org/wiki/WAI-ARIA) (Web Accessibility Initiative - Accessible Rich Internet Applications)


