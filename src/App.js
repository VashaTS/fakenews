import React, { useState } from "react";
import "./App.css";
import v1 from "./v1.jpg";
import { Grid, Segment, Button, Header } from "semantic-ui-react";

const App = () => {
  let ar1 = [
    "Pilne!",
    "Ciekawe...",
    "Potwierdzone info!",
    "Słów nie ma, co oni wyprawiają?",
    "Puść dalej!",
    "Szok! nie mogę uwierzyć...",
    "A to już słyszałeś?",
    "Zobacz to!",
    "Koniecznie przeczytaj!",
    "Sam nie wierzę w to co czytam...",
    "Niepokojące...",
    "Jak mogło do tego dojść?",
    "Co tu się dzieje?"
  ];
  var ar2 = {
    "Wiarygodne źródło,": "m",
    "Moja koleżanka,": "f",
    "Mój kolega,": "m",
    "Mój kuzyn,": "m",
    "Moja kuzynka,": "f",
    "Syn sąsiada,": "m",
    "Brat naszego proboszcza,": "m",
    "Kumpel mojego szefa,": "m",
    "Koleżanka szefa,": "f",
    "Moja bratowa,": "f",
    "Znajomy mojego szwagra,": "m",
    "Nasz wspólny znajomy,": "m",
    "Nasza wspólna znajoma,": "f",
    "Mój kolega ze studiów,": "m",
    "Moja koleżanka ze studiów,": "f",
    "Koleżanka mojej żony,": "f",
    "Kolega mojego męża,": "m"
  };
  let ar3m = [
    "z Instystutu Chorób zakaźnych",
    "pracuje w strukturach rządowych i",
    "pracuje na policji i",
    "oficer ABW,",
    "lekarz-epidemiolog",
    "dziennikarz w TVP,",
    "dziennikarz w TVN,",
    "szkolny kolega Agaty Dudy, no wiesz, prezydentowej,",
    "profesor medycyny",
    "pracownik labolatorium wirusologicznego",
    "(pracuje na stanowisku kierowniczym w międzynarodowej korporacji)"
  ];
  let ar3f = [
    "z Instystutu Chorób zakaźnych",
    "pracuje w strukturach rządowych i",
    "pracuje na policji i",
    "oficer ABW,",
    "lekarz-epidemiolog",
    "dziennikarka w TVP,",
    "dziennikarka w TVN,",
    "szkolna koleżanka Agaty Dudy, no wiesz, prezydentowej,",
    "profesor Medycyny",
    "pracownik labolatorium wirusologicznego",
    "(pracuje na stanowisku kierowniczym w międzynarodowej korporacji)"
  ];
  let ar4m = [
    "dał cynk że",
    "właśnie pisze mi w mailu że",
    "wie na 100% że",
    "przysłał mi SMS-a że",
    "właśnie dostał komunikat że",
    "przypadkiem dowiedział się że"
  ];
  let ar4f = [
    "dała cynk że",
    "właśnie pisze mi w mailu że",
    "wie na 100% że",
    "przysłała mi SMS-a że",
    "właśnie dostała komunikat że",
    "przypadkiem dowiedziała się że"
  ];
  let ar4_5 = [
    "prezydent",
    "premier",
    "sejm",
    "rząd",
    "ministerstwo zdrowia",
    "sztab WP",
    "WHO, w pogwałceniu polskiej niepodległości",
    "Sąd Najwyższy"
  ];
  let ar5 = [
    "jutro w nocy",
    "w ciągu 24 godzin",
    "w ciągu 48 godzin",
    "za chwilę",
    "w najbliższych godzinach",
    "w najbliższą sobotę",
    "na dniach",
    "w najbliższym czasie",
    "w najbliższy poniedziałek",
    "jeszcze w tym tygodniu",
    "dzisiaj o północy"
  ];
  let ar6 = {
    "wyśle wszystkich 60+ do ośrodków izolacyjnych.":
      "https://zdrowie.wprost.pl/koronawirus/10305415/masz-wiecej-niz-60-lat-oto-co-musisz-wiedziec-o-koronawirusie.html",
    "zamknie wjazd do warszawy.":
      "https://www.se.pl/krakow/koronawirus-w-polsce-czy-krakow-zostanie-zamkniety-szokujace-slowa-biznesmena-aa-jDxG-xsbJ-KbPR.html",
    "nakaże zamknięcie sklepów.":
      "https://www.eska.pl/warszawa/koronawirus-w-polsce-czy-sklepy-beda-zamkniete-na-jak-dlugo-aa-YUSH-QZGS-owzh.html",
    "nakaże zamknięcie stacji benzynowych":
      "https://wrc.net.pl/stacje-benzynowe-w-polsdce-pozamykane-koronawirus-przybiera-na-sile-i-zmusza-rzad-do-decyzji",
    "wprowadzi wojsko na ulice.":
      "https://www.polsatnews.pl/wiadomosc/2020-03-19/decyzja-mon-zolnierze-pomoga-policjantom-w-zapewnieniu-bezpieczenstwa-i-porzadku-publicznego/",
    "wprowadzi zakaz wychodzenia z domu dla wszystkich":
      "https://wyborcza.pl/7,75399,25805915,koronawirus-w-niemczech-zakaz-wychodzenia-z-domow-we-fryburgu.html?disableRedirects=true",
    "ma zakazać wychodzenia z domu, kara 5000zł":
      "https://tvn24.pl/polska/koronawirus-w-pleszewie-w-czasie-kwarantanny-wybrala-sie-do-sklepu-zostanie-nalozona-grzywna-wysokosci-pieciu-tysiecy-zlotych-4371154",
    "wprowadzi kartki na mięso, żeby ograniczyć wzrost cen":
      "https://superbiz.se.pl/wiadomosci/koronawirus-w-polsce-wroca-kartki-jak-za-prl-reglamentacja-zywnosci-w-naszym-kraju-aa-9hdp-TLND-D9dd.html",
    "ma zakazać używania gotówki":
      "https://bezprawnik.pl/koronawirus-zabije-gotowke/",
    "zablokuje konta bankowe osób z potwierdzonym zakażeniem koronawirusem.":
      "https://alebank.pl/kas-blokuje-coraz-wiecej-krajowych-kont-bankowych/",
    "wprowadzi stan wyjątkowy":
      "https://www.euractiv.pl/section/bezpieczenstwo-i-obrona/news/koronawirus-ktore-kraje-wprowadzily-stan-wyjatkowy/",
    "wprowadzi stan wojenny":
      "https://www.sport.pl/pilka/7,173971,25799066,lukasz-gikiewicz-komentuje-wprowadzenie-stanu-wojennego-w-jordanii.html",
    "zatwierdzi dodrukowanie ogromnej ilości pieniędzy":
      "https://businessinsider.com.pl/finanse/tarcza-antykryzysowa-na-koronawirusa-nbp-dodrukuje-zlotego/7fd87k4"
  };

  let rng2 = Math.floor(Math.random() * Object.keys(ar2).length);

  let ar4 = [];
  let ar3 = [];
  if (Object.values(ar2)[rng2] === "m") {
    ar4 = ar4m;
    ar3 = ar3m;
  } else {
    ar4 = ar4f;
    ar3 = ar3f;
  }
  let rng6 = Math.floor(Math.random() * Object.keys(ar4).length);
  let orgstr = ar1[Math.floor(Math.random() * ar1.length)]
    .concat(" ")
    .concat(Object.keys(ar2)[rng2])
    .concat(" ")
    .concat(ar3[Math.floor(Math.random() * ar3.length)])
    .concat(" ")
    .concat(ar4[Math.floor(Math.random() * ar4.length)])
    .concat(" ")
    .concat(ar4_5[Math.floor(Math.random() * ar4_5.length)])
    .concat(" ")
    .concat(ar5[Math.floor(Math.random() * ar5.length)])
    .concat(" ")
    .concat(Object.keys(ar6)[rng6]);
  const [str, setStr] = useState(orgstr);
  const [link, setLink] = useState(Object.values(ar6)[rng6]);
  const handleNewRand = () => {
    let rng2 = Math.floor(Math.random() * Object.keys(ar2).length);

    let ar4 = [];
    let ar3 = [];
    if (Object.values(ar2)[rng2] === "m") {
      ar4 = ar4m;
      ar3 = ar3m;
    } else {
      ar4 = ar4f;
      ar3 = ar3f;
    }
    let rng6 = Math.floor(Math.random() * Object.keys(ar6).length);
    let newstr = ar1[Math.floor(Math.random() * ar1.length)]
      .concat(" ")
      .concat(Object.keys(ar2)[rng2])
      .concat(" ")
      .concat(ar3[Math.floor(Math.random() * ar3.length)])
      .concat(" ")
      .concat(ar4[Math.floor(Math.random() * ar4.length)])
      .concat(" ")
      .concat(ar4_5[Math.floor(Math.random() * ar4_5.length)])
      .concat(" ")
      .concat(ar5[Math.floor(Math.random() * ar5.length)])
      .concat(" ")
      .concat(Object.keys(ar6)[rng6]);
    setStr(newstr);
    setLink(Object.values(ar6)[rng6]);
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${v1})` }}>
      <Grid
        className="nb"
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" className="strokeme">
            COVID-19 fake news:
          </Header>
          <Segment
            style={{
              backgroundColor: "skyblue",
              padding: 12,
              borderRadius: 15,
              opacity: "80%"
            }}
          >
            <h4>
              {ar1.length *
                Object.keys(ar2).length *
                ar3.length *
                ar4.length *
                ar4_5.length *
                ar5.length *
                Object.keys(ar6).length}
              &nbsp;możliwych kombinacji
            </h4>
          </Segment>
          <Segment
            style={{
              backgroundColor: "skyblue",
              padding: 20,
              borderRadius: 25
            }}
          >
            <h3 style={{ color: "navy" }}>{str}</h3>
          </Segment>
          <Segment
            style={{
              backgroundColor: "skyblue",
              padding: 12,
              borderRadius: 15,
              opacity: "90%"
            }}
          >
            <h3 style={{ color: "black" }}>
              <a style={{ color: "black" }} href={link}>
                Artykuł potwierdzający
              </a>
            </h3>
          </Segment>
          <Button
            size="large"
            positive
            inverted
            content="Wylosuj inny fejk"
            onClick={handleNewRand}
            style={{ padding: 30 }}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default App;
