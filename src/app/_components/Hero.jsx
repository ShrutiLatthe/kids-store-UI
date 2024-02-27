import React from "react";
import Category from "./Category";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Explore the Best Selling Products
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Welcome to WonderKids World – where every outfit is a ticket to
              adventure! Discover magical treasures and fashion fantasies that
              ignite your imagination. Whether you're a daring pirate, a
              graceful princess, or a fearless explorer, let your style shine at
              WonderKids World!
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <Category />
    </>
  );
};

export default Hero;
