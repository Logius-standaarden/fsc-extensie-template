# Federatieve service connectiviteit

## Deze standaard is in ontwikkeling 

- De laatste versie van de standaard online lezen - [ReSpec publicatie](https://logius-standaarden.github.io/fsc-core/)
- Meedoen aan de discussie en ontwikkeling kan via - [Mattermost Digilab omgeving](https://digilab.overheid.nl/chat/digilab/channels/fsc)
- vragen kunnen worden gemailed aan api@logius.nl of als issue worden ingebracht [via deze link](https://github.com/Logius-standaarden/fsc-core/issues/new/choose)

## Inleiding

De overheid staat de komende jaren aan de lat voor de aanpak van grote, complexe maatschappelijke opgaven. Beleidsvorming en besluitvorming in dergelijke complexe dossiers zijn veelal domein- en ketenoverstijgend. Dat vraagt dus om informatievoorziening die in kwalitatief hoogwaardige en betrouwbare data voorziet – niet in de laatste plaats omdat beleid en besluiten rechtstreekse impact hebben op inwoners en bedrijven. Ondersteunend hieraan wil de overheid gegevens zoveel mogelijk enkelvoudig vastleggen en meervoudig gebruiken. Dit stelt (overheids)organisaties de komende jaren voor de opgave om de exponentieel groeiende gegevensuitwisseling te faciliteren, onder de voorwaarden dat de veiligheid, betrouwbaarheid en privacy geborgd zijn.

Gegevensuitwisseling is een diverse en complexe uitdaging. Het aantal koppelingen naar datasets dat gelegd moet worden zal de komende jaren exponentieel stijgen. De technische koppelingen vereisen vaak technische expertise, de realisatie ervan heeft vaak een lange doorlooptijd, de beheerslast is door maatwerk hoog en hierdoor kunnen de kosten flink oplopen. Tegelijkertijd staat de overheid onder toenemende druk om efficiënter te werken. Dit staat op gespannen voet met elkaar.

De bestaande wijze van gegevensuitwisseling kent een aantal omissies, die op gespannen voet staan met de snel groeiende noodzaak voor grootschalige, veilige en betrouwbare gegevensuitwisseling. Een voorbeeld van zo’n omissie is transparantie over wie welke data opgevraagd heeft. Het komt op dit moment veel voor dat onderaannemers van afnemers gebruik maken van koppelingen onder de identiteit van de opdrachtgever met een gebrek aan transparantie ten gevolg. Een ander voorbeeld is het ontbreken van toezicht op de geldigheidsduur van de toegang en ook het gebrek aan herleidbaarheid. De beheersbaarheid van koppelingen staat meer en meer onder druk doordat dit nu handmatig werk is en juist het aantal koppelingen de komende jaren exponentiel zal groeien onder invloed van principes als ‘data bij de bron’ (geen lokale kopieën meer maar via nieuwe externe koppelingen de bron benaderen) en ‘data minimalisatie’ (geen bestandsuitwisseling meer kleinere specifieke vragen via API’s). Deze groei gaat niet over een groei van honderden API’s maar over duizenden.

Om de groei binnen de huidige aanpak te kunnen faciliteren, zijn grote investeringen nodig, zonder dat daarbij daadwerkelijk verbeteringen worden gerealiseerd in de veiligheid, betrouwbaarheid en beheersbaarheid van gegevensuitwisseling.

> bron: https://fsc-standaard.nl/

## Doel

De FSC-standaard uniformeert de wijze waarop koppelingen worden gerealiseerd, waardoor deze beheersbaar, veilig en betrouwbaar zijn. Het maakt ze eenvoudiger beheersbaar, doordat ze eenvoudig en snel kunnen worden gerealiseerd, gewijzigd, gecontroleerd of opgeheven. Daarnaast worden aanvullende waarborgen gerealiseerd voor de veiligheid en betrouwbaarheid van data. Denk aan het automatiseren van controles op basis van beleids- en toegangsregels, gebaseerd op transparantie zodat ook achteraf helder is waarom bepaalde gegevens gebruikt zijn en bepaalde beslissingen genomen zijn. Zo speelt de FSC-standaard een cruciale rol in het realiseren van een betaalbare, beheersbare, veilige en betrouwbare gegevensuitwisseling in de komende jaren.

> bron: https://fsc-standaard.nl/

## Verwijzingen

De Logboek Dataverwerkingen (LDV) standaard bestaat uit de volgende vier documenten:

| Beschrijving van het document           | Gepubliceerde versie                  | Werk versie                             | Repository                                                   |
| --------------------------------------- | ------------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| 1. De LDV Normatieve Standaard | - | [Logboek dataverwerkingen (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen/) | [logboek-dataverwerkingen](https://github.com/Logius-standaarden/logboek-dataverwerkingen) |
| 2. De Algemene Inleiding | - | [De Algemene Inleiding (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/)|[logboek-dataverwerkingen-inleiding](https://github.com/Logius-standaarden/logboek-dataverwerkingen-inleiding)|
| 3. Het Juridische Beleidskader | - |[Juridisch Beleidskader (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/)|[logboek-dataverwerkingen-juridisch-beleidskader](https://github.com/Logius-standaarden/logboek-dataverwerkingen-juridisch-beleidskader/)|
| 4. LDV Extensie Guideline | - |[Guideline voor het schrijven van een extensie voor LDV (werkversie)](https://logius-standaarden.github.io/logboek-extensie-template/)|[logboek-extensie-template](https://github.com/Logius-standaarden/logboek-extensie-template)|
