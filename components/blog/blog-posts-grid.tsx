"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

// Blog post data structure - Placeholder posts
const blogPosts = [
  {
    id: 1,
    title: "Coming Soon",
  },
  {
    id: 2,
    title: "Coming Soon",
  },
  {
    id: 3,
    title: "Coming Soon",
  },
];

export function BlogPostsGrid() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Latest Posts
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Insights and updates from the withbooster team
          </p>
        </div>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* Note for automation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-8 text-center"
      >
        <div className="mx-auto max-w-2xl">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h3 className="mb-2 text-xl font-bold text-slate-900">
            Blog Automation Ready
          </h3>
          <p className="text-sm text-slate-600">
            This blog structure is ready for your automation tool. Blog posts can be added 
            programmatically by updating the data source or connecting to a CMS/API.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function BlogPostCard({ post, index }: { post: typeof blogPosts[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <BookOpen className="mx-auto mb-2 h-12 w-12 text-slate-400" />
            <p className="text-xs text-slate-500">Featured Image</p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="flex flex-1 flex-col items-center justify-center p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-600">
          {post.title}
        </h3>
      </div>
    </motion.div>
  );
}

