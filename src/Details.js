
import { useParams,useSearchParams } from "react-router-dom";
import { useEffect ,useState} from "react";

function Details(){

    const city=[
        {
            id:1,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.nolG_jwRXPmDOY5FxtYKqgHaE8&pid=Api&P=0&h=180',
            name:"Delhi",
            spec:"Capital city of India,it is known for its striking monuments and some of the world’s best street food",
            des: " About City",
            des1:"Delhi, city and national capital, and union territory, north-central India. The city of Delhi actually consists of two components: Old Delhi, in the north, the historic city; and New Delhi, in the south,since 1947 the capital of India, built in the first part of the 20th century as the capital of British India.One of the country’s largest urban agglomerations, Delhi sits astride (but primarily on the west bank of) the Yamuna River, a tributary of the Ganges (Ganga) River, about 100 miles (160 km) south of the Himalayas. The national capital territory embraces Old and New Delhi and the surrounding metropolitan region, as well as adjacent rural areas. To the east the territory is bounded by the state of Uttar Pradesh, and to the north, west, and south it is bounded by the state of Haryana.",
            imgsrc2:'https://tse4.mm.bing.net/th?id=OIP.bLHG856HRnlNAB2gTuHT_wHaEj&pid=Api&P=0&h=300',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.jTH_EPZRsXSLNySSXOvkRgHaE9&pid=Api&P=0&h=317',
            par1:"Tourist Places in Delhi",

            part2:'India Gate –This is a famous war memorial and is beautifully lit after sunset.',      
            part3:'Lotus Temple –This Bahai temple in Delhi is structured in a lotus shape and is a popular tourist attraction of the city.' ,
            part4:'Dilli Haat –Experience true Indian culture in the ethnic shopping market that also has delicious local food stalls.',
            part5: 'Connaught Place –An all in all hangout spot. Be it shopping, food or movies, this place offers them all.' ,
            
            f1:'Chole Bature',
            f2:'Chole kulche',
            f3:'Naan Roti',
            f4:'Jalebi',
            f5:'Kulfi',

            imgsrc4:'https://tse1.mm.bing.net/th?id=OIP.Y484f7AzHY0b45zV4uPMawHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse3.mm.bing.net/th?id=OIP.dHXL7CqMwn73xcpdVNzd2AHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse3.mm.bing.net/th?id=OIP.mEusJ-4G3UCOPSbl2fUN6QHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse2.mm.bing.net/th?id=OIP.ia3bC9RZZpkL0NrlB1KslwHaEK&pid=Api&P=0&h=180'
           

        },
         {
        id:2,
        imgsrc:'https://tse2.mm.bing.net/th?id=OIP.3H6Tc08X_vDP1koalgF1UQHaE0&pid=Api&P=0&h=180',
        name:"Mumbai",
        spec:"The City That Never Sleeps and also called as City of Dreams",
        des: " About City",
        des1:"Mumbai, city, capital of Maharashtra state, southwestern India. It is the country’s financial and commercial centre and its principal port on the Arabian Sea.Located on Maharashtra’s coast, Mumbai is India’s most-populous city, and it is one of the largest and most densely populated urban areas in the world. It was built on a site of ancient settlement, and it took its name from the local goddess Mumba—a form of Parvati, the consort of Shiva, one of the principal deities of Hinduism—whose temple once stood in what is now the southeastern section of the city. It became known as Bombay during the British colonial period, the name possibly an Anglicized corruption of Mumbai or perhaps of Bom Baim (“Good Harbour”), supposedly a Portuguese name for the locale. The name Mumbai was restored officially in 1995, although Bombay remained in common usage.",
        imgsrc2:'https://tse3.mm.bing.net/th?id=OIP.3JGNA-iNa0Wd0e7OwQyKsQHaEr&pid=Api&P=0&h=305',
        imgsrc3:'https://tse1.mm.bing.net/th?id=OIP.OTuqSVT71mVX7gZNeWzxbwHaEl&pid=Api&P=0&h=300',
         par1:"Tourist Places in Mumbai",
         part2:'The iconic ‘Gate way of India’ on the Mumbai harbor front is a popular tourist haunt and depicts the grandeur of British era.',
         part3:'‘Haji Ali’ the shrine of Saint Pir Haji Ali stands in the middle of Arabian Sea and is a marvel of Indo-Islamic architecture.',
         part4:'The famous ‘Siddhivinayak Temple’ of Lord Ganesha is known for its alluring architecture and beauty.',
         part5:'‘Chhatrapati Shivaji Maharaj Vastu Sangrahalaya’ is the most premier art and history museum in India.',

         f1:'Vada Pav– Poor Man’s Burger',
         f2:'Pav Bhaaji – Popular Street Food',
         f3:'Bhel Puri and Sev Puri- Yummy Chaat',
         f4:'Batata Vada- Aloo Bonda',
         f5:'Pani Puri- Tangy Flavorous Waterballs',

         imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.KwsB1dk_5CznIygxpinpqAHaEK&pid=Api&P=0&h=180',
         imgsrc5:'https://tse4.mm.bing.net/th?id=OIP.i4D8gb3BnCgcF0oHv6Sv9AHaEK&pid=Api&P=0&h=180',
         imgsrc6:'https://tse3.mm.bing.net/th?id=OIP.MMi18WJRBKI9kaDX-jHwlQHaEK&pid=Api&P=0&h=180',
         imgsrc7:'https://tse3.mm.bing.net/th?id=OIP.usAluWM4NWMYAjX77yXFWQHaEK&pid=Api&P=0&h=180'
         
         },
         {
            id:3,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.jcVqouTP1ZCaX6V3hX12owHaFi&pid=Api&P=0&h=180',
            name:"Hyderabad",
            spec:"City of Pearls , City of Nizams and also known as Shrimp Capital of India",
            des: " About City",
            des1:"Hyderabad, city, Telangana state, south-central India. It is Telangana’s largest and most-populous city and is the major urban centre for all of south-central interior India. From 1956 to 2014 Hyderabad was the capital of Andhra Pradesh state, but, with the creation of Telangana from Andhra Pradesh in 2014, it was redesignated as the capital of both states.Hyderabad was founded by the Quṭb Shāhī sultans of Golconda, under whom the kingdom of Golconda attained a position of importance second only to that of the Mughal Empire to the north. The old fortress town of Golconda had proved inadequate as the kingdom’s capital, and so about 1591 Muḥammad Qulī Quṭb Shah, the fifth of the Quṭb Shahs, built a new city called Hyderabad on the east bank of the Musi River, a short distance from old Golconda. The Charminar, a grand architectural composition in Indo-Saracenic style with open arches and four minarets, is regarded as the supreme achievement of the Quṭb Shāhī period. It formed the centrepiece around which the city was planned.",
            imgsrc2:'https://tse1.mm.bing.net/th?id=OIP._JGQlKsAx-kHpPjW-2sKcQHaE0&pid=Api&P=0&h=320',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.SBppt7kVaL5dcmTA5DSYwgHaE0&pid=Api&P=0&h=320',
            par1:"Tourist Places in Hyderabad",
            part2:'Golconda Fort -It is an archaic fort towering the Hyderabad city.It is one of the top historical sites to visit in Hyderabad.',
            part3:'Char Minar -Char Minar is the signature attraction of the Hyderabad city.Located centrally, it is indeed a breathtaking site.',
            part4:'Qutub Shahi Tombs -This also represents the last resting ground of the rulers of the first dynasty of the city.',
            part5:'Ramoji Film City -People here love its Tollywood so much that it owns one of the biggest filming studios in the world.'  ,
            
            f1:'Hyderabadi Biryani',
            f2:' Hyderabadi Haleem',
            f3:'Nihari',
            f4:'Boti Kebab',
            f5:'Keema Samosa',

            imgsrc4:'https://tse2.mm.bing.net/th?id=OIP.SwhManx-H-jo_5nbVJkzQwHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse4.mm.bing.net/th?id=OIP.LrvUZ8dAZ6mZWAbKEHCkLAHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse4.mm.bing.net/th?id=OIP.r4XgHyYd5pdnqzW64Foa-AHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse1.mm.bing.net/th?id=OIP.o6y5CseHXOveznk_zoRqXQHaEK&pid=Api&P=0&h=180'
         },
         {
            id:4,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.xcLmrPULYOl_0KZr5NYQhwHaEX&pid=Api&P=0&h=180',
            name:"Patna",
            spec:"It was one of the nerve centers of First War of Independence",
            des: " About City",
            des1:"Patna, city, capital of Bihar state, northern India. It lies about 290 miles (470 km) northwest of Kolkata (Calcutta). Patna is one of the oldest cities in India. During the Mughal period it was known as Azimabad.Patna is a riverside city that extends along the south bank of the Ganges (Ganga) River for about 12 miles (19 km). West of the old city lies the section called Bankipur, and farther southwest is a spacious new capital area with wide roads, shady avenues, and new buildings. Prominent among Patna’s modern structures are the Government House, the Assembly Chambers, the Oriental Library, a medical college, and an engineering college. Patna’s historic monuments include the mosque of Ḥusayn Shah of Bengal (1499); the Sikh Temple associated with the 10th Guru, Gobind Singh; and the granary at Bankipur (1786), popularly called the Golghar. The city also has the University of Patna (1917) and the Patna Museum. The city is connected by road to Hajipur, just north of the Ganges, via the Mahatma Gandhi Bridge across the river.",
            imgsrc2:'https://tse3.mm.bing.net/th?id=OIP.gJTKFFiPxiHJYeT4mlpzSAHaEK&pid=Api&P=0&h=300',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.hcN3GL3ipE9uuXZrk5avUgHaFD&pid=Api&P=0&h=323',
            par1:"Tourist Places in Patna",
            part2:'Patna is home to a myriad of famed historical monuments, including Golghar, the Patna Museum, Jalan Museum and the Ruins of Pataliputra.',
            part3:'This ever growing city also boasts many spiritually significant places, including the Patna Sahib Gurudwara, Mahavir Mandir.',
            part4:'Other important tourist attractions in Patna include the Patna Market,Gandhi Ghat, the Patna Planetarium, and Buddha Smriti Udyan.',
            part5:'Bihar Museum -Bihar Museum is one of the famous attractions in Patna built to provide insights into the history of Bihar and inculcate a sense of respect and pride in the hearts of the current generation.',

            f1:'Litti Chokha',
            f2:'Naivedyam',
            f3:'Chandrakala/ Pedakiya',
            f4:'Chana Ghugni',
            f5:'Khaja',

            imgsrc4:'https://tse3.mm.bing.net/th?id=OIP.v3To6d_yQzbw1ClEzPPlQwHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse1.mm.bing.net/th?id=OIP.M_j3jUALGJ155Ul3Lo1mNgHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse1.mm.bing.net/th?id=OIP.3g8oClX0Zk5UXjalrodtgwHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse2.mm.bing.net/th?id=OIP.S2ZwxvCTId0bEZMbdPSKOwHaEK&pid=Api&P=0&h=180'

            
            
         },
         {
            id:5,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.C1bH6nhDixeoOvELYZW4XQHaFP&pid=Api&P=0&h=180',
            name:"Agra",
            spec:"The heritage of Agra city is linked with the Mughal dynasty",
            des: " About City",
            des1:"Agra, city, western Uttar Pradesh state, northern India. It lies in the Indo-Gangetic Plain on the Yamuna (Jumna) River about 125 miles (200 km) southeast of Delhi.There was an early reference to an “Agravana” in the ancient Sanskrit epic Mahabharata, and Ptolemy is said to have called the site “Agra.” The city was founded by Sultan Sikandar of the Lodī dynasty in the early 16th century to be the capital of the Delhi sultanate. Agra also served as the Mughal capital during some periods of that empire. In the late 18th century the city fell successively to the Jats, the Marathas, the Mughals, the ruler of Gwalior, and, finally, the British in 1803. It was the capital of Agra (later North-Western) province from 1833 to 1868 and was one of the main centres of the Indian Mutiny (1857–58).Agra is best known for the Taj Mahal (17th century), designated a UNESCO World Heritage site in 1983. A complex mausoleum, the Taj Mahal is often considered to be the world’s best example of Mughal architecture. ",
            imgsrc2:'https://tse1.mm.bing.net/th?id=OIP.VHmmBwUQqKofSCrLt8mF4AHaE6&pid=Api&P=0&h=320',
            imgsrc3:'https://tse4.mm.bing.net/th?id=OIP.j90AORqo-dyX8DWeKVDQTQHaFT&pid=Api&P=0&h=343',
            par1:"Tourist Places in Agra",
            part2:'The Taj Mahal-It is famous for Own beauty and one of the wonders of the world.',
            part3:'Agra Fort -Agra Fort is a 16th-century fortress of red sandstone built by the Mughal emperor Akbar.',
            part4:'Fatehpur Sikri -Fatehpur Sikri is a former city built by the Mughal Emperor Akbar in red sandstone, in honour of a Sufi saint.',
            part5:'Sheesh Mahal -Sheesh Mahal is one of the most fabulous structures inside the Agra Fort. Located on the western side of the Musamman Burj.',

            f1:'Agra Petha',
            f2:'Dalmoth',
            f3:'Dahi Bhalla',
            f4:'Mughlai Delicacies',
            f5:'Stuff Paratha',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.NeZsUpctoYRVAime5p_SjAHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse1.mm.bing.net/th?id=OIP.vunENeIbWfuf4sgd8fInMwHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse4.mm.bing.net/th?id=OIP.NH_zhixZovsl9hkCQDi24AHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse2.mm.bing.net/th?id=OIP.AdEZC3zJYeXL0h-US1FH5QHaEK&pid=Api&P=0&h=180'

            
         },
         {
            id:6,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.jqoGV_squLkcO2Gg5tomBQHaEs&pid=Api&P=0&h=180',
            name:"Jodhpur",
            spec:"It is popularly known as the Blue-City among people of Rajasthan and all over India",
            des: " About City",
            des1:"Jodhpur is the second-largest city in the Indian state of Rajasthan and officially the second metropolitan city of the state. Jodhpur was historically the capital of the Kingdom of Marwar, which is now part of Rajasthan. Jodhpur is a popular tourist destination, featuring many palaces, forts, and temples, set in the stark landscape of the Thar Desert. It is popularly known as the Blue-City among people of Rajasthan and all over India.The old city circles the Mehrangarh Fort and is bounded by a wall with several gates.The city has expanded greatly outside the wall, though over the past several decades. Jodhpur lies near the geographic centre of the Rajasthan state, which makes it a convenient base for travel in a region much frequented by tourists.The name 'Jodhpur' is derived from its founder, Rao Jodha, who established the city in 1459. 'Jodh' represents Rao Jodha, and 'pur' means city or town in Sanskrit, making it the 'City of Jodha'.",
            imgsrc2:'https://tse4.mm.bing.net/th?id=OIP.kW2hTR9gBBi2-R4Tot0fswHaE0&pid=Api&P=0&h=310',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.JEJ9xXTd8BURqB4M0IxmEAHaE0&pid=Api&P=0&h=310',
            par1:"Tourist Places in Jodhpur",
            part2:'The Mehrangarh Fort -It is the most significant and majestic landmark in Jodhpur and one of the largest forts in India.',
            part3:'Umaid Bhawan Palace -The Umaid Bhavan Palace is the largest private residence in the world.',
            part4:'Ghanta Ghar -Ghanta Ghar popularly known as the Clock Tower and also a striking landmark in the city.',
            part5:'Kaylana Lake -It is one of the most famous and visited artificial lakes in Jodhpur.This lake was constructed by Pratap Singh in 1872.',

            f1:'Dal Baati Choorma',
            f2:'Mawa ki Kachori',
            f3:'Bajre ki Khichdi',
            f4:'Mirchi Bada',
            f5:'Makhaniya Lassi',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.RhlGsckZqLfv9MiFyvcViwHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse4.mm.bing.net/th?id=OIP.3iyvNT9xkzliYNCuXVg0eAHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse3.mm.bing.net/th?id=OIP.2pOiXpfEbR0xe4LkcfIHcgHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse3.mm.bing.net/th?id=OIP._PeavpxF2K_pgSui2vfnigHaEK&pid=Api&P=0&h=180'


         },
         {
            id:7,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.G16MajQqJ_OxVckpoXuELAHaEK&pid=Api&P=0&h=180',
            name:"Kolkata",
            spec:"City of Joy,City of Museums and also known as Cultural Capital of India ",
            des: " About City",
            des1:"Kolkata, city, capital of West Bengal state, and former capital (1772–1911) of British India. It is one of India’s largest cities and one of its major ports. The city is centred on the east bank of the Hugli (Hooghly) River, once the main channel of the Ganges (Ganga) River, about 96 miles (154 km) upstream from the head of the Bay of Bengal; there the port city developed as a point of transshipment from water to land and from river to sea. A city of commerce, transport, and manufacture, Kolkata is the dominant urban centre of eastern India.The city’s former name, Calcutta, is an Anglicized version of the Bengali name Kalikata. According to some, Kalikata is derived from the Bengali word Kalikshetra, meaning “Ground of (the goddess) Kali.” Some say the city’s name derives from the location of its original settlement on the bank of a canal (khal). A third opinion traces it to the Bengali words for lime (calcium oxide; kali) and burnt shell (kata), since the area was noted for the manufacture of shell lime. In 2001 the government of West Bengal officially changed the name of the city to Kolkata.",
            imgsrc2:'https://tse3.mm.bing.net/th?id=OIP.cR2vqoFIVe8EHB6B94qu4QHaD_&pid=Api&P=0&h=300',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP._MLYw3MkSH9mYxxTgUH0cQHaE8&pid=Api&P=0&h=320',
            par1:"Tourist Places in Kolkata",
            part2:'Indian Museum -India’s oldest and the largest museum. It has a great collection of artifacts from different eras.',
            part3:'Victoria Memorial Hall -This marble building was built in the memory of Queen Victoria after hear death in 1901.',
            part4:'Park Street -A very famous street, known for its restaurants, pubs, and stores.',
            part5:'Mother House -Established by Mother Teresa, this is one of the city’s most famous pilgrimages.',

            f1:'Roshogullas – Sweet Tooth Love',
            f2:'Macher Jhol – Exclusive Fish Curry',
            f3:'Kolkata Biryani – Finely Flavoured Rice',
            f4:'Kosha Mangsho – Special Mutton Curry',
            f5:'Jhalmuri – Healthy Munchings',

            imgsrc4:'https://tse2.mm.bing.net/th?id=OIP.ppexz9X4_hkIryI8i2EVtQHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse2.mm.bing.net/th?id=OIP.q4wRR4lJShJpb9HLnoFLYAAAAA&pid=Api&P=0&h=180',
            imgsrc6:'https://tse2.mm.bing.net/th?id=OIP.rwBzFqwh-p9g7fjthzJTHgHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse3.explicit.bing.net/th?id=OIP.tSt2qUZsbNQp6KlfeVmKDQHaEJ&pid=Api&P=0&h=180',
            
         },
         {
            id:8,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.8-wpRYyHfXk3-WTpFDIiZAHaEK&pid=Api&P=0&h=180',
            name:"Bhubaneswar",
            spec:"Bhubaneswar means lord of the world. Many temples are present in this city. So, it is also called Temple city of India",
            des: " About City",
            des1:"Bhubaneshwar, city, capital of Odisha (Orissa) state, eastern India. It is situated in the eastern part of the state on the Kuakhai River, a constituent stream of the Mahanandi River delta.Bhubaneshwar’s history from the 3rd century BCE is represented in the nearby Dhauligiri rock edict of the Mauryan emperor Ashoka at the site of his famous conquest of the Kalingas. Between the 5th and 10th centuries CE it was the provincial capital of many Hindu dynasties and a centre of devotion to the god Shiva. Its many temples (including the Mukteshwara and Parashurameshwar), displaying every phase of Orissan architecture, were built between the 7th and 14th centuries. The city consists of the old quarter, containing about 30 ancient temples, and a planned township built after 1948, when the capital was moved there from Cuttack. In the latter are the state government buildings, the state museum, Utkal University (established 1944 in Cuttack), and the Orissa University of Agriculture and Technology. Indira Gandhi Memorial Park lies at the city’s centre.",
            imgsrc2:'https://tse4.mm.bing.net/th?id=OIP.CkvovvXKU2gFktNmFcgsGAHaE8&pid=Api&P=0&h=320',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.hhPmXdTozd7-Fb4JucZlyQHaE-&pid=Api&P=0&h=322',
            par1:"Tourist Places in Bhubaneswar",
            part2:'Udayagiri And Khandagiri -These caves, which date back to the first century, provide visible evidence and insight into the Jain aesthetics.',
            part3:'Lingaraj Temple -The Lingaraj temple happens to be one of the largest temples in the city.',
            part4:'Ramachandi Beach -It is named after Goddess Ramchandi, the main deity in Konark and also known as the consort of Sun God.',
            part5:'Shanti Stupa -It is the architectural excellence of this structure that makes it one of the best Places to visit in Bhubaneshwar.'  ,

            f1:'Dahi Bara Aloo Dum',
            f2:'Bara Ghuguni',
            f3:'Chakuli Mangsa Tarkari',
            f4:'Rasabali',
            f5:'Chenna Poda',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.zCBEnjQLEoaFhTiO2ejwQgHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse2.mm.bing.net/th?id=OIP.zOpt4yRaG3hUnT2xSgTybgHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse3.mm.bing.net/th?id=OIP.5Ln3tSCcS9ONH9G6pQ2ixwHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse4.mm.bing.net/th?id=OIP.knYeWsk4lfs4_8-ce7FK0wHaEK&pid=Api&P=0&h=180'

            
         },
         {
            id:9,
            imgsrc:'https://tse4.mm.bing.net/th?id=OIP.7WqKAAwDiDBB6rEL3mdciAHaEE&pid=Api&P=0&h=180',
            name:"Leh",
            spec:"Leh is known for its stunning scenic locales, Buddhist temples and pristine environment",
            des: " About City",
            des1:"Leh is the joint capital and largest city of the union territory of Ladakh in India. Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh, the seat of which was in the Leh Palace, the former residence of the royal family of Ladakh, built in the same style and about the same time as the Potala Palace in Tibet. The town is located in the valley of the upper Indus River at an elevation of 11,550 feet (3,520 metres), surrounded by the towering peaks of the Ladakh Range (a southeastern extension of the Karakoram Range).Leh is in one of the most remote areas of the Indian-administered portion of the Kashmir region and is one of the highest permanently inhabited towns in the world. It was built as a terminus for caravans from Asia. Today Leh is reached only by one main highway, the Treaty Road, which connects it to Srinagar to the west and to Dêmqog, Tibet (in a Chinese-administered part of Kashmir), to the southeast. The economy relies mainly on trade, but fruit growing and other agriculture are also important. An old palace of the kings of Ladakh and the Sankar monastery overlook the town.",
            imgsrc2:'https://tse4.mm.bing.net/th?id=OIP.Tx76ZpVUf7NwYmrlI-mIQAHaEK&pid=Api&P=0&h=300',
            imgsrc3:'https://tse1.mm.bing.net/th?id=OIP.hx4_-ffrq_Xekh-v4d5X4QHaE7&pid=Api&P=0&h=340',
            par1:"Tourist Places in Leh",
            part2:'Pangong Lake -It is one of the highest altitude lakes in India, located at an altitude of 4350 m above sea level.',
            part3:'Nubra Valley -Nubra Valley is a scenic and cultural destination in Ladakh, surrounded by snow-clad Himalayas and sandwiched between Tibet and Kashmir.',
            part4:'Hall of Fame Museum -Hall of Fame is a museum constructed by the Indian Army in memory of the brave Indian soldiers who laid down their lives defending the motherland in the Indo-Pak wars.',
            part5:'Chantang Wildlife Sanctuary -The Changthang Wildlife Sanctuary is home to many rare species of flora and fauna, which are well cared for in this wildlife sanctuary.',

            f1:'Momos',
            f2:'Thukpa',
            f3:'Gur Gur Chai',
            f4:'Skyu',
            f5:'Paba and Tangtur',

            imgsrc4:'https://tse1.mm.bing.net/th?id=OIP.SoB8jyncUVUlWIEls-1-CQHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse3.mm.bing.net/th?id=OIP.nPA0g53QUfHaQskkDqEBkAHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse4.mm.bing.net/th?id=OIP.lfzEUE1D8FndyIWg5Ib1PwHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse3.mm.bing.net/th?id=OIP.NlEixgeMpiNg9isNpmsLHwHaEK&pid=Api&P=0&h=180'

            
         },
         {
            id:10,
            imgsrc:'https://tse2.mm.bing.net/th?id=OIP.Rq_a2fKdjYxQ8q4THkUxhwHaEW&pid=Api&P=0&h=180',
            name:"Lucknow",
            spec:"Also known as the City of Tehzeeb and the City of Nawabs, Lucknow is the land of close-knit culture and long-held traditions",
            des:"About City",
            des1:"Lucknow, city, capital of Uttar Pradesh state, northern India. It is located roughly in the centre of the state, on the Gomati River about 45 miles (72 km) northeast of Kanpur.Lucknow became important in 1528, when it was captured by Bābur, the first Mughal ruler of India. Under Akbar, his grandson, the city became part of Oudh province. Āṣaf al-Dawlah, who became nawab of Oudh (now Ayodhya) in 1775, transferred his capital from Faizabad to Lucknow. When the Indian Mutiny broke out in 1857, Sir Henry Lawrence, the British commissioner, and the European inhabitants of Lucknow were besieged for several months until rescued by British troops. The British then abandoned the city until the following year, when they regained control over India.Its population, which has grown dramatically since the late 20th century, surpassed that of Kanpur in the early 21st century to become the most-populous city in Uttar Pradesh.The city is a marketplace for agricultural products (mangoes, melons, and various grains are grown locally), and its industries include food processing, manufacturing, handicrafts, and railroad shops. ",
            imgsrc2:'https://tse1.mm.bing.net/th?id=OIP.xQFPQc1nGqgZwBzeUoUtSwAAAA&pid=Api&P=0&h=310',
            imgsrc3:'https://tse4.mm.bing.net/th?id=OIP.DjCmZoRuFiXgG_SVMV2jmgEyDM&pid=Api&P=0&h=320',
            par1:"Tourist Places in Lucknow",
            part2:'Bara Imambara -The British Residency, which stands witness to the Revolt of 1857 must feature in the list of the most important Places to visit in Lucknow.',
            part3:'Ambedkar Park -The park has museums and galleries commemorating the life of Ambedkar and other great freedom fighters of India.',
            part4:'Lucknow Zoological Garden -The zoo covers nearly 71.9 acres of land and houses more than nine hundred species of animals, birds and reptiles.',
            part5:'Rumi Darwaza -It is a gateway between the Bara Imambara and the Chota Imambara. It is one of the few remaining examples of Awadhi architecture featuring a huge gateway that is sixty feet tall.',

            f1:'Tunday Kababi',
            f2:'Chappan Bhog ki Mithaiyan',
            f3:'Basket Chaat',
            f4:'Sheermal',
            f5:'Malai Makhan',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.tXe6J0EiKQHKG7waflxmiwHaEJ&pid=Api&P=0&h=180',
            imgsrc5:'https://tse3.mm.bing.net/th?id=OIP.OhUuvnoMYCaDbMfU5LbFgQHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse4.mm.bing.net/th?id=OIP.7ljvZbjLgICvv7ZdCceb-QHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse2.mm.bing.net/th?id=OIP.F8nCF35a2sSI3R6wluiM5wHaEK&pid=Api&P=0&h=180'

            

         },
         {
            id:11,
            imgsrc:'https://tse1.mm.bing.net/th?id=OIP.yTUvsiLy9N_wuNeqJ2lPAwHaEI&pid=Api&P=0&h=180',
            name:"Bangalore",
            spec:" Bangalore is known as the City of Gardens due to its wide streets, public parks, and large green spaces",
            des:"About City",
            des1:"Bengaluru, city, capital (since 1830) of Karnataka state, southern India. Bengaluru is one of India’s largest cities. It lies 3,113 feet (949 metres) above sea level, atop an east-west ridge in the Karnataka Plateau in the southeastern part of the state, at a cultural meeting point of the Kannada-, Telugu-, and Tamil-speaking peoples. The city’s nucleus was a settlement around a mud fort, built in 1537 by a local chief, Kempe Gowda. The fort was reconstructed of stone in 1761. Bangalore was the headquarters of the British administration from 1831 to 1881, when the raja was restored. However, Britain retained an administrative and military presence in the city until Indian independence in 1947. Bangalore subsequently became the capital of the new state of Mysore and remained the capital during the reorganization of states in 1956; Mysore was renamed Karnataka in 1973.Employment opportunities were created for tens of thousands of people in southern India, and Bangalore grew to become one of the largest cities in the country. For several decades the city’s economic growth was based largely on manufacturing industries.",
            imgsrc2:'https://tse1.mm.bing.net/th?id=OIP.j2DhlLw0Nr0VBRzGQMS6KwHaEK&pid=Api&P=0&h=300',
            imgsrc3:'https://tse2.mm.bing.net/th?id=OIP.5IDmHujinWz9R4vc6igBpAHaED&pid=Api&P=0&h=300',
            par1:"Tourist Places in Bangalore",
            part2:'Nandi Hills -Nandi Hills also called Nandi Durga is arguably the most popular weekend destination for the city crowd of Bengaluru.',
            part3:'Bannerghatta National Park -Bannerghatta National Park is a sanctuary for flora and fauna in Bangalore, with a zoo, a butterfly park, a crocodile farm and more.',
            part4:'Lal Bagh Botanical Garden -Centre for botanical artwork and conservation of plants, Lalbagh is one of the most scenic gardens in the state.',
            part5:'Kunti Betta -Kunti Betta Trek is a 2882 feet high slope, involving two hillocks in the Western Ghats of Bangalore.',

            f1:'Rava Idli',
            f2:'Obbattu',
            f3:'Shavige Bath',
            f4:'Chow Chow Bath',
            f5:'Ragi Mudde',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.ffHYN9lWQzdLjE1huDvkMwHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse1.mm.bing.net/th?id=OIP.3Ix7-yN_PykYMW4N9cTqVQHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse4.mm.bing.net/th?id=OIP.R8fKx-jJ8gGlFsIIQu4ldwHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse2.mm.bing.net/th?id=OIP.D53Q6KuD_LSsy8QKTVkIVwHaEK&pid=Api&P=0&h=180'

            
         },
         {
            id:12,
            imgsrc:'https://tse3.mm.bing.net/th?id=OIP.ai5dcH1JarBpOZncFh26TAHaFb&pid=Api&P=0&h=180',
            name:"Gangtok",
            spec:"Gangtok is commonly known as the 'Gateway to Sikkim', is one of the most popular hill stations in India ",
            des:"About City",
            des1:"Gangtok, city, capital of Sikkim state, northeastern India. It lies on a tributary of the Tista River in the southeast-central part of the state at an elevation of about 5,600 feet (1,700 metres).The city’s name means “Top of the Hill.” Gangtok rises over slopes extensively terraced in corn (maize). It was the governmental seat of the kingdom of Sikkim until the monarchy was abolished (1975) and Sikkim was annexed by India (1976). The city’s population includes Nepalese, Tibetans, Lepchas, and Indians. In the early 21st century a number of communities surrounding Gangtok were amalgamated administratively under the Gangtok Municipal Corporation, which significantly increased the area of the city and its population.Gangtok serves as a market centre for corn, rice, pulses, and oranges. It was an important point on the India-Tibet trade route via Nathu Pass (Nathu-la), 13 miles (21 km) northeast, until the border with Tibet (China) was closed in 1962. The pass was reopened for trade, however, in 2006. From Gangtok the North Sikkim Highway (1962) reaches the Tibetan border areas via Lachung and Lachen, and the National Highway runs southwest to India.",
            imgsrc2:'https://tse1.mm.bing.net/th?id=OIP.p9j6Nn6vnP27HJJG3Bgk3AHaEj&pid=Api&P=0&h=300',
            imgsrc3:'https://tse1.mm.bing.net/th?id=OIP.9T8ItL8rq9zPI3GgX5IE2AHaE8&pid=Api&P=0&h=320',
            par1:"Tourist Places in Gangtok",
            part2:'Tsomgo Lake -Located on the eastern side, Tsomgo Lake is one of the most frequented places to visit in Gangtok.',
            part3:'Namgyal Institute of Tibetology -This one of its kind institute, also the third in the world, is renowned for housing the largest collection of Tibetan works outside Tibet.',
            part4:'Seven Sister waterfall -Get drowned in the thundering sounds as a set of seven waterfalls lunge their way down the mountain sides.',
            part5:'Phodong Monastery -The edifice was built in the 18th century and is one of the six most important monasteries in Sikkim.',

            f1:'Sha Phaley ',
            f2:'Gundruk',
            f3:'Sel Roti',
            f4:'Thenthuk',
            f5:'Chhurpi Ningro Curry',

            imgsrc4:'https://tse4.mm.bing.net/th?id=OIP.lrmOlD0o2tIKC2cFY5ECdAHaEK&pid=Api&P=0&h=180',
            imgsrc5:'https://tse1.explicit.bing.net/th?id=OIP.k7ceWfPohRm_12hSPumAmwHaEK&pid=Api&P=0&h=180',
            imgsrc6:'https://tse1.mm.bing.net/th?id=OIP.eUBU_trVuX2yNqc1NLIGEgHaEK&pid=Api&P=0&h=180',
            imgsrc7:'https://tse1.mm.bing.net/th?id=OIP.E5ofI1hg6g4LFBX3u_Z1-wHaEK&pid=Api&P=0&h=180'

            
         },
       

    ];

    const{cityId} =useParams();
    console.log(cityId)

    const[filtcity,setFiltcity]=useState({});

    useEffect(() =>{
        const filtercity=city.find(cty =>cty.id==cityId);
        
        setFiltcity(filtercity);
    },[]);

    return(
 <div className="container-fluid">
    <div className="row">
        <div className="col-sm px-5 py-5" style={{display:'flex',alignItems:'center',justifyContent:'center' }}>
           <img src={filtcity.imgsrc} alt="img2" style={{height:280}}  className="img-fluid"></img>
            </div> 
              </div>

         <div className="row">
            <div className="col-sm" style={{display:'flex',alignItems:'center',justifyContent:'center' }}>
                <h3>{filtcity.name}</h3>
            </div>
         </div>

         <div className="row">
            <div className="col-sm px-5 py-2"> 
                <h6>{filtcity.des1}</h6>
            </div>
         </div>

         <div className="row">
            <diV className='col-sm-6 py-5'>
               <diV className='row '>
               <img src={filtcity.imgsrc2}   alt="img3" className="img-fluid" style={{height:'300px'}}></img>
               </diV>
               <diV className='row'>
               <img src={filtcity.imgsrc3}  alt="img4" className="img-fluid" style={{height:'300px'}}></img>
               </diV>


            </diV>
            <div className="col-sm-6 py-5">
                <h3 style={{display:'flex',justifyItems:'center',justifyContent:'center',color:'blueviolet'}}>{filtcity.par1}</h3>
                
                    <ul className="unord px-2 py-4">
                       <li className="l1 px-2 py-4">{filtcity.part2}</li>
                       <li className="l1 px-2 py-4">{filtcity.part3}</li>
                       <li className="l1 px-2 py-4">{filtcity.part4}</li>
                       <li className="l1 px-2 py-4">{filtcity.part5}</li>
                    </ul>

            </div>
         </div>

         <div className="row">
            <div className="col-sm-6 px-4 py-4" >
               <h3 style={{display:'flex',justifyItems:'center',justifyContent:'center'}}>Some Famous Foods</h3>
              <ul>
               <li className="l2 px-2 py-2">{filtcity.f1}</li>
               <li className="l2 px-2 py-2">{filtcity.f2}</li>
               <li className="l2 px-2 py-2">{filtcity.f3}</li>
               <li className="l2 px-2 py-2">{filtcity.f4}</li>
               <li className="l2 px-2 py-2">{filtcity.f5}</li>
              </ul>
            </div>

 
            <diV className="col-sm-6 px-2 py-4">

             <diV className="row px-2 py-2">

             <div id="demo" className="carousel slide" data-bs-ride="carousel">

  
<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={filtcity.imgsrc4}   alt="img4" style={{width:600}} className="img-fluid d-block"  />
  </div>
  <div className="carousel-item">
    <img src={filtcity.imgsrc5} alt="img5" style={{width:600}} className="img-fluid d-block" />
  </div>
  <div className="carousel-item">
    <img src={filtcity.imgsrc6} alt="img6" style={{width:600}} className="img-fluid d-block" />
  </div>
  <div className="carousel-item">
    <img src={filtcity.imgsrc7} alt="img6" style={{width:600}} className="img-fluid d-block" />
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

                 

               </diV>    
           


            </diV>

         </div>

 </div>
    );

}

export default Details;