import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Brain, FileText, Play, Star, Target, TrendingUp, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Practice. Improve.{" "}
              <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
                Get Hired.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master your interview skills with AI-powered mock interviews, 
              detailed feedback, and direct connections to top employers.
            </p>
          </div>
          
          <Button size="lg" className="btn-primary text-lg px-8 py-3">
            <Play className="mr-2 h-5 w-5" />
            Start Mock Interview
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews Completed</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <div className="text-xs text-muted-foreground">
                <span className="text-success">+2</span> from last week
              </div>
              <Progress value={70} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-1">3 more to unlock Resume Builder</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Score</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.4/10</div>
              <div className="text-xs text-muted-foreground">
                <span className="text-success">+0.8</span> improvement
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Improvement Areas</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="text-xs text-muted-foreground">Technical skills focus</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="mr-2 h-5 w-5 text-primary" />
                Recent Mock Interviews
              </CardTitle>
              <CardDescription>Your latest practice sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { role: "Frontend Developer", score: 8.5, date: "2 days ago", status: "excellent" },
                { role: "Product Manager", score: 7.8, date: "5 days ago", status: "good" },
                { role: "Data Scientist", score: 8.2, date: "1 week ago", status: "excellent" },
              ].map((interview, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="space-y-1">
                    <p className="font-medium">{interview.role}</p>
                    <p className="text-sm text-muted-foreground">{interview.date}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge variant={interview.status === "excellent" ? "default" : "secondary"}>
                      {interview.score}/10
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All History
              </Button>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                Recommended Actions
              </CardTitle>
              <CardDescription>Personalized next steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary-light">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Practice System Design</p>
                      <p className="text-sm text-muted-foreground">
                        Based on your recent interviews
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      Start
                    </Button>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium flex items-center">
                        <FileText className="mr-1 h-4 w-4" />
                        Build Resume
                        <Badge variant="secondary" className="ml-2 text-xs">
                          3 more interviews
                        </Badge>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Unlock after 10 mock interviews
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        Connect with HR Partners
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Coming soon - Direct job placements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;