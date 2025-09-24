import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, Lock, Star, Target, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const ResumeBuilder = () => {
  const interviewsCompleted = 7;
  const interviewsRequired = 10;
  const progress = (interviewsCompleted / interviewsRequired) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-6 py-8">
          <Badge variant="outline" className="mb-4">Resume Builder</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
              Resume Builder
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create ATS-optimized resumes that get you noticed by hiring managers.
            Unlock this feature by completing mock interviews.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Progress Section */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                Unlock Progress
              </CardTitle>
              <CardDescription>
                Complete {interviewsRequired} mock interviews to access the Resume Builder
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Mock Interviews Completed</span>
                  <span className="text-sm text-muted-foreground">
                    {interviewsCompleted}/{interviewsRequired}
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {interviewsRequired - interviewsCompleted} more interviews to unlock Resume Builder
                </p>
              </div>

              <div className="flex items-center justify-center pt-4">
                <Button className="btn-primary">
                  <Star className="mr-2 h-4 w-4" />
                  Continue Mock Interviews
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feature Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  Resume Preview
                </CardTitle>
                <CardDescription>See what you'll be able to create</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Locked Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center z-10">
                    <div className="text-center space-y-4">
                      <Lock className="h-12 w-12 text-muted-foreground mx-auto" />
                      <div className="space-y-2">
                        <p className="font-medium">Unlock with {interviewsRequired - interviewsCompleted} more interviews</p>
                        <p className="text-sm text-muted-foreground">
                          Build professional resumes tailored to your target roles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resume Template Preview */}
                  <div className="aspect-[8.5/11] bg-card border-2 border-dashed border-muted rounded-lg p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="h-6 bg-muted-dark rounded w-3/4"></div>
                      <div className="h-4 bg-muted rounded w-1/2"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded w-1/4"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-muted rounded w-full"></div>
                        <div className="h-3 bg-muted rounded w-5/6"></div>
                        <div className="h-3 bg-muted rounded w-4/5"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-primary/20 rounded w-1/3"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded w-full"></div>
                          <div className="h-3 bg-muted rounded w-3/4"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-muted rounded w-full"></div>
                          <div className="h-3 bg-muted rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features List */}
            <div className="space-y-6">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>What You'll Get</CardTitle>
                  <CardDescription>
                    Powerful features to create standout resumes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "ATS-Optimized Templates",
                      description: "Resumes that pass automated screening systems",
                      available: true
                    },
                    {
                      title: "Skills Matching Algorithm", 
                      description: "Auto-suggest relevant skills based on your target role",
                      available: true
                    },
                    {
                      title: "Multiple Export Formats",
                      description: "PDF, Word, and plain text formats",
                      available: true
                    },
                    {
                      title: "Interview Data Integration",
                      description: "Leverage insights from your mock interviews",
                      available: true
                    },
                    {
                      title: "Industry-Specific Templates",
                      description: "Tailored layouts for different sectors",
                      available: true
                    },
                    {
                      title: "Real-time Optimization Tips",
                      description: "Suggestions to improve your resume as you build",
                      available: true
                    }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className={`h-5 w-5 mt-0.5 ${feature.available ? 'text-success' : 'text-muted-foreground'}`} />
                      <div className="space-y-1">
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Export Options</CardTitle>
                  <CardDescription>Multiple formats for different use cases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 gap-3">
                    <Button variant="outline" disabled className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download as PDF
                      <Lock className="ml-auto h-4 w-4" />
                    </Button>
                    <Button variant="outline" disabled className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Download as Word
                      <Lock className="ml-auto h-4 w-4" />
                    </Button>
                    <Button variant="outline" disabled className="justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Export as Text
                      <Lock className="ml-auto h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="card-hero text-primary-foreground text-center">
            <CardContent className="py-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Ready to Build Your Resume?</h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Complete {interviewsRequired - interviewsCompleted} more mock interviews to unlock the Resume Builder 
                  and create professional resumes that get you hired.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary">
                    <Star className="mr-2 h-5 w-5" />
                    Start Mock Interview
                  </Button>
                  <Button size="lg" variant="outline">
                    View Progress
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;