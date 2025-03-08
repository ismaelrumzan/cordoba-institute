import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from "lucide-react"

export default function UmarJustModule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Umar the Just</h1>
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
                <h2>The Second Caliph of Islam</h2>
                <p>
                  Umar ibn al-Khattab, known as "Al-Farooq" (the one who distinguishes between right and wrong) and "The
                  Just," was the second Caliph of Islam. His ten-year rule (634-644 CE) was marked by unprecedented
                  territorial expansion, remarkable administrative innovations, and a commitment to justice that earned
                  him his enduring title.
                </p>

                <h3>Early Life and Conversion to Islam</h3>
                <p>
                  Umar was born around 583 CE in Makkah to the Banu Adi clan of the Quraysh tribe. Before Islam, he was
                  known for his literacy, physical strength, and fierce temperament. He was a respected figure in Makkan
                  society and a staunch opponent of Islam in its early days.
                </p>

                <p>
                  Umar's conversion to Islam around 616 CE was dramatic and transformative. Initially, he set out with
                  the intention to kill Prophet Muhammad ﷺ. On his way, someone informed him that his sister and
                  brother-in-law had accepted Islam. Enraged, he went to their house first and found them reciting
                  verses from the Quran. After initially reacting violently, he asked to read the verses himself. The
                  beauty and truth of the Quranic verses touched his heart, and he immediately went to the Prophet to
                  declare his acceptance of Islam.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    The Prophet Muhammad ﷺ had previously prayed: "O Allah, strengthen Islam with whomever You love
                    more: Umar ibn al-Khattab or Abu Jahl." Allah chose Umar, and his conversion was indeed a
                    significant boost to the early Muslim community.
                  </p>
                </div>

                <p>
                  Umar's conversion was a turning point for the Muslims in Makkah. Before his conversion, Muslims prayed
                  in secret, but Umar insisted on praying openly at the Ka'bah, and his imposing presence deterred any
                  interference. He became one of the Prophet's closest companions and advisors.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Muslims praying openly at the Ka'bah after Umar's conversion"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Muslims praying openly at the Ka'bah after Umar's conversion
                  </p>
                </div>

                <h3>Role During the Prophet's Lifetime</h3>
                <p>
                  During the Prophet's lifetime, Umar was known for his forthright opinions and sound judgment. The
                  Prophet valued his counsel, and on several occasions, revelations in the Quran aligned with Umar's
                  previous suggestions, earning him the title "Al-Muhaddath" (the inspired one).
                </p>

                <p>
                  Umar participated in all major battles alongside the Prophet, including Badr, Uhud, and the Trench. He
                  was also present at the Treaty of Hudaybiyyah and the conquest of Makkah. His unwavering support for
                  the Prophet and Islam, combined with his strategic thinking, made him an invaluable asset to the early
                  Muslim community.
                </p>

                <p>
                  After the Prophet's death, Umar played a crucial role in ensuring a smooth transition of leadership to
                  Abu Bakr. His firm stance and eloquent speech at Saqifah Bani Sa'idah helped unite the Muslims behind
                  Abu Bakr as the first Caliph.
                </p>

                <h3>Caliphate of Umar (634-644 CE)</h3>
                <p>
                  When Abu Bakr was on his deathbed, he appointed Umar as his successor after consulting with senior
                  companions. Umar initially hesitated to accept this responsibility but eventually agreed. Upon
                  becoming Caliph, he addressed the people, acknowledging his strictness but promising to be gentle with
                  the righteous and tough with the oppressors.
                </p>

                <h4>1. Territorial Expansion</h4>
                <p>
                  Umar's caliphate witnessed the most significant territorial expansion in Islamic history. Under his
                  leadership, the Muslim armies conquered vast territories from the Byzantine and Persian Empires.
                </p>

                <p>
                  In 636 CE, the Muslims defeated the Byzantine army at the Battle of Yarmouk, leading to the conquest
                  of Syria and Palestine. Jerusalem surrendered to Umar personally in 638 CE. He entered the city
                  humbly, walking while his servant rode the camel, and signed the Treaty of Jerusalem, guaranteeing the
                  safety and religious freedom of the city's inhabitants.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Map showing the territorial expansion during Umar's caliphate"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Map showing the territorial expansion during Umar's caliphate
                  </p>
                </div>

                <p>
                  In 637 CE, the Muslims defeated the Persians at the Battle of Qadisiyyah, followed by the Battle of
                  Nahavand in 642 CE, which effectively ended the Sassanid Empire. Egypt was conquered by Amr ibn al-As
                  in 641 CE. By the end of Umar's caliphate, the Islamic state had expanded to include the Arabian
                  Peninsula, the Levant, Egypt, and large parts of Persia.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    When Umar entered Jerusalem, he was invited to pray in the Church of the Holy Sepulchre by Patriarch
                    Sophronius. Umar declined, saying: "If I pray inside the church, the Muslims after me would take it
                    as a mosque." Instead, he prayed outside, where the Mosque of Umar now stands.
                  </p>
                </div>

                <h4>2. Administrative Innovations</h4>
                <p>
                  Umar's genius as a leader was most evident in his administrative innovations. He established many
                  institutions and practices that became the foundation of Islamic governance for centuries to come:
                </p>

                <ul>
                  <li>
                    <strong>Diwan System:</strong> Umar established the first public treasury (Bayt al-Mal) and created
                    a welfare system that provided stipends to all citizens, with amounts varying based on their service
                    to Islam and need.
                  </li>
                  <li>
                    <strong>Provincial Administration:</strong> He divided the expanding state into provinces, each
                    governed by an appointed governor (wali) with clear responsibilities and limitations.
                  </li>
                  <li>
                    <strong>Judicial System:</strong> Umar appointed judges (qadis) in various regions to administer
                    justice according to Islamic law, independent of the governors.
                  </li>
                  <li>
                    <strong>Land Management:</strong> He introduced the concept of kharaj (land tax) on conquered lands,
                    allowing the original inhabitants to retain ownership while paying taxes to the Islamic state.
                  </li>
                  <li>
                    <strong>Military Organization:</strong> He established regular salaries for soldiers, created
                    garrison cities (amsar) like Basra and Kufa, and organized the army into divisions.
                  </li>
                  <li>
                    <strong>Islamic Calendar:</strong> Umar established the Islamic (Hijri) calendar, beginning from the
                    year of the Prophet's migration (Hijrah) to Madinah.
                  </li>
                </ul>

                <h4>3. Justice and Accountability</h4>
                <p>
                  Umar was renowned for his commitment to justice and accountability, which earned him the title "The
                  Just." He held himself and his officials to the highest standards of integrity and fairness.
                </p>

                <p>
                  He would personally patrol the streets of Madinah at night to ensure the welfare of his subjects. He
                  lived an austere life, wearing patched clothes and eating simple food, despite the vast wealth flowing
                  into the Islamic state from conquests.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    When the Byzantine Emperor heard about Umar sleeping under a tree without guards, he remarked: "You
                    rule with justice, so you sleep in peace. I rule with oppression, so I sleep in fear."
                  </p>
                </div>

                <p>
                  Umar established the principle that rulers and officials are servants of the people, not their
                  masters. He famously said: "If a lost sheep dies on the banks of the Euphrates, I fear that Allah will
                  ask me about it on the Day of Judgment."
                </p>

                <p>
                  He was equally strict with his governors and commanders, regardless of their status or relationship to
                  him. He would remove officials at the slightest hint of misconduct and would often check on them by
                  sending inspectors or by calling them to Madinah to account for their actions.
                </p>

                <h3>Character and Personal Life</h3>
                <p>
                  Umar was known for his simplicity, piety, and humility despite his position as the leader of a vast
                  empire. He was tall, physically strong, and had a commanding presence that inspired both respect and
                  awe.
                </p>

                <p>
                  He was deeply committed to the principles of Islam and would often consult the Quran and the Sunnah of
                  the Prophet when making decisions. He was also known for his consultative approach to governance,
                  regularly seeking advice from the companions and respecting differing opinions.
                </p>

                <p>
                  Despite his stern exterior, Umar had a compassionate heart, especially for the poor and vulnerable.
                  During a famine, he refused to eat meat or butter until all his subjects could afford them. He would
                  personally distribute food to the needy and carry sacks of flour on his own shoulders to widows and
                  orphans.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Umar distributing food to the needy during a famine"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Umar distributing food to the needy during a famine
                  </p>
                </div>

                <h3>Assassination and Legacy</h3>
                <p>
                  Umar's caliphate came to a tragic end when he was assassinated by Abu Lu'lu'ah Firuz, a Persian slave
                  who held a personal grudge against him. On the 26th of Dhul Hijjah, 23 AH (November 3, 644 CE), while
                  leading the Fajr (dawn) prayer in the Prophet's Mosque, Umar was stabbed six times with a poisoned
                  dagger.
                </p>

                <p>
                  Despite being mortally wounded, Umar's concern was for the continuity of leadership. He appointed a
                  council of six senior companions to choose his successor from among themselves. After three days of
                  suffering, Umar passed away at the age of 63—the same age at which the Prophet and Abu Bakr had died.
                </p>

                <p>
                  Umar was buried next to the Prophet Muhammad ﷺ and Abu Bakr in Aisha's apartment, which is now part of
                  the Prophet's Mosque in Madinah.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    Before his death, Umar said: "If I had all the gold in the world, I would offer it as a ransom to
                    escape the terror of the Day of Judgment." His last words were: "All praise is due to Allah who has
                    honored me with martyrdom."
                  </p>
                </div>

                <p>
                  Umar's legacy is immense and enduring. He transformed the Islamic state from a regional power to a
                  world empire, established the foundations of Islamic governance and administration, and set a standard
                  of justice, accountability, and public service that remains an inspiration to this day.
                </p>

                <p>
                  The Prophet Muhammad ﷺ once said: "If there were to be a prophet after me, it would have been Umar."
                  This statement reflects the high esteem in which Umar was held and the exceptional qualities he
                  possessed.
                </p>

                <p>
                  Umar's caliphate is often regarded as the golden age of Islamic governance, characterized by justice,
                  prosperity, and expansion. His methods of administration and his commitment to the welfare of his
                  subjects established a model that subsequent Muslim rulers strived to emulate.
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
                        <h4 className="font-medium">The Conquests of Umar's Era</h4>
                        <p className="text-sm text-muted-foreground">
                          Interactive map showing the major battles and territorial expansions during Umar's caliphate.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Administrative Innovations</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed article on Umar's administrative systems and their impact on Islamic governance.
                        </p>
                        <Button variant="link" className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Stories of Umar's Justice</h4>
                        <p className="text-sm text-muted-foreground">
                          Video lecture on famous incidents demonstrating Umar's commitment to justice and
                          accountability.
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
            <Link href="/modules/abu-bakr-truthful">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Previous Module
              </Button>
            </Link>
            <Link href="/modules/uthman-generous">
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
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              <h4 className="font-medium text-sm mb-2">Module Sections</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Early Life and Conversion to Islam</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Role During the Prophet's Lifetime</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Caliphate of Umar</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Character and Personal Life</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                  <span className="text-muted-foreground">Assassination and Legacy</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/assessments/umar-just">
                  <Button className="w-full">Take Module Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="text-sm">• Umar's conversion to Islam and its impact</li>
                <li className="text-sm">• His role as an advisor to the Prophet</li>
                <li className="text-sm">• The territorial expansion during his caliphate</li>
                <li className="text-sm">• Administrative innovations and institutions</li>
                <li className="text-sm">• His commitment to justice and accountability</li>
                <li className="text-sm">• The conquest of Jerusalem and treatment of non-Muslims</li>
                <li className="text-sm">• His personal character and leadership style</li>
                <li className="text-sm">• His assassination and the selection of his successor</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

