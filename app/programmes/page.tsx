"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { ProgramCard } from "@/components/sections/program-card";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  HeartPulse, 
  HandHeart, 
  Users, 
  Target, 
  Globe,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin
} from "lucide-react";

const programsOverview = [
  {
    title: "Northern Stars Mentorship",
    description: "Our flagship program connecting rural students in Northern Ghana with global mentors to unlock their potential and pursue higher education through one-on-one guidance and support.",
    icon: <GraduationCap className="h-8 w-8" />,
    href: "/programmes/northern-stars",
    stats: [
      { label: "Active Mentees", value: "75" },
      { label: "Success Rate", value: "92%" },
      { label: "Countries", value: "15" },
      { label: "Graduates", value: "45+" }
    ],
    features: [
      "One-on-one mentorship sessions",
      "Academic guidance and support",
      "University application assistance",
      "Scholarship opportunity guidance",
      "Life skills development",
      "Career planning support"
    ],
    impact: "Transforming educational outcomes for rural students",
    color: "bg-blue-500"
  },
  {
    title: "J&C Diabetes Outreach",
    description: "Honoring the memory of Charles and Juliet through comprehensive diabetes education, screening, and support services for communities across Northern Ghana.",
    icon: <HeartPulse className="h-8 w-8" />,
    href: "/programmes/diabetes-outreach",
    stats: [
      { label: "Screenings", value: "300+" },
      { label: "Lives Saved", value: "15" },
      { label: "Communities", value: "8" },
      { label: "Workshops", value: "24" }
    ],
    features: [
      "Free diabetes screening",
      "Health education workshops",
      "Blood pressure monitoring",
      "Nutrition counseling",
      "Medication support",
      "Follow-up care coordination"
    ],
    impact: "Preventing diabetes-related complications through early detection",
    color: "bg-red-500"
  },
  {
    title: "Community Giving",
    description: "Annual distribution of essential items and support to families in need, strengthening community bonds and providing immediate relief to vulnerable households.",
    icon: <HandHeart className="h-8 w-8" />,
    href: "/programmes/community-giving",
    stats: [
      { label: "Families Helped", value: "120" },
      { label: "Items Distributed", value: "500+" },
      { label: "Villages", value: "12" },
      { label: "Volunteers", value: "30+" }
    ],
    features: [
      "Essential item distribution",
      "Emergency assistance",
      "School supplies for children",
      "Food security support",
      "Clothing and household items",
      "Community development projects"
    ],
    impact: "Providing immediate relief and building stronger communities",
    color: "bg-green-500"
  }
];

const overallStats = [
  {
    end: 150,
    suffix: "+",
    label: "Lives Directly Impacted",
    description: "Individuals whose lives have been transformed"
  },
  {
    end: 8,
    label: "Communities Served",
    description: "Rural communities across Northern Ghana"
  },
  {
    end: 500,
    suffix: "+",
    label: "Program Participants",
    description: "Students, patients, and beneficiaries"
  },
  {
    end: 95,
    suffix: "%",
    label: "Community Satisfaction",
    description: "Positive feedback from program participants"
  }
];

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Programs"
        subtitle="Making a Difference"
        description="Three pillars of transformation: education, health, and community support working together to create lasting change in Northern Ghana"
        ctaButtons={[
          {
            text: "Get Involved",
            href: "/get-involved",
            variant: "primary"
          },
          {
            text: "Contact Us",
            href: "/contact",
            variant: "secondary"
          }
        ]}
        height="large"
      />

      {/* Overall Impact Statistics */}
      <section className="py-16 lg:py-24 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Our Collective Impact
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Together, our programs create a comprehensive support system that addresses education, 
              health, and community needs across Northern Ghana.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Our Three Pillars
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto">
              Each program addresses a critical need in Northern Ghana, working together to create 
              sustainable change and lasting impact.
            </p>
          </motion.div>

          <div className="space-y-16">
            {programsOverview.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content Side */}
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-3 bg-earthy-green/10 rounded-full text-earthy-green">
                            {program.icon}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-deep-charcoal">
                            {program.title}
                          </h3>
                        </div>

                        <p className="text-lg text-medium-gray mb-6 leading-relaxed">
                          {program.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-deep-charcoal mb-4">
                            Key Features:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {program.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-earthy-green flex-shrink-0" />
                                <span className="text-medium-gray text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-8">
                          <Badge className="bg-earthy-green/10 text-earthy-green border-earthy-green/20">
                            {program.impact}
                          </Badge>
                        </div>

                        <Button
                          asChild
                          size="lg"
                          className="bg-earthy-green hover:bg-earthy-green/90 text-white"
                        >
                          <Link href={program.href} className="flex items-center space-x-2">
                            <span>Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>

                      {/* Stats Side */}
                      <div className={`bg-warm-sand p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <h4 className="text-xl font-bold text-deep-charcoal mb-8 text-center">
                          Program Impact
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                          {program.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl md:text-3xl font-bold text-earthy-green mb-2">
                                {stat.value}
                              </div>
                              <div className="text-sm text-deep-charcoal font-medium">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Programs Work Together */}
      <section className="py-16 lg:py-24 bg-earthy-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Integrated Impact
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto">
              Our programs don't work in isolation. They create a comprehensive ecosystem of support 
              that addresses the interconnected challenges facing Northern Ghana's communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Holistic Support</h3>
              <p className="text-white/80 leading-relaxed">
                Students in our mentorship program also benefit from health screenings, 
                while their families may receive support through community giving initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainable Change</h3>
              <p className="text-white/80 leading-relaxed">
                By addressing education, health, and immediate needs simultaneously, 
                we create lasting change that breaks cycles of poverty and illness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="p-4 bg-white/10 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Strength</h3>
              <p className="text-white/80 leading-relaxed">
                Our programs strengthen entire communities by developing local leaders, 
                improving health outcomes, and fostering mutual support networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-medium-gray max-w-3xl mx-auto mb-8">
              Whether you want to mentor a student, support health initiatives, or contribute to 
              community giving, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-earthy-green hover:bg-earthy-green/90 text-white px-8 py-3"
              >
                <Link href="/get-involved" className="flex items-center space-x-2">
                  <span>Get Involved</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-earthy-green text-earthy-green hover:bg-earthy-green hover:text-white px-8 py-3"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 