import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from "lucide-react"

export default function ProphetMuhammadModule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">The Prophet Muhammad ﷺ</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Module Content</TabsTrigger>
              <TabsTrigger value="resources">Additional Resources</TabsTrigger>
              <TabsTrigger value="notes">My Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="prose prose-emerald max-w-none">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h2>The Final Messenger of God</h2>
                <p>
                  Muhammad ibn Abdullah ﷺ was born in the city of Makkah in the year 570 CE, the year known as the Year
                  of the Elephant. He was from the noble clan of Banu Hashim, a branch of the prestigious Quraysh tribe
                  who were the custodians of the Ka'bah.
                </p>

                <h3>Early Life</h3>
                <p>
                  Muhammad ﷺ was born an orphan, as his father Abdullah died before his birth. His mother Aminah died
                  when he was only six years old, leaving him in the care of his grandfather Abdul Muttalib. When his
                  grandfather died two years later, his uncle Abu Talib took responsibility for him.
                </p>

                <p>
                  Growing up in Makkah, Muhammad ﷺ was known for his exceptional character, honesty, and
                  trustworthiness. The people of Makkah called him "Al-Amin" (The Trustworthy) and "As-Sadiq" (The
                  Truthful) due to his impeccable integrity. He worked as a shepherd in his youth and later became a
                  merchant, managing trade caravans for a wealthy widow named Khadijah.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Ancient Makkah with the Ka'bah at its center"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Ancient Makkah with the Ka'bah at its center
                  </p>
                </div>

                <p>
                  At the age of 25, Muhammad ﷺ married Khadijah, who was 40 years old at the time. Their marriage was
                  one of mutual love, respect, and support. Khadijah was the first to believe in his prophethood and
                  supported him throughout the difficult early years of his mission.
                </p>

                <h3>The Reception of Revelation</h3>
                <p>
                  Muhammad ﷺ was deeply troubled by the moral and spiritual decline of his society. He would often
                  retreat to a cave called Hira on the Mountain of Light (Jabal an-Nur) near Makkah for contemplation
                  and spiritual reflection.
                </p>

                <p>
                  In 610 CE, when Muhammad ﷺ was 40 years old, the Angel Gabriel appeared to him in the Cave of Hira
                  during one of his retreats. The angel commanded him to "Read!" (Iqra). Muhammad ﷺ, who was unlettered,
                  replied that he could not read. The angel embraced him tightly and repeated the command three times.
                  Then the angel recited the first verses of what would later be compiled as Surah Al-Alaq (Chapter 96)
                  of the Quran:
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    "Read! In the name of your Lord who created - Created man from a clinging substance. Read! And your
                    Lord is the Most Generous - Who taught by the pen - Taught man that which he knew not." [Quran
                    96:1-5]
                  </p>
                </div>

                <p>
                  Terrified by this extraordinary experience, Muhammad ﷺ rushed home to his wife Khadijah, trembling and
                  asking to be covered. He related the experience to her, expressing his fear. Khadijah comforted him,
                  saying: "Never! By Allah, Allah will never disgrace you. You keep good relations with your kith and
                  kin, help the poor and the destitute, serve your guests generously, and assist those afflicted by
                  calamity."
                </p>

                <p>
                  Khadijah then took Muhammad ﷺ to her cousin Waraqah ibn Nawfal, a learned Christian scholar who
                  confirmed that what Muhammad ﷺ had experienced was the same revelation that had come to Moses and
                  other prophets, and that his people would drive him out of Makkah.
                </p>

                <h3>The Makkan Period (610-622 CE)</h3>
                <p>
                  After the initial revelation, Muhammad ﷺ began to receive more revelations, but there was a brief
                  pause (fatrah) before they resumed regularly. He was commanded to begin preaching first to his close
                  family and friends, and then to proclaim the message publicly.
                </p>

                <p>
                  The core of his message was simple: there is only One God (Allah) who alone deserves to be worshipped,
                  and Muhammad ﷺ is His messenger. He called people to abandon idol worship, treat others with justice
                  and kindness, care for the poor and vulnerable, and prepare for the Day of Judgment.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Early Muslims gathering secretly to learn from the Prophet"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Early Muslims gathering secretly to learn from the Prophet
                  </p>
                </div>

                <p>
                  The first people to accept Islam were his wife Khadijah, his young cousin Ali ibn Abi Talib, his close
                  friend Abu Bakr, and his freed slave Zayd ibn Harithah. Gradually, more people embraced Islam,
                  particularly from among the youth, the poor, and the marginalized.
                </p>

                <p>
                  As the number of Muslims grew, the Quraysh leaders became increasingly hostile. They saw Muhammad's ﷺ
                  message as a threat to their religious, social, economic, and political power. They began to persecute
                  the Muslims, subjecting them to economic boycott, social ostracism, verbal abuse, and physical
                  torture.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    The persecution became so severe that the Prophet Muhammad ﷺ advised a group of Muslims to migrate
                    to Abyssinia (modern-day Ethiopia), where they found refuge under the just Christian king, Negus
                    (Al-Najashi), who later embraced Islam.
                  </p>
                </div>

                <p>
                  In 619 CE, Muhammad ﷺ suffered two great personal losses: the death of his beloved wife Khadijah and
                  his protective uncle Abu Talib. This year became known as the "Year of Sorrow." With the loss of Abu
                  Talib's protection, the persecution intensified.
                </p>

                <p>
                  In 620 CE, Muhammad ﷺ experienced the miraculous night journey and ascension (Isra and Mi'raj), during
                  which he traveled from Makkah to Jerusalem and then ascended through the heavens, meeting earlier
                  prophets and receiving the commandment of the five daily prayers.
                </p>

                <h3>The Medinan Period (622-632 CE)</h3>
                <p>
                  As the persecution in Makkah intensified, Muhammad ﷺ sought support from other tribes. A delegation
                  from the city of Yathrib (later renamed Madinah) invited him to come as their leader to resolve their
                  tribal conflicts. After securing pledges of allegiance from the people of Yathrib (the Pledges of
                  Aqabah), Muhammad ﷺ instructed his followers to migrate to Yathrib.
                </p>

                <p>
                  In 622 CE, when the Quraysh plotted to assassinate him, Muhammad ﷺ and his closest companion Abu Bakr
                  migrated to Yathrib in an event known as the Hijrah (migration), which marks the beginning of the
                  Islamic calendar. Upon arriving in Madinah, Muhammad ﷺ established the first Islamic community
                  (ummah).
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="The Prophet's Mosque in Madinah"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">The Prophet's Mosque in Madinah</p>
                </div>

                <p>
                  In Madinah, Muhammad ﷺ drafted the Constitution of Madinah, a groundbreaking document that established
                  rights and responsibilities for all citizens, including non-Muslims. He built the first mosque,
                  established brotherhood between the Emigrants (Muhajirun) from Makkah and the Helpers (Ansar) of
                  Madinah, and laid the foundations for an Islamic society.
                </p>

                <p>
                  The Quraysh of Makkah continued their hostility, leading to several battles, including the Battle of
                  Badr (624 CE), the Battle of Uhud (625 CE), and the Battle of the Trench (627 CE). In 628 CE, Muhammad
                  ﷺ signed the Treaty of Hudaybiyyah with the Quraysh, which provided a period of peace that allowed
                  Islam to spread.
                </p>

                <p>
                  In 630 CE, when the Quraysh violated the treaty, Muhammad ﷺ led an army of 10,000 Muslims to Makkah.
                  The city surrendered without bloodshed, and Muhammad ﷺ declared a general amnesty for his former
                  persecutors. He cleansed the Ka'bah of idols, restoring it to its original purpose as a house of
                  monotheistic worship as built by Prophets Ibrahim and Ismail.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    Upon the conquest of Makkah, the Prophet Muhammad ﷺ recited: "Truth has come, and falsehood has
                    departed. Indeed, falsehood is bound to depart." [Quran 17:81]
                  </p>
                </div>

                <h3>The Establishment of the First Islamic Realm</h3>
                <p>
                  Following the conquest of Makkah, most of the Arabian Peninsula embraced Islam. Muhammad ﷺ sent
                  letters to the rulers of neighboring empires, including the Byzantine Emperor Heraclius and the
                  Persian Emperor Khosrow II, inviting them to Islam.
                </p>

                <p>
                  In 632 CE, Muhammad ﷺ performed his first and only Hajj, known as the Farewell Pilgrimage. During this
                  pilgrimage, he delivered his famous Farewell Sermon, emphasizing the equality of all humans, the
                  sanctity of life and property, women's rights, and the completion of his mission.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    During the Farewell Sermon, the verse was revealed: "This day I have perfected for you your religion
                    and completed My favor upon you and have approved for you Islam as religion." [Quran 5:3]
                  </p>
                </div>

                <p>
                  Shortly after returning to Madinah, Muhammad ﷺ fell ill with a fever. Despite his illness, he
                  continued to lead prayers until he became too weak. He then appointed Abu Bakr to lead the prayers, an
                  indication of his successor. On the 12th of Rabi al-Awwal in the 11th year of Hijrah (June 8, 632 CE),
                  Muhammad ﷺ passed away in the apartment of his wife Aisha, with his head resting on her lap.
                </p>

                <p>
                  The news of his death caused immense grief among the Muslims. Abu Bakr addressed the distraught
                  community with the famous words: "Whoever worshipped Muhammad, then Muhammad has died. But whoever
                  worshipped Allah, then Allah is Ever-Living and shall never die." He then recited the verse: "Muhammad
                  is not but a messenger. [Other] messengers have passed on before him. So if he was to die or be
                  killed, would you turn back on your heels [to unbelief]?" [Quran 3:144]
                </p>

                <p>
                  Muhammad ﷺ was buried in the same spot where he died, which is now enclosed within the Prophet's
                  Mosque in Madinah. His legacy continues through the Quran, his Sunnah (practices), and the global
                  community of Muslims who strive to follow his teachings.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Timeline of the Prophet's Life</h4>
                        <p className="text-sm text-muted-foreground">
                          Interactive timeline showing key events in the life of Prophet Muhammad ﷺ.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Map of the Prophet's Journeys</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed map showing the Hijrah route and other significant journeys.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">The Character of the Prophet</h4>
                        <p className="text-sm text-muted-foreground">
                          Video lecture on the exemplary character and moral teachings of Prophet Muhammad ﷺ.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">My Notes</h3>
                  <textarea
                    className="w-full h-64 p-3 border rounded-md"
                    placeholder="Add your notes about this module here..."
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <Button>Save Notes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-6">
            <Link href="/modules/world-advent-islam">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Previous Module
              </Button>
            </Link>
            <Link href="/modules/abu-bakr-truthful">
              <Button className="gap-2">
                Next Module <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Module Progress</h3>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>

              <h4 className="font-medium text-sm mb-2">Module Sections</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Early Life</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Reception of Revelation</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Makkan Period</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Medinan Period</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">The Establishment of the First Islamic Realm</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/assessments/prophet-muhammad">
                  <Button className="w-full">Take Module Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="text-sm">• The Prophet's early life and character</li>
                <li className="text-sm">• The first revelation and beginning of prophethood</li>
                <li className="text-sm">• Persecution in Makkah and early followers</li>
                <li className="text-sm">• The Hijrah to Madinah</li>
                <li className="text-sm">• Establishment of the first Islamic society</li>
                <li className="text-sm">• Major battles and the Treaty of Hudaybiyyah</li>
                <li className="text-sm">• The conquest of Makkah</li>
                <li className="text-sm">• The Farewell Pilgrimage and final sermon</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

