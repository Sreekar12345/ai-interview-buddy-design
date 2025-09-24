import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      image: "/placeholder.svg",
      rating: 5,
      content: "AI Interview Buddy completely transformed my interview preparation. The AI feedback was incredibly detailed and helped me identify blind spots I never knew I had. Landed my dream job at Google!",
      improvement: "Interview confidence increased by 85%",
      beforeAfter: { before: "Nervous, unprepared", after: "Confident, well-structured answers" }
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "Microsoft",
      image: "/placeholder.svg",
      rating: 5,
      content: "The mock interviews felt so realistic that when I had my actual interviews, I was completely prepared. The performance analytics helped me focus on exactly what I needed to improve.",
      improvement: "Technical question success rate: 40% → 92%",
      beforeAfter: { before: "Struggled with technical PMs", after: "Aced system design questions" }
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Netflix",
      image: "/placeholder.svg",
      rating: 5,
      content: "I loved how the AI adapted to my skill level and gave me increasingly challenging questions. The detailed reports after each session were pure gold for improvement.",
      improvement: "Problem-solving speed improved by 60%",
      beforeAfter: { before: "Slow problem solving", after: "Quick, structured thinking" }
    },
    {
      name: "David Kim",
      role: "UX Designer",
      company: "Airbnb",
      image: "/placeholder.svg",
      rating: 5,
      content: "The variety of interview scenarios was impressive. From behavioral questions to design challenges, AI Interview Buddy covered everything I encountered in real interviews.",
      improvement: "Design challenge performance: 65% → 95%",
      beforeAfter: { before: "Unclear design process", after: "Systematic design thinking" }
    },
    {
      name: "Lisa Wang",
      role: "Marketing Manager",
      company: "Spotify",
      image: "/placeholder.svg",
      rating: 4,
      content: "As someone who gets nervous in interviews, the ability to practice unlimited times really helped build my confidence. The AI was patient and constructive.",
      improvement: "Reduced interview anxiety by 70%",
      beforeAfter: { before: "High anxiety, rambling", after: "Calm, concise responses" }
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      company: "Tesla",
      image: "/placeholder.svg",
      rating: 5,
      content: "The technical interview simulations were spot-on. I practiced system design and coding problems that were very similar to what I faced in actual interviews.",
      improvement: "System design scores improved 3x",
      beforeAfter: { before: "Weak system design", after: "Strong architectural thinking" }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Real Results from{" "}
            <span className="bg-gradient-to-r from-primary to-accent-bright bg-clip-text text-transparent">
              Real People
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how AI Interview Buddy has helped thousands of professionals land their dream jobs
            at top companies worldwide.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="card-elevated text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">10,000+</div>
              <p className="text-sm text-muted-foreground">Successful Placements</p>
            </CardContent>
          </Card>
          <Card className="card-elevated text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="card-elevated text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">85%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="card-elevated text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Partner Companies</p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="card-elevated">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <span className="font-medium">{testimonial.company}</span>
                    </CardDescription>
                    <div className="flex items-center space-x-1 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted opacity-20" />
                  <p className="text-sm leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-sm font-medium text-success">{testimonial.improvement}</span>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-3 space-y-2">
                    <h4 className="text-sm font-medium flex items-center">
                      <Briefcase className="mr-2 h-4 w-4" />
                      Transformation
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-destructive font-medium">Before:</span>
                        <p className="text-muted-foreground">{testimonial.beforeAfter.before}</p>
                      </div>
                      <div>
                        <span className="text-success font-medium">After:</span>
                        <p className="text-muted-foreground">{testimonial.beforeAfter.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Visualization */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Transformation Journey</h2>
            <p className="text-lg text-muted-foreground">
              See the typical journey our users experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="text-destructive">Before AI Interview Buddy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm">😰 High interview anxiety</div>
                  <div className="text-sm">🤷 Unclear answer structure</div>
                  <div className="text-sm">📉 Inconsistent performance</div>
                  <div className="text-sm">❌ Limited practice opportunities</div>
                  <div className="text-sm">🔍 No feedback mechanism</div>
                  <div className="text-sm">⏰ Last-minute preparation</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-success/20">
              <CardHeader>
                <CardTitle className="text-success">After AI Interview Buddy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="text-sm">😊 Confident and prepared</div>
                  <div className="text-sm">🎯 Structured, compelling answers</div>
                  <div className="text-sm">📈 Consistent high performance</div>
                  <div className="text-sm">♾️ Unlimited practice sessions</div>
                  <div className="text-sm">📊 Detailed analytics & feedback</div>
                  <div className="text-sm">🚀 Systematic preparation approach</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-12">
          <h2 className="text-3xl font-bold">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start your transformation today and become our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2">
              🎯 Free Mock Interview
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              📊 Instant Feedback
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              🚀 No Credit Card Required
            </Badge>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;