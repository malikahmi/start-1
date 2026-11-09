// Server-side per-route meta injection — runs at Netlify's CDN edge.
// Fixes: crawlers (Google, GPTBot, ClaudeBot, PerplexityBot) receive correct
// canonical, title, and OG tags in raw HTML without executing JavaScript.
const META = {
  "/": {
    "t": "eCeez | Shopify Growth Engineering & Technical SEO",
    "d": "eCeez builds high-performance Shopify storefronts, technical ecommerce SEO, CRO, and automation for DTC brands."
  },
  "/services": {
    "t": "Services | eCeez \u2014 Shopify Development, SEO & CRO",
    "d": "Explore eCeez services: Shopify store setup, ecommerce SEO, conversion rate optimization, analytics, and automation for growing brands."
  },
  "/seo": {
    "t": "Shopify SEO Agency | Technical Search Services | eCeez",
    "d": "Technical SEO, topical authority, and schema engineering for Shopify stores. Rank higher and convert organic traffic with eCeez."
  },
  "/shopify-web-development": {
    "t": "Shopify Web Development Services | eCeez",
    "d": "Expert Shopify web development from a team running its own store. Custom themes, app integration, speed, and SEO."
  },
  "/shopify-speed-optimization": {
    "t": "Shopify Speed Optimization & Web Vitals | eCeez",
    "d": "Speed up your Shopify store and pass Core Web Vitals. Image optimization, app cleanup, critical CSS, and script deferral that lift conversions."
  },
  "/shopify-maintenance": {
    "t": "Shopify Maintenance & Support Plans | eCeez",
    "d": "Monthly Shopify maintenance: updates, bug fixes, app monitoring, security checks, backups, and emergency support."
  },
  "/shopify-migration": {
    "t": "Shopify Migration Services | eCeez",
    "d": "Migrate to Shopify from WooCommerce, Magento, Wix, Squarespace, or BigCommerce without losing rankings or data. Full 301 redirect mapping."
  },
  "/shopify-theme-customization": {
    "t": "Shopify Theme Customization Services | eCeez",
    "d": "Custom Shopify theme development: bespoke homepages, product pages, mega menus, cart drawers, and Online Store 2.0 sections."
  },
  "/shopify-plus-development": {
    "t": "Shopify Plus Enterprise Development | eCeez",
    "d": "Shopify Plus engineering: Checkout Extensibility, Shopify Functions, B2B wholesale, Flow automation, Launchpad, and Markets."
  },
  "/shopify-app-development": {
    "t": "Custom Shopify App Development Services | eCeez",
    "d": "Custom Shopify apps and integrations: ERP, CRM, inventory, shipping, subscriptions, loyalty, and dashboards on the GraphQL Admin API."
  },
  "/shopify-cro": {
    "t": "Shopify CRO & Conversion Rate Agency | eCeez",
    "d": "Shopify-specific CRO: heatmaps, session recordings, A/B testing, checkout and product page optimization that turn traffic into revenue."
  },
  "/case-studies/swolverine": {
    "t": "Swolverine: Sports Supplement Shopify Case Study | eCeez",
    "d": "How we built Swolverine \u2014 a sports nutrition Shopify store with goal-based navigation, stack bundling, subscriptions, a B2B wholesale portal, and 130+ markets."
  },
  "/case-studies/volvik": {
    "t": "Volvik USA: Golf Brand Shopify Case Study | eCeez",
    "d": "How we built Volvik USA \u2014 a golf equipment Shopify store with performance-based ball taxonomy, licensed collections, personalization, and a dealer network."
  },
  "/case-studies/tropez-official": {
    "t": "Tropez Official: Premium Fashion Shopify Case Study | eCeez",
    "d": "How we built Tropez Official \u2014 a UK premium fashion Shopify store with drop-based merchandising, an AOV-driving cart drawer, and worldwide market coverage."
  },
  "/case-studies/oddli": {
    "t": "Oddli: DTC Fashion Brand Shopify Case Study | eCeez",
    "d": "How we built Oddli \u2014 a design-led DTC fashion Shopify store with a minimal editorial storefront, transparency-first content, and community-driven merchandising."
  },
  "/case-studies/labozero": {
    "t": "Labozero: Italian Streetwear Shopify Case Study | eCeez",
    "d": "How we built Labozero \u2014 an Italian multi-brand streetwear and sneaker Shopify store with 40+ brand architecture and 30 European markets."
  },
  "/case-studies/express-wholesalers": {
    "t": "Express Wholesalers: B2B Produce Website Case Study | eCeez",
    "d": "How we worked on Express Wholesalers \u2014 a B2B fresh produce wholesale website for a Sydney Markets providore supplying restaurants and commercial kitchens."
  },
  "/case-studies/meows-cat-health": {
    "t": "Meows Cat Health: DTC Supplement Store Case Study | eCeez",
    "d": "How we built Meows Cat Health — a conversion-focused Shopify DTC supplement store with subscriptions, review automation, and 100+ international markets."
  },
  "/case-studies/wrestlingmart": {
    "t": "WrestlingMart: Large-Catalog Shopify Case Study | eCeez",
    "d": "How we built WrestlingMart — a large-catalog Shopify store with brand-and-age mega navigation, custom team gear configurators, and 1,100+ reviews."
  },
  "/case-studies/aoap-projects": {
    "t": "AOAP Projects: Art Gallery Shopify Case Study | eCeez",
    "d": "How we built AOAP Projects — a contemporary art Shopify store handling 288-work exhibitions, artist editorial, and charitable partnerships with the RSA."
  },
  "/case-studies/east-and-south-interiors": {
    "t": "East & South Interiors: Furniture Shopify Case Study | eCeez",
    "d": "How we built East and South Interiors — a Shopify furniture and home decor store bridging an online catalog with a physical showroom and appointment sales."
  },
  "/case-studies/nishiyama-ramen": {
    "t": "Nishiyama Ramen: B2B Bilingual Website Case Study | eCeez",
    "d": "How we built the European site for Sapporo Nishiyama — a bilingual JA/EN B2B lead-generation website for a 70-year-old Japanese ramen noodle manufacturer."
  },
  "/shopify-custom-liquid-development": {
    "t": "Shopify Custom Liquid Development | Bespoke Theme Code | eCeez",
    "d": "Custom Shopify Liquid development: bespoke Online Store 2.0 sections, metafield-driven content, app replacement, and upgrade-safe theme logic. Code you own."
  },
  "/shopify-headless-commerce": {
    "t": "Shopify Headless Commerce | Hydrogen & Storefront API | eCeez",
    "d": "Shopify headless commerce with Hydrogen and the Storefront API: maximum performance and design freedom, Shopify checkout retained. Honest headless-vs-theme advice."
  },
  "/shopify-for-fashion-brands": {
    "t": "Shopify for Fashion Brands | Apparel Store Development | eCeez",
    "d": "Shopify development for fashion and apparel brands: editorial storefronts, sizing UX, drop merchandising, and conversion-focused product pages."
  },
  "/shopify-for-jewelry-stores": {
    "t": "Shopify for Jewelry Stores | Fine Jewelry Ecommerce | eCeez",
    "d": "Shopify development for jewelry brands: luxury storefronts, detail-driven photography, personalization, and trust architecture."
  },
  "/shopify-for-perfume-brands": {
    "t": "Shopify for Perfume & Fragrance Brands | eCeez",
    "d": "Shopify development for perfume and fragrance brands: scent storytelling, samples, scent-family merchandising, and repeat-purchase flows."
  },
  "/shopify-for-supplement-brands": {
    "t": "Shopify for Supplement Brands | Nutrition Ecommerce | eCeez",
    "d": "Shopify development for supplement and nutrition brands: evidence-first pages, subscriptions, stack bundling, and trust architecture."
  },
  "/shopify-for-beauty-brands": {
    "t": "Shopify for Beauty & Skincare Brands | eCeez",
    "d": "Shopify development for beauty and skincare brands: education-led pages, ingredient transparency, subscriptions, and mobile-first conversion."
  },
  "/shopify-for-electronics-brands": {
    "t": "Shopify for Electronics & Tech Brands | eCeez",
    "d": "Shopify development for electronics brands: spec-driven pages, comparison tools, warranty trust, and considered-purchase UX."
  },
  "/shopify-for-furniture-brands": {
    "t": "Shopify for Furniture & Home Brands | eCeez",
    "d": "Shopify development for furniture and home brands: showroom-hybrid architecture, special orders, and considered-purchase UX."
  },
  "/shopify-for-food-and-beverage-brands": {
    "t": "Shopify for Food & Beverage Brands | eCeez",
    "d": "Shopify development for food and beverage brands: subscriptions, sourcing trust, bundles, and DTC or B2B ordering."
  },
  "/woocommerce-development": {
    "t": "WooCommerce Development | Custom Builds & Optimization | eCeez",
    "d": "WooCommerce development: custom WordPress/WooCommerce builds, performance and security hardening, custom plugins, and expert WooCommerce-to-Shopify migration."
  },
  "/shopify-seo": {
    "t": "Shopify SEO Services | Rank & Grow Organic Revenue | eCeez",
    "d": "Technical and content Shopify SEO: site architecture, Core Web Vitals, structured data, collection and product optimization, and AI-search readiness. Free audit."
  },
  "/tools/shopify-launch-checklist": {
    "t": "Shopify Launch Checklist 2026 (62 Points, Free Tool) | eCeez",
    "d": "Free interactive Shopify launch checklist: 62 pre-launch checks across products, payments, shipping, SEO, speed and analytics. Track progress, no signup needed."
  },
  "/tools/shopify-conversion-calculator": {
    "t": "Free Shopify Conversion Rate ROI Calculator | eCeez",
    "d": "See how much extra monthly and annual revenue a higher conversion rate would generate for your Shopify store. Free, no signup required."
  },
  "/shopify-development-company": {
    "t": "Shopify Development Company | Custom Store Experts | eCeez",
    "d": "eCeez is a Shopify development company engineering custom high-performance storefronts, technical SEO, CRO, apps, and Shopify Plus. We run our own 9,000-product store."
  },
  "/ecommerce-ux": {
    "t": "Ecommerce UX: The Definitive 2026 Guide | eCeez",
    "d": "The complete ecommerce UX guide for 2026 — customer journey, homepage, navigation, product pages, checkout, mobile, accessibility, psychology, and the ECEEZ UX Flywheel framework."
  },
  "/cro": {
    "t": "Ecommerce CRO Agency | Conversion Rate Optimization | eCeez",
    "d": "Data-backed CRO for Shopify: A/B testing, checkout optimization, and user journey audits that raise revenue per visitor."
  },
  "/shopify-store-setup-service": {
    "t": "Shopify Store Setup Service | Custom Store Development | eCeez",
    "d": "High-converting Shopify stores built fast: custom design, catalog import, SEO-ready structure. Launch with eCeez."
  },
  "/website-development-for-businesses": {
    "t": "Website Development for Businesses | eCeez",
    "d": "Full-stack web development for corporate and retail brands: fast, secure, SEO-ready builds by eCeez."
  },
  "/analytics": {
    "t": "Ecommerce Analytics & Tracking Services | eCeez",
    "d": "GA4, event tracking, and revenue dashboards for ecommerce. Know exactly what drives your sales with eCeez analytics."
  },
  "/automation": {
    "t": "Ecommerce Automation Services | eCeez",
    "d": "Shopify workflow automation, inventory sync, and AI integrations that cut manual work for ecommerce teams."
  },
  "/collaboration": {
    "t": "Collaboration & Client Portals | eCeez",
    "d": "Project management, workflow triggers, and corporate portals engineered by eCeez."
  },
  "/security": {
    "t": "Web Security & Compliance | eCeez",
    "d": "Web protection protocols, API safeguards, and compliance for ecommerce businesses."
  },
  "/about-us": {
    "t": "About eCeez | Shopify & Ecommerce Growth Agency",
    "d": "eCeez (Value Hub LLC) is a Shopify growth agency in St. Petersburg, FL serving global DTC brands with development, SEO, and CRO."
  },
  "/contact": {
    "t": "Contact eCeez | Free Expert Advice",
    "d": "Get free expert advice on your Shopify store. Contact eCeez for development, SEO, and CRO help."
  },
  "/reviews": {
    "t": "eCeez Client Reviews — 4.95/5 from 22 Clients | eCeez",
    "d": "Read 22 verified client reviews of eCeez, rated 4.95 out of 5. Real feedback from Shopify and ecommerce brands on development, SEO, CRO and store optimisation."
  },
  "/case-studies": {
    "t": "Case Studies | eCeez Client Results",
    "d": "Real client results: Shopify Plus scaling, apparel launches, jewelry conversion optimization, and more."
  },
  "/careers": {
    "t": "Careers at eCeez",
    "d": "Join the eCeez team building high-performance ecommerce experiences."
  },
  "/blog": {
    "t": "Blog | Shopify & Ecommerce Growth Insights | eCeez",
    "d": "Guides on Shopify SEO, CRO, dropshipping, speed optimization, and store growth from the eCeez team."
  },
  "/tools/ecommerce-taxonomy-mapper": {
    "t": "Ecommerce Taxonomy Mapper Tool | eCeez",
    "d": "Free interactive tool to map retail products and roles to official Schema.org taxonomy parameters."
  },
  "/privacy-policy": {
    "t": "Privacy Policy | eCeez",
    "d": "How eCeez collects, uses, and protects your data."
  },
  "/case-studies/clothing-store": {
    "t": "Clothing Store Case Study | eCeez",
    "d": "How eCeez delivered measurable ecommerce results for a clothing store client."
  },
  "/case-studies/jewelry-store": {
    "t": "Jewelry Store Case Study | eCeez",
    "d": "How eCeez delivered measurable ecommerce results for a jewelry store client."
  },
  "/case-studies/barber": {
    "t": "Barber Case Study | eCeez",
    "d": "How eCeez delivered measurable ecommerce results for a barber client."
  },
  "/case-studies/restaurant": {
    "t": "Restaurant Case Study | eCeez",
    "d": "How eCeez delivered measurable ecommerce results for a restaurant client."
  },
  "/case-studies/aurex": {
    "t": "Aurex Winter Wear Case Study | eCeez",
    "d": "How eCeez delivered measurable ecommerce results for a aurex winter wear client."
  },
  "/blog/how-to-start-shopify-store-beginners-2026": {
    "t": "How to Start a Shopify Store for Beginners | 2026 Step-by-Step Gu",
    "d": "Learn how to start a Shopify store for beginners in 2026. Our 1500+ word guide covers everything from niche selection to launching your first high-converting "
  },
  "/blog/shopify-store-examples-2026": {
    "t": "Best Shopify Store Examples | Top 30+ High-Converting Stores 2026",
    "d": "Discover the best Shopify store examples of 2026. Analyze 30+ high-converting Shopify websites, small business stores, and Shopify Plus examples for inspirati"
  },
  "/blog/shopify-hydrogen-vs-liquid-2026": {
    "t": "Shopify Hydrogen vs Liquid | Headless vs Monolith Guide 2026",
    "d": "Deciding between Shopify Liquid and Hydrogen? Compare performance, cost, and scalability in our definitive 2026 guide for high-growth brands."
  },
  "/blog/ecommerce-seo-checklist-2026": {
    "t": "Ecommerce SEO Audit Checklist 2026 | Technical & Content Guide",
    "d": "Master ecommerce SEO in 2026 with our ultimate audit checklist. Optimize for AI search, Core Web Vitals, and structured data to outrank competitors."
  },
  "/blog/reduce-cart-abandonment-cro-2026": {
    "t": "How to Reduce Cart Abandonment | Ecommerce CRO Guide 2026",
    "d": "Learn how to reduce cart abandonment with data-driven CRO strategies. Optimize your checkout, pricing, and recovery flows to boost revenue."
  },
  "/blog/ecommerce-automation-workflows-2026": {
    "t": "Ecommerce Automation Workflows | Scale Your Shopify Store 2026",
    "d": "Discover the best ecommerce automation workflows for 2026. Automate inventory, customer support, and marketing to scale your Shopify store efficiently."
  },
  "/blog/ai-ecommerce-analytics-2026": {
    "t": "AI in Ecommerce Analytics | Predictive Data Insights 2026",
    "d": "Learn how AI is transforming ecommerce analytics. Explore predictive CLV, demand forecasting, and anomaly detection to drive growth."
  },
  "/blog/ecommerce-security-best-practices-2026": {
    "t": "Ecommerce Security Best Practices | Protect Your Store 2026",
    "d": "Master ecommerce security best practices for 2026. Learn how to protect customer data, prevent fraud, and ensure PCI compliance for your Shopify store."
  },
  "/blog/ecommerce-page-speed-seo-2026": {
    "t": "Ecommerce Page Speed SEO | Shopify Speed Optimization 2026",
    "d": "Learn why page speed is critical for ecommerce SEO in 2026. Master Shopify speed optimization and Core Web Vitals to boost rankings and revenue."
  },
  "/blog/shopify-jewelry-store-design-2026": {
    "t": "Shopify Jewelry Store Design | High-Converting Luxury Websites 20",
    "d": "Master Shopify jewelry store design for 2026. Learn how to balance luxury aesthetics with high-performance engineering to build a high-converting jewelry webs"
  },
  "/blog/headless-commerce-trends-2026": {
    "t": "Headless Commerce Trends 2026 | Future of Ecommerce Tech",
    "d": "Explore the top headless commerce trends for 2026. Learn about edge computing, composable ecosystems, and AI-personalized frontends for Shopify."
  },
  "/blog/increase-customer-lifetime-value-2026": {
    "t": "Ecommerce LTV Optimization | Post-Purchase Automation 2026",
    "d": "Maximize Customer Lifetime Value (LTV) with advanced post-purchase automation. Learn how to drive repeat purchases and build brand loyalty in 2026."
  },
  "/blog/nextjs-vs-hydrogen-2026": {
    "t": "Next.js vs Hydrogen | Best Headless Shopify Framework 2026",
    "d": "Comparing Next.js vs Hydrogen for headless Shopify in 2026. Learn about performance, developer experience, and which React framework is right for your store."
  },
  "/blog/ai-personalization-ecommerce-2026": {
    "t": "AI in Ecommerce Personalization | Future of Shopping 2026",
    "d": "Discover how AI is transforming ecommerce personalization in 2026. Learn about dynamic storefronts, AI product recommendations, and personalized pricing."
  },
  "/blog/scaling-shopify-plus-global-2026": {
    "t": "Shopify Plus Global Expansion | International Ecommerce 2026",
    "d": "Master Shopify Plus global expansion in 2026. Learn about multi-currency, international SEO, localization, and global logistics for enterprise brands."
  },
  "/blog/advanced-faceted-search-optimization-2026": {
    "t": "Faceted Search UX Ecommerce | Advanced Filtering SEO 2026",
    "d": "Master faceted search UX for ecommerce in 2026. Learn best practices for product filtering, search conversion, and avoiding SEO crawl bloat."
  },
  "/blog/web-performance-beyond-core-web-vitals-2026": {
    "t": "Web Performance Beyond Core Web Vitals | Ecommerce Speed 2026",
    "d": "Master web performance in 2026. Learn why moving beyond Core Web Vitals to INP, perceived performance, and speculative loading is critical for ecommerce."
  },
  "/blog/custom-shopify-app-development-2026": {
    "t": "Custom Shopify App Development | Build vs Buy Guide 2026",
    "d": "Master custom Shopify app development in 2026. Learn when to build vs buy, explore enterprise app strategies, and understand development costs."
  },
  "/blog/psychology-high-converting-checkout-2026": {
    "t": "Checkout Psychology Ecommerce | High Converting Checkout 2026",
    "d": "Master checkout psychology for ecommerce in 2026. Learn how to reduce friction, use social proof, and optimize your checkout page for maximum conversions."
  },
  "/blog/ecommerce-data-privacy-2026": {
    "t": "Ecommerce Data Privacy Compliance | GDPR CCPA 2026",
    "d": "Master ecommerce data privacy compliance in 2026. Learn about GDPR, CCPA, first-party data strategies, and how to build trust through transparency."
  },
  "/blog/leveraging-tiktok-shop-growth-2026": {
    "t": "TikTok Shop Growth Strategy 2026 | Social Commerce SEO",
    "d": "Master TikTok Shop growth in 2026. Learn how to leverage viral trends, optimize product listings, and build a sustainable social commerce sales channel."
  },
  "/blog/rise-of-social-commerce-2026": {
    "t": "Social Commerce SEO 2026 | Instagram & Pinterest Strategy",
    "d": "Master social commerce SEO in 2026. Learn how to optimize your Instagram Shop and Pinterest Catalogs for maximum visibility and sales."
  },
  "/blog/ecommerce-subscription-models-2026": {
    "t": "Ecommerce Subscription Models 2026 | Recurring Revenue Strategy",
    "d": "Master ecommerce subscription models in 2026. Learn about replenishment, curation, and access models, and how to reduce churn for predictable growth."
  },
  "/blog/optimizing-pdp-conversion-2026": {
    "t": "Optimizing Product Detail Pages (PDP) 2026 | Conversion Strategy",
    "d": "Master PDP optimization in 2026. Learn how to design high-converting product pages with immersive visuals, social proof, and technical SEO."
  },
  "/blog/augmented-reality-ecommerce-2026": {
    "t": "Augmented Reality in Ecommerce 2026 | AR Shopping Strategy",
    "d": "Discover how augmented reality is transforming ecommerce in 2026. Learn about virtual try-ons, AR for home decor, and how to reduce returns with AR."
  },
  "/blog/sustainable-ecommerce-branding-2026": {
    "t": "Sustainable Ecommerce Strategy 2026 | Eco-Friendly Branding",
    "d": "Learn how to build a sustainable ecommerce brand in 2026. Discover eco-friendly packaging, carbon-neutral shipping, and ethical sourcing strategies."
  },
  "/blog/omnichannel-strategy-ecommerce-2026": {
    "t": "Omnichannel Ecommerce Strategy 2026 | Unified Retail Experience",
    "d": "Master omnichannel ecommerce in 2026. Learn how to bridge the gap between online and offline with unified data, BOPIS, and consistent branding."
  },
  "/blog/advanced-email-marketing-automation-2026": {
    "t": "Advanced Ecommerce Email Automation 2026 | High ROI Flows",
    "d": "Unlock the power of email marketing automation in 2026. Learn how to build high-converting flows for cart abandonment, post-purchase, and win-back."
  },
  "/blog/influencer-marketing-partnerships-2026": {
    "t": "Ecommerce Influencer Marketing Strategy 2026 | Brand Ambassadors",
    "d": "Master influencer marketing for ecommerce in 2026. Learn how to find the right partners, build long-term relationships, and measure ROI beyond likes."
  },
  "/blog/customer-loyalty-programs-2026": {
    "t": "Ecommerce Customer Loyalty Strategy 2026 | Retention Programs",
    "d": "Design a high-converting customer loyalty program in 2026. Learn how to move beyond points to build emotional connection and brand advocacy."
  },
  "/blog/managing-ecommerce-returns-2026": {
    "t": "Ecommerce Returns Management Strategy 2026 | Reverse Logistics",
    "d": "Optimize your ecommerce returns process in 2026. Learn how to reduce return rates, improve customer satisfaction, and turn returns into growth opportunities."
  },
  "/blog/future-of-voice-search-ecommerce-2026": {
    "t": "Voice Search in Ecommerce | Voice SEO Strategy 2026",
    "d": "Master voice search for ecommerce in 2026. Learn how to optimize for conversational keywords, position zero, and voice-activated re-ordering on Shopify."
  },
  "/blog/shopify-ux-optimization-guide": {
    "t": "Shopify UX Optimization Guide | High-Conversion Design 2026",
    "d": "The complete guide to Shopify UX optimization in 2026. Learn how to balance aesthetics with performance, reduce friction, and boost conversion rates."
  },
  "/blog/shopify-plus-vs-shopify-comparison": {
    "t": "Shopify vs Shopify Plus: Pricing, Features & Differences | eCeez",
    "d": "Compare Shopify vs Shopify Plus in 2026. Explore pricing, features, customization, scalability, B2B, and key differences to choose the right plan."
  },
  "/blog/scale-shopify-50k-products": {
    "t": "Scaling Shopify with 50K+ Products | Large Inventory Guide 2026",
    "d": "Technical strategies for scaling a Shopify store with 50,000+ products. Learn about faceted search optimization, bulk data management, and performance at scal"
  },
  "/blog/shopify-speed-optimization-guide-2026": {
    "t": "Shopify Speed Optimization | Sub-1s Load Time Guide 2026",
    "d": "The definitive guide to Shopify speed optimization in 2026. Learn how to improve LCP, INP, and CLS to boost rankings and conversion rates."
  },
  "/blog/google-merchant-center-seo-strategy": {
    "t": "Google Merchant Center SEO | Product Feed Optimization 2026",
    "d": "Master Google Merchant Center SEO in 2026. Learn how to optimize your product titles, categories, and custom labels to dominate free listings and shopping ads"
  },
  "/blog/ecommerce-link-building-guide-2026": {
    "t": "Ecommerce Link Building Guide | Earn High-Authority Backlinks 202",
    "d": "The ultimate guide to ecommerce link building in 2026. Learn how to earn high-authority backlinks through digital PR, data-driven content, and strategic outre"
  },
  "/blog/shopify-b2b-strategy-2026": {
    "t": "Shopify B2B Strategy 2026 | Scale Wholesale on Shopify Plus",
    "d": "Master Shopify B2B in 2026. Learn how to use company profiles, price lists, and B2B-specific themes to dominate the wholesale market on Shopify Plus."
  },
  "/blog/predictive-inventory-ai-ecommerce": {
    "t": "Predictive Inventory Management AI | Solve Stockouts 2026",
    "d": "Learn how AI and machine learning are revolutionizing inventory management for Shopify stores in 2026. Avoid stockouts and optimize your cash flow."
  },
  "/blog/video-commerce-shopify-trends": {
    "t": "Video Commerce Trends 2026 | Shoppable Video on Shopify",
    "d": "Master video commerce in 2026. Learn how to integrate shoppable videos, live stream shopping, and UGC video into your Shopify store to boost conversions."
  },
  "/blog/shopify-markets-pro-vs-global-e": {
    "t": "Shopify Markets Pro vs Global-e 2026 | Cross-Border Ecommerce",
    "d": "Compare Shopify Markets Pro and Global-e for international expansion in 2026. Learn about duties, taxes, shipping, and localized checkout experiences."
  },
  "/blog/zero-party-data-strategies-2026": {
    "t": "Zero-Party Data Strategy 2026 | Ecommerce Personalization",
    "d": "Learn how to collect and use zero-party data in 2026. Use quizzes, surveys, and preference centers to build a privacy-first personalization strategy on Shopif"
  },
  "/blog/shopify-smart-search-guide-2026": {
    "t": "Shopify Smart Search Guide | Best Search Apps 2026",
    "d": "The ultimate guide to Shopify Smart Search. Learn how to optimize site search, choose the best Shopify search app, and increase conversion rates in 2026."
  },
  "/blog/shopify-draft-orders-complete-guide": {
    "t": "Shopify Draft Orders Guide | Create & Manage Manual Orders 2026",
    "d": "The ultimate guide to Shopify Draft Orders. Learn how to create manual orders, send invoices, and manage custom sales on Shopify in 2026."
  },
  "/blog/product-attributes-ecommerce-guide": {
    "t": "Product Attributes Guide | Examples & SEO Strategy 2026",
    "d": "The ultimate guide to product attributes in ecommerce. Learn what they are, see 25 real examples, and discover how to optimize them for SEO and conversions."
  },
  "/blog/product-descriptions-ecommerce-guide": {
    "t": "Product Descriptions Guide | Writing Copy That Converts 2026",
    "d": "The ultimate guide to writing product descriptions for ecommerce. Learn how to write copy that ranks, see real examples, and boost your conversion rates."
  },
  "/blog/product-taxonomy-ecommerce-guide": {
    "t": "How to Build a Product Taxonomy: Step-by-Step Template & Examples",
    "d": "Master ecommerce product taxonomy in 2026. Learn category mapping, see real-world examples, and use our free template to boost your SEO and store conversions."
  },
  "/blog/shopify-combined-listings-guide": {
    "t": "Shopify Combined Listings Guide | Parent & Child Products 2026",
    "d": "The ultimate guide to Combined Listings in Shopify. Learn how to create parent and child products, optimize merchandising, and boost SEO in 2026."
  },
  "/blog/mastering-shopify-combined-listings": {
    "t": "Mastering Shopify Combined Listings | Ecommerce Merchandising 202",
    "d": "Discover the power of Combined Listings in Shopify. Learn how to group products, improve discovery, and outrank competitors with advanced merchandising."
  },
  "/blog/one-page-design-complete-guide": {
    "t": "One-Page Design Guide | Single Page Website Design 2026",
    "d": "The ultimate guide to One-Page Design. Learn about one page website design, UX best practices, and see examples of high-converting single page websites."
  },
  "/blog/shop-pay-accelerated-checkout-guide": {
    "t": "Shop Pay Accelerated Checkout Guide | Fast Shopify Payments",
    "d": "Master Shop Pay accelerated checkout. Learn how to enable Shop Pay, improve conversion rates, and provide a secure, one-click checkout experience for your cus"
  },
  "/blog/shopify-multi-location-inventory-guide": {
    "t": "Shopify Multi-Location Inventory Guide | Manage Stock by Location",
    "d": "Learn how to manage different inventory for different locations in Shopify. Our guide covers multi-location inventory setup, stock tracking, and fulfillment o"
  },
  "/blog/reasons-shopify-store-not-converting": {
    "t": "Reasons My Shopify Store Isn\u2019t Converting | 10 CRO Fixes for 2026",
    "d": "Is your Shopify store not getting sales? Discover the top 10 reasons my Shopify store isn\u2019t converting and learn actionable CRO strategies to boost your reven"
  },
  "/blog/step-by-step-beginner-guide-to-ecommerce": {
    "t": "Step-by-Step Beginner Guide to Ecommerce | Start in 2026",
    "d": "Learn how to start an online store with our step-by-step beginner guide to ecommerce. Covers niche selection, store building, and scaling for success in 2026."
  },
  "/blog/how-to-create-a-high-converting-product-page": {
    "t": "How to Create a High-Converting Product Page (2026 Guide)",
    "d": "Learn how to create a high-converting product page with our step-by-step guide. Boost sales, improve UX, and outrank competitors with these CRO best practices"
  },
  "/blog/how-to-start-store-with-shopify": {
    "t": "How to Start Store with Shopify (Step-by-Step Beginner Guide)",
    "d": "Learn how to start store with Shopify in 2026. This complete beginner guide covers setup, themes, products, and launch. Start your online business today!"
  },
  "/blog/why-shopify-stores-had-slower-sales-in-march-2026": {
    "t": "Why Shopify Stores Had Slower Sales in March 2026 | Recovery Guid",
    "d": "Discover why Shopify stores had slower sales in March 2026. Learn about market shifts and get actionable tips to boost your ecommerce revenue today."
  },
  "/blog/the-2026-mobile-ecommerce-experience-trends-merchants-are-talking-about": {
    "t": "The 2026 Mobile Ecommerce Experience | Top Trends for Merchants",
    "d": "Explore the latest trends in the 2026 mobile ecommerce experience. Learn how to optimize your Shopify store for mobile-first shoppers today."
  },
  "/blog/product-research-in-2026-why-most-winning-products-are-harder-to-find": {
    "t": "Product Research in 2026 | How to Find Winning Products",
    "d": "Learn why winning products are harder to find and master product research in 2026. Discover new strategies for Shopify store success."
  },
  "/blog/shopify-theme-approval-in-2026-a-complete-guide-for-developers": {
    "t": "Shopify Theme Approval in 2026 | Developer Guide | eCeez",
    "d": "Master the Shopify theme approval process in 2026. Learn about performance standards, accessibility, and design requirements for the Theme Store."
  },
  "/blog/how-reddit-is-changing-ecommerce-discovery-why-it-matters-to-your-store": {
    "t": "How Reddit Is Changing Ecommerce Discovery | 2026 Guide",
    "d": "Learn how Reddit is shaping the future of ecommerce discovery. Discover strategies for Shopify merchants to leverage Reddit communities in 2026."
  },
  "/blog/shopify-traffic-no-sales-guide": {
    "t": "Shopify Traffic but No Sales? 7 Reasons & Fixes (2026)",
    "d": "Find out why you are getting Shopify traffic but no sales. We break down the 7 hidden reasons for low conversions and provide actionable fixes to boost revenu"
  },
  "/blog/ai-for-shopify-stores": {
    "t": "AI for Shopify Stores: Modern Integration Frameworks",
    "d": "Master AI implementation on Shopify. Learn the custom code paths, model configurations, and algorithmic frameworks to scale your DTC storefront in 2026."
  },
  "/blog/how-ecommerce-brands-use-ai": {
    "t": "How Ecommerce Brands Use AI | Technical Insights | eCeez",
    "d": "Audit the exact machine learning workflows deployed by elite direct-to-consumer brands to automate operations, pricing models, and returns."
  },
  "/blog/best-ai-automations-for-shopify": {
    "t": "Best AI Automations for Shopify | Ultimate Technical Guide",
    "d": "Discover the most effective, lightweight AI automations for Shopify storefronts. Learn custom Liquid scripts and server setups to scale."
  },
  "/blog/ai-seo-for-ecommerce": {
    "t": "AI SEO for Ecommerce | Dynamic Search Strategies | eCeez",
    "d": "Discover how to automate your Shopify SEO. Deploy structured JSON-LD schemas, manage sitemaps, and optimize internal links at scale."
  },
  "/blog/using-chatgpt-for-product-descriptions": {
    "t": "Using ChatGPT for Product Descriptions | Prompt Workbook",
    "d": "Learn how to generate high-converting e-commerce product copy. Master prompt workflows, custom scripts, and SEO content mapping."
  },
  "/blog/ai-workflow-automation-for-shopify": {
    "t": "AI Workflow Automation for Shopify | Operational Playbook",
    "d": "Streamline your Shopify operations. Discover how to automate listings, inventory updates, and support routing using lightweight servers."
  },
  "/blog/how-ai-improves-ecommerce-conversion-rates": {
    "t": "How AI Improves Conversion Rates | CRO Playbook | eCeez",
    "d": "Audit the exact technical CRO setups that increase storefront conversions. Learn to deploy behavior-triggered checkout workflows."
  },
  "/blog/future-of-ai-in-ecommerce": {
    "t": "The Future of AI in Ecommerce | Industry Projections",
    "d": "Audit the strategic shifts redefining e-commerce. Discover how agentic lookups and programmatic catalog networks will disrupt retail structures."
  },
  "/blog/shopify-ai-tools-for-growth": {
    "t": "Shopify AI Tools for Growth | Curated Performance Vetting",
    "d": "Which tools truly increase sales without slowing down your store? Read our speed-vetted guide to the top Shopify AI plugins for growth."
  },
  "/blog/best-shopify-website-design-practices-2026": {
    "t": "Best Shopify Website Design Practices (2026) | UX Framework",
    "d": "Master Shopify layout design with our 2026 UX engineering workbook. Optimize page layout hierarchies, responsive viewport parameters, and checkout experiences"
  },
  "/blog/how-to-build-a-high-converting-shopify-store": {
    "t": "How to Build a High-Converting Shopify Store | CRO Guide",
    "d": "Discover the exact CRO changes that increase storefront sales. Learn to build fast-loading checkout tunnels and trust networks."
  },
  "/blog/custom-shopify-design-vs-premium-themes": {
    "t": "Custom Shopify Design vs Premium Themes | 2026 Evaluation",
    "d": "Struggling to choose between a premium theme and custom shopify layout? Compare site speed variations, technical limitations, and scale potentials."
  },
  "/blog/why-shopify-stores-fail": {
    "t": "Why Most Shopify Stores Fail | Technical Diagnostic Work",
    "d": "Audit the hidden reasons why Shopify stores fail. Step-by-step diagnostic guide for site navigation fixes, speed audits, and trust builders."
  },
  "/blog/how-much-does-a-shopify-website-cost": {
    "t": "How Much Does a Shopify Website Cost? | Pricing Guide",
    "d": "What does it truly cost to build a Shopify store in 2026? Read our detailed cost breakdown covering developer rates, subscriptions, app budgets, and themes."
  },
  "/blog/shopify-website-development-guide": {
    "t": "Shopify Website Development Guide | Advanced Workflows",
    "d": "Master technical Shopify engineering. Learn how to configure local theme sync pipelines with Shopify CLI and design robust data schemas."
  },
  "/blog/best-shopify-apps-for-ecommerce-growth": {
    "t": "Best Shopify Apps for Ecommerce Growth | Curated Stack",
    "d": "Which apps truly drive sales without slowing down your store? Read our speed-vetted guide to the top Shopify applications for growth."
  },
  "/blog/how-to-redesign-a-shopify-store": {
    "t": "How to Redesign a Shopify Store | Risk-Free Redesign Guide",
    "d": "Our step-by-step framework to redesign your theme without losing search visibility, customer data, or active checkouts."
  },
  "/blog/mobile-first-shopify-design-guide": {
    "t": "Mobile-First Shopify Design Guide | Maximize Conversions",
    "d": "Learn how to optimize your storefront for mobile shoppers. Master thumb-friendly checkout targets, fast layout rendering, and responsive carousels."
  },
  "/blog/shopify-seo-checklist-for-2026": {
    "t": "Shopify SEO Checklist for 2026 | Ultimate E-Commerce Audit",
    "d": "Master technical Shopify SEO in 2026 with our comprehensive growth engineering checklist. Learn schema automation, indexability, crawl budget fixes, and keywo"
  },
  "/blog/why-shopify-stores-lose-organic-traffic": {
    "t": "Why Shopify Stores Lose Organic Traffic | Direct Diagnosis",
    "d": "Is your organic search traffic collapsing? Discover the leading reasons why Shopify stores lose traffic, with actionable code fixes and migration advice."
  },
  "/blog/how-to-rank-shopify-collection-pages": {
    "t": "How to Rank Shopify Collection Pages | Technical Playbook",
    "d": "Learn how to rank Shopify collection pages using semantic indexing hierarchies, faceted filtering configurations, and custom schema markups."
  },
  "/blog/best-shopify-seo-structure-for-ecommerce": {
    "t": "Best Shopify SEO Structure for Ecommerce | Site Architecture",
    "d": "Discover the optimized structural architecture for Shopify stores. Learn to construct nested folder silos, logical category hierarchies, and pristine canonica"
  },
  "/blog/technical-seo-fixes-for-shopify": {
    "t": "Technical SEO Fixes for Shopify | Advanced Developer Guide",
    "d": "Fix Shopify indexation traps, crawl bloat, and broken canonical links. Learn advanced Liquid code edits and robots.txt rules to secure Google rank authority."
  },
  "/blog/shopify-seo-vs-woocommerce-seo": {
    "t": "Shopify SEO vs WooCommerce SEO | Operational Truths 2026",
    "d": "Which ecommerce engine is superior for SEO? Read our unfiltered architectural deep dive comparing Shopify vs WooCommerce on indexation speed and crawl control"
  },
  "/blog/how-we-increased-shopify-traffic": {
    "t": "How We Increased Shopify Traffic | E-Commerce Case Study",
    "d": "Discover the exact technical process we used to grow a Shopify brand's organic traffic by 241%. Step-by-step diagnostic audits and code blueprints."
  },
  "/blog/programmatic-seo-for-shopify": {
    "t": "Programmatic SEO for Shopify | Scale Pages Automatically",
    "d": "Master programmatic SEO on Shopify. Learn how to generate high-performing, schema-optimized landing pages automatically to capture long-tail keywords."
  },
  "/blog/how-to-optimise-shopify-product-pages": {
    "t": "How to Optimise Shopify Product Pages | Technical SEO and CRO",
    "d": "Unlock maximum rankings and checkout rates by optimizing Shopify product layouts, preloading images, and integrating automated product schemas."
  },
  "/blog/shopify-internal-linking-strategy": {
    "t": "Shopify Internal Linking Strategy | Strategic Search Rankings",
    "d": "Master internal linking on Shopify. Learn how to direct page authority to high-converting collection pages using clean context links and automated structures."
  },
  "/blog/shopify-pricing-plans-complete-guide": {
    "t": "Shopify Pricing Plans: The Complete Guide to Tiers & Fees",
    "d": "Discover the complete breakdown of Shopify pricing plans. Compare subscription fees, transaction rates, and feature sets for Basic, Advanced, and Plus."
  },
  "/blog/best-ecommerce-website-builder": {
    "t": "5 Best E-Commerce Website Builders Ranked for Speed & SEO",
    "d": "Discover the best ecommerce website builder for your business. Compare page speed, SEO features, and scalability across Shopify, WooCommerce, and more."
  },
  "/blog/shopify-design-principles-guide": {
    "t": "Shopify Design: Premium Principles for High-Converting Layouts",
    "d": "Optimize your online store with premium Shopify design principles. Improve mobile UX, visual hierarchy, sitemaps, and conversion rates."
  },
  "/blog/shopify-bulk-import-10000-products-guide": {
    "t": "How to Bulk Import 10,000+ Products to Shopify Without Breaking Y",
    "d": "Real bulk-import playbook from a team that imported 6,711 products in one job: Matrixify vs native importer, the draft product trap, inventory attach errors, "
  },
  "/blog/shopify-dropshipping-guide-2026": {
    "t": "Shopify Dropshipping Guide 2026 (From a Real Store Operator)",
    "d": "A practical Shopify dropshipping guide written from real experience running a live store \u2014 supplier selection, margins, inventory sync, and what actually fail"
  },
  "/blog/fragrance-dropshipping-shopify": {
    "t": "Fragrance Dropshipping on Shopify: Complete 2026 Playbook",
    "d": "How to dropship perfume and fragrances on Shopify: supplier options like FragranceNet, realistic margins, catalog import, and SEO strategy from real operators"
  },
  "/blog/shopify-for-fragrance-brands": {
    "t": "Shopify for Fragrance Brands: The Complete Store Blueprint",
    "d": "How fragrance brands should build on Shopify: product page structure for scent notes, variant strategy, sampling programs, and SEO for perfume searches."
  },
  "/blog/shopify-for-beauty-skincare-brands": {
    "t": "Shopify for Beauty & Skincare Brands: Conversion Blueprint",
    "d": "How beauty and skincare brands should structure Shopify stores: ingredient pages, routine builders, subscriptions, UGC, and SEO for beauty searches."
  },
  "/blog/shopify-for-clothing-apparel-brands": {
    "t": "Shopify for Clothing Brands: Conversion-First Store Setup",
    "d": "How apparel brands should build Shopify stores: size guidance that cuts returns, drop strategies, collection page SEO, and mobile-first UX."
  },
  "/blog/shopify-speed-optimization-checklist": {
    "t": "Shopify Speed Optimization Checklist: 21 Fixes by Impact",
    "d": "A ranked, actionable Shopify speed checklist: app audits, image optimization, theme fixes, and third-party script control \u2014 the exact process we use on client"
  },
  "/blog/shopify-fees-explained-2026": {
    "t": "Shopify Fees Explained 2026: Complete Cost Breakdown",
    "d": "Every Shopify fee in 2026: monthly plans, credit card rates, transaction fees, apps, themes, and hidden costs \u2014 plus how to minimize each one."
  },
  "/blog/how-to-choose-shopify-agency": {
    "t": "How to Choose a Shopify Agency: 12 Questions That Matter",
    "d": "How to evaluate Shopify agencies in 2026: the questions that expose template resellers, red flags in proposals, and what real growth engineering looks like."
  },
  "/blog/hire-shopify-developer-guide": {
    "t": "How to Hire a Shopify Developer in 2026: Rates & Vetting",
    "d": "Hiring a Shopify developer in 2026: realistic rates, freelancer vs agency tradeoffs, Liquid vs Hydrogen skills, and vetting questions that verify competence."
  },
  "/blog/best-shopify-page-builders-2026": {
    "t": "Best Shopify Page Builders 2026: Compared (With Speed Impact)",
    "d": "We compare the top Shopify page builders in 2026 \u2014 PageFly, Shogun, GemPages, and native sections \u2014 on flexibility, speed impact, and pricing."
  },
  "/blog/best-shopify-subscription-apps-2026": {
    "t": "Best Shopify Subscription Apps 2026: Full Comparison",
    "d": "Comparing top Shopify subscription apps in 2026 \u2014 Recharge, Seal, Loop, and Shopify's native subscriptions \u2014 on churn tools, pricing, and migration risk."
  },
  "/blog/oberlo-alternatives-shopify-2026": {
    "t": "Best Oberlo Alternatives for Shopify Dropshipping (2026)",
    "d": "Oberlo shut down \u2014 these are the real alternatives for Shopify dropshipping in 2026: DSers, Spocket, Zendrop, AutoDS, and supplier-direct approaches compared."
  },
  "/blog/shopify-vs-amazon-selling": {
    "t": "Shopify vs Amazon 2026: The Honest Comparison for Sellers",
    "d": "Shopify vs Amazon in 2026: fees, margins, customer ownership, traffic, and why the winning answer for most brands is a specific hybrid sequence."
  },
  "/blog/shopify-vs-magento-comparison": {
    "t": "Shopify vs Magento 2026: Real Total Cost of Ownership",
    "d": "Shopify vs Magento (Adobe Commerce) compared on total cost, development needs, speed, security, and when migration to Shopify makes sense in 2026."
  },
  "/blog/best-online-store-platforms-2026": {
    "t": "Best Online Store Platforms 2026: Ranked by Store Type",
    "d": "The best ecommerce website builders and online store platforms in 2026 \u2014 Shopify, WooCommerce, BigCommerce, Wix, Squarespace \u2014 ranked honestly by use case."
  },
  "/blog/shopify-pos-guide-2026": {
    "t": "Shopify POS Guide 2026: Lite vs Pro, Setup & Hardware",
    "d": "Complete Shopify POS guide for 2026: what POS Lite includes free, when POS Pro is worth it, hardware options, and unified online-retail inventory setup."
  },
  "/blog/shopify-collabs-guide": {
    "t": "Shopify Collabs Guide 2026: Creator Marketing for Merchants",
    "d": "How Shopify Collabs works in 2026: setting up creator programs, commission structures, gifting workflows, and measuring real ROI from influencer partnerships."
  },
  "/blog/shopify-affiliate-marketing-guide": {
    "t": "Shopify Affiliate Marketing Guide 2026: Program Setup",
    "d": "How to build a Shopify affiliate program in 2026: app selection, commission structures that motivate, recruiting affiliates, and preventing coupon-site leakag"
  },
  "/blog/shopify-advertising-guide-2026": {
    "t": "Shopify Advertising Guide 2026: Google vs Meta vs TikTok",
    "d": "Where Shopify stores should spend ad budget in 2026: Google Shopping, Meta, and TikTok compared on intent, economics, creative demands, and starting budgets."
  },
  "/blog/shopify-product-page-seo-guide": {
    "t": "Shopify Product Page SEO Guide 2026: Rank & Convert",
    "d": "Complete Shopify product page SEO: title structures that match search, product schema with GTIN, fixing duplicate supplier descriptions, and internal linking."
  },
  "/blog/shopify-email-marketing-flows": {
    "t": "7 Shopify Email Flows Ranked by Revenue (2026 Guide)",
    "d": "The seven Shopify email automations ranked by ROI: abandoned cart, browse abandonment, welcome, post-purchase, win-back, back-in-stock, and review flows."
  },
  "/blog/shopify-conversion-rate-benchmarks": {
    "t": "Shopify Conversion Rate Benchmarks 2026 (By Industry)",
    "d": "What's a good Shopify conversion rate in 2026? Benchmark ranges by industry and traffic source, plus the diagnostic order for improving yours."
  }
};
export default (async (request, context)=>{
  // Only rewrite page loads. Let form POSTs and other methods pass straight through (Netlify Forms).
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  let path = url.pathname.replace(/\/+$/, "") || "/";
  const response = await context.next();
  const ct = response.headers.get("content-type") || "";
  if (!ct.includes("text/html")) return response;
  const meta = META[path];
  const full = "https://eceez.com" + (path === "/" ? "/" : path);
  let html = await response.text();
  // Always fix canonical + og:url to the requested path (kills homepage-canonical + staging remnants)
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${full}" />`).replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${full}$2`).replace(/(<meta property="twitter:url" content=")[^"]*(")/, `$1${full}$2`);
  if (meta) {
    const esc = (s)=>s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.t)}</title>`).replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(meta.d)}$2`).replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(meta.t)}$2`).replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(meta.d)}$2`).replace(/(<meta property="twitter:title" content=")[^"]*(")/, `$1${esc(meta.t)}$2`).replace(/(<meta property="twitter:description" content=")[^"]*(")/, `$1${esc(meta.d)}$2`);
  }
  return new Response(html, {
    status: response.status,
    headers: response.headers
  });
});
export const config = {
  path: "/*",
  excludedPath: [
    "/assets/*",
    "/lp/*",
    "/*.js",
    "/*.css",
    "/*.png",
    "/*.jpg",
    "/*.svg",
    "/*.xml",
    "/*.txt",
    "/*.ico",
    "/*.webp"
  ]
};
