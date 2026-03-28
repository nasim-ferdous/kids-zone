import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUserEdit, FaArrowRight, FaTag } from "react-icons/fa";

const BlogsPage = () => {
  const blogs = [
    {
      _id: "1",
      title: "10 Educational Toys to Boost Your Child's IQ",
      excerpt:
        "Discover the best toys that combine fun with critical thinking and problem-solving skills for toddlers...",
      author: "Dr. Sarah",
      date: "March 15, 2026",
      category: "Learning",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    },
    {
      _id: "2",
      title: "Why Wooden Toys are Better than Plastic",
      excerpt:
        "Exploring the environmental and developmental benefits of choosing sustainable wooden playthings...",
      author: "John Parent",
      date: "March 12, 2026",
      category: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800",
    },
    {
      _id: "3",
      title: "Setting Up the Perfect Playroom",
      excerpt:
        "A guide to organizing your child's space to encourage independent play and creativity...",
      author: "Emily Decor",
      date: "March 10, 2026",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1596443686812-2f45229eebc3?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-base-50">
      {/* Header Section */}
      <header className="bg-white pt-16 pb-12 border-b border-base-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            Kids Zone Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-neutral uppercase tracking-tighter">
            Parenting <span className="text-primary">&</span> Play Blog
          </h1>
          <p className="mt-4 text-neutral/50 font-medium max-w-2xl mx-auto italic">
            Expert advice, toy reviews, and creative ideas to help your little
            ones grow through play.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Post (Optional but Professional) */}
        <div className="relative group mb-16 overflow-hidden rounded-[2.5rem] bg-neutral text-neutral-content shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
            <Image
              src={blogs[0].image}
              alt="Featured"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
          </div>
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="badge badge-primary font-bold mb-4 uppercase tracking-widest">
              {blogs[0].category}
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
              {blogs[0].title}
            </h2>
            <p className="text-neutral-content/70 mb-8 line-clamp-3">
              {blogs[0].excerpt}
            </p>
            <div className="flex items-center gap-6 text-sm mb-8 opacity-60">
              <span className="flex items-center gap-2">
                <FaUserEdit className="text-primary" /> {blogs[0].author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" /> {blogs[0].date}
              </span>
            </div>
            <Link
              href={`/products`}
              className="btn btn-primary rounded-full px-8 w-fit group/btn"
            >
              Read Featured Story{" "}
              <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Grid */}
        <h3 className="text-2xl font-black text-neutral mb-8 uppercase tracking-tight flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          Recent Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog) => (
            <article
              key={blog._id}
              className="bg-white rounded-[2rem] border border-base-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 badge badge-white border-none font-bold shadow-sm">
                  {blog.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral/40 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTag /> {blog.category}
                  </span>
                </div>
                <h4 className="text-xl font-black text-neutral leading-tight mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h4>
                <p className="text-neutral/50 text-sm line-clamp-3 mb-6 flex-1 italic">
                  {blog.excerpt}
                </p>
                <Link
                  href={`/products`}
                  className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary hover:gap-4 transition-all"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogsPage;
