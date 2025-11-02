module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/blogs.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogs",
    ()=>blogs
]);
const blogs = [
    {
        id: "1",
        title: "Flip That Digit — How I built a small game",
        date: "August 2025",
        tags: [
            "Hardware"
        ],
        description: "A short post about the implementation details and lessons learned building Flip That Digit.",
        image: "/images/icons/flip-that-digit.svg",
        imageAlt: "Flip That Digit thumbnail",
        content: `
      <p>A simple game to flip the switch corresponding to the number displayed.</p>
    `,
        slug: "flip-that-digit"
    },
    {
        id: "2",
        title: "TechSavvyTeens — Teaching seniors technology",
        date: "September 2024",
        tags: [
            "Community",
            "Education",
            "Technology"
        ],
        description: "I taught and aided many senior citizens how to safely and effectively use technology and the internet through the non-profit TechSavvyTeens.",
        image: "/images/techsavvyteens-helping-people-2.jpg",
        imageAlt: "TechSavvyTeens thumbnail",
        content: `
      <p>My experience working for TechSavvyTeens, a nonprofit organization that helps elderly people with technology, has been incredibly.</p>
      <h3>TechSavvyTeens Event</h3>
      <p>👋 That's me helping the elderly lady with her phone!</p>
      <p>Kupuna who are clueless about technology are welcome to bring their phones, laptops and other devices for assistance from Tech Savvy Teens, who will be at Windward Mall’s Center Court from 10 a.m. to 2 p.m. Saturday.</p>
      <p>The free event is open to all, not only older adults, who need tech support, personal guidance and practical advice to operate their devices.</p>
      <p>The event will also feature music, entertainment, giveaways and prizes, including a chance to win a free laptop. The event is sponsored by Koolau Pilina Fund, Acton Digital Academy, “Gimme a Break” Caring for Caregivers, Ohia Technology Group, Kupuna Power and Bell Charitable Foundation.</p>
      <p>Tech Savvy Teens is part of a program created by Acton Digital Academy, a nonprofit group based in Kaneohe. The organization is dedicated to preparing youth for the workforce with technology skills and bridging the generation gap between kupuna and middle and high school students. For more information, visit <a href="https://techsavvyteens.org" target="_blank" rel="noopener noreferrer">techsavvyteens.org</a>.</p>
      <p><em>Pat Gee, Star Advertiser</em></p>
    `,
        slug: "techsavvyteens"
    }
];
}),
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPost,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/blogs.ts [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].map((b)=>({
            slug: b.slug
        }));
}
function generateMetadata({ params }) {
    return (async ()=>{
        const { slug } = await params;
        const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((b)=>b.slug === slug);
        if (!post) return {};
        return {
            title: post.title,
            description: post.description,
            openGraph: {
                title: post.title,
                description: post.description,
                images: post.image ? [
                    {
                        url: post.image,
                        alt: post.imageAlt ?? post.title
                    }
                ] : []
            }
        };
    })();
}
async function BlogPost({ params }) {
    const { slug } = await params;
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$blogs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((b)=>b.slug === slug);
    if (!post) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "prose prose-neutral max-w-3xl mx-auto px-4 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: post.title
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "opacity-70",
                children: post.date
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: post.image,
                alt: post.imageAlt ?? post.title,
                width: 1200,
                height: 630,
                className: "rounded-xl my-6",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                dangerouslySetInnerHTML: {
                    __html: post.content
                }
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            post.tags?.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-8 flex flex-wrap gap-2",
                children: post.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-xs bg-gray-100 rounded px-2 py-1",
                        children: [
                            "#",
                            t
                        ]
                    }, t, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[slug]/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b72c3f9c._.js.map