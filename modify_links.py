import re

def process_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for old, url in replacements:
        # We need to escape the old text safely, or just do string replacement
        # Find "- [ ] {old}" and replace with "- [ ] [{old}]({url})"
        # Be careful of exactly matching the line
        target = f"- [ ] {old}"
        replacement = f"- [ ] [{old}]({url})"
        content = content.replace(target, replacement)
        
    with open(filepath, 'w') as f:
        f.write(content)

# File 1
f1 = '/home/vinay/workspace/docs-app/content/docs/roadmap/phase-4/ai-era-skills.mdx'
r1 = [
    ('**GitHub Copilot — use daily while coding**', 'https://docs.github.com/en/copilot'),
    ('**Prompt engineering for code — writing effective prompts**', 'https://platform.openai.com/docs/guides/prompt-engineering'),
    ('**AI-assisted debugging, refactoring, code review**', 'https://www.freecodecamp.org/news/how-to-use-ai-for-debugging-and-code-review/'),
    ('**ChatGPT / Claude / Gemini — development workflow integration**', 'https://www.anthropic.com/news/claude-3-family'),
    ('**Cursor / AI-powered IDE features**', 'https://www.cursor.com/'),
    ('**OpenAI API / Gemini API — REST integration**', 'https://platform.openai.com/docs/api-reference'),
    ('**Build a chatbot / AI assistant feature in your app**', 'https://sdk.vercel.ai/docs'),
    ('**Spring AI — integrate LLMs into Spring Boot**', 'https://docs.spring.io/spring-ai/reference/'),
    ('**RAG (Retrieval-Augmented Generation) — concept & basic implementation**', 'https://aws.amazon.com/what-is/retrieval-augmented-generation/'),
    ('**Vector databases — pgvector / Pinecone (concept)**', 'https://www.pinecone.io/learn/vector-database/'),
    ('**Embedding-based semantic search (concept)**', 'https://www.cloudflare.com/learning/ai/what-is-vector-embedding/'),
    ('**Streaming responses — Server-Sent Events (SSE)**', 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events'),
    ('**Writing clean, AI-readable code**', 'https://martinfowler.com/books/clean.html'),
    ('**AI-powered test generation**', 'https://www.codecademy.com/article/how-to-use-ai-for-testing'),
    ('**Understanding limitations of AI-generated code**', 'https://owasp.org/www-project-top-10-for-large-language-model-applications/'),
    ('**When to use AI vs manual coding**', 'https://newsletter.pragmaticengineer.com/p/ai-coding-tools')
]
process_file(f1, r1)

# File 2
f2 = '/home/vinay/workspace/docs-app/content/docs/roadmap/phase-4/projects-portfolio.mdx'
r2 = [
    ('**Review code — apply new patterns (clean architecture, proper error handling)**', 'https://refactoring.guru/design-patterns'),
    ('**Add any missing features**', 'https://www.freecodecamp.org/news/how-to-build-a-portfolio-project/'),
    ('**Dockerize it**', 'https://docs.docker.com/get-started/'),
    ('**Write a clean README with setup instructions & screenshots**', 'https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/'),
    ('**Deploy it (Vercel / Railway / AWS)**', 'https://vercel.com/docs'),
    ('**Upgrade to Next.js + Tailwind (if not already)**', 'https://nextjs.org/docs'),
    ('**Add capstone project showcase with live demos**', 'https://www.freecodecamp.org/news/build-a-developer-portfolio/'),
    ('**Add case studies for each project**', 'https://www.toptal.com/designers/portfolio/how-to-write-a-case-study'),
    ('**SEO optimization**', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'),
    ('**Deploy on Vercel with custom domain**', 'https://vercel.com/docs/concepts/projects/domains'),
    ('**Clean READMEs for all projects — tech stack, screenshots, setup instructions**', 'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes'),
    ('**Consistent commit history — green contribution graph**', 'https://www.conventionalcommits.org/en/v1.0.0/'),
    ('**Pin 4–6 best repositories**', 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile'),
    ('**GitHub profile README**', 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme'),
    ('**Microservices vs Monolith — tradeoffs**', 'https://aws.amazon.com/microservices/'),
    ('**API Gateway pattern**', 'https://microservices.io/patterns/apigateway.html'),
    ('**Service discovery (concept)**', 'https://microservices.io/patterns/client-side-discovery.html'),
    ('**Load balancing, horizontal vs vertical scaling**', 'https://www.nginx.com/resources/glossary/load-balancing/'),
    ('**Database sharding & replication (concept)**', 'https://www.digitalocean.com/community/tutorials/understanding-database-sharding'),
    ('**CAP theorem**', 'https://www.ibm.com/topics/cap-theorem'),
    ('**Design patterns — Singleton, Factory, Builder, Observer, Strategy**', 'https://refactoring.guru/design-patterns/catalog'),
    ('**SOLID principles**', 'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/'),
    ('**Design: URL shortener, rate limiter, notification system, chat app**', 'https://bytebytego.com/')
]
process_file(f2, r2)

# File 3
f3 = '/home/vinay/workspace/docs-app/content/docs/roadmap/phase-4/interview-prep.mdx'
r3 = [
    ('**One-page, ATS-friendly format**', 'https://www.freecodecamp.org/news/how-to-write-a-good-software-engineering-resume/'),
    ('**Quantify achievements — "Reduced API response time by 40%"**', 'https://www.inc.com/bill-murphy-jr/google-recruiters-say-these-5-resume-tips-including-x-y-z-formula-will-improve-your-odds-of-getting-hired-at-google.html'),
    ('**List relevant tech stack keywords**', 'https://www.codecademy.com/resources/blog/how-to-list-skills-on-a-resume/'),
    ('**Tailor for each application**', 'https://www.coursera.org/articles/how-to-tailor-a-resume'),
    ('**Total: 200–250 problems (Easy: 70, Medium: 130, Hard: 50)**', 'https://leetcode.com/'),
    ('**Complete NeetCode 150 or Blind 75**', 'https://neetcode.io/practice'),
    ('**Practice explaining approach out loud**', 'https://www.pramp.com/'),
    ('**Mock interviews — Pramp / Interviewing.io**', 'https://interviewing.io/'),
    ('**Time-boxed practice — solve within 25–30 min**', 'https://www.hackerrank.com/'),
    ('**OOP — explain with real examples, not textbook**', 'https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/'),
    ('**Java 8 — streams, lambdas, optional (write code on spot)**', 'https://www.baeldung.com/java-8-streams'),
    ('**Collections internals — HashMap bucket mechanism, ConcurrentHashMap**', 'https://www.baeldung.com/java-hashmap'),
    ('**Multithreading — thread lifecycle, synchronized, deadlock, volatile**', 'https://www.baeldung.com/java-concurrency'),
    ('**Spring IoC, AOP, Bean lifecycle, scopes**', 'https://docs.spring.io/spring-framework/reference/core/beans/basics.html'),
    ('**REST API best practices, idempotency**', 'https://restfulapi.net/'),
    ('**JPA — N+1 problem, lazy vs eager, entity lifecycle**', 'https://vladmihalcea.com/n-plus-1-query-problem/'),
    ('**Microservices — circuit breaker, saga pattern, service mesh (concept)**', 'https://microservices.io/'),
    ('**Spring Security — JWT flow, OAuth2 flow**', 'https://www.baeldung.com/spring-security-oauth'),
    ('**JavaScript — closures, event loop, promises, prototypal inheritance, `this`**', 'https://javascript.info/'),
    ('**React — virtual DOM, reconciliation, fiber, hooks rules, key prop**', 'https://react.dev/learn'),
    ('**React performance — `useMemo`, `useCallback`, `React.memo`, lazy loading**', 'https://react.dev/reference/react/useMemo'),
    ('**TypeScript — generics, type narrowing, discriminated unions**', 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html'),
    ('**CSS — flexbox vs grid, specificity, BEM, responsive design**', 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'),
    ('**Next.js — SSR vs SSG vs ISR, server components, caching model**', 'https://nextjs.org/docs/app/building-your-application/rendering'),
    ('**Design a URL shortener**', 'https://systemdesignprimer.com/url-shortener'),
    ('**Design a chat application**', 'https://bytebytego.com/courses/system-design-interview/design-a-chat-system'),
    ('**Design a notification system**', 'https://bytebytego.com/courses/system-design-interview/design-a-notification-system'),
    ('**Design an e-commerce checkout flow**', 'https://stripe.com/docs/payments/checkout'),
    ('**STAR method — Situation, Task, Action, Result**', 'https://www.themuse.com/advice/star-interview-method'),
    ('**"Tell me about yourself" — 60-second pitch**', 'https://hbr.org/2019/08/how-to-respond-to-so-tell-me-about-yourself'),
    ('**"Why this company?" — research template**', 'https://www.themuse.com/advice/how-to-answer-why-do-you-want-to-work-here'),
    ('**"Describe a challenging project" — 3 prepared stories**', 'https://www.freecodecamp.org/news/how-to-talk-about-your-projects-in-a-tech-interview/'),
    ('**Questions to ask the interviewer (prepare 5)**', 'https://github.com/viraptor/reverse-interview')
]
process_file(f3, r3)

print("Replacement complete.")
