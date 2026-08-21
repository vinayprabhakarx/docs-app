import base64
import zlib

mermaid_code = """flowchart TD
    subgraph Phase1 [Phase 1: Revision Weeks 1-2]
        direction LR
        A[Java Core] ~~~ B[HTML/CSS/JS] ~~~ C[SQL] ~~~ D[DSA Basics]
    end

    subgraph Phase2 [Phase 2: Core Skills Weeks 3-6]
        direction LR
        E[Spring Boot] ~~~ F[React + TS] ~~~ G[MongoDB] ~~~ H[DSA Intermediate]
    end

    subgraph Phase3 [Phase 3: Advanced Stack Weeks 7-10]
        direction LR
        I[Docker/DevOps] ~~~ J[Next.js] ~~~ K[Kafka & Redis] ~~~ L[DSA Advanced]
    end

    subgraph Phase4 [Phase 4: Job Ready Weeks 11-12]
        direction LR
        M[AI Skills] ~~~ N[Portfolio] ~~~ O[Interview Prep]
    end

    Phase1 ==> Phase2
    Phase2 ==> Phase3
    Phase3 ==> Phase4
"""

compressed = zlib.compress(mermaid_code.encode('utf-8'), 9)
encoded = base64.urlsafe_b64encode(compressed).decode('ascii')
print(f"https://kroki.io/mermaid/svg/{encoded}")
