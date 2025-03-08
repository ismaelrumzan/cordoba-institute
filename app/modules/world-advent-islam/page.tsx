import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from "lucide-react";

export default function WorldAdventIslamModule() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">The World at The Advent of Islam</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Module Content</TabsTrigger>
              <TabsTrigger value="resources">Additional Resources</TabsTrigger>
              <TabsTrigger value="notes">My Notes</TabsTrigger>
            </TabsList>

            <TabsContent
              value="content"
              className="prose prose-emerald max-w-none">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h2>The Ancient World</h2>
                <p>
                  According to the Quran, the advent of the final prophet,
                  Muhammad ﷺ, had been foretold and was awaited since ancient
                  times.
                </p>

                <h3>The Two Great Empires</h3>
                <p>
                  The world at the time of the Prophet was dominated by two
                  great and ancient empires, The Eastern Roman Empire and the
                  Persian (Sassanian) Empire. For hundreds of years, these two
                  superpowers had competed for domination of territory and
                  military superiority, and borders would shift here and there
                  depending on which side was currently gaining the upper hand.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=400&width=800"
                    alt="Map showing Eurasia and North Africa at the advent of Islam c.610 CE"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Eurasia and North Africa at the advent of Islam c.610 CE
                  </p>
                </div>

                <p>
                  The Roman Empire had embraced Christianity as its official
                  religion back in the 4th century, with the conversion of
                  Emperor Constantine. It was Constantine also who moved the
                  capital of the empire to the new city named after himself,
                  Constantinople. In the 5th century, the western half of the
                  empire had collapsed under the invasions of Barbarian tribes,
                  but the Eastern Empire endured, and the emperor at the time of
                  the Prophet was called Heraclius. The Persians, on the other
                  hand, followed the religion of Fire-worshippers,
                  Zoroastrianism. There were also many Christian and Jewish
                  communities within the Persian lands.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Soldiers of a Roman imperial legion"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Soldiers of a Roman imperial legion
                  </p>
                </div>

                <h3>India and China</h3>
                <p>
                  Far to the east of the Persian Empire, over the Afghan
                  mountains, was the vast and fertile land of 'Hind' (India).
                  And further east still lay the ancient civilization of the
                  Chinese. Both the Indian and Chinese civilizations were
                  wealthy and highly advanced in terms of learning, culture and
                  technology. Future Muslim scholars would benefit greatly from
                  the wisdom and learning of these two ancient civilizations,
                  for example, the learning of paper-making from the Chinese
                  (which allowed the mass production of books and spread of
                  learning) and advanced mathematics from the Indians.
                </p>

                <h3>The 'Barbarians'</h3>
                <p>
                  In areas outside of the 'civilized' world, such as the Great
                  Eurasian Steppe and the Arabian and Sahara deserts, where the
                  environment was harsh and inhospitable, lived nomadic types,
                  such as the Arab Bedouins and Steppe Nomads. These people did
                  not have official legal systems (judges or courts) and were
                  usually organized in tribes. In the absence of law and order,
                  clan and tribal solidarity was essential for survival.
                </p>

                <p>
                  The tribes were usually pastoralists (owned flocks/herds of
                  animals) and had to migrate from place to place to find
                  pasture for their animals. They lived on the edge of existence
                  and life was tough for them. Clans and tribes often fought
                  each other violently for animals or booty, and sometimes just
                  for vendetta and revenge. Despite their lawlessness, they
                  strictly adhered to a certain 'tribal code', which they all
                  considered inviolable.
                </p>

                <div className="my-6">
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="A Bedouin caravan"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    A Bedouin caravan
                  </p>
                </div>

                <p>
                  Growing up in such harsh conditions, and constantly fighting
                  and feuding, naturally made these nomadic people into
                  super-tough warriors. As a result, they were feared by the
                  empires outside whose borders they roamed, in case they try
                  and enter imperial lands and disrupt the settled peoples. The
                  Romans called them 'Barbarians', meaning 'uncivilized', and
                  the name stuck.
                </p>

                <h3>The Arabs</h3>
                <p>
                  The Arabian Bedouins were a typical nomadic tribal people,
                  endlessly occupied in blood feuds and raiding between clans
                  and tribes. The Arabs were mainly unlettered (could not read
                  or write), but they exulted in their language, a particularly
                  rich and eloquent classical tongue which found expression in
                  sophisticated poetry. The vast majority of Arabs had sunken
                  into idol worship and polytheism, although some isolated
                  individuals still remained upon the monotheism of the ancient
                  prophets, Abraham and Ishmael. Several Jewish settlements were
                  dotted around Arabia. Three Jewish clans lived in the oasis
                  town of Yathrib, for example, which they shared with the Arab
                  Aws and Khazraj tribes. Christianity was also well known to
                  the pagan Arabs, some of whom had converted.
                </p>

                <h3>Ancient Prophecies</h3>
                <p>
                  Ancient prophecies around the world foretold of the coming of
                  a final Prophet before the Last Days. Many of the poor and
                  oppressed in the world eagerly anticipated the coming of this
                  saviour, who it was said would lead his holy followers to
                  topple the oppressive rule of tyrants everywhere, and
                  establish justice, peace and freedom of worship for everyone,
                  rich or poor, master or slave.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
                  <h4 className="text-amber-800 flex items-center gap-2 font-medium">
                    <BookOpen className="h-5 w-5" />
                    Primary Source
                  </h4>
                  <p className="text-amber-700 text-sm mt-2">
                    The People of the Book (Jews and Christians), in particular
                    had detailed prophecies and descriptions about the great
                    prophet to come. In fact, they held such accurate and
                    detailed information in their sources that the Quran said{" "}
                    <strong>
                      "They know him (i.e., the final prophet) like they know
                      their own sons."
                    </strong>{" "}
                    [Q.2:146].
                  </p>
                </div>

                <p>
                  It is amazing that several Jewish clans had settled in Yathrib
                  and were living there precisely because their sources told
                  them that this would be the city of the final prophet.
                </p>

                <p>
                  The early Christians, followers of Prophet Jesus (upon him be
                  peace), were also focused on the anticipated advent of the
                  final prophet. Jesus had been persecuted by the Jews and they
                  conspired with the Roman authorities to have him executed. God
                  saved Jesus and promised him and his followers that He will
                  soon send the 'Son of Man', who will be given victory over the
                  enemies of God, and will usher in the Kingdom of God on this
                  earth. Some Christians, called Milennialists, believed that
                  the Kingdom would endure a thousand years, in which justice
                  and the Divine law would prevail.
                </p>

                <p>
                  According to the historian, Bart Erhman, when Jesus spoke of
                  the anticipated coming of the 'Son of Man', he was not talking
                  of his own second coming, but about a different prophet who
                  was soon to come.
                </p>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 my-6">
                  <h4 className="text-emerald-800 flex items-center gap-2 font-medium">
                    <CheckCircle className="h-5 w-5" />
                    Wise White Beard
                  </h4>
                  <p className="text-emerald-700 text-sm mt-2">
                    One of the Jewish scholars who accepted the Prophet Muhammad
                    ﷺ and embraced Islam informed the Muslims that the Jews had
                    detailed descriptions, not just of the Prophet but even of
                    his 'two lieutenants', i.e., Abu Bakr and Umar.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Additional Resources
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          Map of the Ancient World
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Interactive map showing the major empires and
                          civilizations at the time of the Prophet Muhammad ﷺ.
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          The Byzantine and Persian Empires
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed article on the two major powers that
                          dominated the world before Islam.
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary">
                          View Resource
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium">Pre-Islamic Arabia</h4>
                        <p className="text-sm text-muted-foreground">
                          Video lecture on the social, economic, and religious
                          conditions in Arabia before Islam.
                        </p>
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary">
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
                    placeholder="Add your notes about this module here..."></textarea>
                  <div className="flex justify-end mt-4">
                    <Button>Save Notes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between mt-6">
            <Link href="/modules/introduction-overview">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Previous Module
              </Button>
            </Link>
            <Link href="/modules/prophet-muhammad">
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
                  <span>100%</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <h4 className="font-medium text-sm mb-2">Module Sections</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Ancient World</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Two Great Empires</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>India and China</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The 'Barbarians'</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>The Arabs</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Ancient Prophecies</span>
                </li>
              </ul>

              <div className="mt-6">
                <Link href="/assessments/world-advent-islam">
                  <Button className="w-full">Take Module Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2">
                <li className="text-sm">
                  • Eastern Roman Empire and Persian Empire as superpowers
                </li>
                <li className="text-sm">
                  • Christianity as the official religion of the Roman Empire
                </li>
                <li className="text-sm">
                  • Zoroastrianism as the religion of the Persians
                </li>
                <li className="text-sm">
                  • Advanced civilizations of India and China
                </li>
                <li className="text-sm">
                  • Nomadic tribes and their way of life
                </li>
                <li className="text-sm">
                  • Arab Bedouins and their tribal structure
                </li>
                <li className="text-sm">
                  • Prophecies about the coming of the final Prophet
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
