"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft,
  ArrowRight,
  Heart,
  Share2,
  Eye,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

// Sample blog data (same as in main blog page)
const blogPosts = [
  {
    id: 1,
    slug: "transforming-lives-through-mentorship",
    title: "Transforming Lives Through Mentorship: The Northern Stars Success Story",
    excerpt: "Discover how our flagship mentorship program is creating lasting change in the lives of students across Northern Ghana, connecting them with global mentors who believe in their potential.",
    content: `
      <p>The Northern Stars Mentorship Program has been at the heart of our mission since day one. What started as a simple idea to connect rural students with mentors has evolved into a comprehensive support system that's transforming lives across Northern Ghana.</p>
      
      <h2>The Challenge We Faced</h2>
      <p>In many rural communities of Northern Ghana, talented students face significant barriers to pursuing higher education. Limited access to guidance, lack of role models, and insufficient resources often prevent bright minds from reaching their full potential.</p>
      
      <p>When we first visited these communities, we met countless brilliant young people who had dreams of becoming doctors, engineers, teachers, and leaders, but lacked the guidance and support needed to turn those dreams into reality. The gap between potential and opportunity was heartbreaking.</p>
      
      <h2>Our Solution</h2>
      <p>The Northern Stars program bridges this gap by connecting students with mentors from around the world. These mentors provide not just academic guidance, but also emotional support, career advice, and most importantly, belief in their mentees' potential.</p>
      
      <p>Each mentorship relationship is carefully matched based on academic interests, career goals, and personality compatibility. Our mentors undergo comprehensive training to understand the cultural context and specific challenges their mentees face.</p>
      
      <h2>Real Impact Stories</h2>
      <p>Take Amina, a 17-year-old from Tamale who dreams of becoming a doctor. Through her mentor Sarah, a medical student in Canada, Amina has gained confidence in her abilities and clear direction for her future. Sarah helped Amina navigate the complex university application process and provided emotional support during challenging times.</p>
      
      <p>Or consider Kwame, who was struggling with mathematics until his mentor, a software engineer from Germany, introduced him to coding. Today, Kwame is not only excelling in math but has also developed a passion for computer science that's opening new possibilities for his future.</p>
      
      <h2>The Ripple Effect</h2>
      <p>The impact extends far beyond individual students. When these young people succeed, they become role models in their communities, inspiring other children to dream big and work hard. They also often return to give back, creating a cycle of positive change that continues to grow.</p>
      
      <h2>Looking Forward</h2>
      <p>As we continue to grow, our goal is to reach even more students and create a network of support that extends far beyond graduation. The Northern Stars program isn't just about education – it's about empowerment, hope, and building bridges across cultures.</p>
      
      <p>We're also developing an alumni network where former mentees can stay connected with each other and their mentors, and eventually become mentors themselves. This creates a sustainable ecosystem of support that can last for generations.</p>
    `,
    author: "Dr. Amina Hassan",
    authorRole: "Programs Director",
    authorBio: "Dr. Hassan leads our educational programs with over 15 years of experience in international development and education. She holds a PhD in Educational Psychology and is passionate about creating opportunities for underserved youth.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Mentorship",
    tags: ["Northern Stars", "Education", "Mentorship", "Success Stories"],
    image: "/api/placeholder/1200/600",
    featured: true,
    views: 1420,
    likes: 89
  },
  {
    id: 2,
    slug: "diabetes-awareness-rural-communities",
    title: "Breaking Barriers: Diabetes Awareness in Rural Communities",
    excerpt: "How the J&C Diabetes Outreach program is revolutionizing health education and screening in underserved areas, honoring the memory of Charles and Juliet while saving lives.",
    content: `
      <p>The J&C Diabetes Outreach program holds a special place in our hearts and work. Named in honor of Charles and Juliet, this initiative has become a beacon of hope for communities struggling with diabetes awareness and care.</p>
      
      <h2>The Growing Health Crisis</h2>
      <p>Diabetes is increasingly prevalent in Ghana, yet many rural communities lack access to proper screening, education, and treatment. The consequences of undiagnosed diabetes can be devastating for individuals and families.</p>
      
      <h2>Our Comprehensive Approach</h2>
      <p>Our outreach program doesn't just focus on screening – we provide comprehensive education about diabetes prevention, management, and the importance of regular health check-ups. We work closely with local health centers to ensure continuity of care.</p>
      
      <h2>Community Champions</h2>
      <p>We've trained local volunteers to become diabetes awareness champions in their communities. These individuals help us reach more people and ensure that health education continues long after our visits.</p>
      
      <h2>Measurable Impact</h2>
      <p>To date, we've conducted over 300 screenings and identified numerous cases of undiagnosed diabetes. More importantly, we've empowered communities with knowledge to prevent and manage this condition.</p>
    `,
    author: "Samuel Osei",
    authorRole: "Community Liaison",
    authorBio: "Samuel serves as our bridge between the foundation and local communities. Born and raised in Northern Ghana, he brings deep cultural understanding and community connections to our work.",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Health",
    tags: ["Diabetes", "Health Screening", "Community Outreach", "Prevention"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 892,
    likes: 67
  },
  {
    id: 3,
    slug: "power-of-community-giving",
    title: "The Power of Community Giving: Building Stronger Bonds",
    excerpt: "Explore how our annual community giving initiatives strengthen relationships, provide essential support, and create lasting positive change in Northern Ghana.",
    content: `
      <p>Community giving is more than just distributing items – it's about building relationships, understanding needs, and creating a foundation for sustainable development. Our annual giving program has become a cornerstone of community engagement.</p>
      
      <h2>Understanding Real Needs</h2>
      <p>We spend months before each distribution talking with community leaders, families, and individuals to understand their most pressing needs. This ensures our giving is targeted and meaningful.</p>
      
      <h2>Beyond Material Support</h2>
      <p>While we provide essential items like school supplies, clothing, and household goods, the real impact comes from the connections we build and the trust we establish within communities.</p>
      
      <h2>Sustainable Impact</h2>
      <p>Our giving program is designed to create ripple effects. When we support a child's education with supplies, we're investing in the future of the entire community. When we provide health-related items, we're promoting family wellness.</p>
      
      <h2>Community Ownership</h2>
      <p>We always work with local leaders and volunteers to ensure our initiatives are culturally appropriate and community-driven. This approach has led to lasting partnerships and sustainable change.</p>
    `,
    author: "Sarah Williams",
    authorRole: "International Relations",
    authorBio: "Sarah coordinates our international partnerships and volunteer programs. With a background in international relations and nonprofit management, she ensures our global connections strengthen local impact.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Community",
    tags: ["Community Giving", "Sustainability", "Partnerships", "Impact"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 756,
    likes: 45
  },
  {
    id: 4,
    slug: "cultural-bridge-building-through-education",
    title: "Cultural Bridge Building Through Education",
    excerpt: "How our programs create meaningful connections between cultures, fostering understanding and collaboration across continents while preserving local traditions.",
    content: `
      <p>One of the most beautiful aspects of our work is how it brings together people from different cultures and backgrounds. Our programs create bridges that span continents and create lasting friendships.</p>
      
      <h2>Learning Goes Both Ways</h2>
      <p>While our mentors provide guidance to students, they also learn immensely about Ghanaian culture, traditions, and perspectives. This exchange enriches everyone involved.</p>
      
      <h2>Preserving Cultural Identity</h2>
      <p>We're committed to ensuring that our programs strengthen rather than diminish local cultural identity. Students are encouraged to share their heritage and traditions with their mentors.</p>
      
      <h2>Global Perspectives</h2>
      <p>Our students gain exposure to global perspectives while remaining grounded in their own cultural values. This balance is crucial for developing well-rounded, confident global citizens.</p>
      
      <h2>Building Understanding</h2>
      <p>Through our programs, we're not just educating students – we're building cross-cultural understanding that breaks down barriers and creates lasting connections between communities worldwide.</p>
    `,
    author: "John Doe",
    authorRole: "Chairman",
    authorBio: "John founded the Yeremallu Foundation with a vision of connecting communities across the globe. His leadership experience spans both corporate and nonprofit sectors, focusing on sustainable development.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Culture",
    tags: ["Cultural Exchange", "Global Citizenship", "Traditions", "Understanding"],
    image: "/api/placeholder/1200/600",
    featured: true,
    views: 1156,
    likes: 78
  },
  {
    id: 5,
    slug: "volunteer-spotlight-making-difference",
    title: "Volunteer Spotlight: Making a Difference from Afar",
    excerpt: "Meet our incredible volunteers who are making a real impact in Northern Ghana from around the world, and learn how you can join this amazing community of changemakers.",
    content: `
      <p>Our volunteers are the backbone of everything we do. From mentors who spend hours each week guiding students to content creators who help us share our story, each volunteer makes a unique and valuable contribution.</p>
      
      <h2>Meet Our Volunteers</h2>
      <p>Maria, a software engineer from Spain, has been mentoring students for two years. Her technical expertise has helped several students pursue STEM careers. James, a retired teacher from Australia, brings decades of educational experience to our literacy programs.</p>
      
      <h2>Virtual Volunteering</h2>
      <p>Technology has enabled us to engage volunteers from around the world. Our virtual mentorship sessions, online workshops, and digital collaboration tools have made global volunteering more accessible than ever.</p>
      
      <h2>Skills-Based Volunteering</h2>
      <p>We match volunteers with opportunities that align with their skills and interests. Whether you're a professional in healthcare, education, technology, or any other field, there's a way for you to contribute meaningfully.</p>
      
      <h2>Building a Community</h2>
      <p>Our volunteers often form lasting friendships with each other and with the communities they serve. Annual volunteer gatherings and regular check-ins help maintain these important connections.</p>
    `,
    author: "Jane Smith",
    authorRole: "Secretary",
    authorBio: "Jane manages our volunteer coordination and administrative functions. Her organizational skills and passion for community building help create meaningful connections between volunteers and our mission.",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Volunteering",
    tags: ["Volunteers", "Remote Work", "Community", "Skills"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 634,
    likes: 52
  },
  {
    id: 6,
    slug: "sustainable-development-goals-alignment",
    title: "Aligning with Sustainable Development Goals",
    excerpt: "Discover how our programs directly contribute to the UN Sustainable Development Goals and our commitment to creating measurable, sustainable impact in Northern Ghana.",
    content: `
      <p>Our work is deeply aligned with the United Nations Sustainable Development Goals (SDGs). This alignment ensures that our efforts contribute to global development priorities while addressing local needs.</p>
      
      <h2>Quality Education (SDG 4)</h2>
      <p>Through the Northern Stars program, we're directly supporting quality education by providing mentorship, resources, and guidance to students who might otherwise lack access to educational support.</p>
      
      <h2>Good Health and Well-being (SDG 3)</h2>
      <p>Our diabetes outreach program contributes to better health outcomes by providing screening, education, and ongoing support for diabetes prevention and management.</p>
      
      <h2>Reduced Inequalities (SDG 10)</h2>
      <p>By focusing on underserved rural communities, we're working to reduce inequalities in access to education, healthcare, and opportunities for personal development.</p>
      
      <h2>Partnerships for Goals (SDG 17)</h2>
      <p>Our collaborative approach, working with local communities, international volunteers, and partner organizations, exemplifies the kind of partnerships needed to achieve the SDGs.</p>
      
      <h2>Measuring Impact</h2>
      <p>We continuously measure our progress against SDG indicators to ensure our work is making a meaningful contribution to global development goals while meeting local needs.</p>
    `,
    author: "Michael Johnson",
    authorRole: "Treasurer",
    authorBio: "Michael oversees our financial operations and impact measurement. With a background in finance and development economics, he ensures our resources are used effectively and transparently.",
    date: "2023-12-15",
    readTime: "8 min read",
    category: "Impact",
    tags: ["SDGs", "Sustainability", "Impact Measurement", "Global Goals"],
    image: "/api/placeholder/1200/600",
    featured: false,
    views: 445,
    likes: 34
  }
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category or similar tags)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = encodeURIComponent(post.title);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-sunset-orange text-white mb-4">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <span className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>{post.views} views</span>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-earthy-green/10 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-earthy-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-charcoal">{post.author}</h3>
                        <p className="text-sm text-medium-gray">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-medium-gray hover:!text-earthy-green"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-medium-gray hover:!text-earthy-green"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-deep-charcoal prose-headings:font-bold prose-p:text-medium-gray prose-p:leading-relaxed prose-a:text-earthy-green prose-a:no-underline hover:prose-a:underline prose-strong:text-deep-charcoal"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-deep-charcoal mb-4">Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-earthy-green border-earthy-green">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-8 sticky top-24"
                >
                  {/* Author Bio */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-deep-charcoal mb-3">About the Author</h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-earthy-green/10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-earthy-green" />
                        </div>
                        <div>
                          <p className="font-semibold text-deep-charcoal">{post.author}</p>
                          <p className="text-sm text-medium-gray">{post.authorRole}</p>
                        </div>
                      </div>
                      <p className="text-sm text-medium-gray leading-relaxed">
                        {post.authorBio}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Share Links */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-deep-charcoal mb-4">Share This Article</h3>
                      <div className="space-y-3">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-200 text-blue-600 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://facebook.com/sharer/sharer.php?u=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Facebook className="h-4 w-4 mr-2" />
                            Facebook
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-400 text-blue-500 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Twitter className="h-4 w-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-blue-700 text-blue-700 hover:!bg-blue-50"
                        >
                          <a
                            href={`https://linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-gray-400 text-gray-600 hover:!bg-gray-50"
                        >
                          <a
                            href={`mailto:?subject=${shareTitle}&body=Check out this article: ${shareUrl}`}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-deep-charcoal mb-4">Article Stats</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Views</span>
                          <span className="font-semibold text-deep-charcoal">{post.views}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Likes</span>
                          <span className="font-semibold text-deep-charcoal">{post.likes}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-medium-gray">Read Time</span>
                          <span className="font-semibold text-deep-charcoal">{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-4">
                Related Articles
              </h2>
              <p className="text-lg text-medium-gray">
                Continue exploring our impact stories and insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url(${relatedPost.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="outline" className="bg-white/90 text-deep-charcoal border-0">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-deep-charcoal mb-3 line-clamp-2 group-hover:text-earthy-green transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-medium-gray mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-medium-gray">
                        <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-earthy-green hover:!text-white hover:!bg-earthy-green p-2"
                        >
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button
              asChild
              variant="outline"
              className="border-earthy-green text-earthy-green hover:!bg-earthy-green hover:!text-white"
            >
              <Link href="/blog" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Blog</span>
              </Link>
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button
                asChild
                variant="outline"
                className="border-earthy-green text-earthy-green hover:!bg-earthy-green hover:!text-white"
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                asChild
                className="bg-sunset-orange hover:!bg-sunset-orange/90 text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 