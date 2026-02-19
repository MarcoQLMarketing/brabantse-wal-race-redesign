import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const schedule = [
  { time: "07:00", activity: "Opening registratie & check-in" },
  { time: "08:20", activity: "Briefing halve afstand (10 min voor elke serie)" },
  { time: "08:25", activity: "Opening race door wethouder" },
  { time: "09:00", activity: "Akqua Beach open — beste koffie van Bergen op Zoom" },
  { time: "08:30 / 09:00 / 09:45", activity: "Start halve afstand (series 1-3)" },
  { time: "10:35", activity: "Briefing kwart afstand" },
  { time: "10:45 / 11:15 / 11:30", activity: "Start kwart afstand (series 4-6, incl. estafette)" },
  { time: "11:35", activity: "Briefing achtste afstand" },
  { time: "11:45 / 12:15 / 12:30", activity: "Start achtste afstand (series 7-9, incl. estafette)" },
  { time: "13:00", activity: "Eerste finisher verwacht" },
  { time: "13:30", activity: "Eerste prijsuitreiking bij Akqua Beach recovery hangout" },
  { time: "16:30", activity: "Laatste finisher verwacht" },
];

const faqSections = [
  {
    title: "Rondom de wedstrijd",
    items: [
      {
        question: "Als ik toch niet mee kan doen?",
        answer: [
          "Kun je niet starten door ziekte of iets anders, dan mag je je ticket via het verkoopplatform in je dashboard doorverkopen tot een week voor de race.",
          "Na die deadline liggen startnummers vast. Dan graag een mailtje naar de organisatie zodat we je kunnen helpen.",
        ],
      },
      {
        question: "Waar is het eigenlijk?",
        answer: [
          "Start en finish zijn bij zwembad De Schelp, Boulevard 45 in Bergen op Zoom, pal tussen Brabant en Zeeland.",
          "Routes lopen rondom de Binnenschelde (1/8 & 1/4) en richting de Brabantse Wal/het Markiezaatsmeer. Bekijk de laatste versies via triathlonbw.nl/voorlopige-routes.",
        ],
      },
      {
        question: "Waar kun je parkeren?",
        answer: ["Op en rond de Boulevard bij het zwembad zijn voldoende parkeervakken."],
      },
      {
        question: "Waar en hoe meld je je aan?",
        answer: [
          "Aanmelden doe je (als je vooraf bent ingeschreven) vanaf 07:30 uur in het zwembad. Daar krijg je startnummer, helm- en fietsstickers en schrijven we je nummer op je arm.",
          "Startnummerband is handig: nummer op de rug tijdens fietsen, op de buik tijdens lopen. Stickers op helm en fiets, daarna check je bike in de wisselzone (korte tech-check).",
          "Laat geen grote tassen of waardevolle spullen achter. Na de race mag je pas uitchecken als je je nummer kunt tonen.",
        ],
      },
      {
        question: "Staat mijn fiets veilig in de wisselzone?",
        answer: ["Ja. Het is parc fermé: alleen met matching startnummer/helm/fiets kom je erin of eruit."],
      },
      {
        question: "Kan ik ergens vooraf omkleden?",
        answer: [
          "Ja. In het zwembad zijn kleedkamers, douches en kluisjes met eigen code. Alleen deelnemers en vrijwilligers mogen de wisselzone in.",
        ],
      },
      {
        question: "Kan ik tussen de onderdelen omkleden?",
        answer: [
          "Tussen zwemmen, fietsen en lopen kom je niet langs kleedruimtes. Je mag je bij de fiets omkleden (met handdoek). Volledig naakt is niet toegestaan volgens de internationale regels.",
        ],
      },
      {
        question: "Kan ik mijn spullen ergens opbergen?",
        answer: [
          "Gebruik de kluisjes in het zwembad (eigen code) of leg spullen neer in de wisselzone. Daar komen alleen deelnemers en crew.",
        ],
      },
      {
        question: "Is er een baanindeling voor binnenzwemmers?",
        answer: [
          "Ja. Twee weken voor de race ontvang je een baanindeling op basis van je opgegeven zwemtijd. Per baan zwemmen zo’n vier mensen met vergelijkbare snelheid.",
        ],
      },
      {
        question: "Is de race live te volgen?",
        answer: [
          "Finishtijden worden live gedeeld. Zodra de link beschikbaar is komt die via de mail en website.",
        ],
      },
      {
        question: "Zijn er GPX-bestanden van de route?",
        answer: ["Ja. Op de routepagina staan de meest recente GPX-bestanden."],
      },
      {
        question: "En als ik naar huis wil?",
        answer: [
          "Blijf het liefst tot de prijsuitreiking en laatste finisher (±15:45). Moet je eerder weg, dan vanaf ±14:30 uitchecken bij de wisselzone met je startnummer.",
        ],
      },
      {
        question: "Is er een recovery zone?",
        answer: [
          "Ja, bij partner Akqua Beach: douchen, omkleden en op vertoon van je startnummer een gratis hersteldrank. Supporters chillen daar ook graag op het terras.",
        ],
      },
    ],
  },
  {
    title: "Tijdens de wedstrijd",
    items: [
      {
        question: "Binnen én buiten zwemmen, hoe zit dat?",
        answer: [
          "Deelnemers kiezen vooraf binnen of buiten (tot 19 mei). Starts zijn tegelijk en tijdwaarneming volgt de buitenstart.",
          "Alleen buitenzwemmers doen mee voor de prijzen; binnenzwemmers staan wel in de uitslag. Als buiten niet veilig is, zwemmen we allemaal binnen.",
        ],
      },
      {
        question: "Hoe gaat de start van het zwemmen?",
        answer: [
          "Buiten start je vanaf het strand. Binnen mag je 2 minuten voor de start het water in, krijgt aftelsignalen en start je vanuit de baan die past bij jouw tempo.",
          "Houd rechts in je baan, tel zelf je lengte mee en loop na het zwemmen via de timingmat de wisselzone in.",
        ],
      },
      {
        question: "Mag je een wetsuit aan in het zwembad?",
        answer: [
          "Nee, het water is warmer dan 22 °C dus wetsuits zijn verboden (veiligheid). Een neopreen short of skinsuit mag wel.",
        ],
      },
      {
        question: "Hoe werkt zwemmen in het zwembad?",
        answer: [
          "Je krijgt een gekleurde badmuts per snelheidsbaan. Start in het water, houd rechts en zwem je afstand. Officials tellen mee, maar jij bent verantwoordelijk.",
          "Krijg je een signaal? Dan heb je nog 50 meter. Daarna klim je uit het bad en ga je naar T1.",
        ],
      },
      {
        question: "Hoe gaat het wisselen?",
        answer: [
          "T1: uit het water loop je over tapijt naar de wisselzone, helm op, schoenen aan, fiets uit het rek en pas buiten opstappen.",
          "T2: afstappen vóór de wisselzone, fiets terug in het rek, helm af, loopschoenen aan en weer naar buiten. Geef elkaar ruimte.",
        ],
      },
      {
        question: "Zijn er verkeersregelaars?",
        answer: ["Ja. Vrijwilligers staan op de belangrijkste punten. Het parcours is verkeersarm, maar houd je aan de verkeersregels."],
      },
      {
        question: "Is er verzorging op het parcours?",
        answer: [
          "Tijdens het lopen staan minimaal één (achtste) of twee (kwart/halve) verzorgingsposten met water, banaan en sinaasappel.",
        ],
      },
      {
        question: "Is er een jury?",
        answer: [
          "Nee. We varen op fair play en volgen de NTB/ITU-regels, maar er is geen officiële jury. Houd het sportief.",
        ],
      },
      {
        question: "Is er tijdwaarneming?",
        answer: ["Ja, via chips in je startpakket."],
      },
      {
        question: "Is de route uitgepijld?",
        answer: ["Ja, met bordjes én regelaars. Toch even checken? Bekijk de kaarten online."],
      },
      {
        question: "Wat zijn de regels?",
        answer: [
          "1) Meedoen is belangrijker dan winnen. 2) Wees hoffelijk en geef ruimte. 3) Volg de verkeersregels. 4) Volg de Triathlonbond-regels. 5) We vertrouwen elkaar.",
        ],
      },
      {
        question: "Mag ik met muziek in mijn oren racen?",
        answer: [
          "Nee. Dat is onveilig voor verkeer en tegen de NTB/ITU-regels. Bovendien moet je regelaars kunnen horen.",
        ],
      },
    ],
  },
  {
    title: "Voor het publiek",
    items: [
      {
        question: "Waar kan ik kijken?",
        answer: [
          "Langs het hele parcours en bij de finishzone. Alleen de wisselzone is afgesloten voor publiek.",
        ],
      },
      {
        question: "Mag ik helpen?",
        answer: [
          "Atleten mogen officieel geen hulp krijgen, maar in nood natuurlijk wel. Wil je vrijwilligen? Mail naar organisatie@triathlonbw.nl.",
        ],
      },
      {
        question: "Mag ik meefietsen?",
        answer: [
          "Liever niet. Het parcours is bedoeld voor atleten en extra fietsen maken het onveilig.",
        ],
      },
      {
        question: "Welke wegen zijn afgezet?",
        answer: [
          "Fietspad rond de Binnenschelde, Noordlandseweg, Markiezaatskade en straten op de Bergse Plaat. Check de kaart: https://www.google.com/maps/d/embed?mid=1t00fMRC5t6dKRJrusuQ5ocQMpvV2dNw&ehbc=2E312F",
        ],
      },
      {
        question: "Waar kan ik wat drinken/wachten?",
        answer: [
          "Bij Akqua Beach (recovery hangout) of de andere horeca rond de Binnenschelde en zwembad De Schelp. Akqua opent speciaal om 09:00 uur.",
        ],
      },
      {
        question: "Waar mag ik niet komen?",
        answer: ["Niet in de wisselzone en liever niet óp het parcours."],
      },
    ],
  },
];

const Praktisch = () => (
  <div className="bg-background text-foreground">
    <section className="bg-foreground text-accent-foreground py-16">
      <div className="container max-w-4xl text-center space-y-4">
        <p className="uppercase tracking-[0.3em] text-sm text-primary">Praktische informatie</p>
        <h1 className="text-4xl md:text-5xl font-display">Alles wat je moet weten voor raceday</h1>
        <p className="text-accent-foreground/80">
          Programma, timing en alle veelgestelde vragen van Triathlon Brabantse Wal. Deze pagina wordt geüpdatet zodra de organisatie
          nieuwe details bevestigt.
        </p>
        <div className="text-xs uppercase tracking-widest text-accent-foreground/60">Laatste update: conceptversie</div>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-5xl space-y-8">
        <div className="bg-muted border border-border rounded-3xl p-6 md:p-8 shadow-sm">
          <p className="text-sm text-muted-foreground mb-4">Programmachoice</p>
          <h2 className="text-2xl md:text-3xl font-display mb-4">Dagprogramma (wijzigingen voorbehouden)</h2>
          <p className="text-muted-foreground mb-6">
            LET OP: dit schema is nog conceptueel. Check kort voor de race voor de laatste versie op de officiële kanalen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <tbody>
                {schedule.map((slot) => (
                  <tr key={slot.time} className="border-b border-border/60">
                    <td className="py-3 pr-4 font-mono text-primary whitespace-nowrap">{slot.time}</td>
                    <td className="py-3 text-foreground">{slot.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="px-3 py-1 rounded-full border">Locatie: Boulevard 45, Bergen op Zoom</span>
          <span className="px-3 py-1 rounded-full border">Routes: <a href="https://triathlonbw.nl/voorlopige-routes/" className="underline">triathlonbw.nl/voorlopige-routes</a></span>
          <span className="px-3 py-1 rounded-full border">Contact: organisatie@triathlonbw.nl</span>
        </div>
      </div>
    </section>

    <section className="pb-20">
      <div className="container max-w-5xl space-y-12">
        {faqSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-primary">{section.title}</p>
              <h2 className="text-3xl font-display">{section.title}</h2>
            </div>
            <Accordion type="single" collapsible className="rounded-2xl border bg-card px-4">
              {section.items.map((item, index) => (
                <AccordionItem key={item.question} value={`${section.title}-${index}`}>
                  <AccordionTrigger className="text-left text-base md:text-lg">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    {item.answer.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>

    <section className="pb-24">
      <div className="container max-w-4xl text-center space-y-4">
        <h3 className="text-2xl font-display">Nog vragen?</h3>
        <p className="text-muted-foreground">
          Neem contact op met de organisatie of zoek mee in de community. Vrijwilliger worden of sponsorvragen? Laat het weten — we reageren snel.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="mailto:organisatie@triathlonbw.nl" className="px-5 py-2 rounded-full bg-primary text-primary-foreground">Mail de organisatie</a>
          <Link to="/" className="px-5 py-2 rounded-full border border-border text-foreground">Terug naar homepage</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Praktisch;
