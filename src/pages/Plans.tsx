import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Building, Calendar, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";

const Plans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <Badge variant="outline" className="mb-4">Upcoming Features</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
              Career Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building a complete career development ecosystem. Here's what's coming next.
          </p>
        </div>

        {/* Current vs Upcoming Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Product Roadmap</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Current Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Badge variant="default">Current Features</Badge>
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              
              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>AI Mock Interviews</CardTitle>
                  <CardDescription>Practice with our advanced AI interviewer</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Role-specific questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Real-time feedback</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Performance analytics</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardHeader>
                  <CardTitle>Performance Reports</CardTitle>
                  <CardDescription>Detailed analysis of your interview skills</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Communication scoring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Improvement recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Progress tracking</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">Coming Soon</Badge>
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    Resume Builder
                    <Badge variant="secondary" className="ml-2">Q2 2024</Badge>
                  </CardTitle>
                  <CardDescription>Professional resume creation and optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">ATS-optimized templates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">Skills matching algorithm</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">One-click export to multiple formats</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    HR Collaborations
                    <Badge variant="secondary" className="ml-2">Q3 2024</Badge>
                  </CardTitle>
                  <CardDescription>Direct connections with hiring partners</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">Exclusive job postings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">Fast-track applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-4 w-4 rounded-full border-2 border-muted" />
                    <span className="text-sm">Direct hiring manager feedback</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* HR Collaboration Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Partnership Pipeline</h2>
            <p className="text-lg text-muted-foreground">
              Connecting talent with opportunity through strategic HR partnerships
            </p>
          </div>

          <Card className="card-hero text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Building className="mr-3 h-6 w-6" />
                How HR Collaborations Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto">
                    <Building className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">1. Companies Post Jobs</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Partner companies share exclusive opportunities with our platform
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">2. Smart Matching</h3>
                  <p className="text-sm text-primary-foreground/80">
                    AI matches your skills and interview performance with relevant roles
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">3. Direct Forwarding</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Your optimized profile gets sent directly to hiring managers
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Partner Companies Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Tech Startups", count: "50+", location: "San Francisco, NYC" },
              { name: "Fortune 500", count: "25+", location: "Global" },
              { name: "Mid-size Companies", count: "100+", location: "Remote & On-site" },
            ].map((partner, i) => (
              <Card key={i} className="card-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    {partner.name}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="outline">{partner.count} Partners</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{partner.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Begin with mock interviews today and unlock advanced features as we roll them out.
          </p>
          <Button size="lg" className="btn-primary">
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Plans;