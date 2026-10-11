import { contentRepository } from '../../services/contentRepository';

/**
 * Generates a structured, dense, factual Ground-Truth knowledge context
 * by dynamically inspecting all site contents and verified CV datasets.
 */
export async function generateDynamicKnowledgeContext(): Promise<string> {
  const [
    profile,
    experiences,
    caseStudies,
    education,
    awards,
    articles,
    competencies,
    knowledgeEntries,
  ] = await Promise.all([
    contentRepository.getProfile(),
    contentRepository.getExperiences(),
    contentRepository.getCaseStudies(),
    contentRepository.getEducation(),
    contentRepository.getAwards(),
    contentRepository.getArticles(),
    contentRepository.getCompetencies(),
    contentRepository.getKnowledgeEntries(),
  ]);

  const sections: string[] = [];

  // 1. Identity & Executive Profile
  sections.push(`### 1. IDENTITY & EXECUTIVE PROFILE
- Full Name: ${profile.fullName}
- Current Title: ${profile.currentRole} at ${profile.company}
- Location: ${profile.location}
- Professional Experience: ${profile.stats.yearsExperience}+ years in Enterprise Software & Digital Transformation
- Team Leadership: Led an agile squad of 6+ engineers and multiple partner agencies
- Contact Email: ${profile.email}
- LinkedIn: ${profile.linkedinUrl}
- Medium: ${profile.mediumUrl}
- GitHub: ${profile.githubUrl}
- Core Philosophy: "${profile.leadershipPhilosophy.statement}"`);

  // 2. Education & Academic Background
  const eduSummary = education
    .map(
      (e) =>
        `- ${e.institution} | ${e.degree} in ${e.fieldOfStudy} (${e.graduationYear})${e.gpa ? ` | GPA: ${e.gpa}` : ''}${
          e.highlights ? ` | Highlights: ${e.highlights.join('; ')}` : ''
        }`
    )
    .join('\n');
  sections.push(`### 2. EDUCATION & ACADEMIC CREDENTIALS\n${eduSummary}`);

  // 3. Honors & Kaizen Marathon Awards
  const awardsSummary = awards
    .map(
      (a) =>
        `- [${a.year}] ${a.title} (${a.rank}): ${a.impactDescription} (Organized by ${a.organization})`
    )
    .join('\n');
  sections.push(`### 3. HONORS & TOYOTA KAIZEN AWARDS (5 AWARDS TOTAL)\n${awardsSummary}`);

  // 4. Career History & Employers
  const expSummary = experiences
    .map((exp) => {
      const ach = exp.achievements.map((a) => `    * ${a}`).join('\n');
      return `- Company: ${exp.company}
  Role: ${exp.role} (${exp.period})
  Location: ${exp.location}
  Summary: ${exp.summary}
  Technologies: ${exp.technologies.join(', ')}
  Key Achievements:
${ach}`;
    })
    .join('\n\n');
  sections.push(`### 4. VERIFIED CAREER HISTORY & ROLES\n${expSummary}`);

  // 5. Portfolio of Systems (13 Authentic Projects)
  const csSummary = caseStudies
    .map((cs, i) => {
      const metrics = cs.measurableOutcomes
        .map((m) => `${m.metric} (${m.label}: ${m.detail})`)
        .join('; ');
      return `${i + 1}. System: "${cs.title}"
   Organization: ${cs.organization} | Role: ${cs.role} | Period: ${cs.period}
   Executive Summary: ${cs.executiveSummary}
   Challenge: ${cs.theChallenge}
   Architectural Solution: ${cs.architecturalSolution.join('; ')}
   Measurable Outcomes: ${metrics}
   Technologies: ${cs.technologies.join(', ')}`;
    })
    .join('\n\n');
  sections.push(`### 5. SELECTED ENTERPRISE SYSTEMS & PROJECTS (13 PROJECTS)\n${csSummary}`);

  // 6. Publications & Technical Articles
  const artSummary = articles
    .map(
      (art, i) =>
        `${i + 1}. "${art.title}" (${art.platform || 'Site'} · ${art.publishedAt})
   Topic/Category: ${art.category.name} | Read Time: ${art.readTimeMinutes} min
   Excerpt: ${art.excerpt}
   Tags: ${art.tags.join(', ')}${art.canonicalUrl ? `\n   Canonical Link: ${art.canonicalUrl}` : ''}`
    )
    .join('\n\n');
  sections.push(`### 6. TECHNICAL WRITING & ARTICLES (MEDIUM, LINKEDIN & SITE EXCLUSIVE)\n${artSummary}`);

  // 7. Core Competency Matrix
  const compSummary = competencies
    .map((c) => {
      const skills = c.skills.map((s) => `${s.name} (${s.level})`).join(', ');
      return `- ${c.category}: ${skills}`;
    })
    .join('\n');
  sections.push(`### 7. TECHNICAL & ARCHITECTURAL COMPETENCIES\n${compSummary}`);

  // 8. Strapi Curated Knowledge Base Directives
  const activeEntries = (knowledgeEntries || []).filter((k) => k.isActive !== false);
  if (activeEntries.length > 0) {
    const kbSummary = activeEntries
      .map((k, i) => {
        return `${i + 1}. [${k.category}] "${k.title}" (Priority: ${k.priority})
   Summary: ${k.summary}
   Factual Directives:
${k.content}`;
      })
      .join('\n\n');
    sections.push(`### 8. STRAPI CMS KNOWLEDGE BASE (EXECUTIVE DIRECTIVES & FAQ)\n${kbSummary}`);
  }

  return sections.join('\n\n');
}
