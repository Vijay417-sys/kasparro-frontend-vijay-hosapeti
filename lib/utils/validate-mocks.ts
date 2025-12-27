/**
 * Validates all audit JSON files against Zod schemas.
 * Run via: npm run validate-mocks
 */

/* eslint-disable no-console */
import { z } from "zod";
import fs from "fs";
import path from "path";

// Zod schemas matching types.ts
const ScoreSchema = z.object({
  value: z.number().min(0).max(100),
  label: z.string(),
  color: z.enum(["red", "orange", "green"]),
});

const IssueSchema = z.object({
  id: z.string(),
  severity: z.enum(["critical", "high", "medium", "low"]),
  message: z.string(),
  affectedPages: z.number().optional(),
  category: z.string().optional(),
});

const RecommendationSchema = z.object({
  id: z.string(),
  priority: z.enum(["high", "medium", "low"]),
  title: z.string(),
  description: z.string(),
  actionItems: z.array(z.string()),
  estimatedImpact: z.string().optional(),
});

const ModuleSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  score: ScoreSchema,
  insights: z.array(z.string()),
  issues: z.array(IssueSchema),
  recommendations: z.array(RecommendationSchema),
});

const AuditSchema = z.object({
  brandId: z.string(),
  brandName: z.string(),
  domain: z.string(),
  lastAudited: z.string(),
  overallScores: z.object({
    aiVisibility: z.number().min(0).max(100),
    trustEeat: z.number().min(0).max(100),
    nonBrandedCoverage: z.number().min(0).max(100),
  }),
  modules: z.array(ModuleSchema).length(7), // Must have exactly 7 modules
});

const BrandSchema = z.object({
  id: z.string(),
  name: z.string(),
  domain: z.string(),
  lastAudited: z.string(),
});

const BrandListSchema = z.object({
  brands: z.array(BrandSchema),
});

function validateAuditFile(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);
    AuditSchema.parse(data);
    console.log(`✓ Validated: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`✗ Validation failed for ${path.basename(filePath)}:`);
      error.errors.forEach((err) => {
        console.error(`  - ${err.path.join(".")}: ${err.message}`);
      });
    } else {
      console.error(`✗ Error reading ${filePath}:`, error);
    }
    return false;
  }
}

function validateBrandListFile(filePath: string): boolean {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);
    BrandListSchema.parse(data);
    console.log(`✓ Validated: ${path.basename(filePath)}`);
    return true;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`✗ Validation failed for ${path.basename(filePath)}:`);
      error.errors.forEach((err) => {
        console.error(`  - ${err.path.join(".")}: ${err.message}`);
      });
    } else {
      console.error(`✗ Error reading ${filePath}:`, error);
    }
    return false;
  }
}

function main() {
  const auditDataDir = path.join(process.cwd(), "audit-data");

  if (!fs.existsSync(auditDataDir)) {
    console.error(`✗ Directory not found: ${auditDataDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(auditDataDir);
  const auditFiles = files.filter((f) => f.endsWith("-audit.json"));
  const brandListFiles = files.filter((f) => f.endsWith("-brands.json"));

  console.log(
    `Validating ${auditFiles.length} audit file(s) and ${brandListFiles.length} brand list file(s)...\n`
  );

  let allValid = true;

  for (const file of auditFiles) {
    const filePath = path.join(auditDataDir, file);
    if (!validateAuditFile(filePath)) {
      allValid = false;
    }
  }

  for (const file of brandListFiles) {
    const filePath = path.join(auditDataDir, file);
    if (!validateBrandListFile(filePath)) {
      allValid = false;
    }
  }

  if (allValid) {
    console.log("\n✓ All mock files are valid!");
    process.exit(0);
  } else {
    console.error("\n✗ Some mock files failed validation");
    process.exit(1);
  }
}

main();
