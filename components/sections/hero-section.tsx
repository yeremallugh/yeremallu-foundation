"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  ctaButtons?: Array<{
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
  height?: "full" | "large" | "medium";
  overlay?: boolean;
  textAlign?: "left" | "center";
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  ctaButtons = [],
  height = "full",
  overlay = true,
  textAlign = "left",
}: HeroSectionProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  const textAlignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {backgroundVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        ) : backgroundImage ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-earthy-green via-earthy-green/90 to-deep-charcoal" />
        )}
        
        {/* Overlay */}
        {overlay && (
          <div className="absolute inset-0 bg-black/40" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${textAlign === "center" ? "mx-auto" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={textAlignClasses[textAlign]}
          >
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base font-medium text-soft-gold uppercase tracking-wider mb-4"
              >
                {subtitle}
              </motion.p>
            )}
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight text-balance"
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl text-balance"
              >
                {description}
              </motion.p>
            )}
            
            {ctaButtons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className={`flex flex-col sm:flex-row gap-4 ${textAlign === "center" ? "justify-center" : ""}`}
              >
                {ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    asChild
                    size="lg"
                    className={`group px-8 py-3 text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                      button.variant === "primary"
                        ? "bg-sunset-orange hover:bg-sunset-orange/90 text-white shadow-lg hover:shadow-xl"
                        : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-deep-charcoal"
                    }`}
                  >
                    <Link href={button.href} className="flex items-center space-x-2">
                      <span>{button.text}</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
} 