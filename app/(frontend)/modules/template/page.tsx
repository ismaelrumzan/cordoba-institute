import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle } from "lucide-react";
import { ModuleImage } from "@/components/module-image";
import { HighlightBox } from "@/components/highlight-box";

const sections = [
  "The Ancient World",
  "The Two Great Empires",
  "India and China",
  "The 'Barbarians'",
  "The Arabs",
  "Ancient Prophecies",
];

const concepts = [
  "Eastern Roman Empire and Persian Empire as superpowers",
  "Christianity as the official religion of the Roman Empire",
  "Zoroastrianism as the religion of the Persians",
];

const resources = [
  {
    title: "Map of the Ancient World",
    description:
      "Interactive map showing the major empires and civilizations at the time of the Prophet Muhammad ﷺ",
    link: "",
  },
  {
    title: "The Byzantine and Persian Empires",
    description:
      "Detailed article on the two major powers that dominated the world before Islam.",
    link: "",
  },
  {
    title: "Pre-Islamic Arabia",
    description:
      "Video lecture on the social, economic, and religious conditions in Arabia before Islam.",
    link: "",
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
        <h1 className="text-2xl font-bold">Title</h1>
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
                <h2>Heading</h2>
                <p>Text</p>
                <ModuleImage
                  src="/images/module1-vikings.jpg"
                  caption="Seafaring Vikings from the far North"
                />
                <HighlightBox type="reference" title="Primary Source">
                  The People of the Book (Jews and Christians), in particular
                  had detailed prophecies and descriptions about the great
                  prophet to come. In fact, they held such accurate and detailed
                  information in their sources that the Quran said{" "}
                  <strong>
                    "They know him (i.e., the final prophet) like they know
                    their own sons."
                  </strong>{" "}
                  [Q.2:146].
                </HighlightBox>

                <HighlightBox type="check" title="Wise White Beard">
                  One of the Jewish scholars who accepted the Prophet Muhammad ﷺ
                  and embraced Islam informed the Muslims that the Jews had
                  detailed descriptions, not just of the Prophet but even of his
                  'two lieutenants', i.e., Abu Bakr and Umar.
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
                    {resources.map((resource) => (
                      <li className="flex items-start gap-3">
                        <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {resource.description}
                          </p>
                          <Link href={resource.link}>
                            <Button
                              variant="link"
                              className="p-0 h-auto text-primary">
                              View Resource
                            </Button>
                          </Link>
                        </div>
                      </li>
                    ))}
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
                {sections.map((section) => (
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{section}</span>
                  </li>
                ))}
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
