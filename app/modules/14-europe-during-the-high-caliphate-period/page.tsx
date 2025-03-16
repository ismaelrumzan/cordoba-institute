import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Loader,
  Video,
  LinkIcon,
  CircleX,
} from "lucide-react";
import { ModuleImage } from "@/components/module-image";
import { HighlightBox } from "@/components/highlight-box";
import { ModuleAudioPlayer } from "@/components/module-audio-player";

const sections = [
  { title: "Umayyads & Abbasids", status: "complete" },
  { title: "Harun the Good & The Abbasids", status: "complete" },
  ,
  { title: "Baghdad & City Life in the High Caliphate", status: "complete" },
  ,
  { title: "Intellectual Trends in the High Caliphate", status: "complete" },
  ,
  { title: "Europe During The High Caliphate Period", status: "progress" },
  ,
  { title: "Economies of the Muslim & Christian Worlds", status: "incomplete" },
];

const concepts = [
  "Christianity split into Western (Catholic) and Eastern (Orthodox) regions, with the Pope asserting supremacy in the West.",
  "Europe's dark ages was marked by limited learning and widespread illiteracy, with knowledge preserved mainly within the Church",
  "Barbarian tribes formed small kingdoms; Charlemagne was declared Holy Roman Emperor, symbolizing the West's aspiration for civilization and fostering relations with the Abbasid Caliphate.",
  "Vikings raided and settled across Europe, later integrating by adopting local customs, religions, and governance.",
  "Offa of Mercia minted coins with the Islamic shahada, reflecting trade ties with the Muslim world.",
];

const resources = [
  {
    title: "World History Encyclopedia",
    description:
      "Offers detailed articles and timelines on the Viking Age, Anglo-Saxon period, and more.",
    link: "https://www.worldhistory.org/",
    type: "link",
  },
  {
    title: "BBC Documentary: The Dark Ages: An Age of Light",
    description:
      "Explores the intellectual and artistic advancements during the so-called Dark Ages.",
    link: "https://www.bbc.co.uk/programmes/p00zbtmp",
    type: "video",
  },
  {
    title: "The Vikings: A New History by Neil Oliver",
    description:
      "A comprehensive and engaging overview of the Viking Age and its global impact.",
    type: "book",
    link: "https://www.google.ca/books/edition/Vikings/IVQzAgAAQBAJ",
  },
];

export default function Chapter() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/dashboard">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">
          Europe During The High Caliphate Period
        </h1>
      </div>
      <ModuleAudioPlayer
        title="Europe During The High Caliphate Period"
        audioSrc="/audio/module14.mp3"
      />

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
                <ModuleImage
                  src="/images/module14-village.jpg"
                  caption="An Anglo-Saxon village in England in during the High Caliphate period (Early Middle Ages)"
                />
                <p>
                  The Christian world during the High Caliphate period was
                  divided into two regions: western (Latin) and eastern (Greek)
                  Christian kingdoms. After the Barbarian invasions and the fall
                  of the Western Roman Empire, the Bishop of Rome broke away
                  from the Orthodox Church and claimed to be the supreme head of
                  Christianity, calling himself the ’Pope’. His followers, the
                  Catholics, were obsessed with getting everyone to follow their
                  particular version of Christianity and would not tolerate any
                  differences in beliefs. The Eastern Christian lands were
                  dominated by the Eastern Roman Empire, with its capital the
                  great city of Constantinople.
                </p>
                <h2>The ‘Dark Ages’ of Europe</h2>
                <p>
                  Europe at this time was going through its ‘Dark Ages’, with
                  little in the way of intellectual progress. As the Barbarians,
                  and later the Vikings, gradually converted to Christianity,
                  learning mainly remained within the Church, and the masses
                  were largely illiterate.
                </p>
                <ModuleImage
                  src="/images/module14-viking.jpg"
                  caption="Famous Viking longboats"
                />
                <h2>The Barbarian Kingdoms</h2>
                <p>
                  The western regions of Europe, with the exception of Islamic
                  Spain, were inhabited by the Barbarian tribes who, after
                  generations of migrations, had eventually settled to form
                  small kingdoms. The largest of the Barbarian tribes, the
                  Franks, who had settled in modern-day France and Germany,
                  agreed to offer the Pope their protection. In return, the Pope
                  declared the king of the Franks, Charlemagne, to be the ‘Holy
                  Roman Emperor.’ Charlemagne was not the true emperor of the
                  Roman Empire in Constantinople. However, the Holy Roman Empire
                  symbolized the Barbarians’ new aspirations to civilization.
                  The new ‘Emperor’ of the Franks sent envoys to Baghdad bearing
                  gifts for Harun Rashid, and there was a friendly exchange
                  between the two. For a long time, all western Europeans would
                  be known in the Muslim world simply as Ifranji, ‘the Franks’.
                </p>
                <p>
                  England at the time was composed of several feuding
                  Anglo-Saxon Christian kingdoms, descended from <b>Germanic</b>{" "}
                  tribal groups who had crossed over from the mainland a few
                  centuries earlier.
                </p>
                <h2>The Viking Age (793—1066)</h2>
                <p>
                  In 793, monks on a remote monastery on the island of
                  Lindisfarne were surprised to see strange ships appearing out
                  of the mists of the North Sea. Their astonishment soon turned
                  to fear as burly, muscular warriors armed to the teeth came
                  ashore and headed menacingly in their direction. The sacred
                  space was desecrated, church treasures were looted and the
                  monks were massacred. Western Christendom had just had its
                  first taste of Viking terror.
                </p>
                <ModuleImage
                  src="/images/module14-normans.jpg"
                  caption="Vikings settling in the north of France"
                />
                <p>
                  The Vikings poured out of their homelands of Scandinavia and
                  invaded, plundered, settled and terrorized Northern lands from
                  Ireland to Russia. The North of France became a major Viking
                  settlement, sizeable colonies formed in England and Ireland,
                  and from the cities of Kiev and Novgorod emerged the fledgling
                  Rus kingdom.
                </p>
                <p>
                  The Northmen, or ‘Normans’ as they became known in France, had
                  their own style of government and social structures which they
                  brought to many of their colonies.
                </p>
                <p>
                  Renowned warriors, tough and hardy, the Northmen were hired as
                  mercenaries by kings and dukes wherever they went, and often
                  ended up seizing power for themselves when the opportunity
                  arose. They even came to form the Eastern Roman emperor’s
                  elite troops, the ‘Varangian Guard’.
                </p>
                <p>
                  Wherever they settled, the Vikings soon consolidated their
                  power and assimilated by marrying into local nobility and
                  taking on the religion and languages of their hosts. The
                  Normans were soon portraying themselves as Frenchmen, taking
                  noble titles such as ‘duke’, and adopting the French language.
                </p>

                <HighlightBox type="highlight" title="King Offa’s Coin">
                  King Offa of Mercia, who reigned between 757AD and 796AD,
                  minted hundreds of Gold dinars featuring his name and the
                  Islamic declaration of faith. He is widely considered the most
                  powerful Anglo Saxon king before the Alfred the Great as his
                  rule at different points extended outside of Mercia (the
                  Midlands) into kingdoms such as Kent, Sussex and Wessex.
                  <ModuleImage src="/images/module14-coins.png" />
                </HighlightBox>
                <HighlightBox type="think" title="Wise man says...">
                  <p>You can see King Offa’s coin in the British Museum</p>
                </HighlightBox>
                <HighlightBox type="discuss" title="Discuss">
                  Why do you think King Offa had the Islamic ’shahada’
                  (declaration of faith) engraved on his coins?
                </HighlightBox>
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Additional Resources
                  </h3>
                  <ul className="space-y-4">
                    {resources.map((resource) => {
                      let icon;
                      if (resource.type === "book") {
                        icon = (
                          <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        );
                      }
                      if (resource.type === "video") {
                        icon = (
                          <Video className="h-5 w-5 text-primary mt-0.5" />
                        );
                      }
                      if (resource.type === "link") {
                        icon = (
                          <LinkIcon className="h-5 w-5 text-primary mt-0.5" />
                        );
                      }
                      return (
                        <li className="flex items-start gap-3">
                          {icon}
                          <div>
                            <h4 className="font-medium">{resource.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {resource.description}
                            </p>
                            <Link href={resource.link} target="_blank">
                              <Button
                                variant="link"
                                className="p-0 h-auto text-primary">
                                View Resource
                              </Button>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
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
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>

              <h4 className="font-medium text-sm mb-2">Module Sections</h4>
              <ul className="space-y-2">
                {sections.map((section) => {
                  let icon = <CircleX className="h-4 w-4 text-green-500" />;
                  if (section?.status === "complete") {
                    icon = <CheckCircle className="h-4 w-4 text-green-500" />;
                  }
                  if (section?.status === "progress") {
                    icon = <Loader className="h-4 w-4 text-green-500" />;
                  }
                  return (
                    <li className="flex items-center gap-2 text-sm">
                      {icon}
                      <span>{section?.title}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6">
                <Link href="/assessments/14-europe-during-the-high-caliphate-period">
                  <Button className="w-full">Take Module Quiz</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Key Concepts</h3>
              <ul className="space-y-2 list-disc pl-3">
                {concepts.map((concept) => (
                  <li className="text-sm">{concept}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
