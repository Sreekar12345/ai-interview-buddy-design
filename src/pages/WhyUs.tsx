import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, BarChart3, FileText, Users, Zap, Target, CheckCircle, X } from "lucide-react";
import Navigation from "@/components/Navigation";

const WhyUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <Badge variant="outline" className="mb-4">Why Choose AI Interview Buddy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Smart Way to{" "}
            <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
              Ace Interviews
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of interview preparation with AI-powered practice sessions, 
            detailed analytics, and direct connections to leading employers.
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-elevated">
            <CardHeader>
              <Brain className="h-12 w-12 text-primary mb-4" />
              <CardTitle>AI-Driven Mock Interviews</CardTitle>
              <CardDescription>
                Realistic interview simulations powered by advanced AI technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Role-specific question sets</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Natural conversation flow</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Adaptive difficulty levels</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Detailed Performance Reports</CardTitle>
              <CardDescription>
                Comprehensive analytics and actionable feedback for improvement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Communication score breakdown</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Technical skills assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Personalized improvement tips</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <FileText className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Resume Builder</CardTitle>
              <CardDescription>
                Professional resume creation with industry-specific templates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">ATS-optimized templates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Skills matching algorithm</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">Unlocks after 10 interviews</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mb-4" />
              <CardTitle>HR Collaborations</CardTitle>
              <CardDescription>
                Direct connections with top companies and hiring managers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Exclusive job opportunities</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Fast-track applications</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <Zap className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Instant Feedback</CardTitle>
              <CardDescription>
                Real-time analysis and immediate performance insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Live coaching suggestions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Speech pattern analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Confidence tracking</span>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Goal-Oriented Training</CardTitle>
              <CardDescription>
                Customized preparation paths based on your target roles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Industry-specific scenarios</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Progressive skill building</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Career path guidance</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI vs Human Mentor Comparison */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">AI Mentor vs Traditional Coaching</h2>
            <p className="text-lg text-muted-foreground">
              See why AI-powered preparation is revolutionizing interview training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Mentor */}
            <Card className="card-hero text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Brain className="mr-2 h-6 w-6" />
                  AI Interview Buddy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Available 24/7</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Unlimited practice sessions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Consistent, unbiased feedback</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Instant detailed reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Scales with your progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm">Cost-effective solution</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Traditional Coaching */}
            <Card className="border-2 border-muted">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-muted-foreground">
                  <Users className="mr-2 h-6 w-6" />
                  Traditional Coaching
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Limited availability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Expensive hourly rates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Subjective feedback</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Scheduling conflicts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Inconsistent quality</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <X className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">Limited practice sessions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WhyUs;