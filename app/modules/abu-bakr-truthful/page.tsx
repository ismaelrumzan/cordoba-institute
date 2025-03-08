import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from "lucide-react"

export default function AbuBakrTruthfulModule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Abu Bakr The Truthful</h1>
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
                <h2>The First Successor to the Prophet</h2>
                <p>
                  Abu Bakr as-Siddiq (The Truthful) was the closest companion and the first adult male convert to Islam
                  outside the Prophet's family. His unwavering faith, wisdom, and dedication to the Prophet Muhammad ﷺ
                  and the Muslim community made him the natural successor to lead the Muslims after the Prophet's death.
                </p>

                <h3>Early Life and Conversion to Islam</h3>
                <p>
                  Abu Bakr was born in Makkah around 573 CE to a respected family of the Quraysh tribe. His birth name
                  was Abdullah ibn Abi Quhafah, but he was known as Abu Bakr (Father of the Young Camel) due to his
                  fondness for camels. Before Islam, he was a successful merchant known for his honesty, kindness, and
                  excellent character.
                </p>

                <p>
                  Abu Bakr and Muhammad ﷺ were close friends even before prophethood. When Muhammad ﷺ received his first
                  revelation and shared it with Abu Bakr, he immediately accepted Islam without hesitation. This
                  immediate acceptance earned him the title "as-Siddiq" (The Truthful or The Sincere) from the Prophet
                  himself.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Ancient Makkah during the time of Abu Bakr"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Ancient Makkah during the time of Abu Bakr
                  </p>
                </div>

                <p>
                  Abu Bakr's conversion to Islam was significant as he was a respected figure in Makkan society. He
                  immediately began inviting others to Islam, and through his efforts, many prominent companions
                  accepted Islam, including Uthman ibn Affan, Zubayr ibn al-Awwam, Abdur-Rahman ibn Awf, Sa'd ibn Abi
                  Waqqas, and Talhah ibn Ubaydullah.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    The Prophet Muhammad ﷺ once said: "If I were to take a close friend (khalil) other than my Lord, I
                    would have taken Abu Bakr as my close friend (khalil). However, he is my brother and companion."
                    This shows the special bond between them.
                  </p>
                </div>

                <h3>Support for the Prophet and Islam</h3>
                <p>
                  Abu Bakr was the Prophet's most steadfast supporter throughout the difficult early years of Islam in
                  Makkah. When Muslims faced persecution, Abu Bakr used his wealth to purchase and free Muslim slaves
                  who were being tortured for their faith, including Bilal ibn Rabah, who later became the first muezzin
                  (caller to prayer) in Islam.
                </p>

                <p>
                  When the Prophet Muhammad ﷺ spoke about his night journey (Isra) and ascension to heaven (Mi'raj),
                  many people were skeptical. However, Abu Bakr immediately believed the Prophet without questioning,
                  further cementing his title "as-Siddiq."
                </p>

                <p>
                  During the migration (Hijrah) to Madinah in 622 CE, Abu Bakr was the Prophet's sole companion on the
                  dangerous journey. They hid in the Cave of Thawr for three days while the Quraysh were searching for
                  them. When Abu Bakr expressed concern about their safety, the Prophet reassured him: "Do not grieve;
                  indeed Allah is with us." [Quran 9:40]
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="The Cave of Thawr where the Prophet and Abu Bakr hid during the Hijrah"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    The Cave of Thawr where the Prophet and Abu Bakr hid during the Hijrah
                  </p>
                </div>

                <p>
                  In Madinah, Abu Bakr continued to be the Prophet's closest advisor and supporter. He participated in
                  all the major battles alongside the Prophet, including Badr, Uhud, and the Trench. He also gave his
                  daughter Aisha in marriage to the Prophet, further strengthening their bond.
                </p>

                <h3>Succession to the Prophet</h3>
                <p>
                  When the Prophet Muhammad ﷺ fell ill before his death, he appointed Abu Bakr to lead the prayers, a
                  significant indication of his preference for succession. After the Prophet's death in 632 CE, while
                  many companions were still in shock, Abu Bakr remained composed and addressed the community with his
                  famous speech:
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    "O people! If anyone among you worshipped Muhammad, then Muhammad is dead. But if anyone worshipped
                    Allah, then Allah is Ever-Living and shall never die." He then recited the verse: "Muhammad is not
                    but a messenger. [Other] messengers have passed on before him. So if he was to die or be killed,
                    would you turn back on your heels [to unbelief]?" [Quran 3:144]
                  </p>
                </div>

                <p>
                  The question of who should succeed the Prophet as the leader of the Muslim community arose immediately
                  after his death. The Ansar (Helpers) of Madinah gathered at a place called Saqifah Bani Sa'idah to
                  discuss the succession. When Abu Bakr, Umar, and Abu Ubaydah learned of this gathering, they joined to
                  ensure unity.
                </p>

                <p>
                  After discussions, Abu Bakr was chosen as the first Caliph (successor) due to his close relationship
                  with the Prophet, his early acceptance of Islam, his wisdom, and his status among the Quraysh. Umar
                  was the first to pledge allegiance to Abu Bakr, followed by the rest of the companions.
                </p>

                <h3>The Caliphate of Abu Bakr (632-634 CE)</h3>
                <p>
                  Abu Bakr's caliphate, though brief (about 2 years and 3 months), was crucial for the stability and
                  continuity of the young Islamic state. He faced several significant challenges:
                </p>

                <h4>1. The Apostasy Wars (Riddah)</h4>
                <p>
                  After the Prophet's death, many Arab tribes who had recently accepted Islam renounced their faith and
                  refused to pay Zakat (obligatory charity). Some followed false prophets who emerged claiming
                  prophethood, such as Musaylimah al-Kadhdhab (the Liar).
                </p>

                <p>
                  Abu Bakr took a firm stance against these apostates, famously declaring: "By Allah, if they withhold
                  even a rope which they used to give to the Messenger of Allah as Zakat, I will fight them for it." He
                  organized eleven armies under capable commanders like Khalid ibn al-Walid to combat the apostasy and
                  rebellions, successfully reuniting Arabia under Islamic rule.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Map showing the Apostasy Wars during Abu Bakr's caliphate"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Map showing the Apostasy Wars during Abu Bakr's caliphate
                  </p>
                </div>

                <h4>2. Compilation of the Quran</h4>
                <p>
                  After the Battle of Yamama against Musaylimah, many Quran memorizers (huffaz) were martyred. Umar
                  suggested to Abu Bakr that they compile the Quran into a single manuscript to preserve it. Though
                  initially hesitant to undertake something the Prophet hadn't done, Abu Bakr recognized the wisdom in
                  this suggestion.
                </p>

                <p>
                  He appointed Zayd ibn Thabit, a former scribe of the Prophet, to lead this monumental task. Zayd
                  collected the Quranic verses from various sources, including written materials and the memories of
                  companions, and compiled them into a single manuscript. This first compilation was kept with Abu Bakr,
                  then passed to Umar after his death, and then to Hafsa bint Umar for safekeeping.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    This first compilation of the Quran was a crucial step in preserving the divine revelation. It later
                    served as the basis for the standardized copies distributed during Uthman's caliphate.
                  </p>
                </div>

                <h4>3. Expansion Beyond Arabia</h4>
                <p>
                  After stabilizing Arabia, Abu Bakr turned his attention to the Byzantine and Persian Empires, which
                  posed threats to the Muslim state. He dispatched armies to Iraq (part of the Persian Empire) and Syria
                  (part of the Byzantine Empire).
                </p>

                <p>
                  Khalid ibn al-Walid achieved significant victories in Iraq before being transferred to Syria to
                  support the Muslim armies there. By the end of Abu Bakr's caliphate, the Muslims had made considerable
                  progress in both regions, laying the groundwork for the major conquests that would occur under Umar's
                  leadership.
                </p>

                <h3>Character and Administration</h3>
                <p>
                  Abu Bakr was known for his simplicity, humility, and piety. Despite being the leader of the growing
                  Islamic state, he continued to live modestly. Initially, he continued his trade to support himself,
                  but the companions convinced him to accept a stipend from the public treasury so he could devote
                  himself fully to governing.
                </p>

                <p>
                  He established a consultative approach to governance, regularly seeking advice from senior companions
                  on important matters. He was known for his fairness and justice, treating all Muslims equally
                  regardless of their social status.
                </p>

                <p>
                  Abu Bakr was also known for his eloquence and wisdom. His speeches and letters to governors and army
                  commanders reflect his deep understanding of Islam and his commitment to justice and compassion.
                </p>

                <h3>Death and Legacy</h3>
                <p>
                  In 634 CE, Abu Bakr fell ill with a fever that lasted for 15 days. Sensing his approaching death, he
                  consulted the senior companions about appointing Umar as his successor. Despite some concerns about
                  Umar's strictness, Abu Bakr was confident in Umar's integrity and capability.
                </p>

                <p>
                  Before his death, Abu Bakr gave his final advice to Umar and the Muslim community, emphasizing
                  justice, compassion, and adherence to the Quran and Sunnah. He passed away on the 22nd of Jumada
                  al-Akhirah, 13 AH (August 23, 634 CE), at the age of 63—the same age at which the Prophet had died.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    Abu Bakr's final instructions included: "I am appointing Umar ibn al-Khattab as my successor. Listen
                    to him and obey him." He also advised: "Fear Allah and hold fast to your religion."
                  </p>
                </div>

                <p>
                  Abu Bakr was buried next to the Prophet Muhammad ﷺ in Aisha's apartment, which is now part of the
                  Prophet's Mosque in Madinah. His caliphate, though brief, was pivotal in ensuring the survival and
                  expansion of Islam after the Prophet's death.
                </p>

                <p>
                  Abu Bakr's legacy includes preserving the unity of the Muslim community during a critical transition,
                  initiating the compilation of the Quran, establishing principles of Islamic governance, and beginning
                  the expansion that would spread Islam beyond Arabia. His unwavering faith, wisdom, and leadership
                  continue to inspire Muslims to this day.
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
                        <h4 className="font-medium">The Apostasy Wars</h4>
                        <p className="text-sm text-muted-foreground">
                          Interactive map showing the campaigns against the apostates during Abu Bakr's caliphate.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Compilation of the Quran</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed article on the process of compiling the Quran during Abu Bakr's caliphate.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">The Character of Abu Bakr</h4>
                        <p className="text-sm text-muted-foreground">
                          Video lecture on the exemplary character and leadership of Abu Bakr as-Siddiq.
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
            <Link href="/modules/prophet-muhammad">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Previous Module
              </Button>
            </Link>
            <Link href="/modules/umar-just">
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
                  <span>30%</span>
                </div>
                <Progress value={30} className="h-2" />
              </div>

              <h4 className="font-medium text-sm mb-2">Module Sections</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Early Life and Conversion to Islam</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Support for the Prophet and Islam</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Succession to the Prophet</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">The Caliphate of Abu Bakr</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Character and Administration</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Death and Legacy</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/assessments/abu-bakr-truthful">
                  <Button className="w-full">Take Module Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="text-sm">• Abu Bakr's early life and character</li>
                <li className="text-sm">• His immediate acceptance of Islam and title "as-Siddiq"</li>
                <li className="text-sm">• His role during the Hijrah and as the Prophet's advisor</li>
                <li className="text-sm">• The succession crisis after the Prophet's death</li>
                <li className="text-sm">• The Apostasy Wars and reunification of Arabia</li>
                <li className="text-sm">• Compilation of the Quran</li>
                <li className="text-sm">• Early Islamic expansion beyond Arabia</li>
                <li className="text-sm">• Abu Bakr's leadership style and legacy</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

