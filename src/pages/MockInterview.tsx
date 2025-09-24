import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Brain, Play, BarChart3, Clock, Target, Mic, Video, Pause } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";

const MockInterview = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("");
  const [interviewStarted, setInterviewStarted] = useState(false);

  const roles = [
    "Software Engineer",
    "Product Manager", 
    "Data Scientist",
    "UX Designer",
    "DevOps Engineer",
    "Marketing Manager",
    "Business Analyst",
    "Sales Representative"
  ];

  const domains = [
    "Technology",
    "Healthcare", 
    "Finance",
    "E-commerce",
    "Education",
    "Media & Entertainment",
    "Automotive",
    "Consulting"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {!interviewStarted ? (
          <>
            {/* Header */}
            <div className="text-center space-y-6 py-8">
              <Badge variant="outline" className="mb-4">AI Mock Interview</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Practice with{" "}
                <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
                  AI Interviewer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get realistic interview practice with our advanced AI that adapts to your responses
                and provides detailed feedback to help you improve.
              </p>
            </div>

            {/* Interview Setup */}
            <div className="max-w-2xl mx-auto space-y-8">
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Interview Configuration
                  </CardTitle>
                  <CardDescription>
                    Customize your mock interview experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Role</label>
                      <Select value={selectedRole} onValueChange={setSelectedRole}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose your target role" />
                        </SelectTrigger>
                        <SelectContent>
                          {roles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {role}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Select Domain</label>
                      <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose industry domain" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((domain) => (
                            <SelectItem key={domain} value={domain}>
                              {domain}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-primary text-lg py-3"
                    disabled={!selectedRole || !selectedDomain}
                    onClick={() => setInterviewStarted(true)}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Start Mock Interview
                  </Button>
                </CardContent>
              </Card>

              {/* Interview Preview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">30-45 mins</h3>
                    <p className="text-sm text-muted-foreground">Typical duration</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">AI-Powered</h3>
                    <p className="text-sm text-muted-foreground">Adaptive questions</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Detailed Report</h3>
                    <p className="text-sm text-muted-foreground">Instant feedback</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Interview Interface */}
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Interview Header */}
              <Card className="card-elevated">
                <CardContent className="py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Badge variant="default">Live Interview</Badge>
                      <span className="text-sm text-muted-foreground">
                        {selectedRole} • {selectedDomain}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                      <span className="text-sm">15:32</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AI Interaction Area */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  {/* AI Avatar/Video */}
                  <Card className="card-elevated">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/5 to-accent-bright/5 rounded-lg flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                            <Brain className="h-12 w-12 text-primary" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-lg font-semibold">AI Interviewer</h3>
                            <p className="text-sm text-muted-foreground">
                              "Tell me about yourself and what interests you about this role."
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Question */}
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-lg">Current Question</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg">
                        "Walk me through your approach to solving a complex technical problem. 
                        Can you give me a specific example from your experience?"
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="outline">Behavioral</Badge>
                        <Badge variant="outline">Problem Solving</Badge>
                        <Badge variant="outline">Technical Experience</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Interview Controls */}
                <div className="space-y-6">
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-lg">Interview Controls</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" size="sm">
                          <Mic className="h-4 w-4 mr-2" />
                          Mute
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Camera
                        </Button>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        <Pause className="h-4 w-4 mr-2" />
                        Pause Interview
                      </Button>
                      
                      <Button variant="destructive" className="w-full">
                        End Interview
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Live Feedback */}
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-lg">Live Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Confidence Level</span>
                          <Badge variant="secondary">Good</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Speaking Pace</span>
                          <Badge variant="default">Optimal</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Eye Contact</span>
                          <Badge variant="secondary">Improving</Badge>
                        </div>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <p className="text-xs text-muted-foreground">
                          💡 Try to provide more specific examples to strengthen your answers
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Progress */}
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-lg">Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Questions Answered</span>
                          <span>3/8</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '37.5%' }}></div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        Estimated time remaining: 20-25 minutes
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default MockInterview;