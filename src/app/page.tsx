"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { BarChart3, Building2, Calendar, CreditCard, DollarSign, Dumbbell, Heart, MessageCircle, Rocket, Shield, Sparkles, TrendingUp, User, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="FitBooker"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Streamline Your Gym's Booking System"
          description="The all-in-one scheduling and payment platform designed specifically for local gyms and personal trainers. Manage bookings, process payments, and grow your fitness business effortlessly."
          tag="For Fitness Professionals"
          tagIcon={Dumbbell}
          buttons={[
            {
              text: "Start Free Trial",
              href: "contact"
            },
            {
              text: "See How It Works",
              href: "feature"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/3912977/pexels-photo-3912977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We understand the challenges of running a fitness business. That's why we built FitBooker to handle your scheduling, payments, and member management so you can focus on what you do best - helping people achieve their fitness goals."
          buttons={[
            {
              text: "Learn More",
              href: "feature"
            }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Everything You Need to Run Your Fitness Business"
          description="Powerful features designed specifically for gyms, studios, and personal trainers"
          tag="Features"
          tagIcon={Zap}
          features={[
            {
              title: "Smart Scheduling",
              description: "Easy-to-use booking system that lets clients schedule sessions 24/7 while preventing double bookings and managing your availability automatically.",
              icon: Calendar,
              button: {
                text: "Learn More",
                href: "#scheduling"
              }
            },
            {
              title: "Secure Payments",
              description: "Process payments instantly with our integrated payment system. Support for subscriptions, packages, and one-time sessions with automatic invoicing.",
              icon: CreditCard,
              button: {
                text: "View Pricing",
                href: "pricing"
              }
            },
            {
              title: "Business Analytics",
              description: "Track your revenue, client retention, and booking patterns with detailed reports that help you make data-driven decisions for your business.",
              icon: BarChart3,
              button: {
                text: "See Demo",
                href: "#analytics"
              }
            },
            {
              title: "Client Management",
              description: "Maintain detailed client profiles, track progress, manage memberships, and send automated reminders to keep your clients engaged.",
              icon: Users,
              button: {
                text: "Explore",
                href: "#clients"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Choose the Perfect Plan for Your Business"
          description="Flexible pricing options that grow with your fitness business"
          tag="Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Perfect for Solo Trainers",
              badgeIcon: User,
              price: "$29/month",
              subtitle: "Everything you need to get started",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#starter"
                }
              ],
              features: [
                "Up to 100 bookings per month",
                "Basic scheduling system",
                "Payment processing",
                "Email notifications",
                "Mobile app access"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$79/month",
              subtitle: "Perfect for growing gyms and studios",
              buttons: [
                {
                  text: "Start Free Trial",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "#demo"
                }
              ],
              features: [
                "Unlimited bookings",
                "Advanced scheduling features",
                "Payment processing + subscriptions",
                "Analytics and reporting",
                "Client management tools",
                "Custom branding",
                "Email & SMS notifications"
              ]
            },
            {
              id: "enterprise",
              badge: "Best Value",
              badgeIcon: Building2,
              price: "$149/month",
              subtitle: "For multi-location fitness businesses",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "View Features",
                  href: "#enterprise"
                }
              ],
              features: [
                "Everything in Professional",
                "Multi-location management",
                "Staff management tools",
                "Advanced reporting",
                "API access",
                "Priority support",
                "Custom integrations"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Trusted by Fitness Professionals Everywhere"
          description="Join thousands of gyms and trainers who have transformed their business with FitBooker"
          tag="Results"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "5,000+",
              title: "Active Users",
              description: "Gyms and trainers using FitBooker daily",
              icon: Users
            },
            {
              id: "2",
              value: "2M+",
              title: "Bookings Processed",
              description: "Successful appointments scheduled through our platform",
              icon: Calendar
            },
            {
              id: "3",
              value: "99.9%",
              title: "Uptime",
              description: "Reliable service your clients can count on",
              icon: Shield
            },
            {
              id: "4",
              value: "$50M+",
              title: "Revenue Processed",
              description: "Total payments handled for our fitness partners",
              icon: DollarSign
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Are Saying"
          description="Real feedback from gym owners and trainers using FitBooker"
          tag="Testimonials"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Gym Owner, FitZone Studio",
              testimonial: "FitBooker has completely transformed how we handle bookings. Our clients love the easy scheduling, and we've reduced no-shows by 60% with automated reminders.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Building2
            },
            {
              id: "2",
              name: "Mike Thompson",
              role: "Personal Trainer",
              testimonial: "The payment integration is seamless. I used to spend hours chasing payments, now everything is automated. My income has increased 40% since switching to FitBooker.",
              imageSrc: "https://images.pexels.com/photos/6456299/pexels-photo-6456299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: CreditCard
            },
            {
              id: "3",
              name: "Jessica Chen",
              role: "Studio Manager, Yoga Bliss",
              testimonial: "The analytics dashboard gives us incredible insights into our business. We can see booking patterns, popular classes, and optimize our schedule for maximum revenue.",
              imageSrc: "https://images.pexels.com/photos/5647227/pexels-photo-5647227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: BarChart3
            },
            {
              id: "4",
              name: "David Rodriguez",
              role: "CrossFit Box Owner",
              testimonial: "Customer support is outstanding. When we had questions during setup, the team was there every step of the way. Our members adapted to the new system immediately.",
              imageSrc: "https://images.pexels.com/photos/7552374/pexels-photo-7552374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about FitBooker"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "How quickly can I set up FitBooker for my gym?",
              content: "Most gyms are up and running within 24 hours. Our setup wizard guides you through the process, and our support team is available to help with any questions during onboarding."
            },
            {
              id: "2",
              title: "Do my clients need to download an app?",
              content: "While we offer a mobile app for the best experience, your clients can also book and manage appointments through our web platform using any browser."
            },
            {
              id: "3",
              title: "What payment methods do you support?",
              content: "We support all major credit cards, debit cards, and digital wallets. Payments are processed securely through our PCI-compliant payment gateway."
            },
            {
              id: "4",
              title: "Can I customize the booking system for my brand?",
              content: "Yes! Professional and Enterprise plans include custom branding options where you can add your logo, colors, and customize the booking flow to match your brand."
            },
            {
              id: "5",
              title: "What if I need to cancel my subscription?",
              content: "You can cancel anytime with 30 days notice. We'll help you export your data and ensure a smooth transition. No long-term contracts required."
            },
            {
              id: "6",
              title: "Do you offer customer support?",
              content: "Yes! We provide email support for all plans, with priority phone support available for Professional and Enterprise customers. Our team is here to help you succeed."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          tagIcon={Rocket}
          title="Ready to Transform Your Fitness Business?"
          description="Start your free trial today and see how FitBooker can streamline your scheduling, boost your revenue, and help you focus on what matters most - your clients."
          imageSrc="https://images.pexels.com/photos/3912977/pexels-photo-3912977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          inputPlaceholder="Enter your email"
          buttonText="Start Free Trial"
          termsText="No credit card required. 14-day free trial with full access to all features."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Features",
                  href: "feature"
                },
                {
                  label: "Pricing",
                  href: "pricing"
                },
                {
                  label: "Security",
                  href: "#security"
                },
                {
                  label: "Updates",
                  href: "#updates"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Careers",
                  href: "#careers"
                },
                {
                  label: "Blog",
                  href: "#blog"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Help Center",
                  href: "#help"
                },
                {
                  label: "Documentation",
                  href: "#docs"
                },
                {
                  label: "API",
                  href: "#api"
                },
                {
                  label: "System Status",
                  href: "#status"
                }
              ]
            }
          ]}
          copyrightText="© 2025 FitBooker | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}