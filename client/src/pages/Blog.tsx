import { GlowCard } from "@/components/ui/glow-card";
import { GlowButton } from "@/components/ui/glow-button";
import { GradientText } from "@/components/ui/gradient-text";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of IT Infrastructure: Trends for 2024",
      excerpt: "Explore the latest trends shaping IT infrastructure, from edge computing to sustainable technology practices.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      category: "Infrastructure",
      readTime: "5 min read",
      image: "📊"
    },
    {
      title: "Cybersecurity in the Age of Remote Work",
      excerpt: "How to protect your organization when employees work from anywhere. Essential security strategies and tools.",
      author: "Michael Chen", 
      date: "March 10, 2024",
      category: "Security",
      readTime: "7 min read",
      image: "🔒"
    },
    {
      title: "Cloud Migration: Common Pitfalls and How to Avoid Them",
      excerpt: "Learn from real-world experiences and avoid the most common mistakes organizations make during cloud migration.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      category: "Cloud",
      readTime: "6 min read",
      image: "☁️"
    },
    {
      title: "AI and Machine Learning in Business Operations",
      excerpt: "Practical applications of AI and ML that are transforming how businesses operate and compete.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      category: "Innovation",
      readTime: "8 min read",
      image: "🤖"
    },
    {
      title: "HIPAA Compliance: A Complete Guide for Healthcare IT",
      excerpt: "Everything healthcare organizations need to know about maintaining HIPAA compliance in their IT systems.",
      author: "Michael Chen",
      date: "February 20, 2024",
      category: "Compliance",
      readTime: "10 min read",
      image: "🏥"
    },
    {
      title: "Digital Transformation ROI: Measuring Success",
      excerpt: "Key metrics and strategies for measuring the return on investment of your digital transformation initiatives.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      category: "Strategy",
      readTime: "5 min read",
      image: "📈"
    }
  ];

  const categories = ["All", "Infrastructure", "Security", "Cloud", "Innovation", "Compliance", "Strategy"];
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-nb-bg pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nb-primary/20 to-nb-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sora font-bold text-4xl sm:text-5xl lg:text-6xl mb-6" data-testid="blog-hero-title">
            Tech <GradientText>Insights</GradientText> & Updates
          </h1>
          <p className="text-xl text-nb-muted max-w-3xl mx-auto" data-testid="blog-hero-subtitle">
            Stay ahead of the curve with expert insights, industry trends, and practical advice from our team
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sora font-bold text-2xl mb-8 text-nb-text" data-testid="blog-featured-title">Featured Article</h2>
          <GlowCard className="p-8 hover:scale-105 transition-all duration-300" data-testid="blog-featured-post">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-nb-primary/20 text-nb-primary rounded-full text-sm font-medium" data-testid="blog-featured-category">
                    {featuredPost.category}
                  </span>
                  <span className="text-nb-muted text-sm" data-testid="blog-featured-readtime">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="font-sora font-bold text-2xl mb-4 text-nb-text" data-testid="blog-featured-post-title">
                  {featuredPost.title}
                </h3>
                
                <p className="text-nb-muted mb-6 leading-relaxed" data-testid="blog-featured-excerpt">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-brand rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{featuredPost.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-medium text-nb-text" data-testid="blog-featured-author">{featuredPost.author}</p>
                      <p className="text-sm text-nb-muted" data-testid="blog-featured-date">{featuredPost.date}</p>
                    </div>
                  </div>
                  <GlowButton variant="secondary" data-testid="blog-featured-read-more">
                    Read More
                  </GlowButton>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-full h-64 bg-gradient-to-br from-nb-primary/10 to-nb-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-6xl">{featuredPost.image}</span>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center" data-testid="blog-category-filter">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-nb-primary text-white' 
                    : 'bg-nb-surface border border-nb-primary/20 text-nb-muted hover:border-nb-primary hover:text-nb-primary'
                }`}
                data-testid={`blog-category-${index}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <GlowCard key={post.title} className="p-6 hover:scale-105 transition-all duration-300" data-testid={`blog-post-card-${index}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-nb-primary/20 text-nb-primary rounded-full text-sm font-medium" data-testid={`blog-post-category-${index}`}>
                    {post.category}
                  </span>
                  <span className="text-nb-muted text-sm" data-testid={`blog-post-readtime-${index}`}>{post.readTime}</span>
                </div>

                <div className="w-full h-40 bg-gradient-to-br from-nb-primary/10 to-nb-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-4xl">{post.image}</span>
                </div>
                
                <h3 className="font-sora font-bold text-lg mb-3 text-nb-text" data-testid={`blog-post-title-${index}`}>
                  {post.title}
                </h3>
                
                <p className="text-nb-muted mb-4 leading-relaxed text-sm" data-testid={`blog-post-excerpt-${index}`}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{post.author.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-nb-text" data-testid={`blog-post-author-${index}`}>{post.author}</p>
                      <p className="text-xs text-nb-muted" data-testid={`blog-post-date-${index}`}>{post.date}</p>
                    </div>
                  </div>
                  <GlowButton variant="secondary" size="sm" data-testid={`blog-post-read-more-${index}`}>
                    Read
                  </GlowButton>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}