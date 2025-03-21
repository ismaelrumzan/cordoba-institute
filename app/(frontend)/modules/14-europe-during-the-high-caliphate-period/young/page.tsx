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
import { GradeLevelWrapper } from "@/components/grade-level-wrapper";

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

      <GradeLevelWrapper />
      <ModuleAudioPlayer
        title="Europe During The High Caliphate Period"
        audioSrc="/audio/module14-young.mp3"
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
                  A long time ago, during the High Caliphate period, the
                  Christian world was divided into two main parts. The western
                  part was called Latin Christianity, and the eastern part was
                  called Greek Christianity. After some big battles and the fall
                  of the Western Roman Empire, the leader of the western church,
                  called the Pope, said he was the most important leader of all
                  Christians. His followers, called Catholics, wanted everyone
                  to believe what they believed. In the east, the Eastern Roman
                  Empire ruled, and its capital city was Constantinople.
                </p>
                <h2>The ‘Dark Ages’ of Europe</h2>
                <p>
                  This was a difficult time for Europe, known as the "Dark
                  Ages." There was not much learning happening, and most people
                  could not read or write. The only place where learning
                  continued was in the churches. Over time, the Barbarians and
                  Vikings became Christians, but most people still didn’t have
                  the chance to go to school or learn.
                </p>
                <ModuleImage
                  src="/images/module14-viking.jpg"
                  caption="Famous Viking longboats"
                />
                <h2>The Barbarian Kingdoms</h2>
                <p>
                  In western Europe, except for Spain, many different groups
                  called "Barbarian tribes" lived. These tribes moved around a
                  lot before they finally settled and created small kingdoms.
                  One powerful group was the Franks, who lived in what is now
                  France and Germany. They promised to protect the Pope, and in
                  return, the Pope gave their king, Charlemagne, the title "Holy
                  Roman Emperor."
                </p>
                <p>
                  Charlemagne wanted to make his people more civilized. He even
                  sent gifts to the famous Muslim leader Harun Rashid in
                  Baghdad. People in the Muslim world called all western
                  Europeans "Ifranji," which means "the Franks."
                </p>
                <h2>The Viking Age (793—1066)</h2>
                <p>
                  In 793, some monks living on an island called Lindisfarne saw
                  strange ships coming from the sea. These ships carried strong
                  warriors known as Vikings. The Vikings attacked, took valuable
                  things, and hurt many people. This was the first of many
                  Viking raids in Europe.
                </p>
                <ModuleImage
                  src="/images/module14-normans.jpg"
                  caption="Vikings settling in the north of France"
                />
                <p>
                  Vikings came from Scandinavia and traveled to many places,
                  including Ireland, Russia, and France. Some settled down and
                  started new towns and cities. In France, they were called
                  "Normans," and they made their own rules and way of life.
                </p>
                <p>
                  Vikings were tough warriors. They were sometimes hired to help
                  other kings in battle. In fact, some even became guards for
                  the Eastern Roman emperor. When Vikings settled in new places,
                  they often married local people, learned their languages, and
                  took on their religions. In France, the Normans started
                  speaking French and became part of French society.
                </p>

                <HighlightBox type="highlight" title="King Offa of Mercia">
                  King Offa ruled an area called Mercia in England from 757 to
                  796 AD. He made special gold coins that had his name and the
                  Islamic declaration of faith written on them. This is a
                  mystery for historians.
                  <ModuleImage src="/images/module14-coins.png" />
                </HighlightBox>
                <HighlightBox type="discuss" title="Discuss">
                  Why do you think King Offa did this? Discuss it with your
                  class!
                </HighlightBox>
                <h2>Conclusion</h2>
                <p>
                  The High Caliphate period was a time of big changes in Europe.
                  The Catholic Church became very powerful, and the Vikings
                  became strong leaders in many lands. Even though the Vikings
                  were known for their battles, they also left behind a rich
                  history that is remembered today.
                </p>
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
                <Link href="/assessments/14-europe-during-the-high-caliphate-period/young">
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
