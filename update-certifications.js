const fs = require('fs');
const { parse } = require('csv-parse/sync');
const { stringify } = require('csv-stringify/sync');

// Name mappings for cases where CSV name differs from DB name
const nameMap = {
  'bsmeaton': 'Ben Smeaton',
  'xNikos': '\\xNikos',
  'Skyrock Tech': 'Kushed SkyRock',
  'Dmitrii Rykunov': 'Dmitri Rykunov',
  'Florent Bariod': 'Floren Bariod',
  'Malcolm Ahoy': 'Malcom Ahoy'
};

// Read the student database output (from psql query)
const studentsData = `A Bhogal                 | a-bhogal
Aaron Taylor             | aaron-taylor
Abdalla AlMajali         | abdalla-almajali
Abdelkbir Gadrim         | abdelkbir-gadrim
Adam Duritza             | adam-duritza
Aditya Turakhia          | aditya-turakhia
Ahmed Jemli              | ahmed-jemli
Ajit Kulkarni            | ajit-kulkarni
Alan Coppola             | alan-coppola
Alberto Fernandez        | alberto-fernandez
Alec Otto                | alec-otto
Aleksandr Kigelman       | aleksandr-kigelman
Aleksandrs Savkins       | aleksandrs-savkins
Alex Mellusco            | alex-mellusco
Alex Mukhachou           | alex-mukhachou
Alex Shumilov            | alex-shumilov
Alexia Quan              | alexia-quan
Ali Ihsan                | ali-ihsan
Ali Pinar                | ali-pinar
Andreas                  | andreas
Andrei Adam              | andrei-adam
Andrew Li                | andrew-li
Andy                     | andy
Andy Fajar Handika       | andy-fajar-handika
Andy Lin                 | andy-lin
Antonio Gonzalo          | antonio-gonzalo
Arash F                  | arash-f
Arben Imeraj             | arben-imeraj
Artem Zadorozhnyi        | artem-zadorozhnyi
Artur Gaio               | artur-gaio
Asgeir Andri Guðmundsson | asgeir-andri-gudmundsson
Astra A                  | astra-a
Aurelie Dhellemmes       | aurelie-dhellemmes
Azamat Shablin           | azamat-shablin
BK MACRO SAS             | bk-macro-sas
Barnabas Debreczeni      | barnabas-debreczeni
Ben                      | ben
Ben Nguyen               | ben-nguyen
Ben Smeaton              | ben-smeaton
Benjamin Loveless        | benjamin-loveless
Bo Cheng Zhang           | bo-cheng-zhang
Bogdan Stirbu            | bogdan-stirbu
Boot                     | boot
Bragi Arnarson           | bragi-arnarson
Brent Dornier            | brent-dornier
Brett Mollin             | brett-mollin
Brian Chen               | brian-chen
Brian Rauzi              | brian-rauzi
Bryghton Towns           | bryghton-towns
Calum MacLeod            | calum-macleod
Calvin                   | calvin
Carlito Getalada         | carlito-getalada
Carlos Torres-Montiel    | carlos-torres-montiel
Cesar Barriga            | cesar-barriga
Cezar Crintea            | cezar-crintea
Chokha Palayamkottai     | chokha-palayamkottai
Chris Daplit             | chris-daplit
Chris Howes              | chris-howes
Christian Latterner      | christian-latterner
Christian Schroer        | christian-schroer
Christoph Richter        | christoph-richter
Christophe Verdot        | christophe-verdot
Christopher Bram         | christopher-bram
Christopher Choi         | christopher-choi
Christopher Mercer       | christopher-mercer
Claude                   | claude
Clint Phillips           | clint-phillips
Colton McMillan          | colton-mcmillan
Corey Herynk             | corey-herynk
Dale Cooper              | dale-cooper
Danial Rashid            | danial-rashid
Daniel Tan               | daniel-tan
Danny Almaden            | danny-almaden
Danny Nguyen             | danny-nguyen
Daníel Sigurbjörnsson    | daniel-sigurbjornsson
David Alvero             | david-alvero
Dennis Ocana             | dennis-ocana
Detlef Schmitt           | detlef-schmitt
Dhrumil Mehta            | dhrumil-mehta
Dimitri Frederick        | dimitri-frederick
Dingsen Shi              | dingsen-shi
Dmitri Rykunov           | dmitri-rykunov
Dmitry Kuzmin            | dmitry-kuzmin
Dolm Chen                | dolm-chen
Dominik Stäger           | dominik-stager
Elliot Lee               | elliot-lee
Elton de Souza           | elton-de-souza
Emi Gal                  | emi-gal
Eric Chen                | eric-chen
Eric Gottlieb            | eric-gottlieb
Eric Vinicius            | eric-vinicius
Facundo Giglio           | facundo-giglio
Farhan Ismul Afriza      | farhan-ismul-afriza
Farley Edwards           | farley-edwards
Fausto Andrade           | fausto-andrade
Fede Carlos Santana      | fede-carlos-santana
Federico Cardoso         | federico-cardoso
Fern Saengthong          | fern-saengthong
Floren Bariod            | floren-bariod
Florence Tison           | florence-tison
Florent Uzio             | florent-uzio
Gareth Seale             | gareth-seale
Garrett Parker           | garrett-parker
Gary Zavaleta            | gary-zavaleta
Gautam Yashwardhan       | gautam-yashwardhan
George Burry             | george-burry
George Dinenis           | george-dinenis
Gerald Luzangi           | gerald-luzangi
German Vargas            | german-vargas
Gideon                   | gideon
Giorgi Koreli            | giorgi-koreli
Greg Gompers             | greg-gompers
Greg Pender              | greg-pender
Gregor Žavcer            | gregor-zavcer
Guilherme D'Orey         | guilherme-dorey
Guillaume Evrat          | guillaume-evrat
Gunnar Wold              | gunnar-wold
Gunnlaugur Hreidarsson   | gunnlaugur-hreidarsson
Gyungmin Lee             | gyungmin-lee
Hafþór Gunnlaugsson      | hafthor-gunnlaugsson
Harsh Walia              | harsh-walia
Hedge Trader             | hedge-trader
Helen Chen               | helen-chen
Hoang La                 | hoang-la
Hok Pan Chris Chau       | hok-pan-chris-chau
Hussain Ali              | hussain-ali
Hyder Alkhalifah         | hyder-alkhalifah
Hyder Alkhalifah         | hyder-alkhalifah-2
Igor Lyubimtsev          | igor-lyubimtsev
Imran Chaudhry           | imran-chaudhry
Ion Buravcenco           | ion-buravcenco
Iru Doramas              | iru-doramas
Ishan Verma              | ishan-verma
Ivan Anashkin            | ivan-anashkin
Ivan Gonzalez            | ivan-gonzalez
Ivan Herger              | ivan-herger
Jaanus Varus             | jaanus-varus
Jack Woolf               | jack-woolf
Jacky Wong               | jacky-wong
James Lo Tsz             | james-lo-tsz
James Yang               | james-yang
JamesPMagic              | jamespmagic
Jan Tyan                 | jan-tyan
Jay Coulter              | jay-coulter
Jeet Jivrajani           | jeet-jivrajani
Jelle Buth               | jelle-buth
Jevon Gordon             | jevon-gordon
Joel Ong                 | joel-ong
Johann Skulason          | johann-skulason
John Cheong              | john-cheong
John Fawcett             | john-fawcett
John Stachecki           | john-stachecki
John Young               | john-young
Jon Lee                  | jon-lee
Jon Wedrogowski          | jon-wedrogowski
Jonathan Doert           | jonathan-doert
Jonathan Gould           | jonathan-gould
Jonathan Rosenberg       | jonathan-rosenberg
Jonathan Wagner          | jonathan-wagner
Joris Zierold            | joris-zierold
Joseph Ho                | joseph-ho
Juan 0x                  | juan-0x
Jude Tan                 | jude-tan
Jun Jensen               | jun-jensen
Justas Cepenas           | justas-cepenas
Justin Massawe           | justin-massawe
Jói Gunnarsson           | joi-gunnarsson
KL  Minehan              | kl-minehan
Kaan Akkaya              | kaan-akkaya
Kapil Kumar              | kapil-kumar
Kelly Johnson            | kelly-johnson
Kepler Hubble            | kepler-hubble
Keshav Bathla            | keshav-bathla
Kestutis  Siaulys        | kestutis-siaulys
Kevin Calderon           | kevin-calderon
Kevin Chon               | kevin-chon
Kirill Shilov            | kirill-shilov
Konstantin Smirnov       | konstantin-smirnov
Kuo Yeh Shen             | kuo-yeh-shen
Kushagra Srivastava      | kushagra-srivastava
Kushed SkyRock           | kushed-skyrock
Lamine Diallo            | lamine-diallo
Lan Nguyen               | lan-nguyen
Lautaro                  | lautaro
Lawrence Whitmont        | lawrence-whitmont
Le Mai Phuong            | le-mai-phuong
Liam Perison             | liam-perison
Linus Henriksson         | linus-henriksson
Long Jianjin             | long-jianjin
Loo Yin Ng               | loo-yin-ng
Lorenzo Urera            | lorenzo-urera
Louis Benassy            | louis-benassy
Luca F                   | luca-f
Lurpis Wang              | lurpis-wang
Magnus Maynard           | magnus-maynard
Makir Volcy              | makir-volcy
Malcom Ahoy              | malcom-ahoy
Manish Bisht             | manish-bisht
Marcus Lindley           | marcus-lindley
Martin Planes            | martin-planes
Martin Prus              | martin-prus
Martin Sigwald           | martin-sigwald
Marvin Fangre            | marvin-fangre
Mateuz Wywial            | mateuz-wywial
Matheus Lira             | matheus-lira
Matt Alencar             | matt-alencar
Matt Liimakka            | matt-liimakka
Matt Marooney            | matt-marooney
Matthew Grekalski        | matthew-grekalski
Max Gnesi                | max-gnesi
Maxime Fages             | maxime-fages
Maxime Sebti             | maxime-sebti
Mehul Khati              | mehul-khati
Melted Blocks            | melted-blocks
Mert  Ergüden            | mert-erguden
Michael Andersen         | michael-andersen
Michael Azorin           | michael-azorin
Michael Bell             | michael-bell
Michael Feng             | michael-feng
Mikhail Belous           | mikhail-belous
Mitchell White           | mitchell-white
Mladen Markovic          | mladen-markovic
Moses Marimo             | moses-marimo
Mq Carabas               | mq-carabas
Nancy Meng               | nancy-meng
Natanael Prudhomme       | natanael-prudhomme
Nathan Gray              | nathan-gray
Nathan Le                | nathan-le
Nicolas Guillermo        | nicolas-guillermo
Nicolas Lopez            | nicolas-lopez
Nicole Jelen             | nicole-jelen
Nigel Khakoo             | nigel-khakoo
Niiaz Iusupov            | niiaz-iusupov
Nikhil                   | nikhil
Nikita Boltov            | nikita-boltov
Nikola Krzalic           | nikola-krzalic
Nishant Satyarthy        | nishant-satyarthy
Noel Castro              | noel-castro
Nzwisisa Chidembo        | nzwisisa-chidembo
Oleksandr Holofaiev      | oleksandr-holofaiev
Oliver Sabau             | oliver-sabau
Oluwadamola Olugboji     | oluwadamola-olugboji
Omar Abdelbadie          | omar-abdelbadie
Ortal Raz                | ortal-raz
Papon Rungsimatewon      | papon-rungsimatewon
Pasha                    | pasha
Patrick Meier            | patrick-meier
Patrick Poirier          | patrick-poirier
Pavel Shibanov           | pavel-shibanov
Pegah Soltani            | pegah-soltani
Peter Chong              | peter-chong
Peter Sheats             | peter-sheats
Peter Sikuda             | peter-sikuda
Peter Skalon             | peter-skalon
Petr Valasek             | petr-valasek
Phalgun Shenoy           | phalgun-shenoy
Rahul Chatterjee         | rahul-chatterjee
Ralph Comia              | ralph-comia
Raymond Chen             | raymond-chen
René Mondragón           | rene-mondragon
Resource Oraichain       | resource-oraichain
Rishil Rupesh Shah       | rishil-rupesh-shah
Rob Willemen             | rob-willemen
Robert Dyche             | robert-dyche
Rodrigo Queiroz          | rodrigo-queiroz
Rohan Sundar             | rohan-sundar
Rohit Varma Bhetalam     | rohit-varma-bhetalam
Roland Kofler            | roland-kofler
Romain  Braud            | romain-braud
Ron Casas                | ron-casas
Sami Rusani              | sami-rusani
Sandeep Chandaluri       | sandeep-chandaluri
Sayan Roy                | sayan-roy
Sebastian Barliga        | sebastian-barliga
Sergey Chuikin           | sergey-chuikin
Shawn St. Prix           | shawn-st-prix
Shivam Chopra            | shivam-chopra
Shraddha  Agarwal        | shraddha-agarwal
Shuyi Lee                | shuyi-lee
Siam Thongnak            | siam-thongnak
Sig                      | sig
Simon Moxon              | simon-moxon
Stanislav Ivanov         | stanislav-ivanov
Stanislav Viyachev       | stanislav-viyachev
Steve                    | steve
Steven Chen              | steven-chen
Tamas Hende              | tamas-hende
Tan Wei Guang            | wei-guang-tan
Taro Taniguchi           | taro-taniguchi
Tee Srisantithum         | tee-srisantithum
Theo Maniac              | theo-maniac
Thiago  de Paula Silva   | thiago-de-paula-silva
Thierry Henkinet         | thierry-henkinet
TianYu Jiang             | tianyu-jiang
Timo Lehes               | timo-lehes
Tobias Rethmeyer         | tobias-rethmeyer
Todd Griggs              | todd-griggs
Tolulope Shekoni         | tolulope-shekoni
Toriii                   | toriii
Tri                      | tri
Tyler Auton-Smith        | tyler-auton-smith
Unbound SA               | unbound-sa
Valentin Balaschenko     | valentin-balaschenko
Vamshi Sandhi Reddy      | vamshi-sandhi-reddy
Vansh Tuli               | vansh-tuli
Vassilis Papapanagiotou  | vassilis-papapanagiotou
Victor Adeleke           | victor-adeleke
Victor Philipe Camargo   | victor-philipe-camargo
Victor Tomassoni         | victor-tomassoni
Vidar Jonsson            | vidar-jonsson
Vihan Singh              | vihan-singh
Viktoria Tsybko          | viktoria-tsybko
Vincent                  | vincent
Vlad Ragulin             | vlad-ragulin
Vladimir Eremin          | vladimir-eremin
Vladislav Semkin         | vladislav-semkin
Wan Hong Lau             | wan-hong-lau
Wansun Song              | wansun-song
Warren Ferrell           | warren-ferrell
Welly Tambunan           | welly-tambunan
Wesley Lu                | wesley-lu
Wilfred Lau              | wilfred-lau
Will Jones               | will-jones
William Leung            | william-leung
Wilson Lee               | wilson-lee
Wit Sumathavanit         | wit-sumathavanit
Y&R Co Ltd               | yandr-co-ltd
Yasha Black              | yasha-black
Yeyun Chen               | yeyun-chen
Youcef Selim             | youcef-selim
Yue Wang                 | yue-wang
Zach Thielen             | zach-thielen
Zareeb Chowdhury         | zareeb-chowdhury
\\xNikos                  | xnikos
alexandre                | alexandre
dadi Wei                 | dadi-wei
fm konuk                 | fm-konuk
jorndeboeck              | jorndeboeck
maksym                   | maksym
t0day hi                 | t0day-hi`;

// Parse students data into a map
const studentMap = {};
studentsData.split('\n').forEach(line => {
  const parts = line.split('|');
  if (parts.length === 2) {
    const name = parts[0].trim();
    const slug = parts[1].trim();
    studentMap[name] = slug;
  }
});

// Read CSV
const csvPath = '/Users/feng/hummingbot-site/docs/certification/Botcamp Members Database - Certified.csv';
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true
});

// Update records with certification links
const updatedRecords = records.map(record => {
  let lookupName = record.Name;

  // Check if we have a name mapping
  if (nameMap[lookupName]) {
    lookupName = nameMap[lookupName];
  }

  // Find the slug
  const slug = studentMap[lookupName];

  if (slug) {
    return {
      ...record,
      Certification: `<https://www.botcamp.xyz/members/${slug}>`
    };
  } else {
    console.log(`Warning: No slug found for: ${record.Name}`);
    return record;
  }
});

// Write updated CSV
const output = stringify(updatedRecords, {
  header: true,
  columns: ['Name', 'Cohort', 'Certification']
});

fs.writeFileSync(csvPath, output);
console.log('CSV updated successfully!');
console.log(`Total records: ${updatedRecords.length}`);
console.log(`Records with certification links: ${updatedRecords.filter(r => r.Certification.includes('https')).length}`);
