"use client";
import Contacts from "@/components/Contacts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <section className="bg-white w-full text-slate-950 min-h-[200vh]">
      <div className="mx-4 xl:mx-auto max-w-7xl py-4 lg:py-12">
        <Link
          href="/"
          aria-label="back to homepage"
          title="homepage"
          className="fixed right-4 bottom-4 md:top-4 md:right-8 lg:right-12"
        >
          <Image src="/logo-192x192.webp" width={54} height={54} alt="logo" />
        </Link>
        <div className="flex flex-col lg:flex-row gap:4 lg:gap-9">
          <div className="images basis-1/3">
            <div className="lg:fixed lg:top-12 lg:left-auto w-[calc(100% - 32px)] lg:max-w-xs xl:max-w-sm">
              <Image
                src="/CloudCostImage.webp"
                alt="Cloud Cost Image"
                width={400}
                height={300}
              />
              <p className="text-sm text-slate-400 mt-2">
                For informational purposes only. Nothing in this article should
                be construed as investment advice.{" "}
                <a href="/" className="underline">
                  See Disclaimers
                </a>
              </p>
              <Contacts color="black" classNameWrapper="mt-2 !justify-start" />
            </div>
          </div>
          <div className="blog basis-2/3">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">
              Increasing Margins through Multi-Layer Cloud Cost Optimization
            </h1>
            <p className="text-sm text-slate-400 mt-2 mb-4">
              [PLACEHOLDER TEXT] Songster Capital’s technology growth strategy
              provides stage-agnostic support to privately held cloud-native
              businesses. We engage in direct investments, co-investments, and
              secondary market transactions within the artificial intelligence,
              quantum computing, fintech, and enterprise B2B SaaS sub-sectors.
              We have decades of experience working in the startup ecosystem.
              Our team has operated on both sides of the fence – at early-stage
              startups building on the cloud and in the industry’s largest
              public cloud providers. We bring deep sector expertise, unique
              industry insights, and a global network across the cloud computing
              ecosystem to every founder, investor, and business that we partner
              with.
            </p>
            <p className="text-sm text-slate-400">
              Songster Capital’s technology growth strategy provides
              stage-agnostic support to privately held cloudnative businesses.
              We engage in direct investments, co-investments, and secondary
              market transactions within the artificial intelligence, quantum
              computing, fintech, and enterprise B2B SaaS sub-sectors. We have
              decades of experience working in the startup ecosystem. Our team
              has operated on both sides of the fence – at early-stage startups
              building on the cloud and in the industry’s largest public cloud
              providers. We bring deep sector expertise, unique industry
              insights, and a global network across the cloud computing
              ecosystem to every founder, investor, and business that we partner
              with. Songster Capital’s technology growth strategy provides
              stage-agnostic support to privately held cloud-native businesses.
              We engage in direct investments, co-investments, and secondary
              market transactions within the artificial intelligence, quantum
              computing, fintech, and enterprise B2B SaaS sub-sectors. We have
              decades of experience working in the startup ecosystem. Our team
              has operated on both sides of the fence – at early-stage startups
              building on the cloud and in the industry’s largest public cloud
              providers. We bring deep sector expertise, unique industry
              insights, and a global network across the cloud computing
              ecosystem to every founder, investor, and business that we partner
              with.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
