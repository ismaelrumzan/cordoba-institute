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
        <h1 className="text-2xl font-bold">Introduction to Islamic History</h1>
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
                <h2>Introduction</h2>
                <p>
                  During the Early Middle Ages, two civilizations emerged that
                  would shape the world: the Islamic and Western civilizations.
                  Their beginnings can be traced back to two distinct groups of
                  people: the Bedouin tribes from the Arabian Peninsula and the
                  seafaring Vikings from the far North.
                </p>
                <div className="my-6">
                  <img
                    src="/images/module1-vikings.jpg"
                    alt="Vikings"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Seafaring Vikings from the far North
                  </p>
                </div>
                <p>
                  Inspired by a new Divine revelation, the Arabs embarked on a
                  rapid expansion across Asia and Africa. In just one
                  generation, they brought down the mighty Persian and Roman
                  empires. Meanwhile, the Vikings, known for their plundering
                  and settlement activities, dominated Northern Europe for over
                  two centuries. The legacy of colonization and military
                  dominance carried on through their descendants, the Normans in
                  the West and the Rus in the East. From the aftermath of these
                  dramatic events, the civilizations of Islam and the West
                  emerged.
                </p>
                <div className="my-6">
                  <img
                    src="/images/module1-horses.jpg"
                    alt="The Arabs embarked on a
                  rapid expansion across Asia and Africa"
                    className="rounded-lg w-full"
                  />
                  <p className="text-sm text-center text-muted-foreground mt-2">
                    Arabs embarked on a rapid expansion across Asia and Africa
                  </p>
                </div>
                <h3>Historical Context</h3>
                <p>
                  The history of these civilizations spans approximately 1,400
                  years, but it’s important to note that human history extends
                  much further back in time. The existence of human beings can
                  be traced back at least 200,000 years (Homo sapiens) or
                  perhaps even as long as two million years, based on
                  archaeological evidence of tool making.
                </p>
                <h3>Western History—fact or fantasy? (Bias)</h3>
                <p>
                  In the 19th century, global powers such as Britain, France,
                  and Germany took on the task of documenting the history of
                  their civilizations. However, this endeavor often mixed fact
                  with fantasy. There was a desire to present Europeans as the
                  rightful rulers, which led to the search for evidence of an
                  ancient pedigree. The narrative began with Ancient Greece,
                  portraying the Greeks as unique in their pursuit of rational
                  thought and science. This legacy then passed on to the Romans,
                  who, despite being oppressive and imperialistic, were
                  considered a great civilization that valued the rule of law.
                  The Middle Ages were depicted as a regressive and feudalistic
                  period, but with the Renaissance and the rediscovery of Greek
                  and Roman heritage, Europe supposedly experienced
                  enlightenment, progress, scientific advancements, and military
                  triumphs over the rest of the world. This version of history
                  became the standard taught in colonial schools worldwide.
                </p>
                <h3>Some Common Myths</h3>
                <p>
                  At the outset, it is essential to dispel the claim that the
                  West is the true inheritor of the ancient civilizations of
                  Greece and Rome. Ancient Rome and CHAPTER 01 9 Introduction &
                  Overview Greece were primarily Mediterranean civilizations
                  centered around Asia and North Africa. The core nations of
                  Western civilization, such as Britain, France, and Germany,
                  trace their origins to Germanic and Nordic tribes that emerged
                  outside the realms of Rome and Greece.
                </p>
                <p>
                  It is common to read that the Roman Empire fell in the 5th
                  century CE with the sacking of Rome by the Barbarians.
                  However, this is only true for the western half of the Empire.
                  The capital had already shifted to Constantinople (known as
                  ‘the New Rome’) in 330, and the Eastern Roman Empire endured
                  for another thousand years until its fall to the Ottomans in
                  1453. Curiously, Western textbooks often refer to the Eastern
                  Roman Empire as ‘Byzantium’ or ‘the Byzantine Empire,’ a name
                  unknown to the Eastern Romans themselves.
                </p>
                <p>
                  Many standard textbooks and historical accounts demonstrate a
                  strong Euro-centric bias. Fortunately, in recent decades,
                  Western historians have sought to produce more balanced
                  studies. Despite these efforts, remnants of the former bias
                  can still be found, particularly in school textbooks, and
                  subtle biases are difficult to eliminate entirely. It is
                  important to acknowledge that even the author’s outlook on
                  history may contain its own biases. My aim is to maintain
                  objectivity and provide fresh perspectives that may be
                  overlooked in the conventional Western narrative.
                </p>
                <p>
                  Another myth propagated by colonial empires was the notion of
                  Europe as a separate continent. However, there is no factual
                  basis for this belief. Europe can be seen as an extremity or
                  sub -continent of Asia. Furthermore, the world map was often
                  presented with Europe at the top, creating a distorted
                  perspective that made Northern countries appear
                  disproportionately larger compared to others.
                </p>
                <p>
                  The nineteenth century also witnessed the rise of the
                  ‘evolution myth’, which combined scientific theories with
                  racism. White Europeans considered themselves the pinnacle of
                  an evolutionary journey, labeling themselves as the ‘Rational
                  White Man.’ According to this perspective, humanity had
                  progressed from primitive savages through various stages,
                  culminating in the European civilization characterized by
                  rational thought, democracy, industrialized economies, and
                  scientific advancements.
                </p>
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
